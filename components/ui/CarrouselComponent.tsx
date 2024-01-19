import Image from 'next/image'
import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"


export function CarrouselComponent() {

    const carrouselImages: { tittle: string; img: string; key: number}[] = [
        {   
            key: 1,
            tittle: 'a',
            img:'/bigsixphoto2.jpg'    
        },
        {
            key: 2,
            tittle: 'b',
            img:'/bigsixphoto2.jpg'
        },
        {
            key: 3,
            tittle: 'c',
            img:'/bigsixphoto2.jpg'
        },
    ]

  return (

     <div className="relative flex-col py-14 place-items-center ">

                <Carousel className="w-full  max-w-xl ">
                    <CarouselContent >
                    {/* {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                    ))} */}
                        {carrouselImages.map((item) => (
                            <CarouselItem key={item.key} className="">
                              <div className="p-4">
                                <Card className="bg-background ">
                                  <CardContent className="flex items-center justify-center p-3">
                                  <Image
                                    className="relative rounded-xs"
                                    src={item.img}
                                    alt="Premier League logo"
                                    width={500}
                                    height={40}
                                    priority
                                />
                                  </CardContent>
                                </Card>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                     {/* <Image
                        className="relative "
                        src="/bigsixphoto2.jpg"
                        alt="Premier League logo"
                        width={400}
                        height={40}
                        priority
                    /> */}
            

      </div>
  )
}

