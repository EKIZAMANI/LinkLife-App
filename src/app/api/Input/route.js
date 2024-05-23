import prisma from "@/libs/prisma";

export async function POST(request) {
    const type = new URL(request.url).searchParams.get('type')

    if (type == "new") {
        const { title, description, blood_group, history, location, user_id } = await request.json();
        const data = { title, description, blood_group, history, location, user_id };

        const createThread = await prisma.thread.create({ data });

        if (createThread) {
            return Response.json({ status: 200, isCreated: true })
        } else {
            return Response.json({ status: 500, isCreated: false })
        }
    } else if (type == "reply") {
        const { description, blood_group, history, time, thread_id, user_id } = await request.json();

        const getUser = await prisma.user.findMany({
            where: {
                id: user_id
            }
        })

        if (getUser) {
            const data = {
                // title: getUser[0].name,
                description,
                blood_group,
                history,
                time: new Date(time),
                thread_id: parseInt(thread_id),
                user_id
            };

            const createComment = await prisma.comment.create({ data });

            if (createComment) {
                return Response.json({ status: 200, isCreated: true })
            } else {
                return Response.json({ status: 500, isCreated: false })
            }
        }
    }
}