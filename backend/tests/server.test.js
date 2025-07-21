const request = require('supertest');
const app = require('../server');

describe('GET /api/image', () => {
  it('should return image data', async () => {
    const res = await request(app).get('/api/image');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('imageUrl');
    expect(res.body).toHaveProperty('metadata');
  });

    it('should return image data when filtering by date', async () => {
        const res = await request(app).get('/api/image?date=2024-01-01');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('imageUrl');
        expect(res.body).toHaveProperty('metadata');
    });

});