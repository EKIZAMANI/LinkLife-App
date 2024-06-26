import prisma from "@/libs/prisma"

export async function GET() {
    const getThreads = await prisma.thread.findMany()

    if (getThreads) {
        const userIds = getThreads.map(thread => thread.user_id)
        const threadIds = getThreads.map(thread => thread.id)

        const getUserNames = await prisma.user.findMany({
            where: {
                id: { in: userIds }
            },
            select: {
                id: true,
                name: true,
                birth_date: true
            }
        })

        const userIdToNameMap = {}
        const userIdToBirthMap = {}
        getUserNames.forEach(user => {
            userIdToNameMap[user.id] = user.name,
                userIdToBirthMap[user.id] = user.birth_date
        })

        const getCommentCounts = await prisma.comment.groupBy({
            by: ['thread_id'],
            _count: {
                thread_id: true
            },
            where: {
                thread_id: { in: threadIds }
            }
        })

        const threadIdToCommentCountMap = {}
        getCommentCounts.forEach(comment => {
            threadIdToCommentCountMap[comment.thread_id] = comment._count.thread_id
        })

        const threadsWithDetails = getThreads.map(thread => ({
            ...thread,
            user_name: userIdToNameMap[thread.user_id],
            user_birth: userIdToBirthMap[thread.user_id],
            comment_count: threadIdToCommentCountMap[thread.id] || 0
        }))

        return new Response(JSON.stringify({ status: 200, threads: threadsWithDetails }))
    } else {
        return new Response(JSON.stringify({ status: 500, message: 'No threads found' }))
    }
}