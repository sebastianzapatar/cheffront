import { getChefs } from "../services/getChefs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const ChefList = async() => {
    const chefs=await getChefs();
    console.log(chefs);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {chefs.map((chef)=>(
            <Card key={chef.id} className="p-4">
                <CardContent className="space-y-2">
                    <h2 className="space-y-2">
                        {chef.name}
                    </h2>
                    <p className="text-gray-600">
                        Habilidad Chef {chef.skill}
                    </p>
                    <Link href={`/chef/${chef.id}`}>
                        <Button>
                            Vet Detalle
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        ))}
        
    </div>
  )
}
