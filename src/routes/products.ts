// src/routes/users.js
import { Hono } from 'hono';

const productsRouter = new Hono();

productsRouter.get('/', (c) => c.json({ message: 'Get all products' }));
productsRouter.post('/', (c) => c.json({ message: 'Create a new products' }));
productsRouter.get('/:id', (c) => {
  const id = c.req.param('id');
  return c.json({ message: `Get products with ID: ${id}` });
});

export default productsRouter;