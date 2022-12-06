import express from 'express';
import request from 'supertest';

test('Hello World', async () => {
  const app = express();
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  const response = await request(app).get('/');

  expect(response.text).toBe('Hello World!');
});

test('Request', async () => {
  const app = express();
  app.get('/name', (req, res) => {
    res.send(`Hello ${req.query.name}`);
  });

  const response = await request(app).get('/name').query({ name: 'ilham' });

  expect(response.text).toBe('Hello ilham');
});

test('Request URL', async () => {
  const app = express();
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

test('Request Header', async () => {
  const app = express();
  app.get('/', (req, res) => {
    const type = req.get('Accept');
    res.send(`Request type is ${type}`);
  });

  const response = await request(app).get('/').set('Accept', 'text/plain');

  expect(response.text).toBe('Request type is text/plain');
});

test('Request Response', async () => {
  const app = express();
  app.get('/', (req, res) => {
    res.send('From Server');
  });

  const response = await request(app).get('/');

  expect(response.text).toBe('From Server');
});

test('Response Status', async () => {
  const app = express();
  app.get('/', (req, res) => {
    if (req.query.name) {
      res.status(200).send(`Hello, ${req.query.name}`);
    } else {
      res.status(400).end();
    }
  });

  const response1 = await request(app).get('/').query({ name: 'ilham' });

  expect(response1.status).toBe(200);
  expect(response1.text).toBe('Hello, ilham');

  const response2 = await request(app).get('/');
  expect(response2.status).toBe(400);
});

test('Response Header', async () => {
  const app = express();
  app.get('/', (req, res) => {
    res.set({
      'X-Powered-By': 'YRAV',
      'X-Author': 'Moh. Ilham Burhanuddin'
    }).end();
  });

  const response = await request(app).get('/');

  expect(response.get('X-Powered-By')).toBe('YRAV');
  expect(response.get('X-Author')).toBe('Moh. Ilham Burhanuddin');
});

test('Request Body', async () => {
  const app = express();
  app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(`<html><head><title>YRAV</title></head></html>`);
  });

  const response = await request(app).get('/');

  expect(response.get('Content-Type')).toContain('text/html');
  expect(response.text).toBe(`<html><head><title>YRAV</title></head></html>`);
});