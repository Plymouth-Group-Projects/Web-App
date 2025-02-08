"use client";
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Button } from "@/components/ui/button"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { ArrowRight, Link } from 'lucide-react';


export default function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )
  return (
   <>
      <div className='container mx-auto my-[60px]'>
        <div className='grid grid-cols-2 gap-8'>
          <div className='mt-[60px]'>
            <h1 className='text-6xl font-bebas tracking-wide'>
              WELCOME TO <span className='text-lightest'>FINDWORK</span> <br/>
              YOUR GATEWAY TO OPPORTUNITIES
            </h1>
            <p className='text-lg font-lato mt-3'>
            FindWork connects employees, employers, freelancers, and contractors 
            to discover opportunities, showcase talents and build success with our platform. 
            We designed this to simplify hiring and working.
            </p>
            <p className='text-xl font-lato mt-6 font-semibold'>
              Find. Connect. and Thrive with <span className='text-lightest'>US</span>!
            </p>
            <div className='mt-12'>
              <Button className='bg-light py-5 px-6 hover:text-darker hover:bg-lightest'>
                <span className='font-lato font-semibold text-lg'>JOIN US NOW</span>
                <ArrowRight className='ml-2 scale-125'/>
                <Link className='hidden'/>
              </Button>
            </div>
          </div>
          <div>
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
            >
              <CarouselContent>
                <CarouselItem>
                  <Image 
                  src="/carousel-photo1.png" 
                  alt="Carousel Photo 1"
                  width={600}
                  height={600}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image 
                  src="/carousel-photo2.png" 
                  alt="Carousel Photo 2"
                  width={600}
                  height={600}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image 
                  src="/carousel-photo3.png" 
                  alt="Carousel Photo 3"
                  width={600}
                  height={600}
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
   </>
  )
}
