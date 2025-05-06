import { getDishedByChef } from "@/app/services/getDishesByChef"

export const DishByChef = async ({id}:{id:string}) => {
    const dishes=await getDishedByChef(id);
  return (
    <div>
        <h2 className="text-3xl font-semibold mb-4">Platos</h2>
        {
            dishes.length==0 ?(
                <p className="text-gray-500">Este chef es un que no cocina</p>
            ):(
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {dishes.map((dish)=>(
                        <div key={dish.id} className="border rounded p-4
                        bg-gray-50 shadow-sm flex flex-col gap-4">
                            <img src={dish.image} alt={dish.id}
                            className="w-full h-48 object-cover rounded" />
                            <h3 className="text-xl font-bold mt-2">{dish.name}</h3>
                            <p className="text-gray-600 text-sm">{dish.description}</p>
                            <p className="mt-1 text-blue-600 font-semibold">${dish.price}</p>
                        </div>
                    ))

                    }
                </div>
            )
        }
    </div>
  )
}
