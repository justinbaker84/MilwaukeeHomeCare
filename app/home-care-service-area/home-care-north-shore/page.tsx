import Link from "next/link";

export default function NorthShorePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-blue-600 overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Home Care On Milwaukee&apos;s North Shore
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* About the North Shore */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              About Milwaukee&apos;s North Shore
            </h2>

            <div className="space-y-6 text-gray-700">
              <p>
                Milwaukee&apos;s North Shore is a collection of communities nestled along the picturesque western shoreline of Lake Michigan, just north of the City of Milwaukee. The region encompasses the communities of Glendale, Brown Deer, River Hills, Bayside, Fox Point, Whitefish Bay, and Shorewood — each with its own distinct character, but united by a shared identity as one of the most desirable and well-established areas in southeastern Wisconsin.
              </p>

              <p>
                The North Shore is known for its tree-lined streets, scenic lakefront parks, strong schools, upscale shopping at Bayshore Town Center, and cultural landmarks like the Lynden Sculpture Garden and the Schlitz Audubon Nature Center. The region offers a high quality of life that has attracted generations of Milwaukee families, many of whom have lived here for decades and have no desire to leave — even as they age and their care needs evolve.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">North Shore at a Glance</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">7</div>
                  <p className="text-sm text-gray-700">Communities</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">65K+</div>
                  <p className="text-sm text-gray-700">Combined Population</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">Lake</div>
                  <p className="text-sm text-gray-700">Michigan Shoreline</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">20%+</div>
                  <p className="text-sm text-gray-700">Residents Age 65+</p>
                </div>
              </div>
            </div>
          </div>

          {/* North Shore Communities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              North Shore Communities We Serve
            </h2>

            <p className="text-gray-700 mb-8">
              We provide home care services throughout all of the North Shore communities. Each area has its own local character — click on any community below to learn more about home care options in that specific area.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Link href="/home-care-service-area/home-care-glendale/" className="group block bg-blue-50 border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-100 p-6 rounded-lg transition text-center">
                <div className="text-2xl mb-2">🏙️</div>
                <p className="font-bold text-gray-900 group-hover:text-blue-700">Glendale</p>
                <p className="text-xs text-gray-500 mt-1">City · Pop. ~13K</p>
              </Link>

              <Link href="/home-care-service-area/home-care-brown-deer/" className="group block bg-blue-50 border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-100 p-6 rounded-lg transition text-center">
                <div className="text-2xl mb-2">🌳</div>
                <p className="font-bold text-gray-900 group-hover:text-blue-700">Brown Deer</p>
                <p className="text-xs text-gray-500 mt-1">Village · Pop. ~12K</p>
              </Link>

              <Link href="/home-care-service-area/home-care-river-hills/" className="group block bg-blue-50 border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-100 p-6 rounded-lg transition text-center">
                <div className="text-2xl mb-2">🌿</div>
                <p className="font-bold text-gray-900 group-hover:text-blue-700">River Hills</p>
                <p className="text-xs text-gray-500 mt-1">Village · Pop. ~1.6K</p>
              </Link>

              <Link href="/home-care-service-area/home-care-bayside/" className="group block bg-blue-50 border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-100 p-6 rounded-lg transition text-center">
                <div className="text-2xl mb-2">🌊</div>
                <p className="font-bold text-gray-900 group-hover:text-blue-700">Bayside</p>
                <p className="text-xs text-gray-500 mt-1">Village · Pop. ~4.5K</p>
              </Link>

              <Link href="/home-care-service-area/home-care-fox-point/" className="group block bg-blue-50 border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-100 p-6 rounded-lg transition text-center">
                <div className="text-2xl mb-2">🦊</div>
                <p className="font-bold text-gray-900 group-hover:text-blue-700">Fox Point</p>
                <p className="text-xs text-gray-500 mt-1">Village · Pop. ~6.9K</p>
              </Link>

              <Link href="/home-care-service-area/home-care-whitefish-bay/" className="group block bg-blue-50 border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-100 p-6 rounded-lg transition text-center">
                <div className="text-2xl mb-2">🐟</div>
                <p className="font-bold text-gray-900 group-hover:text-blue-700">Whitefish Bay</p>
                <p className="text-xs text-gray-500 mt-1">Village · Pop. ~14K</p>
              </Link>

              <Link href="/home-care-service-area/home-care-shorewood/" className="group block bg-blue-50 border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-100 p-6 rounded-lg transition text-center">
                <div className="text-2xl mb-2">🏡</div>
                <p className="font-bold text-gray-900 group-hover:text-blue-700">Shorewood</p>
                <p className="text-xs text-gray-500 mt-1">Village · Pop. ~13K</p>
              </Link>
            </div>
          </div>

          {/* Aging in Place */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Aging in Place on the North Shore
            </h2>

            <div className="space-y-6 text-gray-700">
              <p>
                North Shore residents share a deep sense of pride in their communities and a strong desire to remain in their homes as they age. Whether it&apos;s a longtime resident of Shorewood who has lived on the same street for 40 years, or a Fox Point family that has watched their neighborhood grow and change over generations, the connection to place on the North Shore is strong — and home care makes it possible to honor that connection.
              </p>

              <p>
                With over 20% of residents in many North Shore communities aged 65 or older, the demand for quality in-home care services is significant and growing. Home care provides a meaningful alternative to assisted living or nursing facility placement, allowing seniors to maintain their routines, relationships, and independence in the communities they love.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why North Shore Residents Choose Home Care</h3>

              <ul className="space-y-4 my-6">
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span><strong>Staying in a familiar home</strong> — Remaining in the house and neighborhood where memories were made</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span><strong>Maintaining independence</strong> — Making one&apos;s own decisions about daily life and routines</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span><strong>Preserving community connections</strong> — Staying close to long-time friends, neighbors, and local organizations</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span><strong>Cost considerations</strong> — Home care can be more affordable than facility-based care options</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span><strong>Family involvement</strong> — Easier for adult children and grandchildren to visit and participate in care</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Home Care Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Home Care Services Available on the North Shore
            </h2>

            <p className="text-gray-700 mb-8">
              North Shore seniors have access to a wide range of home care services. These typically include:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-600 bg-blue-50 p-6 rounded-r-lg hover:shadow-md transition">
                <div className="flex gap-4">
                  <span className="text-3xl flex-shrink-0">🧼</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Personal Care Services</h3>
                    <p className="text-gray-700">
                      Assistance with bathing, showering, dressing, grooming, mobility, and incontinence care. Professional caregivers provide this support with dignity and respect for personal privacy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-600 bg-green-50 p-6 rounded-r-lg hover:shadow-md transition">
                <div className="flex gap-4">
                  <span className="text-3xl flex-shrink-0">❤️</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Companionship &amp; Home Help</h3>
                    <p className="text-gray-700">
                      Social interaction, conversation, meal preparation, light housekeeping, laundry, medication reminders, and assistance with grocery shopping and errands throughout the North Shore.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-600 bg-purple-50 p-6 rounded-r-lg hover:shadow-md transition">
                <div className="flex gap-4">
                  <span className="text-3xl flex-shrink-0">🧠</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Specialized Care</h3>
                    <p className="text-gray-700">
                      Care for seniors with Alzheimer&apos;s disease, dementia, Parkinson&apos;s disease, diabetes, arthritis, and other chronic conditions. Caregivers receive specialized training in managing these conditions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-amber-600 bg-amber-50 p-6 rounded-r-lg hover:shadow-md transition">
                <div className="flex gap-4">
                  <span className="text-3xl flex-shrink-0">🚗</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Transportation &amp; Escorted Services</h3>
                    <p className="text-gray-700">
                      Safe transportation to medical appointments, shopping trips, religious services, and social activities. Caregivers can accompany seniors and provide assistance as needed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-red-600 bg-red-50 p-6 rounded-r-lg hover:shadow-md transition">
                <div className="flex gap-4">
                  <span className="text-3xl flex-shrink-0">🤝</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Respite Care</h3>
                    <p className="text-gray-700">
                      Relief for family caregivers who need a break. Respite care allows adult children and other family members to rest while knowing their loved one is receiving professional care.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-indigo-600 bg-indigo-50 p-6 rounded-r-lg hover:shadow-md transition">
                <div className="flex gap-4">
                  <span className="text-3xl flex-shrink-0">⏰</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-700">
                      Services can range from a few hours per week to 24-hour care, depending on individual needs. Schedules can be adjusted as circumstances change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              The North Shore Region
            </h2>

            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-96 mb-6">
              <iframe
                width="100%"
                height="100%"
                style={{border: 0}}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70000.00!2d-87.90500!3d43.14000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8804de374c518059%3A0xb8f7beedb0baac78!2sMilwaukee%20North%20Shore%2C%20WI!5e0!3m2!1sen!2sus!4v1617000000004"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3">North Shore Landmarks &amp; Attractions</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Bayshore Town Center (Glendale):</strong> Premier shopping, dining, and services destination serving the entire North Shore region</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Schlitz Audubon Nature Center (Bayside):</strong> A beloved 185-acre nature preserve on the shores of Lake Michigan</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Lynden Sculpture Garden (River Hills):</strong> A world-class outdoor sculpture park with 50 large-scale works spread across 40 acres</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Doctor&apos;s Park (Fox Point):</strong> A scenic Lake Michigan park with blufftop trails, forested ravines, and stunning water views</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Estabrook Park (Shorewood):</strong> A large riverside park along the Milwaukee River with a beer garden, trails, and picnic areas</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Takeaway Boxes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Important Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">💡</span> Did You Know?
                </h3>
                <p className="text-gray-700 text-sm">
                  Staying in one&apos;s home during aging is associated with better mental health outcomes and higher life satisfaction compared to facility-based care arrangements.
                </p>
              </div>

              <div className="bg-amber-50 border-2 border-amber-200 p-6 rounded-lg">
                <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span> Important Consideration
                </h3>
                <p className="text-gray-700 text-sm">
                  Not all home care providers are the same. It&apos;s important to ask about caregiver training, background checks, insurance, and how the provider handles concerns or emergencies.
                </p>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">📋</span> Action Items
                </h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>1. Assess your loved one&apos;s current care needs</li>
                  <li>2. Research providers in your specific North Shore community</li>
                  <li>3. Contact providers for consultations</li>
                  <li>4. Ask for references and verify credentials</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-2 border-purple-200 p-6 rounded-lg">
                <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎯</span> Did You Know?
                </h3>
                <p className="text-gray-700 text-sm">
                  Many home care services can be adjusted as needs change over time, making it easy to increase or decrease hours based on your loved one&apos;s evolving situation.
                </p>
              </div>
            </div>
          </div>

          {/* Learn More Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Learn More About Home Care
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              For more information about the types of home care services available to North Shore seniors, explore our detailed guides on specific care topics.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/home-care-services/senior-care/personal-care-services/" className="block p-4 bg-blue-50 border border-blue-200 rounded-lg hover:shadow-md transition">
                <p className="font-semibold text-gray-900 text-sm">Personal Care Services</p>
              </Link>
              <Link href="/home-care-services/senior-care/alzheimers-dementia-services/" className="block p-4 bg-blue-50 border border-blue-200 rounded-lg hover:shadow-md transition">
                <p className="font-semibold text-gray-900 text-sm">Dementia Care</p>
              </Link>
              <Link href="/home-care-services/senior-care/companionship-services/" className="block p-4 bg-blue-50 border border-blue-200 rounded-lg hover:shadow-md transition">
                <p className="font-semibold text-gray-900 text-sm">Companionship Services</p>
              </Link>
            </div>
          </div>

          {/* Local Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Local Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900 mb-2">County Services</p>
                <a href="https://county.milwaukee.gov/EN/DHHS/Older-Adults-Services" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm">
                  Milwaukee County Programs →
                </a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900 mb-2">End-of-Life Care</p>
                <a href="https://www.agrace.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm">
                  Agrace Hospice →
                </a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900 mb-2">Discover the North Shore</p>
                <a href="https://discoverthenorthshoremke.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm">
                  DiscoverTheNorthShoreMKE.com →
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
