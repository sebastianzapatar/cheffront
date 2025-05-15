import { DishByChef } from "@/app/components/chef/DishByChef";

export default async function  ChefDetailPage({params}:{params:Promise<{id:string}>}) {
  const {id}=await params;
  return (
    <DishByChef id={id}/>
  );
}


