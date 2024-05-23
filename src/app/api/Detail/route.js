import prisma from "@/libs/prisma"

export async function GET(request) {
    try {
        const id = new URL(request.url).searchParams.get('id')

        const getThreads = await prisma.thread.findMany({
            where: {
                id: parseInt(id)
            }
        })

        if (getThreads) {
            const getUser = await prisma.user.findMany({
                where: {
                    id: getThreads[0].user_id
                }
            })

            if (getUser) {
                const getComment = await prisma.comment.findMany({
                    where: {
                        thread_id: getThreads[0].id
                    }
                })

                if (getComment) {
                    const userId = getComment.map(comment => comment.user_id)
                    const getUserComment = await prisma.user.findMany({
                        where: {
                            id: { in: userId }
                        },
                        select: {
                            id: true,
                            name: true,
                            birth_date: true
                        }
                    })

                    const name = {}
                    const birthDate = {}
                    getUserComment.forEach(user => {
                        name[user.id] = user.name
                        birthDate[user.id] = user.birth_date
                    })

                    const commentWithUser = getComment.map(comment => ({
                        ...comment,
                        name: name[comment.user_id],
                        birth_date: birthDate[comment.user_id]
                    }))

                    return new Response(JSON.stringify({ status: 200, thread: getThreads[0], user: getUser[0], comment: commentWithUser }))
                }
            } else {
                return new Response(JSON.stringify({ status: 404, message: 'No user found' }))
            }
        } else {
            return new Response(JSON.stringify({ status: 404, message: 'No threads found' }))
        }

    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }))
    }
}
