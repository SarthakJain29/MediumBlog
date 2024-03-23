import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono';
import { sign, verify } from 'hono/jwt'

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();

blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();

    const blog = await prisma.post.create({
        data:{
            title: body.title,
            content: body.content,
            authorId: '1'
        }
    })

	return c.json({
        id: blog.id
    })
})

blogRouter.put('/', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();

    const blog = await prisma.post.update({
        where:{
            id: body.id
        },
        data:{
            title: body.title,
            content: body.content,
        }
    })

	return c.json({
        id: blog.id
    })
})

blogRouter.get('/', async (c) => {
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();
    try{
        const blog = await prisma.post.findFirst({
            where: {
                id: body.id
            }
        })
    
        return c.json({
            blog
        })
    }catch(e){
        c.status(411);
        return c.text("Error while fetching blog");
    }
})

blogRouter.get('/bulk', async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blogs = prisma.post.findMany();

    return c.json({
        blogs
    })
})