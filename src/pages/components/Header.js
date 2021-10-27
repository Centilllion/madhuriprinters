import React, {useState} from 'react'
import logo from '../../images/printit-logo.svg'


const Header = () => {

  const [open, setOpen] = useState(false);
  

    return (
        <header class="text-gray-600 body-font z-20">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between items-center">
    <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={logo} alt={"Print It Logo"} class="h-7 w-7" />
      <span class="ml-1 text-xl">PrintIT</span>
    </a>
    <nav class={`absolute md:static bg-white md:bg-transparent top-0 w-screen md:w-auto h-screen md:h-full sm:mr-0 md:mr-0 flex flex-col md:flex-row flex-wrap items-center text-base justify-center z-20 transition-transform duration-500 ease-in-out ${open ? 'open' : 'close'}`}>
      <a href ="/" class="nav-link" onClick={()=>setOpen(!open)}>Home</a>
      <a href ="#services" class="nav-link" onClick={()=>setOpen(!open)}>Services</a>
      <a href ="#about" class="nav-link" onClick={()=>setOpen(!open)}>About</a>
    </nav>
    <button href="#" class="hidden md:flex items-center btn-blue">
      CALL NOW <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
    </button>
  </div>
  <button class={`cursor-pointer hamburger  md:hidden ${open ? 'open' : ''}`} onClick={()=>setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
  </button>
</header>
    )
}

export default Header
