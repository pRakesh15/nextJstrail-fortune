"use client";
import Link from 'next/link'
import React from 'react'
import courseData from '@/data/course.json'
import { BackgroundGradient } from './ui/background-gradient'
import Image from 'next/image'

type Props = {}
interface Course{
    id: number,
    title: string,
    slug:string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image:string
}

const FeatureSection = (props: Props) => {

    const isFeatureData=courseData.courses.filter((selectcourse:Course)=>selectcourse.isFeatured)

  return (
    <div className='py-12 bg-gray-900'>
        <div>
            <div className="text-center">
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
                    FEATURED COURSE
                </h2>
               <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>
                Learn With The Best
               </p>
            </div>
        </div>
        <div className=' mt-10'>
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
{
    isFeatureData.map((course:Course)=>(
        <div key={course?.id} className=' flex justify-center items-center'>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {course?.title}
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
         {course?.description}
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            {course?.price}
          </span>
        </button>
      </BackgroundGradient>
        </div>
    )

   )
}
         </div>
        </div>
        <div className='mt-20 text-center '>
            <Link href={"#"}>
            <button className='bg-teal-500 p-2 rounded-md hover:text-gray-300 hover:bg-teal-600'>View All courses</button>
            </Link> 
        </div>
         
    </div>
  )
}

export default FeatureSection