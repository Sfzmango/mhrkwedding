"use client"

import Navigation from '@/components/Navigation'
import Link from 'next/link'
// import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getAssetPath } from '@/utils/assetPath'

function getRandomLeaf(index: number, width: number, height: number, isPortrait: boolean) {
  const img = Math.random() > 0.5 ? getAssetPath('/images/leaves 1.png') : getAssetPath('/images/leaves 2.png');
  
  if (isPortrait) {
    // Portrait mode: optimized CSS-based animation
    const size = 350 + Math.random() * 100;
    const x0 = Math.random() * width;
    const y0 = Math.random() * height;
    
    const centerX = width * 0.25;
    const centerY = height * 0.5;
    const dx = x0 - centerX;
    const dy = y0 - centerY;
    
    const distanceSquared = dx * dx + dy * dy;
    const maxDistance = Math.max(width, height) * 0.7;
    
    const distance = Math.sqrt(distanceSquared);
    const normalizedDx = dx / distance;
    const normalizedDy = dy / distance;
    const scale = (maxDistance + distance) / distance;
    
    // Enhanced random rotation for more natural look
    const baseAngle = Math.random() * 360;
    const rotationVariation = (Math.random() - 0.5) * 60; // ±22.5 degrees variation
    const angle = baseAngle + rotationVariation;
    
    return { 
      img, 
      angle,
      x0, 
      y0, 
      directionX: normalizedDx,
      directionY: normalizedDy,
      scale,
      size,
      isPortrait: true
    };
  } else {
    // Landscape mode: original JavaScript-based animation
    const size = 750 + Math.random() * 100;
    const x0 = Math.random() * width;
    const y0 = Math.random() * height;
    
    const centerX = width / 4;
    const centerY = height / 2;
    const dx = x0 - centerX;
    const dy = y0 - centerY;
    
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = Math.max(width, height) * 0.7;
    const scale = (maxDistance + distance) / distance;
    const x1 = centerX + dx * scale;
    const y1 = centerY + dy * scale;
    
    // Enhanced random rotation for more natural look
    const baseAngle = Math.random() * 360;
    const rotationVariation = (Math.random() - 0.5) * 60; // ±30 degrees variation for landscape
    const angle = baseAngle + rotationVariation;
    
    return { 
      img, 
      angle,
      x0, 
      y0, 
      x1, 
      y1, 
      size,
      isPortrait: false
    };
  }
}

export default function Home() {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hasMounted, setHasMounted] = useState(false)
  const [isPortrait, setIsPortrait] = useState(false)
  const [leaves, setLeaves] = useState<Array<{
    img: string;
    angle: number;
    x0: number;
    y0: number;
    size: number;
    isPortrait: boolean;
  } & (
    | {
        // Portrait mode: CSS-based animation
        directionX: number;
        directionY: number;
        scale: number;
      }
    | {
        // Landscape mode: JavaScript-based animation
        x1: number;
        y1: number;
      }
  )>>([]);
  const [animateLeaves, setAnimateLeaves] = useState(false);

  useEffect(() => {
    setHasMounted(true)
    // const handleMouseMove = (e: MouseEvent) => {
    //   const { clientX, clientY } = e
    //   const centerX = window.innerWidth / 2
    //   const centerY = window.innerHeight / 2
    //   const normalizedX = (clientX - centerX) / centerX
    //   const normalizedY = (clientY - centerY) / centerY
    //   setMousePosition({ x: normalizedX, y: normalizedY })
    // }
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight * 1.5 > window.innerWidth)
    }
    // window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', checkOrientation)
    checkOrientation()
    return () => {
      // window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkOrientation)
    }
  }, [])

  useEffect(() => {
    // Leaves curtain animation - optimized generation
    const width = window.innerWidth;
    const height = window.innerHeight;
    const leafCount = isPortrait ? 30 : 110;
    
    // Use Array.from for more efficient array creation
    const newLeaves = Array.from({ length: leafCount }, (_, i) => 
      getRandomLeaf(i, width, height, isPortrait)
    );
    
    setLeaves(newLeaves);
    
    // Use a single timeout for animation start
    const animationTimer = setTimeout(() => setAnimateLeaves(true), 1500);
    const cleanupTimer = setTimeout(() => setLeaves([]), 10000);
    
    return () => {
      clearTimeout(animationTimer);
      clearTimeout(cleanupTimer);
    };
  }, [isPortrait]);

  // Helper function to check if leaf is portrait type
  const isPortraitLeaf = (leaf: typeof leaves[0]): leaf is typeof leaves[0] & { directionX: number; directionY: number; scale: number } => {
    return leaf.isPortrait;
  };

  // Helper function to check if leaf is landscape type
  const isLandscapeLeaf = (leaf: typeof leaves[0]): leaf is typeof leaves[0] & { x1: number; y1: number } => {
    return !leaf.isPortrait;
  };

  // const getSpotlightTransform = (layerDepth: number, baseScale: number) => {
  //   const intensity = 0.3
  //   const translateX = mousePosition.x * intensity * layerDepth
  //   const translateY = mousePosition.y * intensity * layerDepth
  //   const scale = baseScale + (Math.abs(mousePosition.x) + Math.abs(mousePosition.y)) * 0.1
  //   return {
  //     transform: `translateZ(${-layerDepth}px) translate(${translateX * 50}px, ${translateY * 50}px) scale(${scale})`,
  //     transformStyle: 'preserve-3d' as const
  //   }
  // }

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
                left: leaf.x0 - leaf.size / 2,
                top: leaf.y0 - leaf.size / 2,
                width: leaf.size,
                height: leaf.size,
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))',
                // Conditional styling based on animation type
                ...(isPortraitLeaf(leaf) ? {
                  // Portrait mode: CSS-based animation properties
                  transform: `rotate(${leaf.angle}deg)`, // Apply initial rotation immediately
                  '--direction-x': leaf.directionX,
                  '--direction-y': leaf.directionY,
                  '--scale': leaf.scale,
                  '--angle': `${leaf.angle}deg`,
                  '--delay': `${Math.random() * 2}s`,
                  '--center-x': '25%',
                  '--center-y': '50%',
                } : {
                  // Landscape mode: JavaScript-based animation properties
                  transform: `rotate(${leaf.angle}deg)`,
                  opacity: animateLeaves ? 0 : 1,
                  transition: 'all 1.7s cubic-bezier(.77,0,.18,1)',
                  transitionDelay: `${Math.random() * 2}s`,
                  left: animateLeaves && isLandscapeLeaf(leaf) ? leaf.x1 - leaf.size / 2 : leaf.x0 - leaf.size / 2,
                  top: animateLeaves && isLandscapeLeaf(leaf) ? leaf.y1 - leaf.size / 2 : leaf.y0 - leaf.size / 2,
                }),
              } as React.CSSProperties & { [key: string]: string | number }}
              className={isPortraitLeaf(leaf) && animateLeaves ? 'leaf-animate' : ''}
            />
          ))}
        </div>
      )}
      <Navigation />
      <main
        className="min-h-screen relative text-[#F1AF47]"
        style={{
          backgroundImage: `url('${getAssetPath('/images/william-morris-honeysuckle-and-tulip-dark-blue-william-morris.jpg')}')`,
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
              src={getAssetPath('/images/leaves background.png')}
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
                src={getAssetPath('/images/circle background v3.png')}
                alt="Circle background v3"
                className="h-full w-auto object-contain opacity-100 animate-veil-flow"
                style={{ 
                  minWidth: '400px', 
                  maxWidth: 'none',
                  transformOrigin: 'top left'
                }}
                // style={getSpotlightTransform(15, 1.1)}
              />
            </div>
          ) : (
            // Landscape: show original layers 2 and 3
            <>
              {/* Layer 2: MnR v2 (second layer) */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <img
                  src={getAssetPath('/images/MnR v2.png')}
                  alt="MnR logo"
                  className="w-3/4 h-auto ml-auto mt-10 mb-auto object-contain opacity-100 transition-transform duration-300 animate-veil-flow ease-out"
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
                  src={getAssetPath('/images/circle background v2.png')}
                  alt="Circle background"
                  className="h-full min-h-[1000px] object-fill ml-auto mt-10 mb-auto opacity-100 transition-transform duration-300 ease-out"
                  // style={getSpotlightTransform(15, 1.0)}
                />
              </div>
            </>
          ))}

          {/* Layer 4: Border (closest to front) */}
          {hasMounted && (isPortrait ? (
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <img
                  src={getAssetPath('/images/border-v.png')}
                  alt="Border decoration"
                  className="w-full h-full pt-10 object-fill opacity-100 transition-transform duration-300 ease-out"
                  // style={getSpotlightTransform(0, 1)}
                />
              </div>
            ) : (
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <img
                  src={getAssetPath('/images/border-h.png')}
                  alt="Border decoration"
                  className="w-full h-full pt-10 object-fill opacity-100 transition-transform duration-300 ease-out"
                  // style={getSpotlightTransform(0, 1)}
                />
              </div>
            ) )}

          {/* Content - Positioned to the right with dramatic shadow */}
          {hasMounted && (isPortrait ? (
            <div 
              className="max-w-[75%] relative z-30 text-center p-2 mt-auto mb-30 opacity-100 w-screen rounded-xl"
              style={{
                backgroundImage: `url('${getAssetPath('/images/textbox_border.webp')}')`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                padding: '2rem',
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <div>
                <h1 className="font-art-nouveau-regular text-3xl md:text-2xl lg:text-5xl mb-4 animate-fade-in-up drop-shadow-lg" style={{ fontFamily: 'P22ArtNouveau, serif' }}>
                  Maung Htike & Rose Kilgore
                </h1>
                <p className="text-xl font-art-nouveau-caps mb-4 opacity-90 drop-shadow-lg" style={{ fontFamily: 'ArtNouveauCaps, serif' }}>
                  February 15, 2026
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/details"
                  className="group relative overflow-hidden bg-hunyadi-yellow/90 backdrop-blur-sm px-8 py-4 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                  style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                >
                  <span className="relative z-10">RSVP</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          ) : (
            <div 
              className="relative z-30 text-center mr-auto mt-auto ml-[15%] mb-auto opacity-100 rounded-xl"
              style={{
                backgroundImage: `url('${getAssetPath('/images/textbox_border.webp')}')`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                padding: '2rem',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <div className='p-15'>
                <h1 
                  className="font-art-nouveau-regular text-xl md:text-2xl lg:text-5xl mb-6 animate-fade-in-up drop-shadow-lg"
                  style={{ fontFamily: 'PCArtNouveauRegular, serif' }}
                >
                  Maung Htike & Rose Kilgore
                </h1>
                <p 
                  className="text-5xl font-art-nouveau animate-fade-in-up-delayed mb-4 drop-shadow-lg"
                  style={{ fontFamily: ' P22ArtNouveau, serif' }}
                >
                  Celebrating our love
                </p>
                <p 
                  className="text-xl font-art-nouveau-caps mb-4 opacity-90 drop-shadow-lg"
                  style={{ fontFamily: 'ArtNouveauCaps, serif' }}
                >
                  February 15, 2026
                </p>
                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/details"
                    className="group relative overflow-hidden bg-hunyadi-yellow/90 backdrop-blur-sm px-8 py-4 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                    style={{ fontFamily: 'P22ArtNouveau, serif' }}
                  >
                    <span className="relative font-art-nouveau-caps z-10">RSVP</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  {/* <Link
                    href="/couple"
                    className="group relative overflow-hidden bg-hunyadi-yellow/90 backdrop-blur-sm text-bistre px-8 py-4 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                    style={{ fontFamily: 'P22ArtNouveau, serif' }}
                  >
                    <span className="relative z-10">Our Story</span>
                  </Link>
                  <Link
                    href="/activities"
                    className="group relative overflow-hidden bg-hunyadi-yellow/90 backdrop-blur-sm text-bistre px-8 py-4 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                    style={{ fontFamily: 'P22ArtNouveau, serif' }}
                  >
                    <span className="relative z-10">Activities</span>
                  </Link>
                  <Link
                    href="/registry"
                    className="group relative overflow-hidden bg-hunyadi-yellow/90 backdrop-blur-sm text-bistre px-8 py-4 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                    style={{ fontFamily: 'P22ArtNouveau, serif' }}
                  >
                    <span className="relative z-10">Wedding Registry</span>
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  )
}
