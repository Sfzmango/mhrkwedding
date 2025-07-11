import Navigation from '@/components/Navigation'
import { getAssetPath } from '@/utils/assetPath'

export default function DetailsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen relative"
        style={{
          backgroundImage: `url('${getAssetPath('/images/william-morris-honeysuckle-and-tulip-dark-blue-william-morris.jpg')}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          
        }}>
        {/* Hero Section */}
        {/* <section className="relative h-64 flex items-center justify-center bg-gradient-to-br from-bistre via-chestnut to-murrey">
          <div className="absolute inset-0 z-10" />
          <div className="relative z-20 text-center">
            <h1 className="font-playfair text-4xl md:text-6xl mb-auto text-[#41251A] bg-white rounded-lg shadow-lg p-2">
              Wedding Details
            </h1>
          </div>
        </section> */}

        {/* Wedding Details Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Ceremony */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="font-playfair text-3xl text-black mb-6">Ceremony</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-playfair text-xl text-gray-600 font-bold mb-2">Venue</h3>
                      <p className="font-montserrat text-gray-700">Old Mill Park Amphitheater <br /> 315 Throckmorton Ave, Mill Valley, CA 94941</p>
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl text-gray-600 font-boldmb-2">Time</h3>
                      <p className="font-montserrat text-gray-700">2:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Reception */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="font-playfair text-3xl text-black mb-6">Reception</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-playfair text-xl text-gray-600 font-bold mb-2">Venue</h3>
                      <p className="font-montserrat text-gray-700">Falkirk Cultural Center <br /> 1408 Mission Ave, San Rafael, CA 94901</p>
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl text-gray-600 font-bold mb-2">Time</h3>
                      <p className="font-montserrat text-gray-700">4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RSVP Section */}
              <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="font-playfair text-3xl text-black mb-6 text-center">RSVP</h2>
                <form className="max-w-2xl mx-auto space-y-6" action="https://formsubmit.co/d3f63caa2715a89816af0e1ce74867d0" method="POST">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block font-montserrat text-gray-600 mb-2">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        className="w-full p-3 border border-hunyadi-yellow rounded focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow text-black"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block font-montserrat text-gray-600 mb-2">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        className="w-full p-3 border border-hunyadi-yellow rounded focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow text-black"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-montserrat text-gray-600 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="w-full p-3 border border-hunyadi-yellow rounded focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow text-black"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="attendance" className="block font-montserrat text-gray-600 mb-2">
                      Will you attend?
                    </label>
                    <select 
                      id="attendance"
                      name="attendance"
                      className="w-full p-3 border border-hunyadi-yellow rounded focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow text-black"
                      required
                    >
                      <option value="">Please select...</option>
                      <option value="yes">Yes, I&apos;ll be there</option>
                      <option value="no">Sorry, I can&apos;t make it</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block font-montserrat text-gray-600 mb-2">
                      Number of Guests (including yourself)
                    </label>
                    <input
                      id="guests"
                      type="number"
                      name="guests"
                      min="1"
                      max="5"
                      className="w-full p-3 border border-hunyadi-yellow rounded focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow text-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-montserrat text-gray-600 mb-2">
                      Message (optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      name="message"
                      className="w-full p-3 border border-hunyadi-yellow rounded focus:outline-none focus:ring-2 focus:ring-hunyadi-yellow text-black"
                      placeholder="Any special requests or messages..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-hunyadi-yellow text-gray-600 py-3 rounded hover:bg-opacity-90 transition font-montserrat text-lg"
                  >
                    Submit RSVP
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 