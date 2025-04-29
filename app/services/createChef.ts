import axios from 'axios';
import { ChefFormValues } from '../schemas/ChefSchema';
const baseUrl= process.env.NEXT_PUBLIC_API_URL;
export async function createChef(data:ChefFormValues) {
    const response=await axios.post(baseUrl+'/chef',data);
    return response.data;
}