import React from 'react'
import pixal from '../Resources/PixelCraft.png'
const Navbar = () => {
  return (
  <section className='navigation'>
    <div className='icon'><img src={pixal} height={50} width={300} alt="" /></div>
   
        <ul className='options'>
        <li><div className='singup'><i class="ri-user-add-fill"> Sign up/ Log in</i></div></li>
        <li><div className='premium '> <i class="ri-vip-crown-2-fill"> Try Premium</i> </div></li>
        <li><i class="ri-settings-2-fill"></i> </li>
        <li><i class="ri-notification-4-fill"></i></li>
        <li><i class="ri-menu-line"></i></li>
        </ul>

  </section>
  )
}

export default Navbar
