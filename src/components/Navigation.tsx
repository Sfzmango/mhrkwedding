'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Navigation = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Navigation color schemes for different routes
  const getNavigationColors = (path: string) => {
    // Normalize the path to handle trailing slashes
    const normalizedPath = path.replace(/\/$/, '')
    
    switch (normalizedPath) {
      case '':
      case '/':
      case '/dress-code':
        return {
          text: '#F1AF47',
          background: '#41251A'
        }
      case '/details':
      case '/roadmap':
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


  // Close menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Debug logging
  useEffect(() => {
    console.log('Current pathname:', pathname)
    console.log('Normalized path:', pathname.replace(/\/$/, ''))
    console.log('Applied colors:', colors)
  }, [pathname, colors])

  return (
    <>
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
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-sunset">|</span>
              <Link
                href="/details"
                className="text-sunset hover:text-hunyadi-yellow transition-colors"
              >
                RSVP
              </Link>
              <span className="text-sunset">|</span>
              <Link
                href="/dress-code"
                className="text-sunset hover:text-hunyadi-yellow transition-colors"
              >
                Dress Code
              </Link>
              <span className="text-sunset">|</span>
              <Link
                href="/roadmap"
                className="text-sunset hover:text-hunyadi-yellow transition-colors"
              >
                Upcoming Updates
              </Link>
              <span className="text-sunset">|</span>
              <Link
                href="https://www.myregistry.com/wedding-registry/rose-kilgore-and-maung-htike-san-bruno-ca/5001425"
                target="_blank"
                className="text-sunset hover:text-hunyadi-yellow transition-colors"
              >
                Registry
              </Link>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Frosted Glass Backdrop */}
          <div 
            className="absolute inset-0 backdrop-blur-md bg-white/10"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Compact Dropdown Menu */}
          <div 
            className="absolute top-16 right-4 w-56 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg shadow-2xl"
            style={{
              backgroundColor: `${colors.background}CC` // Add transparency
            }}
          >
            <div className="flex flex-col p-4 space-y-3 text-xl">
              <Link
                href="/details"
                className="transition-colors py-3 px-4 rounded-md hover:bg-white/10"
                style={{ color: colors.text }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F1AF47'}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.text}
                onClick={() => setIsMenuOpen(false)}
              >
                RSVP
              </Link>
              <div className="w-full h-px" style={{ backgroundColor: `${colors.text}30` }} />
              <Link
                href="/roadmap"
                className="transition-colors py-3 px-4 rounded-md hover:bg-white/10"
                style={{ color: colors.text }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F1AF47'}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.text}
                onClick={() => setIsMenuOpen(false)}
              >
                Upcoming Updates
              </Link>
              <div className="w-full h-px" style={{ backgroundColor: `${colors.text}30` }} />
              <Link
                href="/dress-code"
                className="transition-colors py-3 px-4 rounded-md hover:bg-[#41251A]"
                style={{ color: colors.text }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F1AF47'}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.text}
                onClick={() => setIsMenuOpen(false)}
              >
                Dress Code
              </Link>
              <div className="w-full h-px" style={{ backgroundColor: `${colors.text}30` }} />
              <Link
                href="https://www.myregistry.com/wedding-registry/rose-kilgore-and-maung-htike-san-bruno-ca/5001425"
                target="_blank"
                className="transition-colors py-3 px-4 rounded-md hover:bg-white/10"
                style={{ color: colors.text }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F1AF47'}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.text}
                onClick={() => setIsMenuOpen(false)}
              >
                Registry
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Navigation 