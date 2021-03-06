import regeneratorRuntime from 'regenerator-runtime';
const app = require('../../server/index.js'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

it('gets the test endpoint', async done => {
  const response = await request.get('/test');

  expect(response.status).toBe(200);
  expect(response.body.message).toBe('pass!');
  done();
});
