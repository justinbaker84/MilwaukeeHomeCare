import Link from "next/link";

export default function SeniorCare() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Senior Care Services: An Overview
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Senior care encompasses a wide range of in-home support designed to help older adults manage daily activities, maintain their health, and continue living independently in their own homes. Unlike medical or skilled nursing care, senior care focuses on assistance with everyday tasks and quality-of-life support.
          </p>
        </div>
      </section>

      {/* Understanding Senior Care */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Understanding Senior Care
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Senior care, sometimes called non-medical in-home care, refers to assistance that does not involve medical procedures such as wound care or medication administration. Instead, it provides practical, compassionate support with the everyday activities that many seniors find challenging. This type of care combines physical assistance with emotional support and companionship, recognizing that quality of life involves both practical help and human connection.
            </p>
          </div>
        </div>
      </section>

      {/* Common Activities */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Common Activities in Senior Care
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Professional caregivers in senior care roles typically provide assistance with:
          </p>
          
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold flex-shrink-0">•</span>
              <span><strong>Personal hygiene</strong> — Bathing, showering, grooming, and dressing</span>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold flex-shrink-0">•</span>
              <span><strong>Meal preparation</strong> — Planning, shopping, cooking, and nutrition</span>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold flex-shrink-0">•</span>
              <span><strong>Household management</strong> — Cleaning, laundry, and tidying</span>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold flex-shrink-0">•</span>
              <span><strong>Mobility assistance</strong> — Helping with movement, transfers, and preventing falls</span>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold flex-shrink-0">•</span>
              <span><strong>Medication reminders</strong> — Helping seniors remember when to take medications</span>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold flex-shrink-0">•</span>
              <span><strong>Transportation and errands</strong> — Rides to appointments, shopping, and social activities</span>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold flex-shrink-0">•</span>
              <span><strong>Companionship</strong> — Social interaction, conversation, and emotional support</span>
            </li>
          </ul>
        </div>
      </section>

      {/* When Senior Care Is Beneficial */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            When Senior Care Is Beneficial
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Senior care can play a role at various points in the aging journey:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-2">During recovery</h4>
              <p className="text-gray-700 text-sm">After hospitalization or acute illness</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-2">Early support needs</h4>
              <p className="text-gray-700 text-sm">When someone first needs help with certain tasks</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-2">Progressive conditions</h4>
              <p className="text-gray-700 text-sm">As needs gradually increase over time</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-2">Specific challenges</h4>
              <p className="text-gray-700 text-sm">For conditions like arthritis, diabetes, or cognitive decline</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-2">Intensive situations</h4>
              <p className="text-gray-700 text-sm">For 24-hour support or round-the-clock care</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-2">Specialized conditions</h4>
              <p className="text-gray-700 text-sm">For Alzheimer&apos;s disease, Parkinson&apos;s disease, or dementia</p>
            </div>
          </div>
        </div>
      </section>


      {/* Role of Trained Caregivers */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            The Role of Trained Caregivers
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Caregivers who work in senior care environments benefit from professional training that covers safe physical assistance techniques, communication skills, recognizing changes in health status, and approaching care with both competence and compassion. This training ensures they can handle various situations appropriately and respond to the individual needs and dignity of the people they support.
            </p>
          </div>
        </div>
      </section>

      {/* Related Service Pages */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Explore Specific Service Types
          </h2>
          
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
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
              <Link href="/home-care-services/senior-care/24-hour-care/" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                → 24-Hour Care
              </Link>
              <Link href="/home-care-services/senior-care/senior-conditions/" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                → Arthritis, Diabetes & Other Conditions
              </Link>
              <Link href="/home-care-services/senior-care/nurse-directed-home-care/" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                → Nurse Directed Home Care
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Additional Resources and Options
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            While in-home senior care is a valuable option, Milwaukee-area families have several resources to explore when making decisions about care arrangements.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3">County Support Programs</h3>
              <p className="text-gray-700 mb-4">
                Milwaukee County offers a variety of assistance programs and information services for older adults and their families.
              </p>
              <a href="https://county.milwaukee.gov/EN/DHHS/Older-Adults-Services" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
                Explore Milwaukee County services →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3">Private Pay Home Care Providers</h3>
              <p className="text-gray-700 mb-4">
                Home Instead Senior Care is another option in the Milwaukee North area offering various levels of in-home support.
              </p>
              <a href="https://www.homeinstead.com/home-care/usa/wi/milwaukee-north/315/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
                Home Instead Senior Care - Milwaukee North →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
