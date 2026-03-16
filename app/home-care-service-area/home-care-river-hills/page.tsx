import Link from "next/link";

export default function RiverHillsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-blue-600 overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Home Care In River Hills, Wisconsin
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* About River Hills */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              About River Hills
            </h2>

            <div className="space-y-6 text-gray-700">
              <p>
                River Hills is one of the most distinctive and exclusive villages in all of Wisconsin. Located in Milwaukee County along the banks of the Milwaukee River, River Hills is the only community in the county zoned entirely residential — there are no commercial or industrial properties within its boundaries. With 85% of residential lots exceeding five acres, the village feels more like a private nature retreat than a typical suburb, with heavily wooded grounds, winding country roads, and a deep sense of privacy and seclusion.
              </p>

              <p>
                The village incorporated in 1930, largely driven by wealthy Milwaukee families who built summer estates near the Milwaukee Country Club. Today River Hills remains one of the wealthiest communities in Wisconsin, with a median household income exceeding $160,000. The village is home to the world-renowned Lynden Sculpture Garden, the historic Milwaukee Country Club, and the campus of the University School of Milwaukee. With nearly 20% of residents aged 65 or older and a median age approaching 50, many River Hills families have deep roots in the community and a strong preference for aging in place in their spacious, well-established homes.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">River Hills at a Glance</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">1.6K</div>
                  <p className="text-sm text-gray-700">Population</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">5.15</div>
                  <p className="text-sm text-gray-700">Square Miles</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">19%</div>
                  <p className="text-sm text-gray-700">Residents Age 65+</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">1930</div>
                  <p className="text-sm text-gray-700">Village Incorporated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Aging in Place */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Aging in Place in River Hills
            </h2>

            <div className="space-y-6 text-gray-700">
              <p>
                For River Hills residents, the idea of aging in place carries particular weight. Many families have lived in their large estate-style homes for generations, and the thought of leaving a cherished property — with its mature trees, private grounds, and connections to neighbors and the Milwaukee Country Club — can be deeply unappealing. Home care makes it possible to stay in these exceptional homes while receiving the support needed to remain safe and comfortable.
              </p>

              <p>
                Because River Hills homes tend to be large and set on expansive lots, professional in-home care can be especially practical here. Caregivers can provide companionship, assist with daily tasks, and support aging residents in maintaining the lifestyle they&apos;ve built — without requiring a move to a smaller or less familiar environment.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why River Hills Residents Choose Home Care</h3>

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
              Home Care Services Available in River Hills
            </h2>

            <p className="text-gray-700 mb-8">
              River Hills seniors have access to a wide range of home care services. These typically include:
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
                      Social interaction, conversation, meal preparation, light housekeeping, laundry, medication reminders, and assistance with grocery shopping and errands.
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
              River Hills in the Milwaukee Area
            </h2>

            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-96 mb-6">
              <iframe
                width="100%"
                height="100%"
                style={{border: 0}}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35000.00!2d-87.93250!3d43.16528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8804de31d5fe1677%3A0x7f7a3bcc5e9b9e91!2sRiver%20Hills%2C%20WI%2053217!5e0!3m2!1sen!2sus!4v1617000000005"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3">Key Locations in River Hills</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Lynden Sculpture Garden:</strong> A world-class 40-acre outdoor sculpture park featuring over 50 large-scale works, open to the public and one of the village&apos;s most beloved landmarks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Milwaukee Country Club:</strong> The historic private club that has anchored the River Hills community since 1911, featuring a championship golf course along the Milwaukee River</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>University School of Milwaukee:</strong> A respected private K–12 school with a campus in River Hills, drawing families from across the North Shore</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Milwaukee River:</strong> The river runs along the village and provides scenic beauty throughout — a defining natural feature of the community</span>
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
                  <li>2. Research providers in the River Hills area</li>
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
              For more information about different types of home care services available to River Hills seniors, explore our detailed guides on specific care topics.
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
                  River Hills residents are served by the North Shore Library system, offering senior resources, programs, and community support
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
