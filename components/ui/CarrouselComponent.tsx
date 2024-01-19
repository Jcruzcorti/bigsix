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

  const carrouselImages: { tittle: string; img: string; key: number }[] = [
    {
      key: 1,
      tittle: 'Big six',
      img: '/bigsixphoto2.jpg'
    },
    {
      key: 2,
      tittle: 'Arsenal',
      img: '/arsenalwin.jpg'
    },
    {
      key: 3,
      tittle: 'Chelsea',
      img: '/chelseawin.jpg'
    },
    {
      key: 4,
      tittle: 'Liverpool',
      img: '/liverpoolwin.jpeg'
    },
    {
      key: 5,
      tittle: 'Man city',
      img: '/mancitywin.jpg'
    },
    {
      key: 6,
      tittle: 'Man united',
      img: '/manuniwin3.jpg'
    },

  ]

  return (

    <div className="relative flex-col py-20 place-items-center ">
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
              <div className=" p-1 lg:p-4 " >
                <Card className="bg-background ">
                  <CardContent className="flex items-center justify-center p-3 lg:p-3">
                    {/* <div className="h-full w-full overflow-hidden"> */}
                    <Image
                      className="relative rounded-xs w-full h-auto"
                      src={item.img}
                      alt={item.tittle}
                      width="0"
                      height="0"
                      sizes="100vw"
        
                    />
                    {/* </div> */}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  )
}

