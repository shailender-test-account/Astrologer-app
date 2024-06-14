import React from 'react'

function Card(props) {


  return (
    <div className='w-[300px] h-[300px] bg-[#07273c]  flex flex-col justify-center items-center gap-5  mt-[30px]'>
      {/* <div className={`relative  overflow-hidden w-[300px] h-[300px] bg-[#07273c]   before:absolute  before:top-[-25%]
          before:left-[-25%] before:bg-[conic-gradient(#04b0ee_20deg,transparent_120deg)] before:w-[400px] before:h-[400px]
           after:w-[95%] after:h-[95%] after:bg-[#07273c] after:absolute 
           after:top-[3%] after:left-[3%]
            
            after:flex after: justify-center 
             
            before:animate-fastSpin`}>

              


      </div> */}

      <div className='w-[100px] h-[100px] bg-[#173a52] flex justify-center items-center rounded-[50%] transition-all duration-[0.5s] hover:bg-[#ff7010]'>
      <img className='' src={`${props.image}`} alt="" />
      </div>
      <h1 className='font-bold font-serif text-[1.5rem] text-[#ffffff]'>{props.title}</h1>
      <hr className='w-[100px] h-[2px] bg-[#ff7010]  border-none' />
      <div className='w-[100%] h-[60px] flex justify-center items-center text-[#ffffff] font-[200] font-serif p-[30px]'>
        {props.content}
      </div>
      



        
    </div>
  )


}

export default Card