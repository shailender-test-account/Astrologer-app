import React, { useState } from 'react'

function Textform() {


   const[istype,setType]=useState("text");
   const[istime,setTime]=useState("text");

   const handelFocus=(event)=>{
    let type=event.target.type;
    if(type==="text"){
        setType("date");
        setTime("time")
    }
   

   }

   const handelBlur=(event)=>{
    let type=event.target.type;
    if(type==="date"){
        setType("text")
        setTime("text")
    }

   }

  

    
  return (
    <div className='w-[100%] h-[100px] flex justify-center items-center mt-[5%]'>
        <form className='flex flex-row  justify-center items-center w-[100%] h-[100%] gap-[1%]' action="">
            <input type={istype} onFocus={handelFocus} onBlur={handelBlur} className=' outline-none w-[300px] h-[50px] rounded-[20px] p-[10] placeholder-[gray]'  name="date" placeholder='Date Of Birth'/>
            <input className='w-[300px] outline-none h-[50px] rounded-[20px]' type={istime} onFocus={handelFocus} onBlur={handelBlur} name="time" placeholder='Time Of Birth' />
            <input className='w-[300px] outline-none h-[50px] rounded-[20px] placeholder-[gray] font-serif font-[200] p-[10px]' type="text" name="place" placeholder='Place Of Birth'/>
            <button className='w-[150px] h-[50px] bg-[#ff7010] text-[#ffffff] font-serif font-[200] flex justify-center items-center rounded-[20px]' type="submit">Find Zodiac</button>
        </form>
    </div>
  )
}

export default Textform