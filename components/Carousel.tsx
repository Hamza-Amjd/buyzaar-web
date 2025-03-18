"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'

interface CarouselProps {
  items: Array<{
    _id: string | number
    image: string
    title: string
  }>,
  autoplayInterval?: number
}

const Carousel: React.FC<CarouselProps> = ({ items, autoplayInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items?.length)
  }, [items?.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items?.length) % items.length)
  }, [items?.length])

  useEffect(() => {
    const intervalId = setInterval(nextSlide, autoplayInterval)
    return () => clearInterval(intervalId)
  }, [nextSlide, autoplayInterval])
  
  return (
    <div className="relative w-full h-full rounded-2xl">
      <ChevronLeft
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-10 hover:bg-opacity-40 text-white p-1 sm:p-2 rounded-full z-10 cursor-pointer sm:left-4 size-[35px] md:size-[50px]"
      />
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items?.map((item) => (
            <Link href={`/collections/${items[currentIndex]._id}`} className="w-full flex-shrink-0" key={item._id}>
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-[200px] sm:h-[300px] md:h-[450px] object-cover rounded-2xl" 
              />
            </Link>
          ))}
        </div>
      </div>
      <ChevronRight
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-10 hover:bg-opacity-40 text-white p-1 sm:p-2 rounded-full z-10 cursor-pointer sm:right-4 size-[35px] md:size-[50px]"
      />
      
      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items?.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel