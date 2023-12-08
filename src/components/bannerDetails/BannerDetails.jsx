import React from 'react'

const BannerDetails = ({reverse}) => {
  return (
    <section className='bg-slate-100 dark:bg-slate-900 dark:text-white'>
            <div className='container flex flex-col items-center justify-center py-10 md:min-w-[500px]'>
                <div className='grid grid-cols-1 items-center gap-4 md:grid-cols-2'>
                
                <div 
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-once="true" 
                className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${reverse ? "md:order-last" :""}`}>
                    <h1 className='text-2xl md:text-4xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolores error, dolor atque accusamus optio aut sed molestiae quibusdam minima.</h1>
         
                    <p className='text-sm text-slate-600 dark:text-slate-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus earum pariatur minima accusantium culpa at amet ipsa quisquam facere quam et cumque sequi, ipsam sint vitae iure labore harum assumenda soluta voluptas voluptatem. Distinctio amet quas non cumque laboriosam eius vitae, rerum quod hic ab minima dolorum deleniti animi aperiam.
                    </p>
                    <div>
                        <ul className='flex list-inside list-disc flex-col gap-2 md:gap-4'>
                            <li className='font-medium'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ullam?
                            </li>
                            <li className='font-medium'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ullam?
                            </li>
                            <li className='font-medium'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ullam?
                            </li>
                        </ul>
                    </div>
                    <button className='btn-primary'>Get Started</button>
                </div>

                <div 
                      data-aos="fade-left"
                      data-aos-duration="400"
                      data-aos-once="true" 
                    className={reverse ? "order-1" : ""}>
                        <img src='https://s3.amazonaws.com/utep-uploads/wp-content/uploads/bradley/2021/01/29110551/corporate_trainer.jpg' 
                             alt='not found'
                             className='mx-auto w-full p-2 md:max-w-[400px]'/>

                </div>

                </div>
            </div>
    </section>
  )
}

export default BannerDetails