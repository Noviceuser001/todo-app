const request = require('supertest');
const app = require('../app');

describe('Health route', () => {
  test('GET /health returns 200 and expected body', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
