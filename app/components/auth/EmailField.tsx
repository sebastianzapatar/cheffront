import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
export const EmailField = ({control}:{control:any}) => {
  return (
    <FormField
        control={control}
        name="email"
        render={
        ({field})=>(
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input type="email" placeholder="ejemplo@xxx.com" {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
        />
  )
}
