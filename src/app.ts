import { Hono } from 'hono'
import { logger } from './middleware/logger';
import userRouter from './routes/users';
import productsRouter from './routes/products';
import { handle } from 'hono/vercel'

const app = new Hono();

// Global Middleware
app.use(logger());

// Register routes

app.get('/', (c) => {
  return c.text('Hello Mehdi!')
})
app.route('/users', userRouter);
app.route('/products', productsRouter);

export default app;
