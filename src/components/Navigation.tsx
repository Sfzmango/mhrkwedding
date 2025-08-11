'use client'

import Link from 'next/link'

const Navigation = () => {

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 transform bg-[#41251A]/100 border-b border-black font-art-nouveau text-[#F1AF47]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 text-3xl">
          <Link
            href="/"
            className="font-art-nouveau text-sunset hover:text-hunyadi-yellow transition-colors"
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