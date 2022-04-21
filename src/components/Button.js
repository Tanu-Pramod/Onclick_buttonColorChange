import React, { useRef, useState } from 'react'


function Button() {
  const btn = useRef(null);
 
  const [selectedBtn, setSelectedBtn] = useState([]);
  const [color,setColor] =  useState('white')
  const colorChange = (val) => {
 setSelectedBtn([...selectedBtn, val]);
  }
  console.log(selectedBtn);
  return (

    <div class="container">
      <div class="row">
        {
        [...Array(10).keys()].map(i => <button style={{ backgroundColor: selectedBtn.includes(i)? 'red' : 'white' }} onClick={() => colorChange(i)}>{i}</button>
        )}

        

      </div>




    </div>


  )
}

export default Button