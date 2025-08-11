import Navigation from '@/components/Navigation'
// import Image from 'next/image'

export default function CouplePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-64 flex items-center justify-center bg-gradient-to-br from-bistre via-chestnut to-murrey">
          <div className="absolute inset-0 bg-bistre/40 z-10" />
          <div className="relative z-20 text-center">
            <h1 className="font-art-nouveau text-4xl md:text-6xl mb-4 text-sunset">
              Our Story
            </h1>
          </div>
        </section>

        {/* How We Met Section */}
        <section className="py-20 bg-sunset">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-art-nouveau text-4xl text-bistre text-center mb-12">How We Met</h2>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="font-art-nouveau text-lg text-gray-700 leading-relaxed">
                  [Your beautiful love story here - how you first met, what drew you to each other, 
                  and the journey that led to this special day. This is where you can share the 
                  magical moments that brought you together.]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Stories Section */}
        <section className="py-20 bg-olive text-sunset">
          <div className="container mx-auto px-4">
            <h2 className="font-art-nouveau text-4xl text-center mb-12">About Us</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* MH's Story */}
              <div className="bg-bistre/20 backdrop-blur-sm p-8 rounded-lg">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 bg-hunyadi-yellow rounded-full flex items-center justify-center">
                    <span className="font-art-nouveau text-3xl text-bistre">MH</span>
                  </div>
                  <h3 className="font-art-nouveau text-3xl mb-4">MH</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-art-nouveau text-xl text-hunyadi-yellow mb-2">Background</h4>
                    <p className="font-art-nouveau">[MH&apos;s background, interests, and what makes them special]</p>
                  </div>
                  <div>
                    <h4 className="font-art-nouveau text-xl text-hunyadi-yellow mb-2">Hobbies & Interests</h4>
                    <p className="font-art-nouveau">[MH&apos;s hobbies, passions, and what they love to do]</p>
                  </div>
                  <div>
                    <h4 className="font-art-nouveau text-xl text-hunyadi-yellow mb-2">What I Love About RK</h4>
                    <p className="font-art-nouveau">[What MH loves most about their partner]</p>
                  </div>
                </div>
              </div>

              {/* RK's Story */}
              <div className="bg-bistre/20 backdrop-blur-sm p-8 rounded-lg">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 bg-hunyadi-yellow rounded-full flex items-center justify-center">
                    <span className="font-art-nouveau text-3xl text-bistre">RK</span>
                  </div>
                  <h3 className="font-art-nouveau text-3xl mb-4">RK</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-art-nouveau text-xl text-hunyadi-yellow mb-2">Background</h4>
                    <p className="font-art-nouveau">[RK&apos;s background, interests, and what makes them special]</p>
                  </div>
                  <div>
                    <h4 className="font-art-nouveau text-xl text-hunyadi-yellow mb-2">Hobbies & Interests</h4>
                    <p className="font-art-nouveau">[RK&apos;s hobbies, passions, and what they love to do]</p>
                  </div>
                  <div>
                    <h4 className="font-art-nouveau text-xl text-hunyadi-yellow mb-2">What I Love About MH</h4>
                    <p className="font-art-nouveau">[What RK loves most about their partner]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proposal Story Section */}
        <section className="py-20 bg-sunset">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-art-nouveau text-4xl text-bistre text-center mb-12">The Proposal</h2>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="font-art-nouveau text-lg text-gray-700 leading-relaxed">
                  [Share the magical story of your proposal - where it happened, how it happened, 
                  and all the special details that made it perfect. This is a moment your guests 
                  will love to read about.]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-olive text-sunset">
          <div className="container mx-auto px-4">
            <h2 className="font-art-nouveau text-4xl text-center mb-12">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-hunyadi-yellow rounded-full mr-4"></div>
                  <div className="bg-bistre/20 backdrop-blur-sm p-6 rounded-lg flex-1">
                    <h3 className="font-art-nouveau text-xl text-hunyadi-yellow mb-2">First Meeting</h3>
                    <p className="font-art-nouveau">[Date and details of your first meeting]</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-hunyadi-yellow rounded-full mr-4"></div>
                  <div className="bg-bistre/20 backdrop-blur-sm p-6 rounded-lg flex-1">
                    <h3 className="font-art-nouveau text-xl text-hunyadi-yellow mb-2">First Date</h3>
                    <p className="font-art-nouveau">[Date and details of your first date]</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-hunyadi-yellow rounded-full mr-4"></div>
                  <div className="bg-bistre/20 backdrop-blur-sm p-6 rounded-lg flex-1">
                    <h3 className="font-art-nouveau text-xl text-hunyadi-yellow mb-2">Moving In Together</h3>
                    <p className="font-art-nouveau">[When you decided to move in together]</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-hunyadi-yellow rounded-full mr-4"></div>
                  <div className="bg-bistre/20 backdrop-blur-sm p-6 rounded-lg flex-1">
                    <h3 className="font-art-nouveau text-xl text-hunyadi-yellow mb-2">The Proposal</h3>
                    <p className="font-art-nouveau">[Date and details of the proposal]</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-hunyadi-yellow rounded-full mr-4"></div>
                  <div className="bg-bistre/20 backdrop-blur-sm p-6 rounded-lg flex-1">
                    <h3 className="font-art-nouveau text-xl text-hunyadi-yellow mb-2">The Wedding</h3>
                    <p className="font-art-nouveau">[Your upcoming wedding date]</p>
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