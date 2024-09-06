import React from 'react'
import { NavLink } from "react-router-dom";

export const RoleCard = () => {
  return (
    <div className='absolute top-[127px] right-[50px] w-[350px]  bg-white rounded shadow'>
      <div className='py-2 cursor-default'>
        <span className='py-2 font-sans text-[16px] px-2 font-bold'>Roles</span>
      </div>

      <div className='py-2 cursor-pointer hover:bg-slate-100'>
      <NavLink to="/postman"><span className='py-2 font-sans text-[16px] px-2 '>Postman</span></NavLink>
      </div>

      <div className='py-2 cursor-pointer hover:bg-slate-100'>
      <NavLink to="/recipient"><span className='py-2 font-sans text-[16px] px-2 '>Recipeint</span></NavLink>
      </div>
    </div>
  )
}
