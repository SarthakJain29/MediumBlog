import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog'; 

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	}
}>();

app.use('api/v1/blog/*', async (c,next)=> {
	const header = c.req.header('authorization');
	const token = header?.split(" ")[1];
	//@ts-ignore
	const response = await verify(token, c.env.JWT_SECRET);
	if(response.id){
		next()
	}else{
		c.status(403);
		return c.json({
			error: "Unauthorized"
		})
	}

	await next();
})

app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);



export default app;
