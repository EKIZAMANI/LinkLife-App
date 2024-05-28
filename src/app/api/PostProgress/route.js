import prisma from "@/libs/prisma"

export async function POST(request) {
    const { id, status } = await request.json()
    const data = { id, status }

    const updateRequest = await prisma.request.update({
        where: {
            id
        },
        data : {
            status
        }
    })

    if (updateRequest) {
        return Response.json({status: 200, isUpdated: true})
    } else {
        return Response.json({status: 500, isUpdated: false})
    }
}