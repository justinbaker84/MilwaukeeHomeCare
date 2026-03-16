import Link from "next/link";

export default function GlendalePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-blue-600 overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Home Care In Glendale, Wisconsin
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* About Glendale */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              About Glendale
            </h2>

            <div className="space-y-6 text-gray-700">
              <p>
                Glendale is a city located just north of Milwaukee in Milwaukee County, Wisconsin. As one of the North Shore suburbs of the Milwaukee metropolitan area, Glendale offers a distinctive mix of residential neighborhoods, commercial districts, and green spaces. The city is home to Bayshore Town Center, Nicolet High School, the Sprecher Brewery, and the beloved Kopp&apos;s Frozen Custard — landmarks that give Glendale a strong local identity within the greater Milwaukee community.
              </p>

              <p>
                The city spans approximately 5.76 square miles and is bisected by Interstate 43. Glendale incorporated in 1950 and grew rapidly through the post-war era. With over 22% of residents aged 65 or older and a median age of nearly 47, Glendale has a substantial and well-established senior population — making access to reliable in-home care services an important consideration for many families in the city.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Glendale at a Glance</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">13K</div>
                  <p className="text-sm text-gray-700">Population</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">5.76</div>
                  <p className="text-sm text-gray-700">Square Miles</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">23%</div>
                  <p className="text-sm text-gray-700">Residents Age 65+</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">1950</div>
                  <p className="text-sm text-gray-700">City Incorporated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Aging in Place */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Aging in Place in Glendale
            </h2>

            <div className="space-y-6 text-gray-700">
              <p>
                Many Glendale residents have lived in the city for decades, building lives and community ties that are deeply rooted in its neighborhoods and local culture. For seniors, staying in their own home means maintaining access to familiar surroundings, established friendships, and the local amenities they rely on — from nearby shopping and healthcare to the city&apos;s parks and community spaces.
              </p>

              <p>
                Home care services make it possible for Glendale seniors to continue living independently in their own homes while receiving the support they need. Whether that means a few hours of assistance each week or more comprehensive daily care, home care allows residents to age in place on their own terms and with their dignity intact.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Glendale Residents Choose Home Care</h3>

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

          {/* Home Care Services with Color-Coded Cards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Home Care Services Available in Glendale
            </h2>

            <p className="text-gray-700 mb-8">
              Glendale seniors have access to a wide range of home care services. These typically include:
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Companionship & Home Help</h3>
                    <p className="text-gray-700">
                      Social interaction, conversation, meal preparation, light housekeeping, laundry, medication reminders, and assistance with grocery shopping and errands around Glendale.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Transportation & Escorted Services</h3>
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
              Glendale in the Milwaukee Area
            </h2>

            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-96 mb-6">
              <iframe
                width="100%"
                height="100%"
                style={{border: 0}}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35000.00!2d-87.92778!3d43.13000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8804e076b8c17bab%3A0x6f4a0e09741c8e01!2sGlendale%2C%20WI!5e0!3m2!1sen!2sus!4v1617000000003"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3">Key Locations in Glendale</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Bayshore Town Center:</strong> Major shopping, dining, and services hub on the eastern edge of the city — convenient for seniors and caregivers alike</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Nicolet High School:</strong> Serves Glendale and neighboring North Shore communities including Fox Point, Bayside, and River Hills</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Kletzsch Park:</strong> Scenic park along the Milwaukee River with walking paths, picnic areas, and preserved Native American burial mounds</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Maslowski Community Park:</strong> Modern community gathering space featuring an amphitheater, playground, veterans memorial, and community room</span>
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
                  <li>2. Research providers in the Glendale area</li>
                  <li>3. Contact providers for consultations</li>
                  <li>4. Ask references and verify credentials</li>
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
              For more information about different types of home care services available to Glendale seniors, explore our detailed guides on specific care topics.
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
                <p className="font-semibold text-gray-900 mb-2">Library Services</p>
                <p className="text-gray-600 text-sm">
                  Glendale is served by the North Shore Library, offering senior resources, programs, and community support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
