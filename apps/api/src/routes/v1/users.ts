import {Router} from 'express'
import {User} from 'types'

const router = Router();

const users: User[] = [
  {id: '1', name: 'John', email: "john@email.com", familyId: null},
  {id: '2', name: 'Jane', email: "jane@email.com", familyId: "123-123-123"},
  {id: '3', name: 'Dave', email: "dave@email.com", familyId: null}
]

router.get('/', (_, res) => {
  res.send(users)
})

router.post('/', (req, res) => {
  const user = req.body as User
  users.push(user)
  res.send(users.find(u => u.id === user.id))
})

router.get('/:id', (req, res) => {
  const user = users.find(user => user.id === req.params.id)
  if (user) {
    res.send(user)
  } else {
    res.status(404).send({error: 'User not found'})
  }
})
export default router;
