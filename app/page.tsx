import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-10 sm:py-16 lg:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Home Care for Seniors
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Learn about home care options for elderly loved ones in the Milwaukee area.  
              </p>
            </div>
            <div className="relative h-96 sm:h-full min-h-96">
              <div className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/5-Home-Care-Tips-All-Family-Caregivers-Need-to-Know-1.png"
                  alt="Home care tips for family caregivers"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Home Care Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What is Home Care?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Home care refers to non-medical support provided to seniors in their own homes. It focuses on assistance with everyday activities rather than medical or nursing procedures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Home care encompasses a wide range of services from nutrition and bathing to Alzheimer&apos;s and dementia care. Professional caregivers can work alongside family members to help seniors maintain independence and quality of life while staying in their homes.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600 font-bold">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Personal Care Services</h4>
                    <p className="text-gray-600 text-sm">Bathing, dressing, mobility assistance, and incontinence care</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600 font-bold">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Companionship & Home Help</h4>
                    <p className="text-gray-600 text-sm">Meal prep, medication reminders, shopping, and housekeeping</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600 font-bold">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Specialized Dementia Care</h4>
                    <p className="text-gray-600 text-sm">Managing behaviors, encouraging engagement, and ensuring safety</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">A Typical Day of Care</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">🌅</span>
                  <span>Morning routine: shower, breakfast, and medication reminders</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">🧹</span>
                  <span>Light housekeeping and laundry while chatting</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">📸</span>
                  <span>Reminiscing over photo albums and family stories</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">🍽️</span>
                  <span>Preparing and sharing nutritious meals together</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">🚶</span>
                  <span>Outdoor walks for fresh air and exercise</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">😴</span>
                  <span>Evening care and safe bedtime assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Signs Your Loved One May Need Care */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Does Your Loved One Need Help?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These common signs may indicate that professional caregiving assistance would benefit your family member.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Doesn't want to cook anymore",
              "Needs help with sitting to standing transitions",
              "Gets up multiple times during the night",
              "Personal hygiene is declining",
              "Diagnosed with Alzheimer&apos;s or dementia",
              "Leaves appliances on and forgets about them",
              "Housekeeping isn't maintained",
              "Household bills aren't being paid",
              "Medications aren't taken on schedule",
              "Recently lost spouse or seems lonely",
              "Driving is becoming a safety concern",
              "Arthritis makes simple tasks difficult",
            ].map((sign, index) => (
              <div key={index} className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-blue-50 transition">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">{sign}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-blue-50 border-2 border-blue-200 rounded-xl">
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-gray-900">If you&apos;ve noticed any of these signs,</span> your loved one may benefit from professional home care. Many families find that home care allows their loved ones to maintain independence and dignity while receiving the support they need.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits of Home Care */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Home Care Matters
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                For many seniors, home care provides a way to maintain independence and quality of life while receiving the support they need. Staying in a familiar home environment with professional assistance can have significant benefits for both physical and emotional wellbeing.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">
                    <span className="font-semibold">Independence</span> — Remaining in one&apos;s own home
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">
                    <span className="font-semibold">Familiarity</span> — Staying in a comfortable, known environment
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">
                    <span className="font-semibold">Community Connection</span> — Maintaining relationships with neighbors and community
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">
                    <span className="font-semibold">Dignity & Control</span> — Maintaining autonomy over daily life
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">
                    <span className="font-semibold">Emotional Health</span> — Research shows staying at home supports mental wellbeing
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-12 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What to Consider When Evaluating Home Care</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-blue-600 text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Training & Qualifications</p>
                    <p className="text-sm text-gray-600">Professional caregivers should have proper training and background checks</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Customization</p>
                    <p className="text-sm text-gray-600">Services should be tailored to individual needs and preferences</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Communication</p>
                    <p className="text-sm text-gray-600">Good providers work closely with families and keep them informed</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Flexibility</p>
                    <p className="text-sm text-gray-600">Services should adapt as needs change over time</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Resources */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Local Resources for Seniors and Families
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milwaukee and Wisconsin offer numerous resources to support aging adults and their families. Here are some valuable organizations to explore.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl border border-blue-200 hover:shadow-lg transition">
              <div className="flex gap-4 mb-4">
                <div className="text-3xl">🏛️</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">County Support</h3>
                  <p className="text-sm text-gray-600">Milwaukee County Services</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Milwaukee County&apos;s Department of Health and Human Services provides comprehensive programs, financial assistance, and resources for older adults.
              </p>
              <a href="https://county.milwaukee.gov/EN/DHHS/Older-Adults-Services" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn about county programs →
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl border border-green-200 hover:shadow-lg transition">
              <div className="flex gap-4 mb-4">
                <div className="text-3xl">🏠</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Alternative Options</h3>
                  <p className="text-sm text-gray-600">Assisted Living Services</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Vestas Senior Network provides information about assisted living facilities and senior housing options throughout the Milwaukee area.
              </p>
              <a href="https://www.vestaseniornetwork.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-semibold">
                Explore assisted living →
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl border border-purple-200 hover:shadow-lg transition">
              <div className="flex gap-4 mb-4">
                <div className="text-3xl">❤️</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">End-of-Life Care</h3>
                  <p className="text-sm text-gray-600">Hospice Services</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Agrace Hospice provides information about end-of-life care and family support services in the Wauwatosa and surrounding areas.
              </p>
              <a href="https://www.agrace.org/locations/wauwatosa/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 font-semibold">
                Learn about hospice care →
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl border border-amber-200 hover:shadow-lg transition">
              <div className="flex gap-4 mb-4">
                <div className="text-3xl">🏥</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Home Care Information</h3>
                  <p className="text-sm text-gray-600">Local Providers</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Home Instead Senior Care is one of several local providers offering home care services in the Milwaukee North area.
              </p>
              <a href="https://www.homeinstead.com/home-care/usa/wi/milwaukee-north/315/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-semibold">
                Explore Home Instead →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Explore More Information
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            This website provides educational information about home care for seniors in the Milwaukee area. Browse articles, learn about different types of care, and explore resources to help with family decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/home-care-services/senior-care/" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition shadow-lg border-2 border-blue-600">
              Learn About Services
            </Link>
            <Link href="/blog/" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-lg">
              Read Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
