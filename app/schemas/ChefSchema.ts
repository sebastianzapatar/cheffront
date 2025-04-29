import {z} from 'zod';
export const ChefSchema=z.object({
    name:z.string().min(2,'El nombre es obligatorio'),
    skill:z.string().min(2,'la habilidad es obligatoria'),
})
export type ChefFormValues=z.infer<typeof ChefSchema>