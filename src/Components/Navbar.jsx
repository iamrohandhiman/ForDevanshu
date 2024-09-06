import React from 'react'
import { RoleCard } from '../Components/RoleCard'
import { useState } from 'react'
import { NavLink } from "react-router-dom";


export const Navbar = () => {

  let [dropdownstate,setDropdownstate] = useState(false);

function toggleDropdown(){
  if(dropdownstate===true){
    setDropdownstate(false);
  }
  else{
    setDropdownstate(true);
  }
}

  return (
    <>
    <div className='flex justify-between items-center h-[63px] w-full bg-yellow-400'>
        
    
    <NavLink to="/"> <img src="./src/Priorityy.png" alt="" className='h-[50px] ml-[120px]' /> </NavLink>
   

        <div className='flex justify-center items-center mr-[120px] text-[15px]'>
          <div className='px-[25px] flex justify-center items-center ' >Find a location <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-840q74 0 139.5 28.5T734-734q49 49 77.5 114.5T840-480q0 74-28.5 139.5T734-226q-49 49-114.5 77.5T480-120q-41 0-79-9t-76-26l61-61q23 8 46.5 12t47.5 4q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 24 4 47.5t12 46.5l-60 60q-18-36-27-74.5t-9-79.5q0-74 28.5-139.5T226-734q49-49 114.5-77.5T480-840Zm40 520v-144L176-120l-56-56 344-344H320v-80h280v280h-80Z"/></svg></div>
          <div className='px-[25px] flex  justify-center items-center '> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z"/></svg> Search </div>
          <div className='px-[25px] flex justify-center items-center '><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M480-96q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-75q17-17 34-63.5T540-336H420q9 55 26 101.5t34 63.5Zm-91-10q-14-30-24.5-69T347-336H204q29 57 77 97.5T389-181Zm182 0q60-17 108-57.5t77-97.5H613q-7 47-17.5 86T571-181ZM177-408h161q-2-19-2.5-37.5T335-482q0-18 .5-35.5T338-552H177q-5 19-7 36.5t-2 35.5q0 18 2 35.5t7 36.5Zm234 0h138q2-20 2.5-37.5t.5-34.5q0-17-.5-35t-2.5-37H411q-2 19-2.5 37t-.5 35q0 17 .5 35t2.5 37Zm211 0h161q5-19 7-36.5t2-35.5q0-18-2-36t-7-36H622q2 19 2.5 37.5t.5 36.5q0 18-.5 35.5T622-408Zm-9-216h143q-29-57-77-97.5T571-779q14 30 24.5 69t17.5 86Zm-193 0h120q-9-55-26-101.5T480-789q-17 17-34 63.5T420-624Zm-216 0h143q7-47 17.5-86t24.5-69q-60 17-108 57.5T204-624Z"/></svg> India </div>
        </div>
     
    </div>

   <div className='flex justify-between items-center h-[63px] w-full bg-white'>
      <div className='flex justify-between items-center ml-32'>
        <span className=" px-4 text-[15px] flex justify-between items-center hover:text-red-600 duration-150 transition-all cursor-pointer " >Track <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></span>
        <span className=" px-4 text-[15px] flex justify-between items-center hover:text-red-600 duration-150 transition-all cursor-pointer " >Ship <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></span>
        <span className=" px-4 text-[15px] flex justify-between items-center hover:text-red-600 duration-150 transition-all cursor-pointer " >Enterprise Logistic Service <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></span>
        <span className=" px-4 text-[15px] flex justify-between items-center hover:text-red-600 duration-150 transition-all cursor-pointer  " >Customer Service<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></span>
      </div>

      <div>
      <span onClick={toggleDropdown} className=" px-4 text-[15px] flex justify-between items-center mr-32 hover:text-red-600 duration-100 transition-all cursor-pointer hover:underline" >Customer Portal Logins<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></span>
      </div>
  </div>

  {dropdownstate && <RoleCard></RoleCard>}
  </>

  )
}
