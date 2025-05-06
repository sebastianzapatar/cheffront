import { DishByChef } from "@/app/components/chef/DishByChef";
interface Props{
    params:{id:string}
}
export default function  ChefDetailPage({params}:Props) {
  return (
    <DishByChef id={params.id}/>
  );
}
