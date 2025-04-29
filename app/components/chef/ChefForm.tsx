'use client'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ChefSchema, ChefFormValues } from "@/app/schemas/ChefSchema";
import { ChefFormFields } from "./ChefFormFields";
import { createChef } from "@/app/services/createChef";
import {toast} from "sonner"

export const ChefForm = () => {
  const form=useForm<ChefFormValues>({
    resolver:zodResolver(ChefSchema),
    defaultValues:{
        name:"",
        skill:""
    }
  })
  const onSubmit=async(data:ChefFormValues)=>{
    try{
        await createChef(data);
        toast.success("Creado exitosamente");
        alert("Exitoso insertado ma niño")
        form.reset()
    }
    catch(error){

    }
  }
  return (
    <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 p-4 bg-white shadow rounded">
            <ChefFormFields form={form} />
            <Button type="submit">
                Crear Chef Carolina
            </Button>
        </form>
    </Form>
  )
}
