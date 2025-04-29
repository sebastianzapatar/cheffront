import React from 'react'

export const Header = () => {
  return (
   <header className="bg-white shadow px-6 py-4 
   flex justify-between items-center">
        <h1 className="text-xl
        font-semibold">Dylan copietas ಠ_ಠ</h1>

        <div className="flex items-center gap-3">
            <span className="text-gray-700 font-medium">
                Usuario
            </span>
            <img 
                src="https://cdn.cnn.com/cnnnext/dam/assets/211117211009-pba-ranking.jpg"
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full border"
            />
        </div>
   </header>
  )
}
