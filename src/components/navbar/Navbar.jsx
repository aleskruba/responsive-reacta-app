import React, { useEffect, useState } from 'react'
import { PiPhoneXBold } from "react-icons/pi";
import { MdOutlineNightlight } from "react-icons/md";
import { MdOutlineNightlightRound } from "react-icons/md";
import { IoIosArrowDropup } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import ResponsiveMenu from './ResponsiveMenu';

function Navbar() {

    const [theme, setTheme] = useState(localStorage.getItem("theme")?(localStorage.getItem("theme")):"light")
    const [showMenu,setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
console.log(showMenu)
    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark")
            localStorage.setItem("theme", "dark")
    
        } else {
            element.classList.remove("dark")
            localStorage.removeItem("theme")      }  
    },[theme])


  return (
    <>
    <header className='fixed top-0 left-0 right-0 z-[99] bg-navbar text-white border-b-[4px] border-primary/50'>
      <nav  className='container flex items-center justify-between h-[70px] py-2 px-2'>
            <div className='text-2xl md:text-3xl text-white'>
                <a href='#'>DOKRAM <span className='inline-block font-bold text-primary'>WEB</span> </a>

            </div>

            <div className='hidden md:block'>
                <ul className='flex items-center gap-2  md:gap-10 '>
                    <li className='group relative cursor-pointer'>
                        <a href='#' className='flex items-center gap-[2px] h-[72px] '>
                        Home <span><IoIosArrowDropup className='  transition-all duration-200 group-hover:rotate-180'/></span>
                        </a>
                        <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
                <ul className="space-y-3">
                  <li className="p-2 hover:bg-violet-200">Services</li>
                  <li className="p-2 hover:bg-violet-200">About us</li>
                  <li className="p-2 hover:bg-violet-200">Privacy policy</li>
                </ul>
              </div>
                    </li>
                    <li className='group  cursor-pointer'>
                    <a href='#' className='flex items-center gap-[2px] h-[72px] '>
                        Services <span><IoIosArrowDropup className='  transition-all duration-200 group-hover:rotate-180'/></span>
                     </a>
                    <div className='absolute left-0 z-[99999] hidden w-full rounded-3xl bg-white text-black shadow-md group-hover:block p-2'>
                        <div className='grid grid-cols-3 gap-5'>
                                <div className='overflow-hidden'>
                                    <img src="https://www.daimlertruck.com/fileadmin/_processed_/9/4/csm_23DT233_005_7457c0b7d2.jpg" 
                                         alt ='truck'
                                         className='max-h-[300px] w-full rounded-b text-3xl object-fill'/>
                                 </div>
                                 <div className='col-span-2'>
                                    <h1 className='text-xl font-semibold pb-3'>Best Selling</h1>
                                    <p className='text-sm text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quia dicta ratione odio autem? Cum enim consectetur veniam repudiandae veritatis. Cumque laboriosam veritatis repellat magnam. Reiciendis amet consectetur consequuntur voluptates</p>
                                        <div className='grid grid-cols-3  '>
                                            <div>
                                                <h1 className='pb-1 text-xl font-semibold'>Development</h1>
                                                <ul className='space-y-2'>
                                                    <li className='cursor-pointer text-black/80 hover:text-primary'>Javascript</li>
                                                    <li className='cursor-pointer text-black/80 hover:text-primary'>React</li>
                                                 </ul>
                                            </div>
                                            <div >
                                                 <h1 className='pb-1 text-xl font-semibold'>Development</h1>
                                                 <ul className='space-y-2'>
                                                    <li className='cursor-pointer text-black/80 hover:text-primary'>Javascript</li>
                                                    <li className='cursor-pointer text-black/80 hover:text-primary'>React</li>
                                                 </ul>
                                            </div>
                                            <div>
                                            <img src="https://www.daimlertruck.com/fileadmin/_processed_/9/4/csm_23DT233_005_7457c0b7d2.jpg" 
                                                alt ='truck'
                                                   /> 
                                            </div>
                                        </div>

                                    
                                 </div>
                          </div>
                       </div>

                    </li>
                    <li>
                        <div className='flex items-center gap-4'>
                            <div>
                                <PiPhoneXBold className='text-2xl h-[30px] w-[30px] rounded-md p-2 text-white bg-primary hover:bg-primary/80'/>
                            </div>
                            <div className='text-xs'>
                                <p>Call me on </p>
                                <p>
                                    <a href='tel:420728949062'></a>
                                    +420728949062 </p>
                            </div>
                        </div>
                    </li>
                    {theme === "dark" ? 
                            (<MdOutlineNightlight 
                                    className='text-2xl'  
                                    onClick={()=>setTheme('light')} />) 
                            :
                            (<MdOutlineNightlightRound 
                                    className='text-2xl' 
                                    onClick={()=>setTheme('dark')}/>)}
                    
                </ul>
                </div>
                <div className='flex items-center gap-4 md:hidden'>
                         {theme === "dark" ? 
                            (<MdOutlineNightlight 
                                    className='text-2xl'  
                                    onClick={()=>setTheme('light')} />) 
                            :
                            (<MdOutlineNightlightRound 
                                    className='text-2xl' 
                                    onClick={()=>setTheme('dark')}/>)
                            }
                            {showMenu ? 
                            ( <IoIosMenu className='cursor-pointer transition-all' 
                                         size={30}
                                         onClick={toggleMenu}
                                         />
                                         )
                            
                            :(<IoIosMenu className='cursor-pointer transition-all' 
                                          onClick={toggleMenu}
                                            size={30}/>)
                            
                            }
                
            
                
                </div>
      </nav>
    </header>

    <ResponsiveMenu showMenu={showMenu} />
    </>
  )
}

export default Navbar