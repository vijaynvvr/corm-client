import React from 'react'

const Menu = ({menu}) => {
  return (
    <div className={`${menu ? 'left-0' : 'left-56'} transition-all duration-500 bg-white border-2 w-[215px] max-h-[150px] overflow-y-auto z-10 flex flex-col absolute rounded-b-md`}>
        <h3 className="text-sm border-b border-white px-4 py-1 bg-black text-white hover:bg-gray-800 cursor-pointer">GDSC</h3>
        <h3 className="text-sm border-b border-white px-4 py-1 bg-black text-white hover:bg-gray-800 cursor-pointer">COSC</h3>
        <h3 className="text-sm border-b border-white px-4 py-1 bg-black text-white hover:bg-gray-800 cursor-pointer">MUN</h3>
        <h3 className="text-sm border-b border-white px-4 py-1 bg-black text-white hover:bg-gray-800 cursor-pointer">CCD</h3>
        <h3 className="text-sm border-b border-white px-4 py-1 bg-black text-white hover:bg-gray-800 cursor-pointer">TMC</h3>
        <h3 className="text-sm border-b border-white px-4 py-1 bg-black text-white hover:bg-gray-800 cursor-pointer">Chaya</h3>
    </div>
  )
}

export default Menu