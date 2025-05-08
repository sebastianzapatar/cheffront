import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
export const NameField = ({control}:{control:any}) => {
  return (
    <FormField
        control={control}
        name="name"
        render={
        ({field})=>(
            <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                    <Input  placeholder="Carolina del Mar, si del Mar" 
                    {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
        />
  )
}
