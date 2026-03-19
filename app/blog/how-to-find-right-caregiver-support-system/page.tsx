import Link from 'next/link';

export default function CaregiverSupportPost() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How to Find the Right Caregiver Support System
          </h1>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <img
            src="/How-to-Find-the-Right-Caregiver-Support-System-.png"
            alt="How to Find the Right Caregiver Support System"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-gray-800">
            <p className="text-lg leading-relaxed">
              Each year, millions of Americans selflessly devote their time and talents to care for aging-in-place friends and relatives. Whether new to the caregiving game or a seasoned pro, a reliable support system is key to staying organized and focused. Your share of the caregiving duties can vary depending on the level of required care, the number of caregivers involved, and the time commitment it takes. Using these tips when developing your caregiving support system will help ensure all your loved one's needs get met.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6 pb-3 border-b-2 border-blue-200">Assess Your Loved One's Needs</h2>

            <p className="text-lg leading-relaxed">
              The first step in creating an efficient eldercare game plan is to gather information and address any immediate concerns. Considering all aspects of your senior's daily life will result in a more well-rounded strategy for dealing with family concerns.
            </p>

            <p className="text-lg leading-relaxed">
              Take time to review your loved one's home environment, health status, medical and legal documents, financial affairs, and – most importantly – their ability to perform activities of daily living (ADLs). If your senior is like most, they might initially resist help from an "outsider" for reasons like pride or privacy. However, assessing their current and future needs is essential for developing a suitable support system that you can quickly implement when the time comes.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6 pb-3 border-b-2 border-blue-200">Prioritize Caregiving Tasks</h2>

            <p className="text-lg leading-relaxed">
              Based on your initial care assessment, determine what's lacking or getting overlooked in their current routine. Then ask yourself, "What objectives would I like to help them achieve?" Once you've answered that question, make an ordered list of caregiving needs while ranking them in order of importance.
            </p>

            <p className="text-lg leading-relaxed">
              For instance, you may want Mom to eat healthier this year or for Dad to exercise more. While compiling your home care list, don't forget to respect your loved one's wishes if their condition would happen to grow worse due to an injurious fall or chronic illness. You can also use this same approach to help them prepare for long-term objectives like advance care planning, estate planning, financial planning, or funeral planning.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6 pb-3 border-b-2 border-blue-200">Start a Care "Dream Team"</h2>

            <p className="text-lg leading-relaxed">
              When creating an eldercare game plan, the tendency is to try and do everything yourself. But embarking on this journey alone can be overwhelming and lead to significant physical and emotional consequences resulting in caregiver burnout.
            </p>

            <p className="text-lg leading-relaxed">
              Instead, build a care "dream team" roster, starting with trusted family members, community volunteers, and friends. Take an inventory of all the resources at your disposal and assign tasks based on each member's time and talents.
            </p>

            <p className="text-lg leading-relaxed">
              Then, recruit specialists like doctors, nurses, physical and occupational therapists, dieticians, and pharmacists to fill caregiving gaps. Eldercare experts like elder law attorneys, benefits counselors, financial advisors, and certified public accountants can also be invaluable additions to your care team. A geriatric care manager can offer professional insight for organizing, monitoring, and facilitating your loved one's care as their needs become more complex.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6 pb-3 border-b-2 border-blue-200">Fill in Any Remaining Gaps</h2>

            <p className="text-lg leading-relaxed">
              If your care plan still has holes, don't hesitate to fill them with outside resources like a meal delivery service, online pharmacy, ride-sharing service, or adult day care. Your local Area Agency on Aging (AAA) can also be an invaluable resource for locating senior services you otherwise may not be familiar with.
            </p>



          </div>
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
