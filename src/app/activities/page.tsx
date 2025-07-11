import Navigation from '@/components/Navigation'
// import Image from 'next/image'

export default function ActivitiesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-64 flex items-center justify-center bg-gradient-to-br from-bistre via-chestnut to-murrey">
          <div className="absolute inset-0 bg-bistre/40 z-10" />
          <div className="relative z-20 text-center">
            <h1 className="font-playfair text-4xl md:text-6xl mb-4 text-sunset">
              Local Activities
            </h1>
          </div>
        </section>

        {/* Redwood Forests Section */}
        <section className="py-20 bg-sunset">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-4xl text-bistre text-center mb-12">Redwood Forests</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="font-playfair text-2xl text-hunyadi-yellow mb-4">Hiking Trails</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-playfair text-lg text-bistre mb-2">Easy Trails</h4>
                    <p className="font-montserrat text-gray-700">[Information about easy hiking trails suitable for all ages]</p>
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg text-bistre mb-2">Moderate Trails</h4>
                    <p className="font-montserrat text-gray-700">[Information about moderate difficulty trails]</p>
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg text-bistre mb-2">Guided Tours</h4>
                    <p className="font-montserrat text-gray-700">[Information about guided forest tours]</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="font-playfair text-2xl text-hunyadi-yellow mb-4">Photography</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-playfair text-lg text-bistre mb-2">Best Photo Spots</h4>
                    <p className="font-montserrat text-gray-700">[Recommended locations for stunning photos]</p>
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg text-bistre mb-2">Golden Hour</h4>
                    <p className="font-montserrat text-gray-700">[Best times for photography in the forest]</p>
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg text-bistre mb-2">Wildlife Viewing</h4>
                    <p className="font-montserrat text-gray-700">[Information about local wildlife you might encounter]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Attractions Section */}
        <section className="py-20 bg-olive text-sunset">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-4xl text-center mb-12">Local Attractions</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-bistre/20 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-playfair text-xl text-hunyadi-yellow mb-4">Museums & Galleries</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-playfair text-lg mb-2">Local Art Museum</h4>
                    <p className="font-montserrat text-sm">[Details about local art museums and galleries]</p>
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg mb-2">History Museum</h4>
                    <p className="font-montserrat text-sm">[Information about local history museums]</p>
                  </div>
                </div>
              </div>
              <div className="bg-bistre/20 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-playfair text-xl text-hunyadi-yellow mb-4">Shopping</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-playfair text-lg mb-2">Downtown Shops</h4>
                    <p className="font-montserrat text-sm">[Information about local shopping districts]</p>
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg mb-2">Artisan Markets</h4>
                    <p className="font-montserrat text-sm">[Details about local artisan markets and craft fairs]</p>
                  </div>
                </div>
              </div>
              <div className="bg-bistre/20 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-playfair text-xl text-hunyadi-yellow mb-4">Outdoor Activities</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-playfair text-lg mb-2">Beach Access</h4>
                    <p className="font-montserrat text-sm">[Information about nearby beaches and coastal activities]</p>
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg mb-2">Parks & Gardens</h4>
                    <p className="font-montserrat text-sm">[Details about local parks and botanical gardens]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dining Options Section */}
        <section className="py-20 bg-sunset">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-4xl text-bistre text-center mb-12">Dining Options</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="font-playfair text-2xl text-hunyadi-yellow mb-6">Fine Dining</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-playfair text-lg text-bistre mb-2">Restaurant Name 1</h4>
                    <p className="font-montserrat text-gray-700 mb-2">[Restaurant description and cuisine type]</p>
                    <p className="font-montserrat text-sm text-gray-600">📍 [Address] | 📞 [Phone]</p>
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg text-bistre mb-2">Restaurant Name 2</h4>
                    <p className="font-montserrat text-gray-700 mb-2">[Restaurant description and cuisine type]</p>
                    <p className="font-montserrat text-sm text-gray-600">📍 [Address] | 📞 [Phone]</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="font-playfair text-2xl text-hunyadi-yellow mb-6">Casual Dining</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-playfair text-lg text-bistre mb-2">Café Name 1</h4>
                    <p className="font-montserrat text-gray-700 mb-2">[Café description and specialties]</p>
                    <p className="font-montserrat text-sm text-gray-600">📍 [Address] | 📞 [Phone]</p>
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg text-bistre mb-2">Café Name 2</h4>
                    <p className="font-montserrat text-gray-700 mb-2">[Café description and specialties]</p>
                    <p className="font-montserrat text-sm text-gray-600">📍 [Address] | 📞 [Phone]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accommodation Section */}
        <section className="py-20 bg-olive text-sunset">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-4xl text-center mb-12">Where to Stay</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-bistre/20 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-playfair text-xl text-hunyadi-yellow mb-4">Hotels</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-playfair text-lg mb-2">Hotel Name 1</h4>
                    <p className="font-montserrat text-sm mb-2">[Hotel description and amenities]</p>
                    <p className="font-montserrat text-xs">📍 [Address] | 📞 [Phone]</p>
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg mb-2">Hotel Name 2</h4>
                    <p className="font-montserrat text-sm mb-2">[Hotel description and amenities]</p>
                    <p className="font-montserrat text-xs">📍 [Address] | 📞 [Phone]</p>
                  </div>
                </div>
              </div>
              <div className="bg-bistre/20 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-playfair text-xl text-hunyadi-yellow mb-4">Bed & Breakfast</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-playfair text-lg mb-2">B&B Name 1</h4>
                    <p className="font-montserrat text-sm mb-2">[B&B description and charm]</p>
                    <p className="font-montserrat text-xs">📍 [Address] | 📞 [Phone]</p>
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg mb-2">B&B Name 2</h4>
                    <p className="font-montserrat text-sm mb-2">[B&B description and charm]</p>
                    <p className="font-montserrat text-xs">📍 [Address] | 📞 [Phone]</p>
                  </div>
                </div>
              </div>
              <div className="bg-bistre/20 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-playfair text-xl text-hunyadi-yellow mb-4">Vacation Rentals</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-playfair text-lg mb-2">Cabin Rentals</h4>
                    <p className="font-montserrat text-sm mb-2">[Information about cabin rentals in the area]</p>
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg mb-2">Airbnb Options</h4>
                    <p className="font-montserrat text-sm mb-2">[Recommended Airbnb properties]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transportation Section */}
        <section className="py-20 bg-sunset">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-4xl text-bistre text-center mb-12">Getting Around</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-playfair text-2xl text-hunyadi-yellow mb-4">Car Rental</h3>
                  <p className="font-montserrat text-gray-700 mb-4">[Information about car rental services in the area]</p>
                  <div className="space-y-2">
                    <p className="font-montserrat text-sm text-gray-600">🚗 [Rental company 1]</p>
                    <p className="font-montserrat text-sm text-gray-600">🚗 [Rental company 2]</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-playfair text-2xl text-hunyadi-yellow mb-4">Public Transportation</h3>
                  <p className="font-montserrat text-gray-700 mb-4">[Information about local buses, shuttles, and transportation options]</p>
                  <div className="space-y-2">
                    <p className="font-montserrat text-sm text-gray-600">🚌 [Bus service information]</p>
                    <p className="font-montserrat text-sm text-gray-600">🚐 [Shuttle service information]</p>
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