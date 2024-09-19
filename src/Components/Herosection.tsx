"use client";
import React from 'react'
import Link from "next/link";
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';
import { useRouter } from 'next/navigation'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
type Props = {}

const Herosection = (props: Props) => {
const router=useRouter();

  return (
    <BackgroundBeamsWithCollision>
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
         <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill=""
      />
        <div className="p-4 relative z-10 w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the art of Computer</h1>
          <p className="mt-4 font-normal text-base md:text-lg text-green-600 max-w-lg mx-auto">
            Fortune Computer is your gateway to mastering digital skills with expert-led courses and hands-on learning. Empower your future with us today.
          </p>
          <div className="mt-8">
          
          <Button
          onClick={()=>router.push("/course")}
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
       Explore course
      </Button>
          
          </div>
        </div>
      </div>
      </BackgroundBeamsWithCollision>
  )
}


export default Herosection