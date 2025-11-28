"use client"

import Navigation from '@/components/Navigation'
import { getAssetPath } from '@/utils/assetPath'

const backgroundImage = getAssetPath('/images/background2.webp')

export default function DressCodePage() {
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
        
        {/* Dress Code Section */}
        <section className="py-20 text-[#F1AF47]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#41251A]/100 p-12 rounded-lg shadow-lg">
                <h1 className="font-art-nouveau-caps text-5xl mb-8 text-center text-hunyadi-yellow">
                  Dress Code
                </h1>
                
                {/* Main Theme Section */}
                <div className="mb-8">
                  <h2 className="font-art-nouveau-caps text-3xl mb-4 text-hunyadi-yellow">
                    Attire Theme
                  </h2>
                  <p className="font-art-nouveau-regular text-2xl leading-relaxed mb-4">
                    The attire theme is <span className="font-bold">&ldquo;Dress from the past&rdquo;</span> — wear your favorite era of clothing from the 20th century. From the 1900s to the 1990s, any period of garment from the century is welcomed.
                  </p>
                  <p className="font-art-nouveau-regular text-2xl leading-relaxed mb-4">
                    Rose and Maung will be wearing clothing inspired by the earlier half of the century! If you wear a modern dress, try to accessorize to make it appear more vintage!
                  </p>
                  <p className="font-art-nouveau-regular text-2xl leading-relaxed mb-4">
                    Think of something like the <span className="font-bold">Great Gatsby</span> or <span className="font-bold">Peaky Blinders</span> — dark colored formal vintage clothing. Please wear <span className="font-bold">dark tones and winter appropriate clothing</span>. Please wear something <span className="font-bold">warm and comfortable</span>.
                  </p>
                </div>

                {/* Color Palette Section */}
                <div className="mb-8 bg-[#41251A]/10 p-8 rounded-xl shadow-xl shadow-black/100">
                  <h2 className="font-art-nouveau-caps text-3xl mb-4 text-hunyadi-yellow">
                    Color Palette
                  </h2>
                  <p className="font-art-nouveau-regular text-xl mb-6 leading-relaxed">
                    The wedding&apos;s color palette goes towards a dark green, maroon, plum, black, brown, and red. Please avoid white and light colors such as yellow, white, pink, and spring tones for <span className="font-bold">ALL guests</span>.
                  </p>
                  <h3 className="font-art-nouveau text-3xl font-bold mb-3 text-hunyadi-yellow">
                      ✅ Examples of Colors to Wear ✅
                  </h3>
                  
                  {/* Color Palette Table */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-full h-24 rounded-lg border-2 border-hunyadi-yellow/30 shadow-lg mb-2"
                        style={{ backgroundColor: '#1B4332' }}
                        title="Dark Green"
                      />
                      <span className="font-art-nouveau-regular text-lg text-hunyadi-yellow">Dark Green</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-full h-24 rounded-lg border-2 border-hunyadi-yellow/30 shadow-lg mb-2"
                        style={{ backgroundColor: '#6B2C3E' }}
                        title="Maroon"
                      />
                      <span className="font-art-nouveau-regular text-lg text-hunyadi-yellow">Maroon</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-full h-24 rounded-lg border-2 border-hunyadi-yellow/30 shadow-lg mb-2"
                        style={{ backgroundColor: '#5D2E46' }}
                        title="Plum"
                      />
                      <span className="font-art-nouveau-regular text-lg text-hunyadi-yellow">Plum</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-full h-24 rounded-lg border-2 border-hunyadi-yellow/30 shadow-lg mb-2"
                        style={{ backgroundColor: '#000000' }}
                        title="Black"
                      />
                      <span className="font-art-nouveau-regular text-lg text-hunyadi-yellow">Black</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-full h-24 rounded-lg border-2 border-hunyadi-yellow/30 shadow-lg mb-2"
                        style={{ backgroundColor: '#41251A' }}
                        title="Brown"
                      />
                      <span className="font-art-nouveau-regular text-lg text-hunyadi-yellow">Brown</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-full h-24 rounded-lg border-2 border-hunyadi-yellow/30 shadow-lg mb-2"
                        style={{ backgroundColor: '#681010' }}
                        title="Red"
                      />
                      <span className="font-art-nouveau-regular text-lg text-hunyadi-yellow">Red</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div 
                          className="w-full h-24 rounded-lg border-2 border-hunyadi-yellow/30 shadow-lg mb-2"
                          style={{ backgroundColor: '#FFB6C1' }}
                          title="Pink"
                        />
                        <span className="font-art-nouveau-regular text-lg text-hunyadi-yellow">Pink</span>
                      </div>
                  </div>

                  {/* Colors to Avoid */}
                  <div className="mt-6 pt-6 border-t border-hunyadi-yellow/20">
                    <h3 className="font-art-nouveau text-3xl font-bold mb-3 text-hunyadi-yellow">
                      🚫 Examples of Colors to Avoid 🚫
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="flex flex-col items-center">
                        <div 
                          className="w-full h-16 rounded-lg border-2 border-red-500/50 shadow-lg mb-1"
                          style={{ backgroundColor: '#FFFFFF' }}
                          title="White"
                        />
                        <span className="font-art-nouveau-regular text-md text-red-300">White</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div 
                          className="w-full h-16 rounded-lg border-2 border-red-500/50 shadow-lg mb-1"
                          style={{ backgroundColor: '#FFD700' }}
                          title="Yellow"
                        />
                        <span className="font-art-nouveau-regular text-md text-red-300">Yellow</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div 
                          className="w-full h-16 rounded-lg border-2 border-red-500/50 shadow-lg mb-1"
                          style={{ backgroundColor: '#90EE90' }}
                          title="Spring Tones"
                        />
                        <span className="font-art-nouveau-regular text-md text-red-300">Spring Tones</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div 
                          className="w-full h-16 rounded-lg border-2 border-red-500/50 shadow-lg mb-1"
                          style={{ backgroundColor:'#bbbbff' }}
                          title="Baby Blue"
                        />
                        <span className="font-art-nouveau-regular text-md text-red-300">Baby Blue</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Weather Considerations Section */}
                <div className="bg-[#41251A]/10 p-8 rounded-xl shadow-xl shadow-black/100">
                  <h2 className="font-art-nouveau-caps text-2xl text-bold mb-4 text-hunyadi-yellow " >
                    Weather Notice
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-art-nouveau text-xl font-bold mb-2 text-hunyadi-yellow">
                        Winter Coat
                      </h3>
                      <p className="font-art-nouveau-regular text-xl leading-relaxed">
                        With the wedding date being in February, it is encouraged to bring a good winter coat. One to keep you warm but not big enough for below freezing temperatures.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-art-nouveau text-xl font-bold mb-2 text-hunyadi-yellow">
                        Footwear
                      </h3>
                      <p className="font-art-nouveau-regular text-xl leading-relaxed">
                        The ceremony will be in a wooded area. Women should wear heels no smaller than 1 inch thick in case of soft soil.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-art-nouveau text-xl font-bold mb-2 text-hunyadi-yellow">
                        Rain Preparation
                      </h3>
                      <p className="font-art-nouveau-regular text-xl leading-relaxed">
                        Umbrellas will be provided in case of rain.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

