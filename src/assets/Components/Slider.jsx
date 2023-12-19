import React from 'react'

const Slider = ({min,max,value,handleChange}) => {
  return (
    <div className='sliderContainer'>
     <input
  type="range"
  className='slider'
  min={min}
  max={max}
  value={value}
  onChange={handleChange}
/>
<div className="sliderValue">{value}</div>
      {/* <div className="sliderRange">
        {min} - {max}
      </div> */}
    </div>
  )
}

export default Slider
