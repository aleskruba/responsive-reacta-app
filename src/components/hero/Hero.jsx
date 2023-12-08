import React from 'react'
import HeroImg from '../../assets/hero.svg'

function Hero() {
  return (
    <div className="h-[650px] md:h-[500px]  bg-gradient-to-r from-violet-950 to-violet-900 pt-32">
     <section className='container flex flex-col items-center justify-between'>
        <div className='grid grid-cols-1  md:grid-cols-2  dark:text-white'> 

        <div 
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-once="true"
          className='flex flex-col items-center text-center gap-4 md:items-start md:text-left'>
        
        <h1 className='text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nulla repudiandae.</h1> 
        <p className="">Lorem ipsum dolor  velit nisi, eos perspiciatis voluptatem sint provident reiciendis eum. Porro, consequuntur cum explicabo rerum quae, illum soluta exercitationem voluptas a, minima sunt. Veritatis voluptatum blanditiis corporis odit sapiente necessitatibus id hic pariatur voluptatibus repudiandae, quibusdam veniam asperiores corrupti quis praesentium ipsa!</p>
        
        <div className='space-x-4'> 

        <button className='btn-primary'>Get Started</button>
        <button className='btn-outline'>Login</button>
        </div>
        </div>
      
        <div
             data-aos="fade-left"
             data-aos-duration="400"
             data-aos-once="true" 
            className=' mx-auto max-w-xs p-4'>
          <img src={HeroImg} alt="Nout Found" className='mx-full'/>
        </div>  
      
        </div>
    
      
      </section>
    </div>
  )
}

export default Hero