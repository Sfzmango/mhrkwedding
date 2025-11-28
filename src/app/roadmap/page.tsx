"use client"

import Navigation from '@/components/Navigation'
import { getAssetPath } from '@/utils/assetPath'

const backgroundImage = getAssetPath('/images/background3.webp')

export default function RoadmapPage() {
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
        
        {/* Thank You Section */}
        <section className="py-20 text-[#f5e4f3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#5e1623]/100 p-12 rounded-lg shadow-lg text-center">
                <h1 className="font-art-nouveau-caps text-5xl mb-8 text-hunyadi-yellow">
                  Thank You
                </h1>
                  <p className="font-art-nouveau-regular text-2xl mb-12 leading-relaxed">
                    We are so excited to celebrate with you!
                  </p>
                
                {/* Upcoming Updates Section */}
                <div className="bg-[#41251A]/80 p-8 rounded-lg shadow-lg">
                  <h2 className="font-art-nouveau-caps text-3xl mb-6 text-hunyadi-yellow">
                    Upcoming Updates
                  </h2>
                  <p className="font-art-nouveau-regular text-xl mb-8">
                    We are continuously updating our wedding website with new features and information. Here is what you can expect:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-hunyadi-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-[#41251A] font-bold text-sm">✅</span>
                        </div>
                        <div>
                          <h3 className="font-art-nouveau text-xl font-bold text-hunyadi-yellow">Wedding Details</h3>
                          <p className="font-art-nouveau-regular text-lg">Ceremony and reception information with venue details</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-hunyadi-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-[#41251A] font-bold text-sm">✅</span>
                        </div>
                        <div>
                          <h3 className="font-art-nouveau text-xl font-bold text-hunyadi-yellow">RSVP System</h3>
                          <p className="font-art-nouveau-regular text-lg">Online RSVP form</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-sunset rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-sm">✅</span>
                        </div>
                        <div>
                          <h3 className="font-art-nouveau text-xl font-bold text-sunset">Registry</h3>
                          <p className="font-art-nouveau-regular text-lg">Gift registry and wedding gift information</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-sunset rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-sm">✅</span>
                        </div>
                        <div>
                          <h3 className="font-art-nouveau text-xl font-bold text-sunset">Dress Code</h3>
                          <p className="font-art-nouveau-regular text-lg">information about the dress code</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-sunset rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-sm">⏳</span>
                        </div>
                        <div>
                          <h3 className="font-art-nouveau text-xl font-bold text-sunset">Activities & Timeline</h3>
                          <p className="font-art-nouveau-regular text-lg">Detailed schedule of wedding day activities</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-sunset rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-sm">⏳</span>
                        </div>
                        <div>
                          <h3 className="font-art-nouveau text-xl font-bold text-sunset">Meet the lovebirds</h3>
                          <p className="font-art-nouveau-regular text-lg">Our love story and wedding party introductions</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-sunset rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-sm">⏳</span>
                        </div>
                        <div>
                          <h3 className="font-art-nouveau text-xl font-bold text-sunset">Accommodations</h3>
                          <p className="font-art-nouveau-regular text-lg">Hotel recommendations and travel information</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-hunyadi-yellow/20 rounded-lg border border-hunyadi-yellow/30">
                    <p className="font-art-nouveau-regular text-lg text-hunyadi-yellow">
                      <strong>Stay tuned!</strong> We&apos;ll be adding these features in the coming weeks. 
                      Check back regularly or we&apos;ll send updates to your email.
                    </p>
                  </div>
                </div>
                
                {/* Navigation back to main page */}
                <div className="mt-12">
                  <button
                    onClick={() => window.location.href = '/'}
                    className="group relative overflow-hidden bg-[#f5e4f3] text-[#5e1623] backdrop-blur-sm px-8 py-4 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                    style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                  >
                    <span className="relative z-10">Back to Home</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
