import prisma from "@/libs/prisma";

export async function POST(request) {
    const { email, password } = await request.json();
    
    const loginAccount = await prisma.user.findMany({
        where: {
            email: email,
            password: password
        }
    });

    if (loginAccount.length == 1) {
        return Response.json({status: 200, isLogin: true, id: loginAccount[0].id})
    } else {
        return Response.json({status: 500, isLogin: false})
    }
}