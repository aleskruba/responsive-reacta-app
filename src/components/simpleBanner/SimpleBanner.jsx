import React from 'react';

function SimpleBanner() {
  return (
    <>
    <div className='bg-primary'>
      <div 
            data-aos="fade-up"

      className='container py-8 md:py-12'>
        <div className='grid grid-cols-1 items-center md:grid-cols-3 gap-4 md:gap-8'>
          <div className='px-2'>
           <iframe
                className='aspect-video w-full'
                title="title of the video"
                src="https://www.youtube.com/embed/CUds9x-1ILk" // Use the embed URL here
                frameBorder="0"
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
            ></iframe>
          </div>

          <div className='flex flex-col items-center gap-4 text-center text-white dark:text-white
                    md:col-span-2 md:items-start md:text-left'>
            <h1 className='text-3xl font-bold'>
                Lorem ipsum, dolor sit amet 
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium dolore repellat quae labore a laudantium hic natus saepe velit voluptate.</p>
          <button className='btn-primary !bg-white !text-black'>Get Started</button>
         </div>
        </div>
       </div>
       </div>
    </>
  );
}

export default SimpleBanner;
