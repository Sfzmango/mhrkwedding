'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const Navigation = () => {
  const pathname = usePathname()

  // Navigation color schemes for different routes
  const getNavigationColors = (path: string) => {
    // Normalize the path to handle trailing slashes
    const normalizedPath = path.replace(/\/$/, '')
    
    switch (normalizedPath) {
      case '':
      case '/':
        return {
          text: '#F1AF47',
          background: '#41251A'
        }
      case '/details':
        return {
          text: '#f5e4f3',
          background: '#5e1623'
        }
      // Add more routes here as you create them
      // case '/couple':
      //   return {
      //     text: '#your-text-color',
      //     background: '#your-bg-color'
      //   }
      // case '/activities':
      //   return {
      //     text: '#your-text-color',
      //     background: '#your-bg-color'
      //   }
      default:
        // Fallback to landing page colors
        return {
          text: '#F1AF47',
          background: '#41251A'
        }
    }
  }

  const colors = getNavigationColors(pathname)

  // Debug logging
  useEffect(() => {
    console.log('Current pathname:', pathname)
    console.log('Normalized path:', pathname.replace(/\/$/, ''))
    console.log('Applied colors:', colors)
  }, [pathname, colors])

  return (
    <nav 
      key={pathname} // Force re-render when pathname changes
      className="fixed w-full z-50 transition-all duration-300 transform border-b border-black font-art-nouveau-caps backdrop-blur-sm"
      style={{
        color: colors.text,
        backgroundColor: colors.background
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 text-3xl">
          <Link
            href="/"
            className="text-sunset hover:text-hunyadi-yellow transition-colors"
          >
            HOME
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/details"
              className="text-sunset hover:text-hunyadi-yellow transition-colors"
            >
              RSVP
            </Link>
            {/* <Link
              href="/couple"
              className="text-sunset hover:text-hunyadi-yellow transition-colors"
            >
              Our Story
            </Link>
            <Link
              href="/activities"
              className="text-sunset hover:text-hunyadi-yellow transition-colors"
            >
              Activities
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navigation 