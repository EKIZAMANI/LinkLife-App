import prisma from "@/libs/prisma";

export async function POST(request) {
    const {id} = await request.json()

    await prisma.request.deleteMany({
        where: {
            id: id
        },
    })
    
    return Response.json({ status: 200 })
}