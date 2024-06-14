import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Card2 from './Card2';
import Textform from './Textform';


function Home() {
    return (
        <>
            <div className='w-[100%] h-[700px] flex flex-row relative'>
                <div className='w-[40%] h-[500px] flex flex-col  justify-center  p-10 gap-10  absolute left-[50px] top-10'>
                    <h1 className='text-[rgb(255,255,255)] font-bold text-[30px] font-serif'>Suns Signs</h1>
                    <p className='text-[rgba(255,255,255,0.8)] font-serif'>
                        There are 12 signs of the zodiac, each one taking up 30 degrees in your birth chart, manking a complete 360 degree circle
                    </p>
                    <hr className=' bg-[#ffffff] h-[3px] w-[300px]' />
                    <div className=' flex flex-col gap-8 '>
                        <h1 className='text-[#219bf1] font-bold font-sans text-[2rem]'>Ultimate Guide
                            <span className='text-[#ffffff]'>
                                To Astrology

                            </span>

                        </h1>
                        <button className='w-[150px] h-[80px] text-[#ffffff] font-serif bg-[#ec3251] hover:bg-[transparent] hover:border-2 hover:border-[#ec3251] duration-[1s]' ><Link to={"/prediction"}>Lets Begin</Link></button>
                    </div>

                </div>

                <div className="w-[30%] h-[500px] absolute right-[10%] top-10 bg-[url('./images/horoscope.png')] bg-center bg-contain bg-no-repeat animate-fullSpin">
                    {/* <img className='w-[100%] h-[100%]' src="../images/logo.png" alt="logo"/> */}

                </div>

            </div>



            <div className="w-[100%] min-h-[700px] bg-[#0c2230] flex  flex-col  items-center bg-[url('./images/servicebg.jpg')] bg-cover bg-center bg-no-repeat ">

                <div className=' flex flex-col text-[#ffffff] font-serif w-[500px] h-[200px] justify-center items-center gap-5 mt-[5%]'>
                    <div className=' font-bold font-serif text-[#ffffff] text-[2rem]'>
                        Our Services
                    </div>
                    <hr className=' w-[200px] h-[2px] bg-[#ff7010] border-none' />
                    <div className=' font-[200] font-serif '>
                        Consectetur adipiscing elit, sed do eiusmod tempor incididuesdeentiut labore
                        etesde dolore magna aliquapspendisse and the gravida.
                    </div>
                </div>


                <div className='flex flex-row flex-wrap  justify-center  gap-[10%] p-[10%]'>
                    <Card
                        image="https://kamleshyadav.com/html/astrology/version-2/assets/images/svg/service1.svg"
                        title="Vastu Shastra"
                        content="Consectetur adipiscing elit sed do
                 eiusmod tempor incididunt"

                    />
                    <Card
                        image="https://kamleshyadav.com/html/astrology/version-2/assets/images/svg/service2.svg"
                        title="Birth Journal"
                        content="Consectetur adipiscing elit sed do
                 eiusmod tempor incididunt"


                    />
                    <Card
                        image="https://kamleshyadav.com/html/astrology/version-2/assets/images/svg/service3.svg"
                        title="Manglik Dosha"
                        content="Consectetur adipiscing elit sed do
                 eiusmod tempor incididunt"


                    />

                    <Card
                        image="https://kamleshyadav.com/html/astrology/version-2/assets/images/svg/service4.svg"
                        title="Lal Kitab"
                        content="Consectetur adipiscing elit sed do
                 eiusmod tempor incididunt"


                    />

                    <Card
                        image="https://kamleshyadav.com/html/astrology/version-2/assets/images/svg/service5.svg"
                        title="Crystal Ball"
                        content="Consectetur adipiscing elit sed do
                 eiusmod tempor incididunt"


                    />

                    <Card
                        image="https://kamleshyadav.com/html/astrology/version-2/assets/images/svg/service6.svg"
                        title="Kundli Dosh"
                        content="Consectetur adipiscing elit sed do
                 eiusmod tempor incididunt"


                    />

                </div>





            </div>


            <div className='w-[100%] min-h-[2000px] bg-[#07273C]'>

                <div className='flex flex-col  justify-center ml-[10%] pt-[10%] gap-[20px] '>
                    <div className=' font-serif font-bold text-[#ffffff] text-[2.5rem] w-[500px] h-[80px] flex justify-center items-center'>

                        Horoscope For Zodiac Sign
                    </div>
                    <hr className='w-[200px] h-[3px] bg-[#ff7010] border-none' />

                    <div className='w-[400px] h-[100px] text-[#ffffff] text-[13px] font-[200] font-serif flex justify-center items-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </div>
                </div>


                <div className='w-[100%] flex flex-row flex-wrap p-[10%] gap-[5%] mt-[-5%]'>
                    <Card2
                        image="https://kit.envalabdemos.com/astroleeu/wp-content/uploads/2023/09/zodiac-01-106x100-1.png"
                        title="Aries"
                        date="Mar 21 - Apr 19"
                    />

                    <Card2
                        image="	https://kit.envalabdemos.com/astroleeu/wp-content/uploads/2023/09/zodiac-02-128x100-1.png"
                        title="Taurus"
                        date="Mar 21 - Apr 19"
                    />

                    <Card2
                        image="https://kit.envalabdemos.com/astroleeu/wp-content/uploads/2023/09/zodiac-03-82x100-1.png"
                        title="Gemini"
                        date="Mar 21 - Apr 19"
                    />


                    <Card2
                        image="https://kit.envalabdemos.com/astroleeu/wp-content/uploads/2023/09/zodiac-04-116x100-1.png"
                        title="Cancer"
                        date="Mar 21 - Apr 19"
                    />

                    <Card2
                        image="https://kit.envalabdemos.com/astroleeu/wp-content/uploads/2023/09/zodiac-05-94x100-1.png"
                        title="Leo"
                        date="Mar 21 - Apr 19"
                    />


                    <Card2
                        image="https://kit.envalabdemos.com/astroleeu/wp-content/uploads/2023/09/zodiac-06-62x100-1.png"
                        title="Virgo"
                        date="Mar 21 - Apr 19"
                    />

                    <Card2
                        image="	https://kit.envalabdemos.com/astroleeu/wp-content/uploads/2023/09/zodiac-07-114x100-1.png"
                        title="Libra"
                        date="Mar 21 - Apr 19"
                    />

                    <Card2
                        image="https://kit.envalabdemos.com/astroleeu/wp-content/uploads/2023/09/zodiac-08-80x100-1.png"
                        title="Scorpio"
                        date="Mar 21 - Apr 19"
                    />

                    <Card2
                        image="https://kit.envalabdemos.com/astroleeu/wp-content/uploads/2023/09/zodiac-09-106x100-1.png"
                        title="Sagittarius"
                        date="Mar 21 - Apr 19"
                    />

                    <Card2
                        image="https://kit.envalabdemos.com/astroleeu/wp-content/uploads/2023/09/zodiac-10-90x100-1.png"
                        title="Capricorn"
                        date="Mar 21 - Apr 19"
                    />

                    <Card2
                        image="https://kit.envalabdemos.com/astroleeu/wp-content/uploads/2023/09/zodiac-11-94x100-1.png"
                        title="Aquarius"
                        date="Mar 21 - Apr 19"
                    />

                    <Card2
                        image="	https://kit.envalabdemos.com/astroleeu/wp-content/uploads/2023/09/zodiac-12-114x100-1.png"
                        title="Pisces"
                        date="Mar 21 - Apr 19"
                    />

                </div>



                <div className='w-[75%] h-[250px] bg-[#143246]  ml-[18%] mt-[-5%]'>
                    <div className='w-[100%] h-[80px] text-[#ffffff] font-serif font-bold text-[2rem] pt-[3%] pl-[3%]'>
                    Know Your Zodiac Sign
                    </div>
                    <Textform/>

                </div>




            </div>


        </>

    )
}

export default Home;