import prisma from "@/libs/prisma";

export async function POST(request) {
    const id = new URL(request.url).searchParams.get('id')
    const type = new URL(request.url).searchParams.get('type')

    if (type == 'thread') {
        await prisma.thread.deleteMany({
            where: {
                id: parseInt(id)
            }
        })
        return Response.json({ status: 200 })
    } else if (type == 'comment') {
        const id = new URL(request.url).searchParams.get('id')
        const userId = new URL(request.url).searchParams.get('userid')
        await prisma.comment.deleteMany({
            where: {
                thread_id: parseInt(id),
                user_id: parseInt(userId)
            }
        })
        return Response.json({ status: 200 })
    }
}