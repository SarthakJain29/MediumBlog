import { z } from "zod";


export const signupInput = z.object({
    email:z.string().email(),
    password:z.string().min(4),
    name:z.string().optional()
})

export const signinInput = z.object({
    email:z.string().email(),
    password:z.string().min(4),
})

export const createblogInput = z.object({
    title: z.string(),
    content: z.string()
})

export const updateblogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})

export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type CreateblogInput = z.infer<typeof createblogInput>;
export type UpdateblogInput = z.infer<typeof updateblogInput>;