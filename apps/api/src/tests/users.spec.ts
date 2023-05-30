import supertest from 'supertest';
import { _users } from "../_mock/user";
import { createServer } from '../server';

const app = createServer();

describe('Users API - "/v1/users"', () => {
  it('/ - Should return a list of 100 users', async () => {
      await supertest(app).get(`/12345`).expect(404);
  });

  // it('/:id - Should return a user by id', async () => {
  //   const user = _users[0];
  //     expect(user.id).toBe(1);
  // });
  //
  // it('/:id - Should return a 404 error if user is not found', async () => {
  //   const user = _users[0];
  //     expect(user.id).toBe(1);
  // });
  // 
  // it('/ - Should create a new user', async () => {
  //   const user = _users[0];
  //     expect(user.id).toBe(1);
  // });
  //
  // it('/:id - Should update a user', async () => {
  //   const user = _users[0];
  //     expect(user.id).toBe(1);
  // });
  //
  // it('/:id - Should delete a user', async () => {
  //   const user = _users[0];
  //     expect(user.id).toBe(1);
  // });
});
