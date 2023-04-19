import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Timer = () => {


    let [sec,setSec] = useState(10)
    let [hr,setHr] = useState(1)
    let [min,setMin] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
          setSec(prevSec => {
            const newsec = (prevSec - 1) % 60
            return newsec < 0 ? 59 :newsec
          });
        }, 1000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);
    useEffect(() => {
        if (sec == 0){
            setMin(prevMin => {
                const newMin = (prevMin - 1) % 60
                return newMin < 0 ? 59 : newMin
            });
        }
        },[sec]);

    useEffect(() => {
        if (min == 0){
            setHr(prevHr => {
                const newHr = (prevHr - 1) % 60
                return newHr < 0 ? 59 : newHr
            });
        }
        },[min]);
    



  return (
    <>
        {
            <h1>{hr}h:{min}m:{sec}s</h1>
        }   
    
    
    </>
  )
}

export default Timer