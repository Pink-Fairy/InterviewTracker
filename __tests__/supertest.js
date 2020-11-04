const request = require('supertest');
const fs = require('fs');
const path = require('path');
// const db = require('../server/db/markets.js');
const server = 'http://localhost:8080';

describe('Route integration', () => {
    describe('/', () => {
      describe('GET', () => {
        it ('responds with a 200 status and text/html content type', () => {
          return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
        })

      })
    })
})
