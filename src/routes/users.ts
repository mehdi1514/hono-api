// src/routes/users.js
import { Hono } from 'hono';

const usersRouter = new Hono();

usersRouter.get('/', (c) => c.json({ message: 'Get all users' }));
usersRouter.post('/', (c) => c.json({ message: 'Create a new user' }));
usersRouter.get('/:id', (c) => {
  const id = c.req.param('id');
  return c.json({ message: `Get user with ID: ${id}` });
});

export default usersRouter;