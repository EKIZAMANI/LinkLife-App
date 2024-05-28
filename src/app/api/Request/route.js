import prisma from "@/libs/prisma";

export async function GET() {
    try {
        const getRequest = await prisma.request.findMany({
            where: {
                status: 'on going'
            }
        });

        if (getRequest) {
            const threadId = getRequest.map(request => request.thread_id)
            const commentId = getRequest.map(request => request.comment_id)

            const getThread = await prisma.thread.findMany({
                where: {
                    id: {
                        in: threadId
                    }
                }
            })

            const userThreadId = [...new Set(getThread.map(thread => thread.user_id))]

            const getUserThread = await prisma.user.findMany({
                where: {
                    id: {
                        in: userThreadId
                    }
                },
                select: {
                    id: true,
                    name: true,
                    birth_date: true
                }
            })

            const getThreadByRequest = {}
            getThread.forEach(thread => {
                getThreadByRequest[thread.id] = {
                    ...thread,
                    user: getUserThread.find(user => user.id === thread.user_id)
                };
            });

            const getComment = await prisma.comment.findMany({
                where: {
                    id: {
                        in: commentId
                    }
                }
            })

            const userCommentId = [...new Set(getComment.map(comment => comment.user_id))]

            const getUserComment = await prisma.user.findMany({
                where: {
                    id: {
                        in: userCommentId
                    }
                },
                select: {
                    id: true,
                    name: true,
                    birth_date: true
                }
            })

            const getCommentByRequest = {}
            getComment.forEach(comment => {
                getCommentByRequest[comment.id] = {
                    ...comment,
                    user: getUserComment.find(user => user.id == comment.user_id)
                };
            });

            const detailRequest = getRequest.map(request => ({
                ...request,
                thread: getThreadByRequest[request.thread_id],
                comment: getCommentByRequest[request.comment_id]
            }))
            return new Response(JSON.stringify({ request: detailRequest }));
        } else {
            return new Response(JSON.stringify({ status: 500, message: 'No threads found' }));
        }
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }));
    }
}
