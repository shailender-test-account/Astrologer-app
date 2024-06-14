import React from 'react';


function Footer() {
    return (
        <div className='w-[100%] h-[600px] bg-[#143246] flex flex-col'>
            <div className='w-[100%] h-[500px] bg-[#143246]  flex flex-row gap-[10%] justify-center items-center'>
                <div className='w-[300px] h-[100%] text-[#ffffff] flex flex-col justify-center gap-11 ml-[5%] '>
                    <h1 className=' font-bold font-serif text-[2.2rem]'>ASTROLEEU</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <div className='text-[#ffffff] flex  items-center gap-10 text-[18px] '>
                        <i className="bi bi-instagram  cursor-pointer transition-all duration-[]0.5s hover:text-[#ff7010]"></i>
                        <i className="bi bi-facebook cursor-pointer transition-all duration-[]0.5s hover:text-[#ff7010]"></i>
                        <i className="bi bi-twitter cursor-pointer transition-all duration-[]0.5s hover:text-[#ff7010]"></i>
                        <i className="bi bi-whatsapp cursor-pointer transition-all duration-[]0.5s hover:text-[#ff7010]"></i>


                    </div>

                </div>

                <div className='w-[300px] h-[100%]  flex flex-col justify-center items-center gap-[5%]  text-[#ffffff]'>
                    <h1 className='font-[100] font-serif text-[1.5rem]'>QUICK LINKS</h1>
                    <div className='flex flex-col justify-center gap-10 cursor-pointer font-serif h-[200px] '>
                        <h2 className='transition-all duration-[0.5s] hover:text-[#ff7010]'>About Us</h2>
                        <h2 className='transition-all duration-[0.5s] hover:text-[#ff7010]'>Gallery</h2>
                        <h2 className='transition-all duration-[0.5s] hover:text-[#ff7010]'>Contact Us</h2>
                    </div>
                </div>


                <div className='w-[300px] h-[100%] flex flex-col justify-center items-center gap-10  '>
                    <h1 className='font-[100] text-[1.5rem] text-[#ffffff]'>CONTACT INFO</h1>
                    <div className='text-[#ffffff] flex flex-col justify-center items-center w-[100%] gap-5 '>
                        <div className='flex flex-row w-[100%] h-[50px] gap-5  justify-center items-center '>
                            <i className="bi bi-geo-alt-fill text-[#ff7010] text-[30px]"></i>
                            <h2 >SEC-9 ,FARIDABAD HARYANA -121004</h2>

                        </div>
                        <div className='flex flex-row w-[100%] h-[50px] gap-5'>
                            <i className="bi bi-telephone-fill text-[#ff7010] text-[20px]"></i>
                            <h2>+91-9315467903</h2>

                        </div>

                        <div className='flex flex-row w-[100%] h-[50px] gap-5'>
                            <i className="bi bi-envelope-open-fill text-[#ff7010] "></i>
                            <h2>shailender96@gmail.com</h2>

                        </div>
                    </div>
                </div>


            </div>

            <hr className='w-[100%] h-[2px] bg-[#0d2332] border-none' />
            <div className='w-[100%] h-[80px] text-[#ffffff] font-serif flex justify-center items-center'>
                Copyright © 2022 Astroleeu. All Right Reserved.
            </div>
        </div>



    )
}

export default Footer;