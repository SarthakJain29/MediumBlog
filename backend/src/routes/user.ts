import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { signinInput, signupInput } from '@sarthak2907/medium-common';
import { Hono } from 'hono';
import { sign, verify } from 'hono/jwt'

export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();

userRouter.post('/signup', async (c) => {
	const body = await c.req.json();
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	const { success } = signupInput.safeParse(body);
	if(!success){
		c.status(411);
		return c.json({
			message: "Incorrect inputs"
		})
	}
	try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password,
				name:body.name || ""
			}
		});
		const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ jwt });
	} catch(e) {
		console.log(e);
		c.status(403);
		return c.json({ error: "error while signing up" });
	}
})

userRouter.post('/signin', async (c) => {
	
	const body = await c.req.json();
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	const { success } = signinInput.safeParse(body);
	if(!success){
		c.status(411);
		return c.json({
			message: "incorrect inputs"
		})
	}

	const user = await prisma.user.findUnique({
		where: {
			email: body.email
		}
	});

	if (!user) {
		c.status(403);
		return c.json({ error: "user not found" });
	}

	const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ jwt });
})