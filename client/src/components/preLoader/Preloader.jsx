import React, { useEffect, useRef } from 'react'
import "./preloader.css";
import { PreLoaderAnimation } from '../../animation/animation';


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const animateText = (element) => {
  let iteration = 0;
  let interval = null;

  clearInterval(interval);

  interval = setInterval(() => {
    element.innerText = element.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return element.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if(iteration >= element.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
};

const Preloader = () => {

    const h1Ref = useRef(null);

    useEffect(()=>{
        if (h1Ref.current) {
            animateText(h1Ref.current);
        }
        PreLoaderAnimation()
    },[]);


  return (
    <div  className='preloader'>
        <h1 ref={h1Ref} data-value="TARUNJHAMB">TARUNJHAMB</h1>
    </div>
  )
}

export default Preloader