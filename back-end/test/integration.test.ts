import assert from 'node:assert';
import test from 'node:test';
import { buildServer } from '../app';
import { FastifyInstance } from 'fastify';

test('Health route', async () => {

    const app:FastifyInstance = await buildServer();

    const response = await app.inject({
        method:'GET',
        url:'/api/health'
    });

    assert.strictEqual(response.statusCode,200);
});