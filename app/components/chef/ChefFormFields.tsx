import { UseFormReturn } from "react-hook-form"
import { ChefFormValues } from "@/app/schemas/ChefSchema"
import { Input } from "@/components/ui/input"
import { 
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage    
} from "@/components/ui/form"

export const ChefFormFields = 
({form}:{form:UseFormReturn<ChefFormValues>}) => {
  return (
    <>
        <FormField
        control={form.control}
        name="name"
        render={({field})=>(
            <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                    <Input placeholder="Nombre del chef" 
                    {...field}/>
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}
        >
        </FormField>
        <FormField
        control={form.control}
        name="skill"
        render={({field})=>(
            <FormItem>
                <FormLabel>Habilidad</FormLabel>
                <FormControl>
                    <Input placeholder="Habilidad del chef" 
                    {...field}/>
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}
        >
        </FormField>
    </>
  )
}
