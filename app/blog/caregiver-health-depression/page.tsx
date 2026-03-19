import Link from 'next/link';

export default function CaregiverDepressionPost() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Caregiver Health: Depression and Caregiving
          </h1>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <img
            src="/Caregiver-Health-Depression-and-Caregiving.png"
            alt="Caregiver Health: Depression and Caregiving"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p>
            Family caregivers spend an average of more than 24 hours a week helping their loved ones continue to live at home. Unfortunately, this time commitment and all the other obligations a caregiver has often put their physical and mental health at the bottom of their to-do list.
          </p>

          <p>
            Over time, that sacrifice can have serious consequences. For example, the Family Caregiver Alliance reports that 40% to 70% of caregivers have symptoms of depression. While genetics, brain chemistry, and life experiences can play a role in depression, caregiving can accelerate its onset.
          </p>

          <h2>The symptoms of depression</h2>

          <p>
            If you're a family caregiver and have been feeling down more than usual, take a moment to evaluate how you're feeling and look at these commons symptoms of depression:
          </p>

          <ul>
            <li>Becoming easily agitated or frustrated</li>
            <li>Feelings of worthlessness or guilt</li>
            <li>Feelings of hopelessness</li>
            <li>Thoughts of death, dying, or suicide</li>
            <li>Disturbed sleep</li>
            <li>Fatigue or loss of energy</li>
            <li>Loss of interest or pleasure in usual activities</li>
            <li>Difficulty thinking or concentrating</li>
            <li>Changes in appetite and weight</li>
            <li>Physical symptoms that do not respond to treatment, such as headaches, digestive disorders, and pain</li>
          </ul>

          <p>
            If you're concerned that you might be suffering from depression, see your doctor as soon as possible. Some medical conditions and certain medications can cause similar symptoms to depression; your doctor can do a medical exam and lab tests to rule these out.
          </p>

          <h2>Treatment for depression</h2>

          <p>
            Depression can be effectively treated. And the sooner treatment begins, the sooner you'll feel better. Treatment often involves a combination of medication, therapy, and support.
          </p>

          <h3>Medication</h3>

          <p>
            Antidepressants are very effective in treating depression. Keep in mind that it will take time for you to feel the full benefit. In some cases, it may take 4-6 weeks. Once you begin taking antidepressants, don't stop without first consulting your doctor. Stopping abruptly can cause unwanted side effects.
          </p>

          <h3>Counseling</h3>

          <p>
            With or without antidepressants, your doctor may refer you to a counselor, psychologist, psychiatrist, or social worker. Counseling can also be a valuable treatment for depression by helping you address the problems you're facing.
          </p>

          <p>
            You may want to interview several professionals before selecting one to work with. It's important that you feel comfortable with the person you'll be talking with. Your doctor, insurance provider, or community mental health clinic may be able to provide referrals.
          </p>

          <h3>Support</h3>

          <p>
            Besides medication and counseling, support from family and friends is also essential for treating depression. The people close to you will be happy to pitch in if you ask them to help with some of your daily tasks, such as meal preparation, laundry, light housekeeping, and running errands.
          </p>

          <p>
            Also, consider respite care. With respite care, a professional caregiver will care for your loved one while you take some time to rest and recharge your batteries. They can help out for a few hours a day, a few days a week, or more. You'll have peace of mind knowing that an experienced pro is caring for your loved one.
          </p>
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
