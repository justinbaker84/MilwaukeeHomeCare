import Link from 'next/link';

export default function MemoryCarePost() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Is Your Loved One Ready for Memory Care?
          </h1>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <img
            src="/Is-Your-Loved-One-Ready-for-Memory-Care-1.png"
            alt="Is Your Loved One Ready for Memory Care?"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p>
            Memory loss related to Alzheimer's disease and other forms of dementia is a progressive condition that worsens over time. As their degree of memory loss increases, your loved one will require an increasing amount of care, which may eventually become a full-time need. While families do all they can to provide loving and compassionate care for an aging adult with increasing memory loss, specialized care from a well-trained professional caregiver may become necessary if you want them to continue living at home. How do you know as a family caregiver that you need help providing the care your loved one needs? Here are five signs that are commonly recognized indicators that professional memory care may be needed.
          </p>

          <h2>Your loved one is struggling with activities of daily living</h2>

          <p>
            This is a common benchmark used to judge if a senior needs extra help. As a family member, you may have noticed that their level of self-care has changed, such as not dressing correctly, bathing infrequently, or having a noticeable body odor.
          </p>

          <h2>They're getting lost on routes they take frequently</h2>

          <p>
            From trips to the grocery store to walks around the neighborhood, your loved one is losing their bearings while they're out, and you're becoming increasingly concerned that you're going to soon need help finding them.
          </p>

          <h2>They aren't taking their medications properly</h2>

          <p>
            Seniors in the early stages of Alzheimer's and dementia will begin to either underdose, overdose, or totally forget to take their medications. This can lead to further health complications, necessitating additional care.
          </p>

          <h2>You're concerned for their safety</h2>

          <p>
            If your loved one is leaving appliances or burners on after cooking, leaving doors open or unlocked, or wandering and getting lost, their safety is in jeopardy. Unexplained bruises they don't remember getting are also a red flag that should be taken seriously.
          </p>

          <h2>Their living conditions are subpar</h2>

          <p>
            If you're noticing that mail is piling up, the food in the refrigerator is spoiled, their once tidy home or room is constantly messy, dirty dishes are left out, etc., it may very well be time for outside assistance.
          </p>

          <h2>What professional memory care typically includes</h2>

          <p>
            When the time comes to bring in professional support, a trained in-home caregiver can assist seniors with memory-related conditions in many important ways:
          </p>

          <ul>
            <li>Encouragement to do as much as they can on their own</li>
            <li>Personal care assistance, such as toileting, bathing, and grooming</li>
            <li>Maintaining a routine to discourage agitation and outbursts</li>
            <li>Mental stimulation through conversation and other activities</li>
            <li>Maintaining a safe environment</li>
            <li>Managing changing behaviors</li>
            <li>Adapting the level of care as the disease progresses</li>
            <li>Honoring who the senior was earlier in life</li>
            <li>Providing nutritious meals</li>
            <li>Assisting with ambulation and socialization</li>
            <li>Transportation to medical appointments and other events</li>
            <li>Supporting the family</li>
            <li>Light housework and other household tasks</li>
            <li>Pet care</li>
          </ul>
        </div>
      </article>



      {/* Local Resources for Seniors and Families */}
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
                Milwaukee County&#39;s Department of Health and Human Services provides comprehensive programs, financial assistance, and resources for older adults.
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

            <div className="bg-white p-8 rounded-xl border border-teal-200 hover:shadow-lg transition">
              <div className="flex gap-4 mb-4">
                <div className="text-3xl">🔧</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Adaptive Equipment &amp; Home Modification</h3>
                  <p className="text-sm text-gray-600">Home Safety Solutions</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                BILD provides adaptive equipment and home modification services to help seniors live safely and independently in their own homes.
              </p>
              <a href="https://www.bildnow.com/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 font-semibold">
                Explore adaptive equipment →
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl border border-indigo-200 hover:shadow-lg transition">
              <div className="flex gap-4 mb-4">
                <div className="text-3xl">⚖️</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Elderlaw Resources</h3>
                  <p className="text-sm text-gray-600">Legal Services for Seniors</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Elder law attorneys can help families navigate legal matters related to aging, including estate planning, guardianship, and long-term care planning.
              </p>
              <a href="https://lawmwc.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                Explore elderlaw resources →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
