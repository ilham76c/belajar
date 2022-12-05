import express from 'express';
import request from 'supertest';

const app = express();

test('Hello World', async () => {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  const response = await request(app).get('/');

  expect(response.text).toBe('Hello World!');
});

test('Request', async () => {
  app.get('/name', (req, res) => {
    res.send(`Hello ${req.query.name}`);
  });

  const response = await request(app).get('/name').query({ name: 'ilham' });

  expect(response.text).toBe('Hello ilham');
});