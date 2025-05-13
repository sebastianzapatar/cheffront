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
import { useAuthStore } from "@/app/lib/authStore";
import Cookies from "js-cookie";
const loginSchema=z.object({
    email:z.string().email("Correo Invalido"),
    password:z.string().min(8,"Contraseña Invalida")
})
type LoginFormValues=z.infer<typeof loginSchema>

export const LoginForm = () => {
    const form=useForm<LoginFormValues>({
        defaultValues:{
            email:"",
            password:""
        }
    })
    const router=useRouter();//Rediccionar después del login
    const setAuthenticated=useAuthStore((state)=>state.setAuthenticated);
    const onSubmit=async (data:LoginFormValues)=>{
        try{
            const url=`http://localhost:3001/dictator/login`
            console.log(url);
            const res=await axios.post(url,
                data);
            const {token}=res.data;
            Cookies.set("token",token,{
                path:"/",
                secure:true,
                sameSite:"strict"
            });
            setAuthenticated(true,token);
            alert("Bienvenido 💚");
            router.push("/");
        }
        catch(error){
            alert("Credenciales erroneas torpe")
            console.error(error);
        }
    }
    return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-4 max-w-md mx-auto">
            <EmailField control={form.control} />
            <PasswordField control={form.control}/>
            <Button type="submit">Inciar sesión</Button>
        </form>
    </Form>
  )
}
