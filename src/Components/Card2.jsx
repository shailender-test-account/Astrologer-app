import React from 'react'

function Card2(props) {
  return (
    <div className='w-[250px] h-[280px] bg-[transparent] border-2 border-[#19394e] transition-all duration-[0.5s] hover:border-2 hover:border-[#FF7010] flex flex-col pl-[2%] pt-[2%] gap-10 mt-10'>
        <div className={`w-[80px] h-[80px]`}>
            <img className='w-[100%] h-[100%]' src={`${props.image}`} alt="aries" />
        </div>
        <div className=' text-[#ffffff] flex flex-col gap-5'>
            <h1 className=' font-serif font-bold text-[1.8rem] '>{props.title}</h1>
            <h2 className=' font-serif font-[100] '>{props.date}</h2>
        </div>



    </div>
  )
}

export default Card2;