"use client"

import Navigation from '@/components/Navigation'
import { getAssetPath } from '@/utils/assetPath'

const backgroundImage = getAssetPath('/images/background1.webp')

export default function HotelAccommodationsPage() {
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
        
        {/* Hotel Accommodations Section */}
        <section className="py-20 text-[#F1AF47]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#41251A]/100 p-12 rounded-lg shadow-lg">
                <h1 className="font-art-nouveau-caps md:text-3xl mb-8 text-center text-hunyadi-yellow">
                  Accommodations
                </h1>
                
                {/* Hotels Section */}
                <div className="space-y-8 mb-12">
                  {/* Panama Hotel */}
                  <div className="bg-[#41251A]/10 p-8 rounded-xl shadow-xl shadow-black/100">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="font-art-nouveau-caps text-3xl text-hunyadi-yellow">
                        Panama Hotel
                      </h2>
                    </div>
                    <span className="font-art-nouveau-regular text-3xl text-hunyadi-yellow">$</span>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.398798066735!2d-122.53548900998726!3d37.96782149958005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808599f8c4c6400f%3A0x956a3ef64a055456!2sPanama%20Hotel!5e0!3m2!1sen!2sus!4v1764319121138!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ borderRadius: '5%', marginTop:'10px', maxWidth: '100%'}}></iframe>
                    
                    <p className="font-art-nouveau-regular text-xl mb-4 leading-relaxed">
                      Historic 1910s artsy little bed-&-breakfast in a residential neighborhood (Gerstle Park) with quirky themed rooms, a leafy courtyard, and an on-site restaurant. Guests get a cozy, old-San-Rafael feel rather than a big-chain hotel experience, and breakfast is included in many stays.
                    </p>
                    <div className="mb-4">
                      <h3 className="font-art-nouveau text-xl  mb-2 text-hunyadi-yellow">
                        Distance to Reception:
                      </h3>
                      <p className="font-art-nouveau-regular text-lg">
                        About 0.6–0.7 miles / 10–15 minute walk / ~3–5 minute drive
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                      <button
                        onClick={() => window.open('https://panamahotel.com/', '_blank')}
                        className="group relative overflow-hidden bg-hunyadi-yellow backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                        style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                      >
                        <span className="relative z-10">Visit Website</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                      <button
                        onClick={() => window.open('https://www.tripadvisor.com/Hotel_Review-g33037-d645241-Reviews-Panama_Hotel-San_Rafael_Marin_County_California.html', '_blank')}
                        className="group relative overflow-hidden bg-hunyadi-yellow backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                        style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                      >
                        <span className="relative z-10">Trip Advisor</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>

                  {/* Marin Lodge */}
                  <div className="bg-[#41251A]/10 p-8 rounded-xl shadow-xl shadow-black/100">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="font-art-nouveau-caps text-3xl text-hunyadi-yellow">
                        Marin Lodge
                      </h2>
                    </div>
                    <span className="font-art-nouveau-regular text-3xl text-hunyadi-yellow">$$</span>
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.6354853602375!2d-122.52864002337431!3d37.98563527193298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808599e80ab73df3%3A0xf18b142fad15f46f!2sMarin%20Lodge!5e0!3m2!1sen!2sus!4v1764319167272!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ borderRadius: '5%', marginTop:'10px', maxWidth: '100%' }}></iframe>

                    <p className="font-art-nouveau-regular text-xl mb-4 leading-relaxed">
                      Quiet &ldquo;motor-lodge&rdquo; style property just off Lincoln Avenue. Rooms open to the parking lot (easy for luggage), and the feel is simple, clean, and comfortable. Guests mention good value, free parking, free Wi-Fi, and a surprisingly cozy atmosphere for a budget option.
                    </p>
                    <div className="mb-4">
                      <h3 className="font-art-nouveau text-xl  mb-2 text-hunyadi-yellow">
                        Distance to Reception:
                      </h3>
                      <p className="font-art-nouveau-regular text-lg">
                        About 1.0–1.1 miles / roughly a 20 minute walk / ~5 minute drive
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                      <button
                        onClick={() => window.open('http://www.marinlodge.com/overview.html', '_blank')}
                        className="group relative overflow-hidden bg-hunyadi-yellow backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                        style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                      >
                        <span className="relative z-10">Visit Website</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                      <button
                        onClick={() => window.open('https://www.tripadvisor.com/Hotel_Review-g33037-d592105-Reviews-Marin_Lodge-San_Rafael_Marin_County_California.html', '_blank')}
                        className="group relative overflow-hidden bg-hunyadi-yellow backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                        style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                      >
                        <span className="relative z-10">Trip Advisor</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>

                  {/* AC Hotel San Rafael Downtown */}
                  <div className="bg-[#41251A]/10 p-8 rounded-xl shadow-xl shadow-black/100">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="font-art-nouveau-caps text-3xl text-hunyadi-yellow">
                        AC Hotel San Rafael Downtown (Marriott)
                      </h2>
                    </div>
                    <span className="font-art-nouveau-regular text-3xl text-hunyadi-yellow">$$$</span>
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3145.1246599835226!2d-122.5321208!3d37.97422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859985df6eca03%3A0xac011eb9815f23c9!2sAC%20Hotel%20San%20Rafael%20Downtown!5e0!3m2!1sen!2sus!4v1764318806333!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ borderRadius: '5%', marginTop:'10px', maxWidth: '100%' }}></iframe>
                    
                    <p className="font-art-nouveau-regular text-xl mb-4 leading-relaxed">
                      New, modern Marriott property right in downtown San Rafael with minimalist rooms, a rooftop bar/lounge (&ldquo;Above Fifth&rdquo;) and easy access to restaurants, bars, and shops within a few blocks. Think sleek, urban hotel with amenities like Wi-Fi, fitness center, and on-site dining.
                    </p>
                    <div className="mb-4">
                      <h3 className="font-art-nouveau text-xl  mb-2 text-hunyadi-yellow">
                        Distance to Reception:
                      </h3>
                      <p className="font-art-nouveau-regular text-lg">
                        About 0.2 miles / 3–5 minute walk (Falkirk is basically just up the hill from downtown)
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                      <button
                        onClick={() => window.open('https://www.marriott.com/en-us/hotels/sfoar-ac-hotel-san-rafael-downtown/overview/', '_blank')}
                        className="group relative overflow-hidden bg-hunyadi-yellow backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                        style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                      >
                        <span className="relative z-10">Visit Website</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                      <button
                        onClick={() => window.open('https://www.tripadvisor.com/Hotel_Review-g33037-d26103085-Reviews-AC_Hotel_San_Rafael_Downtown-San_Rafael_Marin_County_California.html', '_blank')}
                        className="group relative overflow-hidden bg-hunyadi-yellow backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                        style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                      >
                        <span className="relative z-10">Trip Advisor</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Restaurant Recommendations Section */}
                <div className="bg-[#41251A]/10 p-8 rounded-xl shadow-xl shadow-black/100">
                  <h2 className="font-art-nouveau-caps md:text-3xl mb-6 text-hunyadi-yellow">
                    Restaurant Recommendations
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Millie's Crêpe et Crème */}
                    <div className="border-b border-hunyadi-yellow/20 pb-6 last:border-b-0 last:pb-0">
                      <h3 className="font-art-nouveau text-2xl  mb-2 text-hunyadi-yellow">
                        Millie&apos;s Crêpe & Crème
                      </h3>
                      <p className="font-art-nouveau-regular text-lg mb-2 text-gray-300">
                        Mill Valley
                      </p>
                      <p className="font-art-nouveau-regular text-xl mb-3 leading-relaxed">
                        Sweet little crepe shop tucked into the Mill Valley Lumber Yard, serving traditional Parisian and gluten-free buckwheat crêpes with both sweet and savory options. They also do soft-serve, milkshakes, coffee, beer, and wine, so it&apos;s a cute spot for a light brunch or an afternoon treat while exploring Mill Valley.
                      </p>
                      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <button
                          onClick={() => window.open('https://www.milliescrepeandcreme.com', '_blank')}
                          className="group relative overflow-hidden bg-hunyadi-yellow backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                          style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                        >
                          <span className="relative z-10">Visit Website</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <button
                          onClick={() => window.open('https://www.yelp.com/biz/millies-crepe-et-creme-mill-valley-2?uid=7JWbY92A6dbX6QqjfVlb_g&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)', '_blank')}
                          className="group relative overflow-hidden bg-hunyadi-yellow backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                          style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                        >
                          <span className="relative z-10">Yelp</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </div>
                    </div>

                    {/* Mamahuhu */}
                    <div className="border-b border-hunyadi-yellow/20 pb-6 last:border-b-0 last:pb-0">
                      <h3 className="font-art-nouveau text-2xl  mb-2 text-hunyadi-yellow">
                        Mamahuhu
                      </h3>
                      <p className="font-art-nouveau-regular text-lg mb-2 text-gray-300">
                        San Rafael / Mill Valley
                      </p>
                      <p className="font-art-nouveau-regular text-xl mb-3 leading-relaxed">
                        Casual Chinese-American spot from a James Beard–winning chef&apos;s team, focusing on comfort classics like sweet & sour chicken, mapo tofu, noodles, and rice plates made with thoughtful, high-quality ingredients. The vibe is bright and modern, great for a relaxed but flavorful lunch or dinner that still feels a bit &ldquo;foodie.&rdquo;
                      </p>
                      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <button
                          onClick={() => window.open('https://eatmamahuhu.com/', '_blank')}
                          className="group relative overflow-hidden bg-hunyadi-yellow backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                          style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                        >
                          <span className="relative z-10">Visit Website</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <button
                          onClick={() => window.open('https://www.yelp.com/biz/mamahuhu-mill-valley?uid=7JWbY92A6dbX6QqjfVlb_g&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)', '_blank')}
                          className="group relative overflow-hidden bg-hunyadi-yellow backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                          style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                        >
                          <span className="relative z-10">Yelp</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </div>
                    </div>

                    {/* Avatar's Punjabi Burritos */}
                    <div className="border-b border-hunyadi-yellow/20 pb-6 last:border-b-0 last:pb-0">
                      <h3 className="font-art-nouveau text-2xl  mb-2 text-hunyadi-yellow">
                        Avatar&apos;s Punjabi Burritos
                      </h3>
                      <p className="font-art-nouveau-regular text-lg mb-2 text-gray-300">
                        Mill Valley
                      </p>
                      <p className="font-art-nouveau-regular text-xl mb-3 leading-relaxed">
                        Very beloved Indian-Mexican fusion joint best known for its &ldquo;Punjabi burritos&rdquo;: oversized tortillas stuffed with curried fillings like smoked eggplant, chicken, lamb, or pumpkin, plus plenty of vegetarian and vegan options. It&apos;s casual, creative, and fun! Totally perfect if you want something unique to the Bay Area.
                      </p>
                      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <button
                          onClick={() => window.open('https://avatarsrestaurant.square.site/', '_blank')}
                          className="group relative overflow-hidden bg-hunyadi-yellow backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                          style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                        >
                          <span className="relative z-10">Visit Website</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <button
                          onClick={() => window.open('https://www.yelp.com/biz/avatars-restaurant-mill-valley?uid=7JWbY92A6dbX6QqjfVlb_g&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)', '_blank')}
                          className="group relative overflow-hidden bg-hunyadi-yellow backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                          style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                        >
                          <span className="relative z-10">Yelp</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </div>
                    </div>

                    {/* Sol Food */}
                    <div className="border-b border-hunyadi-yellow/20 pb-6 last:border-b-0 last:pb-0">
                      <h3 className="font-art-nouveau text-2xl  mb-2 text-hunyadi-yellow">
                        Sol Food
                      </h3>
                      <p className="font-art-nouveau-regular text-lg mb-2 text-gray-300">
                        San Rafael & Mill Valley
                      </p>
                      <p className="font-art-nouveau-regular text-xl mb-3 leading-relaxed">
                        Lively, super popular Puerto Rican restaurant serving plates of garlicky roast chicken, bistec encebollado, rice and beans, plantains, and their famous limeade. Portions are big, prices are reasonable, and it&apos;s one of the most iconic &ldquo;must-try&rdquo; spots in Marin.
                      </p>
                      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <button
                          onClick={() => window.open('https://www.solfoodrestaurant.com/', '_blank')}
                          className="group relative overflow-hidden bg-hunyadi-yellow backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                          style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                        >
                          <span className="relative z-10">Visit Website</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <button
                          onClick={() => window.open('https://www.yelp.com/biz/sol-food-mill-valley-mill-valley?uid=7JWbY92A6dbX6QqjfVlb_g&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)', '_blank')}
                          className="group relative overflow-hidden bg-hunyadi-yellow backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                          style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                        >
                          <span className="relative z-10">Yelp</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </div>
                    </div>

                    {/* Aroma Cafe */}
                    <div className="border-b border-hunyadi-yellow/20 pb-6 last:border-b-0 last:pb-0">
                      <h3 className="font-art-nouveau text-2xl  mb-2 text-hunyadi-yellow">
                        Aroma Cafe
                      </h3>
                      <p className="font-art-nouveau-regular text-lg mb-2 text-gray-300">
                        San Rafael
                      </p>
                      <p className="font-art-nouveau-regular text-xl mb-3 leading-relaxed">
                        Laid-back Mediterranean fusion café with salads, soups, stews, wraps, smoothies, and an espresso bar. Most things are made in-house, there are solid vegan options, and it doubles as a cozy hangout spot with coffee, kombucha, beer, and wine—nice for a casual breakfast, lunch, or early dinner.
                      </p>
                      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <button
                          onClick={() => window.open('https://www.aromacafesanrafael.com', '_blank')}
                          className="group relative overflow-hidden bg-hunyadi-yellow backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                          style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                        >
                          <span className="relative z-10">Visit Website</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <button
                          onClick={() => window.open('https://www.yelp.com/biz/aroma-cafe-san-rafael?uid=7JWbY92A6dbX6QqjfVlb_g&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)', '_blank')}
                          className="group relative overflow-hidden bg-hunyadi-yellow backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                          style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                        >
                          <span className="relative z-10">Yelp</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </div>
                    </div>

                    {/* The Burren House */}
                    <div className="border-b border-hunyadi-yellow/20 pb-6 last:border-b-0 last:pb-0">
                      <h3 className="font-art-nouveau text-2xl  mb-2 text-hunyadi-yellow">
                        The Burren House Irish Pub & Kitchen
                      </h3>
                      <p className="font-art-nouveau-regular text-lg mb-2 text-gray-300">
                        San Rafael
                      </p>
                      <p className="font-art-nouveau-regular text-xl mb-3 leading-relaxed">
                        Traditional Irish pub and restaurant in downtown San Rafael with cozy vibes, a proper pint of Guinness, and hearty classics like shepherd&apos;s pie, full Irish breakfast, and corned beef Reubens. Good for groups who want a relaxed evening with comfort food, drinks, and sometimes live traditional music.
                      </p>
                      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <button
                          onClick={() => window.open('https://www.theburrenhouse.com/', '_blank')}
                          className="group relative overflow-hidden bg-hunyadi-yellow backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                          style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                        >
                          <span className="relative z-10">Visit Website</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <button
                          onClick={() => window.open('https://www.yelp.com/biz/the-burren-house-san-rafael?uid=7JWbY92A6dbX6QqjfVlb_g&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)', '_blank')}
                          className="group relative overflow-hidden bg-hunyadi-yellow backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-opacity-100 transition-all duration-300 font-art-nouveau-caps text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-black"
                          style={{ fontFamily: 'P22ArtNouveauCaps, serif' }}
                        >
                          <span className="relative z-10">Yelp</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-hunyadi-yellow to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </div>
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

