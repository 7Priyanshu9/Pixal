import React from 'react'

const SideBarItems = ( {name , active , handleClick}  ) => {
  return (
   <button className={`sideBarItem ${active ? 'active' : " "}`}
   onClick={handleClick}>{name}</button>
  )
}

export default SideBarItems
