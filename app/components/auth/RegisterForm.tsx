'use client';
import {z} from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { EmailField } from "./EmailField";
import { PasswordField } from "./PasswordField";
import { NameField } from "./NameField";
const registerSchema=z.object({
    name:z.string().min(2,"El nombre debe ser de 2 caracteres"),
    email:z.string().email("Correo Invalido"),
    password:z.string().min(8,"El password debe ser de mínimo 8")
})
type RegisterFormValues=z.infer<typeof registerSchema>;
export const RegisterForm = () => {
  const form=useForm<RegisterFormValues>({
    resolver:zodResolver(registerSchema)
  })
  const router=useRouter();
  const onSubmit=async (data:RegisterFormValues)=>{
    const url=`${process.env.NEXT_PUBLIC_API_URL}/dictator`
    console.log(data)
    try{
        await axios.post(url,data);
        alert("Usuairo ingresado");
        router.push("/auth/login");
    }catch(error){
        alert("Error 😭");
        console.log(error);
    }
  }
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-4 max-w-md mx-auto">
            <NameField control={form.control} />
            <EmailField control={form.control} />
            <PasswordField control={form.control}/>
            <Button type="submit">Registrarse</Button>
        </form>
    </Form>
  )
}
