import prisma from "@/libs/prisma";

export async function POST(request) {
    const {id, thread_id} = await request.json()

    await prisma.thread.deleteMany({
        where: {
            id: thread_id
        }
    })

    await prisma.request.update({
        where: {
            id: id
        },
        data: {
            status: 'done'
        }
    })
    
    return Response.json({ status: 200 })
}