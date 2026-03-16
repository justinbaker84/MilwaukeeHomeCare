import Link from "next/link";

export default function HomeCareServices() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Understanding Home Care Services in Northern Milwaukee
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Home care represents one of the most flexible approaches to supporting seniors who wish to remain in their own homes while managing health challenges or aging-related needs. Unlike facility-based care, in-home care brings professional support directly to where seniors live, allowing them to maintain independence, familiar routines, and the comfort of their personal environment.
          </p>
        </div>
      </section>

      {/* When Home Care Becomes Relevant */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            When Home Care Becomes Relevant
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Home care services can play an important role at various stages of the aging journey. Some individuals benefit from periodic support during recovery from an illness or hospital stay, while others require consistent daily assistance. Many families find that home care provides the flexibility they need — services can be adjusted as circumstances change, whether increasing support gradually over time or scaling back as someone recovers.
            </p>
          </div>
        </div>
      </section>

      {/* Flexibility of Home Care */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            The Flexibility of Home Care Arrangements
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              One of the primary advantages of home care is its adaptability. Care plans can be designed to fit different schedules, family dynamics, and financial considerations. Whether someone needs a few hours of support each week or round-the-clock care, home care can be structured to meet those specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Home Care Services */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Types of Home Care Services
          </h2>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Home care encompasses a broad range of support services, each addressing different aspects of daily living and health management:
          </p>

          <div className="space-y-12">
            {/* Personal Support */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Support</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Assistance with bathing, dressing, and grooming</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Help with mobility and transfers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Incontinence care and personal hygiene</span>
                </li>
              </ul>
            </div>

            {/* Household and Daily Tasks */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Household and Daily Tasks</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Meal preparation and nutrition support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Light housekeeping and laundry</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Grocery shopping and errands</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Medication reminders</span>
                </li>
              </ul>
            </div>

            {/* Companionship and Engagement */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Companionship and Engagement</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Social interaction and conversation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Transportation to appointments or outings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Encouragement for physical activity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Memory care support for those with cognitive changes</span>
                </li>
              </ul>
            </div>

            {/* Specialized Care Support */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized Care Support</h3>
              <p className="text-gray-700 mb-4">
                Many individuals have specific health conditions that require specialized knowledge and attention. Home care can provide support for:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Assistance for those with Alzheimer&apos;s disease or other dementias</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Support for individuals with Parkinson&apos;s disease</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Management of arthritis and other chronic conditions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Diabetes care and monitoring</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Respite care to provide family caregivers with breaks</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>End-of-life care support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>24-hour live-in care for intensive needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Care Training */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            The Importance of Quality Care Training
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Effective home care relies heavily on the quality and training of caregiving professionals. Well-trained caregivers understand how to provide physical assistance safely, recognize changes in a person&apos;s condition, communicate effectively with families and healthcare providers, and approach their work with both competence and compassion. Professional training programs ensure that caregivers have the knowledge and skills to handle various situations and conditions they may encounter.
            </p>
          </div>
        </div>
      </section>

      {/* Finding the Right Care Solution */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Finding the Right Care Solution
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <p>
              Because home care needs vary so widely from person to person, finding an appropriate arrangement often requires careful consideration of someone&apos;s specific situation — including their health status, living environment, family support system, and preferences about how they want to receive care.
            </p>
          </div>

          {/* Links to Specific Services */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Learn More About Specific Services</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/home-care-services/senior-care/what-is-home-care/" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                → What is Home Care?
              </Link>
              <Link href="/home-care-services/senior-care/personal-care-services/" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                → Personal Care Services
              </Link>
              <Link href="/home-care-services/senior-care/companionship-services/" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                → Companionship Services
              </Link>
              <Link href="/home-care-services/senior-care/meals-and-nutrition/" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                → Meals and Nutrition
              </Link>
              <Link href="/home-care-services/senior-care/transportation/" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                → Transportation
              </Link>
              <Link href="/home-care-services/senior-care/alzheimers-dementia-services/" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                → Alzheimer&apos;s & Dementia Care
              </Link>
              <Link href="/home-care-services/senior-care/household-duties/" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                → Household Duties
              </Link>
              <Link href="/home-care-services/senior-care/veteran-care/" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                → Veteran Care
              </Link>
              <Link href="/home-care-services/senior-care/respite-care/" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                → Respite Care
              </Link>
              <Link href="/home-care-services/senior-care/hospice-care-services/" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                → Hospice Care Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Related Home Care Resources
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            In addition to private home care services, several local organizations provide information and support for seniors and their families.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3">County Services</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Milwaukee County offers programs and financial assistance for older adults needing support.
              </p>
              <a href="https://county.milwaukee.gov/EN/DHHS/Older-Adults-Services" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Learn about county resources →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3">Alternative Care Options</h3>
              <p className="text-gray-700 mb-4 text-sm">
                If you&apos;re exploring different care arrangements, assisted living facilities may be an option to consider.
              </p>
              <a href="https://www.vestaseniornetwork.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Explore assisted living →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}