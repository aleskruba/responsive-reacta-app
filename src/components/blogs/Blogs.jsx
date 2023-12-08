import React from 'react'
import BlogCard from './BlogCard'

const Blogs = () => {
    let img1 ='https://img.freepik.com/free-photo/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology_185193-110089.jpg?w=996&t=st=1701937979~exp=1701938579~hmac=12859988e8b7f2a25f609fc642f07903fd1348caa5b552b4a851e07c903e1f25'
    let img2 ='https://img.freepik.com/free-photo/side-view-cropped-unrecognizable-business-people-working-common-desk_1098-20474.jpg?w=900&t=st=1701938154~exp=1701938754~hmac=3644693b3f2a23e5f987f7fe3d828b8d7f6ce376d5182e319889cc09bb0b298f'
    let img3 = 'https://img.freepik.com/free-photo/young-female-entrepreneur-working-her-office-using-laptop-typing-preparing-team-meeting_1258-194475.jpg?w=900&t=st=1701938168~exp=1701938768~hmac=b990b1226109c989832b289f63801bd0263b86685ac1457f0dbaf769f7ca02d9'
  return (
    <>
    <div className='dark:bg-gray-900 dark:text-white'>
      <section 
                data-aos="fade-up"
     
            className='container mb-10 py-8'>
        <h1 className='mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold'>
            Our Latest Blogs
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
            <BlogCard img={img1}/>
            <BlogCard img={img2}/>
            <BlogCard img={img3}/>
        </div>
    </section>
    </div>

    </>
  )
}

export default Blogs