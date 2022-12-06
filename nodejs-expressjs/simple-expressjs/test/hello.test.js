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

test('Request URL', async () => {
  app.get('/product', (req, res) => {
    res.json({
      path: req.path,
      originalUrl: req.originalUrl,
      hostname: req.hostname,
      protocol: req.protocol,
      secure: req.secure
    });
  });

  const response = await request(app).get('/product').query({ name: 'laptop' });

  expect(response.body).toEqual({
    path: '/product',
    originalUrl: '/product?name=laptop',
    hostname: '127.0.0.1',
    protocol: 'http',
    secure: false
  });
});

test('Request Params', async () => {
  const app = express();

  app.get('/name', (req, res) => {
    res.send(`Hello, ${req.query.firstName} ${req.query.lastName}`);
  });

  const response = await request(app).get('/name').query({ firstName: 'Moh. Ilham', lastName: 'Burhanuddin' });

  expect(response.text).toBe('Hello, Moh. Ilham Burhanuddin');
});