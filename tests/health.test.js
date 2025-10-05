const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

describe('Health route', () => {
  test('GET /health returns 200 and expected body', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});

afterAll(async () => {
  // ensure mongoose connection is closed to prevent open handle warnings
  try {
    await mongoose.disconnect();
  } catch (err) {
    // ignore
  }
});
