import fastify, { FastifyReply, FastifyRequest } from 'fastify';

export async function buildServer() {

    const app = fastify({
        logger:true
    });


    app.get('/api/health',(request:FastifyRequest,reply:FastifyReply) => {
        return { status:'OK'}
    });


    return app;
}