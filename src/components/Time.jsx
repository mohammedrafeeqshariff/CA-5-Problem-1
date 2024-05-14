import { useState } from 'react'

const Time = () => {


    let [time, setTime] = useState(0)
    document.cookie = time

    const blackbackGroundCSS = {color:"white", backGroundColor:"black"}
    const whitebackGroundCSS = {color:"black", backGroundColor:"white"}

    const Mytime = setInterval(startCount, 1000)

    function startCount(){
        setTime(time+1)
    }

    function StopCount(){
        clearInterval(startCount)
    }


    function changeBackground(){
         time*=3 ? blackbackGroundCSS && setCookie(multiple,time,365) && getCookie(multiple) : whitebackGroundCSS
    }

    function setCookie(name,value,expires){
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
    }

    function getCookie(name){
        console.log(name)
    }

  return (
    <div className='bgc' style={changeBackground()}>
      <h1>{time}</h1>

      <button onClick={StopCount}>Stop</button>
    </div>
  )
}

export default Time
