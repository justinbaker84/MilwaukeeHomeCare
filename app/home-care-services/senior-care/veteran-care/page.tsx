export default function VeteranCare() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Veterans and Home Care Support
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Many veterans and their surviving spouses may be eligible for benefits that can help pay for in-home care services. Understanding what benefits are available and how to access them is an important part of planning for long-term care.
          </p>
        </div>
      </section>

      {/* Veterans and Care Needs */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Veterans and Home Care Needs
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Veterans represent a significant population of older adults, and many face health challenges related to military service, aging, or both. Like all older adults, some veterans develop needs for assistance with daily activities, medical management, or personal care. Home-based care can allow veterans to age in place while maintaining independence and connection to their communities.
            </p>

            <p>
              For many veterans and their families, home care may seem financially out of reach. However, various benefit programs may help offset the costs of home care services. Understanding these benefits and how to access them can make quality care more affordable and accessible.
            </p>
          </div>
        </div>
      </section>

      {/* VA Benefits Overview */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Understanding Veteran Benefits
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              The Veterans Administration (VA) administers several benefit programs that may help veterans and their surviving spouses pay for care services. These programs are designed to recognize the service and sacrifice of veterans and provide financial support for long-term care needs.
            </p>

            <p>
              The main benefit programs that may help pay for home care include:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Veterans Pension Benefit</strong> — A monthly tax-free benefit available to eligible veterans who meet income and service requirements</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Aid & Attendance Allowance</strong> — An additional monthly benefit for veterans or surviving spouses who require assistance with personal care or who are homebound</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Housebound Benefit</strong> — An additional benefit for veterans who are substantially confined to home</span>
              </li>
            </ul>

            <p>
              These benefits are tax-free and can be used to help pay for various care services, including in-home care, adult day care, assisted living, or other long-term care options. The specific amounts and eligibility criteria for these benefits can change, so it's important to check current information through the VA.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Eligibility for VA Benefits
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Not all veterans or surviving spouses qualify for VA benefits, but eligibility criteria may be less restrictive than many people assume. Basic eligibility generally requires:
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Requirements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Honorable discharge from military service</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>At least 90 days of active duty service with at least one day during a war period (or designated peacetime period)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Age and Health Requirements</h3>
              <ul className="space-space-y-3 text-gray-700">
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span><strong>For veterans under age 65:</strong> Must be rated as permanently and totally disabled by the VA</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span><strong>For veterans age 65 and older:</strong> No disability rating required</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span><strong>For surviving spouses:</strong> Eligibility based on the veteran's service record and the surviving spouse's own eligibility</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Requirements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Income and assets must fall within government-set limits (these limits allow for moderate income and some assets)</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Financial criteria include consideration of medical expenses and living costs</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Care Need Requirements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>For Aid & Attendance Allowance: Documented need for assistance with personal care activities or being substantially homebound</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Medical documentation supporting the need for care services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Care Covered */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Types of Care Services Covered
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            VA benefits for home care can potentially help pay for various types of in-home services, including:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3">Personal Care Services</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Bathing and personal hygiene</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Dressing and grooming</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Toileting assistance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3">Household Support</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Light housekeeping</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Laundry</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>General cleaning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3">Meal Support</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Meal planning and preparation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Grocery shopping</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Nutrition support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3">Health Support</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Medication reminders</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Mobility assistance</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Companionship</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg border-2 border-blue-200">
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Important note:</span> The specific services and amounts covered may vary based on individual circumstances and current VA guidelines. It's important to explore eligibility and available benefits with official VA resources or veteran service officers.
            </p>
          </div>
        </div>
      </section>

      {/* Navigating the Process */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Navigating the Application Process
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Applying for VA benefits can feel complex and overwhelming. The application process typically involves:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Gathering documentation</strong> — Military discharge papers, birth certificates, marriage certificates, and other documents verifying service and eligibility</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Medical documentation</strong> — Records supporting the need for care services</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Financial documentation</strong> — Income, asset, and expense information</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Submitting applications</strong> — Completing and submitting required forms</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Following up</strong> — Working with VA staff to address requests for additional information</span>
              </li>
            </ul>

            <p>
              Many veterans find it helpful to work with a veteran service officer or advocate who can help navigate this process and ensure applications are complete and properly submitted.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Help */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Resources for Veteran Support
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Veterans and their families seeking information about benefits have several resources available:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>County Veteran Services Offices</strong> — Most counties have dedicated veteran service officers who can provide information and assistance with benefit applications</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Veterans Administration Office</strong> — Direct contact with the VA through regional offices or online resources</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Veteran Organizations</strong> — Groups like American Legion, Veterans of Foreign Wars (VFW), and other veteran organizations often have staff who can help navigate benefits</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Legal Aid</strong> — Some nonprofits and legal aid organizations offer free or low-cost assistance with benefit applications</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Online Resources</strong> — The VA maintains websites with benefits information and applications</span>
              </li>
            </ul>

            <p>
              Don't hesitate to reach out to these resources. Veteran service officers and advocates are experienced in helping veterans and surviving spouses understand their benefits and navigate the application process. Many services are provided at no cost to veterans.
            </p>
          </div>
        </div>
      </section>

      {/* Combining Benefits with Care */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Using Benefits to Access Quality Care
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Veterans who qualify for VA benefits have various options for how to use those benefits. In-home care is one option that allows veterans to receive support while remaining in their own homes. Other options might include assisted living facilities, adult day programs, or combinations of different services.
            </p>

            <p>
              When exploring care options, veterans and their families can consider:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Individual preferences about where and how to receive care</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Specific care needs and what services would be most beneficial</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Quality and reputation of care providers</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>How benefits can be maximized to support the veteran's goals</span>
              </li>
            </ul>

            <p>
              Veterans have earned their benefits through service to the country. Understanding what benefits are available and how to access them ensures that veterans can get the support they need to maintain quality of life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
