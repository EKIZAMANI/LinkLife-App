import prisma from "@/libs/prisma"

export async function POST(request) {
    const { status, thread_id, comment_id } = await request.json()
    const data = { status, thread_id, comment_id }

    const sendRequest = await prisma.request.create({ data })

    if (sendRequest) {
        return Response.json({status: 200, isSent: true})
    } else {
        return Response.json({status: 500, isSent: false})
    }
}