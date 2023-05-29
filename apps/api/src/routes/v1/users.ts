import {Router} from 'express'
import { v4 as uuidv4 } from 'uuid';

import { TypeWithoutId, User } from 'types';

import { _users } from '../../_mock/user';

const router = Router();

// Get all users
router.get('/', (_, res) => {
  res.send(_users)
})

// Create a new user
router.post('/', (req, res) => {
  const userReq = req.body as TypeWithoutId<User>;

  const user = {
    id: uuidv4(),
    ...userReq
  } as User;

  _users.push(user);

  res.status(201).location(`http://localhost:3001/v1/users/${user.id}`).send(user)
})

// Get a user by id
router.get('/:id', (req, res) => {
  const user = _users.find(user => user.id === req.params.id)

  if (user) {
    res.send(user)
  } else {
    res.status(404).send({error: 'User not found'})
  }
})

export default router;
