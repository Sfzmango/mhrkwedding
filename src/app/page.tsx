"use client"

import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function getRandomLeaf(index: number, width: number, height: number) {
  const img = Math.random() > 0.5 ? '/images/leaves 1.png' : '/images/leaves 2.png';
  const angle = Math.random() * 360;
  // Start: random position covering the screen
  const x0 = Math.random() * width;
  const y0 = Math.random() * height;
  // End: move outward from center
  const centerX = width / 2;
  const centerY = height / 2;
  const dx = x0 - centerX;
  const dy = y0 - centerY;
  // Move further out in the same direction (offscreen)
  const distance = Math.sqrt(dx * dx + dy * dy);
  const maxDistance = Math.max(width, height) * 0.7;
  const scale = (maxDistance + distance) / distance;
  const x1 = centerX + dx * scale;
  const y1 = centerY + dy * scale;
  const size = 250 + Math.random() * 90;
  return { img, angle, x0, y0, x1, y1, size };
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hasMounted, setHasMounted] = useState(false)
  const [isPortrait, setIsPortrait] = useState(false)
  const [leaves, setLeaves] = useState<any[]>([]);
  const [animateLeaves, setAnimateLeaves] = useState(false);

  useEffect(() => {
    setHasMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const normalizedX = (clientX - centerX) / centerX
      const normalizedY = (clientY - centerY) / centerY
      setMousePosition({ x: normalizedX, y: normalizedY })
    }
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight * 1.5 > window.innerWidth)
    }
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', checkOrientation)
    checkOrientation()
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkOrientation)
    }
  }, [])

  useEffect(() => {
    // Leaves curtain animation
    const width = window.innerWidth;
    const height = window.innerHeight;
    const arr = [];
    for (let i = 0; i < 150; i++) {
      arr.push(getRandomLeaf(i, width, height));
    }
    setLeaves(arr);
    setTimeout(() => setAnimateLeaves(true), 300);
    setTimeout(() => setLeaves([]), 2000);
  }, []);

  const getSpotlightTransform = (layerDepth: number, baseScale: number) => {
    const intensity = 0.3
    const translateX = mousePosition.x * intensity * layerDepth
    const translateY = mousePosition.y * intensity * layerDepth
    const scale = baseScale + (Math.abs(mousePosition.x) + Math.abs(mousePosition.y)) * 0.1
    return {
      transform: `translateZ(${-layerDepth}px) translate(${translateX * 50}px, ${translateY * 50}px) scale(${scale})`,
      transformStyle: 'preserve-3d' as const
    }
  }

  return (
    <>
      {/* Leaves Curtain Animation */}
      {leaves.length > 0 && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            pointerEvents: 'none',
            overflow: 'hidden',
          }}
        >
          {leaves.map((leaf, i) => (
            <img
              key={i}
              src={leaf.img}
              alt=""
              style={{
                position: 'absolute',
                left: animateLeaves ? leaf.x1 - leaf.size / 2 : leaf.x0 - leaf.size / 2,
                top: animateLeaves ? leaf.y1 - leaf.size / 2 : leaf.y0 - leaf.size / 2,
                width: leaf.size,
                height: leaf.size,
                transform: `rotate(${leaf.angle}deg)`,
                opacity: animateLeaves ? 0 : 1,
                transition: 'all 1.7s cubic-bezier(.77,0,.18,1)',
                transitionDelay: `${Math.random() * 0.5}s`,
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))',
              }}
            />
          ))}
        </div>
      )}
      <Navigation />
      <main
        className="min-h-screen relative"
        style={{
          backgroundImage: "url('/images/william-morris-honeysuckle-and-tulip-dark-blue-william-morris.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Hero Section with Multi-Layer Parallax */}
        <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#41251A' }}>
          {/* Layer 1: Leaves Background (farthest back) */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/leaves background.png"
              alt="Leaves background"
              className="w-full h-full object-fill opacity-80 transition-transform duration-300 ease-out"
              // style={getSpotlightTransform(0, 1.3)}
            />
          </div>

          {/* Portrait/Landscape Conditional Layers */}
          {hasMounted && (isPortrait ? (
            // Portrait: show v3 only
            <div className="absolute inset-0 z-15 flex items-center justify-center">
              <img
                src="/images/circle background v3.png"
                alt="Circle background v3"
                className="h-full object-fill opacity-100 transition-transform duration-300 ease-out"
                // style={getSpotlightTransform(15, 1.1)}
              />
            </div>
          ) : (
            // Landscape: show original layers 2 and 3
            <>
              {/* Layer 2: MnR v2 (second layer) */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <img
                  src="/images/MnR v2.png"
                  alt="MnR logo"
                  className="w-3/4 h-auto ml-auto mt-10 mb-auto object-contain opacity-100 transition-transform duration-300 ease-out"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)',
                    // transform: `translate(-15%, 15%)  translate(${mousePosition.x * 0.1 * 50 * 50}px, ${mousePosition.y * 0.1 * 50 * 50}px) scale(${0.8 + (Math.abs(mousePosition.x) + Math.abs(mousePosition.y)) * 0.1})`,
                    transformStyle: 'preserve-3d' as const
                  }}
                />
              </div>
              {/* Layer 3: Circle Background v2 (third layer) */}
              <div className="absolute inset-0 z-15 flex items-center justify-center">
                <img
                  src="/images/circle background v2.png"
                  alt="Circle background"
                  className="h-full object-fill ml-auto mt-10 mb-auto opacity-100 transition-transform duration-300 ease-out"
                  // style={getSpotlightTransform(15, 1.0)}
                />
              </div>
            </>
          ))}

          {/* Layer 4: Border (closest to front) */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <img
              src="/images/border.png"
              alt="Border decoration"
              className="w-full h-full pt-10 object-fill opacity-100 transition-transform duration-300 ease-out"
              // style={getSpotlightTransform(0, 1)}
            />
          </div>

          {/* Content - Positioned to the right with dramatic shadow */}
          <div className="relative z-30 text-center p-4  mr-auto mt-auto py-10 mb-8 ml-8 md:ml-16 lg:ml-24 rounded-xl bg-[#41251A]/70 opacity-100">
            <h1 
              className="font-soria text-xl md:text-2xl lg:text-5xl mb-6 text-sunset animate-fade-in-up drop-shadow-lg"
              style={{ fontFamily: 'Soria, serif' }}
            >
              Maung Htike & Rose Kilgore
            </h1>
            <p 
              className="text-xl md:text-2xl lg:text-3xl font-soria text-sunset animate-fade-in-up-delayed mb-8 drop-shadow-lg"
              style={{ fontFamily: 'Soria, serif' }}
            >
              Celebrating our love
            </p>
            <p 
              className="text-lg md:text-xl font-soria text-sunset mb-12 opacity-90 drop-shadow-lg"
              style={{ fontFamily: 'Soria, serif' }}
            >
              February 15, 2026
            </p>
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/details"
                className="group relative overflow-hidden bg-hunyadi-yellow/90 backdrop-blur-sm text-bistre px-8 py-4 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-soria text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                style={{ fontFamily: 'Soria, serif' }}
              >
                <span className="relative z-10">RSVP</span>
                <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              {/* <Link
                href="/couple"
                className="group relative overflow-hidden bg-hunyadi-yellow/90 backdrop-blur-sm text-bistre px-8 py-4 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-soria text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                style={{ fontFamily: 'Soria, serif' }}
              >
                <span className="relative z-10">Our Story</span>
              </Link>
              <Link
                href="/activities"
                className="group relative overflow-hidden bg-hunyadi-yellow/90 backdrop-blur-sm text-bistre px-8 py-4 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-soria text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                style={{ fontFamily: 'Soria, serif' }}
              >
                <span className="relative z-10">Activities</span>
              </Link>
              <Link
                href="/registry"
                className="group relative overflow-hidden bg-hunyadi-yellow/90 backdrop-blur-sm text-bistre px-8 py-4 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-soria text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                style={{ fontFamily: 'Soria, serif' }}
              >
                <span className="relative z-10">Wedding Registry</span>
              </Link> */}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
