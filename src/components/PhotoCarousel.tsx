"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getAssetPath } from '@/utils/assetPath'

interface PhotoCarouselProps {
  images: string[]
  title: string
  altText: string
}

export default function PhotoCarousel({ images, title, altText }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (images.length <= 1) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (images.length === 0) return null

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6">
      {/* Main Image */}
      <Image
        src={getAssetPath(images[currentIndex])}
        alt={`${altText} - ${title}`}
        fill
        className="object-cover transition-all duration-700 ease-out"
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{
          transform: 'scale(1.02)',
        }}
      />
      
      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg z-10"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg z-10"
            aria-label="Next image"
          >
            <svg className="w-5 h-4" fill="none" stroke="currentColor" viewBox="0 4 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
      
      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ease-out hover:scale-125 ${
                index === currentIndex ? 'bg-white scale-150 shadow-lg' : 'bg-white/60 hover:bg-white/90'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded z-10">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}
