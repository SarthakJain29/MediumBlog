import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { createblogInput, updateblogInput } from '@sarthak2907/medium-common';
import { Hono } from 'hono';
import { sign, verify } from 'hono/jwt'

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_SECRET: string
    }
    Variables:{
        userId: string
    }
}>();

blogRouter.use("/*", async (c,next)=>{
    const authheader = c.req.header("authorization") || "";
    try{
        const user = await verify(authheader, c.env.JWT_SECRET);
        if(user){
            c.set("userId", user.id);
            await next()
        }else{
            c.status(403);                                
            return c.json({
                message: "You are not logged in"
        })
    }
    }catch(e){
        c.status(403);
        return c.json({
            message: "You are not logged in"
        })
    }
    
});

blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
    const authId = c.get("userId");
	const body = await c.req.json();
    const {success} = createblogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message:"Incorrect inputs"
        })
    }

    const blog = await prisma.post.create({
        data:{
            title: body.title,
            content: body.content,
            authorId: Number(authId)
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
    const {success} = updateblogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message: "Incorrect inputs"
        })
    }
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


blogRouter.get('/bulk', async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blogs = await prisma.post.findMany();

    return c.json({
        blogs
    })
})

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const id = c.req.param("id");
    try{
        const blog = await prisma.post.findFirst({
            where: {
                id: Number(id)
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
