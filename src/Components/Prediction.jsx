import React, { useEffect, useRef, useState } from 'react'
import Card2 from './Card2';

function Prediction() {



// state for signlist array 
  const [signlist, setSignlist] = useState([]);


  // state for set sign value we want to select

  const [signs, setSigns] = useState("aries");
  console.log(signs);

  // state for data object for a particular sign we selected 

  const [detail, setDetail] = useState(null);


  // state for time todya,yesterday , tomorrow

  const [timeframe, setTimeframe] = useState("today");


  // take the refrence of the time input select usin useref hook

  const timeRef = useRef(null);





// take input refrence for value
  const inputref = useRef(null);


  // handel the setsign value on change
  function handelChange() {
    setSigns(inputref.current.value);
    console.log(signs);

    
  }


  // handel day aor date 

  function handelTime() {
    setTimeframe(timeRef.current.value);
    console.log(timeframe);
  }



  // useeffect for the display updates and fetch url on some dependencies

  useEffect(() => {

    const fetchApi = async () => {


      const url = "http://sandipbgt.com/theastrologer/api/sunsigns";
      const url2 = `http://sandipbgt.com/theastrologer/api/horoscope/${signs}/${timeframe}`;



      let response = await fetch(url);
      let data = await response.json();

      setSignlist(data)


      let response2 = await fetch(url2);

      let data2 = await response2.json();

      setDetail(data2);
      console.log(detail);
    }
    fetchApi();

  }, [signs,  timeframe])









  return (
    <div className='w-[100%] min-h-[700px] bg-[#07273C]'>
      <div>
        <div className='w-[100%] h-[60px] flex justify-center items-center mt-10'>
          <h1 className='text-[#ffffff] font-serif  font-bold text-[2rem]'>Choose Your Zordiac Sign</h1>
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

      </div>
      <form className='w-[70%] h-[300px] bg-[#1b435e] flex  flex-row justify-center items-center' action="">
        <select ref={inputref} onChange={handelChange} className='w-[300px] h-[80px] outline-none text-[20px] font-serif ' name='sign'>

          {signlist.map((items, index) => {
            return (
              <option key={index} value={items} className="bg-[#1b435e] text-[#ffffff] outline-none">{items}</option>
            )
          })}


        </select>
        <select ref={timeRef} onChange={handelTime}  className='w-[300px] h-[80px] outline-none text-[20px] font-serif' name="time" >
          <option value="today">today</option>
          <option value="yestrday">yesterday</option>
          <option value="tomorrow">tomorrow</option>


        </select>
        <button  className='w-[100px] h-[80px] bg-[#ff7010] font-serif font-[100] text-[#ffffff]' type='submit'>Submit</button>
      </form>

      <div className='w-[100%] h-[500px] bg-[#07273C] flex flex-col items-center gap-9 pt-10'>
        <div className='w-[70%] h-[80px] border-2 border-[#1b435e] flex  justify-between items-center'>

          <h1 className='text-[#ffffff] font-serif font-bold text-[2rem] ml-10'>{signs}</h1>
          <div className='w-[200px] h-[100%] bg-[#ff7010] text-[#ffffff] font-serif font-bold flex-col justify-center items-center p-5'>
            
            <h1 className='text-[20px]'>{timeframe}</h1>
            {!detail ? ("NO HOROSCOPE FOUND"):(<h1 className='text-[#ffffff]'>{detail.date}</h1>)}
          </div>

        </div>

        {!detail ? ("NO horoscope found") : (<p className='text-[#ffffff] font-serif font-[100] text-[18px] p-[30px]'>{detail.horoscope}</p>)}
        
        
      </div>

      <div className='w-[100%] h-[200px] flex justify-center items-center gap-10'>
        <div className='w-[200px] h-[60px] bg-[#ff7010] text-[18px] font-serif font-[300] text-[#ffffff] flex flex-col justify-center items-center shadow-md'>
          <h1 className='text-[25px] font-[bold]'>Intensity</h1>
          {!detail ? "no found": (detail.meta.intensity)}
        </div>

        <div className='w-[200px] h-[60px] bg-[#ff7010] text-[18px] font-serif font-[300] text-[#ffffff] flex flex-col justify-center items-center shadow-md'>
          <h1 className='text-[25px] font-[bold]'>Keywords</h1>
          {!detail ? "no found": (detail.meta.keywords)}
        </div>

        <div className='w-[200px] h-[60px] bg-[#ff7010] text-[18px] font-serif font-[300] text-[#ffffff] flex flex-col justify-center items-center shadow-md'>
          <h1 className='text-[25px] font-[bold]'>Mood</h1>
          {!detail ? "no found": (detail.meta.mood)}
        </div>
      </div>


    </div>
  )
}

export default Prediction;