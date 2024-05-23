import prisma from "@/libs/prisma"

export async function POST(request) {
    const { name, birth_date, email, handphone_no, password } = await request.json()
    const data = { name, birth_date: new Date(birth_date), email, handphone_no, password }

    const createAccount = await prisma.user.create({ data })

    if (createAccount) {
        return Response.json({status: 200, isCreated: true})
    } else {
        return Response.json({status: 500, isCreated: false})
    }
}