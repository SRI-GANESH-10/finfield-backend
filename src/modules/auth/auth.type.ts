import { z } from 'zod'

export const signUpSchema = z.object({
    name:z.string().min(2, "Name must be 2 chars at least"),
    email: z.email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
})

export type SignUpInputType = z.infer<typeof signUpSchema>