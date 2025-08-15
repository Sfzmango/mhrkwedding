"use client"

import Navigation from '@/components/Navigation'
import PhotoCarousel from '@/components/PhotoCarousel'
import { getAssetPath } from '@/utils/assetPath'

const backgroundImage = getAssetPath('/images/background3.webp')

export default function DetailsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen relative"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          
        }}>
        {/* Hero Section */}
        {/* <section className="relative h-64 flex items-center justify-center bg-gradient-to-br from-bistre via-chestnut to-murrey">
          <div className="absolute inset-0 z-10" />
          <div className="relative z-20 text-center">
            <h1 className="font-art-nouveau text-4xl md:text-6xl mb-auto text-[#41251A] bg-white rounded-lg shadow-lg p-2">
              Wedding Details
            </h1>
          </div>
        </section> */}

        {/* Wedding Details Section */}
        <section className="py-20 text-[#41251A]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Ceremony */}
                <div className="bg-[#F1AF47]/100 p-8 rounded-lg shadow-lg flex flex-col h-full">
                  <h2 className="font-art-nouveau-caps text-3xl mb-6">Ceremony</h2>
                  
                  {/* Ceremony Photo Carousel */}
                  <PhotoCarousel
                    images={[
                      '/images/amphitheater1.jpg',
                      '/images/amphitheater2.jpg',
                      '/images/amphitheater3.jpg',
                      '/images/amphitheater4.jpg',
                    ]}
                    title="Old Mill Park Amphitheater"
                    altText="Ceremony venue"
                  />
                  
                  <div className="space-y-4 flex-grow">
                    <div>
                      <h3 className="font-art-nouveau text-3xl font-bold mb-2">Venue</h3>
                      <p className="font-art-nouveau-regular text-2xl ">Old Mill Park Amphitheater <br /> 315 Throckmorton Ave, Mill Valley, CA 94941</p>
                    </div>
                    <div>
                      <h3 className="font-art-nouveau text-3xl font-bold mb-2">Time</h3>
                      <p className="font-art-nouveau-regular text-2xl ">2:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 flex justify-center">
                    <button
                        onClick={() => window.open('https://maps.app.goo.gl/uFidpVzFS97sAm6PA', '_blank')}
                        className="group relative overflow-hidden bg-hunyadi-yellow/90 backdrop-blur-sm px-8 py-4 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black "
                        style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                    >
                      <span className="relative z-10">Directions</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>

                {/* Reception */}
                <div className="bg-[#41251A]/100 p-8 rounded-lg shadow-lg flex flex-col h-full">
                  <h2 className="font-art-nouveau-caps text-3xl mb-6">Reception</h2>

                  {/* Reception Photo Carousel */}
                  <PhotoCarousel
                    images={[
                      '/images/falkirk1.jpg',
                      '/images/falkirk2.jpg',
                      '/images/falkirk3.jpg',
                      '/images/falkirk4.jpg',
                      '/images/falkirk5.jpg',
                    ]}
                    title="Falkirk Cultural Center"
                    altText="Reception venue"
                  />
                  
                  <div className="space-y-4 flex-grow">
                    <div>
                      <h3 className="font-art-nouveau text-3xl font-bold mb-2">Venue</h3>
                      <p className="font-art-nouveau-regular text-2xl ">Falkirk Cultural Center <br /> 1408 Mission Ave, San Rafael, CA 94901</p>
                    </div>
                    <div>
                      <h3 className="font-art-nouveau text-3xl font-bold mb-2">Time</h3>
                      <p className="font-art-nouveau-regular text-2xl ">4:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 flex justify-center">
                    <button
                        onClick={() => window.open('https://maps.app.goo.gl/856x41Hd25uCSiMj7', '_blank')}
                        className="group relative overflow-hidden bg-hunyadi-yellow/90 backdrop-blur-sm px-8 py-4 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                        style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                    >
                      <span className="relative z-10">Directions</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* RSVP Section */}
              <div className="mt-12 bg-[#41251A]/100 p-8 rounded-lg shadow-lg">
                <h2 className="font-art-nouveau-caps text-3xl text-[#F1AF47] mb-6 text-center">RSVP</h2>
                <form className="max-w-2xl mx-auto space-y-6 text-2xl font-art-nouveau-regular" action="https://formsubmit.co/d3f63caa2715a89816af0e1ce74867d0" method="POST">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block mb-2">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        className="w-full p-3 border border-hunyadi-yellow rounded focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow font-art-nouveau"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        className="w-full p-3 border border-hunyadi-yellow rounded focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow font-art-nouveau"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="w-full p-3 border border-hunyadi-yellow rounded focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow font-art-nouveau"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="attendance" className="block mb-2">
                      Will you attend?
                    </label>
                    <select 
                      id="attendance"
                      name="attendance"
                      className="w-full p-3 border border-hunyadi-yellow rounded focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow font-art-nouveau"
                      required
                    >
                      <option value="">Please select...</option>
                      <option value="yes">Yes, I will be there</option>
                      <option value="no">Sorry, I can not make it</option>
                      <option value="tentative">I will let you know before RSVP deadline</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block mb-2">
                      Would you like to bring a guest?
                    </label>
                    <input
                      id="guests"
                      type="text"
                      name="guests"
                      className="w-full p-3 border border-hunyadi-yellow rounded focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow font-art-nouveau"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">
                      Any special requests or messages?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      name="message"
                      className="w-full p-3 border border-hunyadi-yellow rounded focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow font-art-nouveau"
                      placeholder="Any special requests or messages?"
                    />
                  </div>

                  <div className="mt-auto pt-6 flex justify-center">
                    <button
                      type="submit"
                      className="group relative overflow-hidden bg-hunyadi-yellow/90 backdrop-blur-sm px-8 py-4 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                      style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                    >
                        <span className="relative z-10">Submit RSVP</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 