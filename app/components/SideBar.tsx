'use client'
import { Sheet, SheetContent, SheetTrigger } 
from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

const navItems=[
    {name:"home",href:"/"},
    {name:"Chef List",href:"/chef/list"},
    {name:"Contact",href:"/contact"}
]
export const SideBar = () => {
  return (
    <div>
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon"
                className="md:hidden">
                    <Menu className="h-6 w-6"/>
                </Button>
            </SheetTrigger>
            <SheetContent side="left"
            className="w-64 bg-blue-700 text-white">
                <div className="p-4 space-y-4">
                    <h2 className="text-2xl font-bold">Mi sitio</h2>
                    <nav className="space-y-2">
                        {navItems.map((item)=>(
                            <Link 
                            key={item.name}
                            href={item.href}
                            className="block
                             px-3 py-2 rounded
                              hover:bg-blue-600"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </SheetContent>
        </Sheet>
        <div className="hidden md:block p-4 space-y-4
        bg-blue-700 text-white h-full">
            <h2 className="text-2xl font-bold">Mi sitio</h2>
             <nav className="space-y-2">
                        {navItems.map((item)=>(
                            <Link
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2
                            hover:bg-blue-600">
                                {item.name}
                            </Link>
                        ))}
             </nav>           
        </div>
    </div>
  )
}
