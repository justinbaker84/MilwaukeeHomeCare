import Link from "next/link";

export default function WauwatosaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-blue-600 overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Home Care In Wauwatosa, Wisconsin
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* About Wauwatosa */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  About Wauwatosa
                </h2>
                
                <div className="space-y-6 text-gray-700">
                  <p>
                    Wauwatosa is a thriving suburb located directly west of Milwaukee, Wisconsin. Known for its tree-lined streets, attractive residential neighborhoods, and strong sense of community, Wauwatosa is home to thousands of families and retirees who value the balance of suburban comfort with proximity to urban amenities.
                  </p>

                  <p>
                    The city spans approximately 15 square miles and is bordered by the Menomonee River to the north and east. Wauwatosa is well-connected to Milwaukee and the surrounding communities through major roads including I-94 and Highway 41, making it convenient for access to healthcare, shopping, and entertainment.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Wauwatosa at a Glance</h3>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">47K</div>
                      <p className="text-sm text-gray-700">Population</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">15</div>
                      <p className="text-sm text-gray-700">Square Miles</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">20+</div>
                      <p className="text-sm text-gray-700">Parks & Recreation</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">1892</div>
                      <p className="text-sm text-gray-700">Community Established</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Aging in Place */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Aging in Place in Wauwatosa
                </h2>

                <div className="space-y-6 text-gray-700">
                  <p>
                    Many Wauwatosa residents have spent decades in their homes and neighborhoods, building deep roots in the community. For seniors, remaining in these familiar surroundings is often important to maintaining quality of life, independence, and connection to their community.
                  </p>

                  <p>
                    Home care services make it possible for seniors to continue living in their Wauwatosa homes while receiving the support they need for daily activities. Whether temporary assistance during recovery from surgery or ongoing support for chronic conditions, home care allows seniors to age in place with dignity.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Wauwatosa Residents Choose Home Care</h3>

                  <ul className="space-y-4 my-6">
                    <li className="flex gap-4">
                      <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                      <span><strong>Staying in a familiar home</strong> — Remaining in the house and neighborhood where memories were made</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                      <span><strong>Maintaining independence</strong> — Making one&#39;s own decisions about daily life and routines</span>
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
                  Home Care Services Available in Wauwatosa
                </h2>

                <p className="text-gray-700 mb-8">
                  Wauwatosa seniors have access to a wide range of home care services. These typically include:
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
                          Social interaction, conversation, meal preparation, light housekeeping, laundry, medication reminders, and assistance with grocery shopping and errands around Wauwatosa.
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
                          Care for seniors with Alzheimer&#39;s disease, dementia, Parkinson&#39;s disease, diabetes, arthritis, and other chronic conditions. Caregivers receive specialized training in managing these conditions.
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
                  Wauwatosa in the Milwaukee Area
                </h2>
                
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-96 mb-6">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    style={{border: 0}}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47364.09404447629!2d-88.09707!3d43.04295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88058f0e8c8e8e8d%3A0x1c1c1c1c1c1c1c1c!2sWauwatosa%2C%20WI!5e0!3m2!1sen!2sus!4v1234567890"
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-3">Key Locations in Wauwatosa</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Aurora Medical Center - West Milwaukee:</strong> Major healthcare facility nearby for emergency and medical services</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Menomonee River Parkway:</strong> Scenic parks and trails throughout the community</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Wauwatosa Public Library:</strong> Community resources and senior programs</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Shopping Districts:</strong> Convenient retail, pharmacies, and grocery stores throughout the city</span>
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
                      Staying in one&#39;s home during aging is associated with better mental health outcomes and higher life satisfaction compared to facility-based care arrangements.
                    </p>
                  </div>

                  <div className="bg-amber-50 border-2 border-amber-200 p-6 rounded-lg">
                    <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">⚠️</span> Important Consideration
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Not all home care providers are the same. It&#39;s important to ask about caregiver training, background checks, insurance, and how the provider handles concerns or emergencies.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">📋</span> Action Items
                    </h3>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>1. Assess your loved one&#39;s current care needs</li>
                      <li>2. Research providers in the Wauwatosa area</li>
                      <li>3. Contact providers for consultations</li>
                      <li>4. Ask references and verify credentials</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 border-2 border-purple-200 p-6 rounded-lg">
                    <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">🎯</span> Did You Know?
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Many home care services can be adjusted as needs change over time, making it easy to increase or decrease hours based on your loved one&#39;s evolving situation.
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
                  For more information about different types of home care services available to Wauwatosa seniors, explore our detailed guides on specific care topics.
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
                  <a href="https://www.agrace.org/locations/wauwatosa/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm">
                    Agrace Hospice →
                  </a>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">Library Services</p>
                  <p className="text-gray-600 text-sm">
                    Wauwatosa Public Library offers senior resources and programs
                  </p>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
