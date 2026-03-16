import Link from "next/link";

export default function ShorewoodPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-blue-600 overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Home Care In Shorewood, Wisconsin
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* About Shorewood */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              About Shorewood
            </h2>

            <div className="space-y-6 text-gray-700">
              <p>
                Shorewood is a densely populated and deeply charming village nestled between the Milwaukee River and Lake Michigan, just north of the City of Milwaukee. With a population of nearly 14,000 packed into just 1.59 square miles, Shorewood is one of the most walkable and vibrant communities on Milwaukee&apos;s North Shore — and it has been since the early 1900s when it developed as a classic streetcar suburb. Tree-lined streets, early 20th-century architecture, and a lively commercial district along Oakland Avenue give Shorewood a distinctive urban-village character that residents are proud of and reluctant to leave.
              </p>

              <p>
                The village boasts remarkable landmarks including the sprawling 125-acre Estabrook Park along the Milwaukee River, the historic Hubbard Park Lodge, the acclaimed Shorewood High School campus, and a Frank Lloyd Wright-designed home. Shorewood&apos;s long history and tight-knit community create strong attachments among longtime residents — many of whom want to remain in their homes as they age rather than relocating to a care facility elsewhere.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Shorewood at a Glance</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">14K</div>
                  <p className="text-sm text-gray-700">Population</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">1.59</div>
                  <p className="text-sm text-gray-700">Square Miles</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">16%</div>
                  <p className="text-sm text-gray-700">Residents Age 65+</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">1900</div>
                  <p className="text-sm text-gray-700">Village Incorporated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Aging in Place */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Aging in Place in Shorewood
            </h2>

            <div className="space-y-6 text-gray-700">
              <p>
                Shorewood&apos;s walkable layout makes it one of the most practical North Shore communities for aging in place. Seniors can walk to shops, restaurants, the library, and parks without needing to drive — a significant advantage as mobility changes with age. The village&apos;s compact scale also means that caregivers, neighbors, and family members are never far away.
              </p>

              <p>
                Many Shorewood residents have lived in the village for decades, raising families in the same homes where they now want to grow old. Professional home care services make it possible to stay in these familiar surroundings while receiving help with personal care, household tasks, and daily routines — preserving the independence and community connections that make Shorewood such a desirable place to live.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Shorewood Residents Choose Home Care</h3>

              <ul className="space-y-4 my-6">
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span><strong>Staying in a familiar home</strong> — Remaining in the house and neighborhood where memories were made</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span><strong>Walkable community</strong> — Shorewood&apos;s compact layout allows seniors to stay active and engaged in village life</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span><strong>Maintaining independence</strong> — Making one&apos;s own decisions about daily life and routines</span>
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
              Home Care Services Available in Shorewood
            </h2>

            <p className="text-gray-700 mb-8">
              Shorewood seniors have access to a wide range of home care services. These typically include:
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
                      Social interaction, conversation, meal preparation, light housekeeping, laundry, medication reminders, and assistance with grocery shopping and errands around Shorewood.
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
              Shorewood in the Milwaukee Area
            </h2>

            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-96 mb-6">
              <iframe
                width="100%"
                height="100%"
                style={{border: 0}}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35000.00!2d-87.88639!3d43.09194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8804e3f5b3b55555%3A0x4b4a39e7f8b43b2b!2sShorewood%2C%20WI%2053211!5e0!3m2!1sen!2sus!4v1617000000006"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3">Key Locations in Shorewood</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Estabrook Park:</strong> A beloved 125-acre park along the Milwaukee River featuring a pond, dog park, picnic areas, soccer fields, a skate park, and the historic Benjamin Church House</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Hubbard Park &amp; Lodge:</strong> A scenic wooded riverside park with a WPA-built stone lodge dating to 1936, home to a popular restaurant and gathering space</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Shorewood High School:</strong> A landmark 19-acre campus built between 1924 and 1938, with an auditorium modeled after the RKO Theater in New York City</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Elizabeth Murphy House:</strong> A Frank Lloyd Wright-designed home built in 1917–18, the last completed work in his American System-Built Homes series — recently restored and recognized</span>
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
                  <li>2. Research providers in the Shorewood area</li>
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
              For more information about different types of home care services available to Shorewood seniors, explore our detailed guides on specific care topics.
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
                  Shorewood is served by the North Shore Library system, offering senior programs, resources, and community support
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
