import Link from 'next/link';

export default function DementiaBehaviorsPost() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            A Caregiver's Guide to Dementia Behaviors
          </h1>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <img
            src="/A-Caregivers-Guide-to-Dementia-Behaviors-.png"
            alt="A Caregiver's Guide to Dementia Behaviors"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p>
            Being a family caregiver for a loved one with dementia is very demanding. As many as 90 percent of caregivers caring for people who have dementia say their loved one exhibits behavior that is worrisome or challenging for them. If you're wondering if the behaviors you're seeing from your loved one are typical of seniors with dementia, The Family Caregiver Alliance has found these behaviors to be commonly found as a guide to dementia:
          </p>

          <h2>Wandering</h2>

          <p>
            People with dementia walk seemingly aimlessly for various reasons, such as boredom, medication side effects, or to look for "something" or someone. They also may be trying to fulfill a physical need—thirst, hunger, a need to use the toilet or exercise.
          </p>

          <h2>Incontinence</h2>

          <p>
            The loss of bladder or bowel control often occurs as dementia progresses. Sometimes accidents result from environmental factors; for example, someone can't remember where the bathroom is located or can't get to it in time.
          </p>

          <h2>Agitation</h2>

          <p>
            Agitation refers to various behaviors associated with dementia, including irritability, sleeplessness, and verbal or physical aggression. Often these types of behavior problems progress with the stages of dementia, from mild to more severe.
          </p>

          <p>
            Agitation may be triggered by a variety of things, including environmental factors, fear, and fatigue. Most often, agitation is triggered when the person experiences "control" being taken from them.
          </p>

          <h2>Repetitive speech or actions</h2>

          <p>
            People with dementia often repeat a word, statement, question, or activity repeatedly. While this behavior is usually harmless for the person with dementia, it can be annoying and stressful to caregivers. Sometimes the behavior is triggered by anxiety, boredom, fear, or environmental factors.
          </p>

          <h2>Paranoia</h2>

          <p>
            Seeing a loved one suddenly become suspicious, jealous, or accusatory is unsettling. Remember, what the person is experiencing is very real to them. It is best not to argue or disagree. This, too, is part of dementia—try not to take it personally.
          </p>

          <h2>Sleeplessness</h2>

          <p>
            Restlessness, agitation, disorientation, and other troubling behavior in people with dementia often get worse at the end of the day and sometimes continue throughout the night.
          </p>

          <p>
            Experts believe this behavior, commonly called sundowning, is caused by a combination of factors, such as exhaustion from the day's events and changes in the person's biological clock that confuse day and night.
          </p>

          <h2>Eating/Nutrition</h2>

          <p>
            Ensuring your loved one is eating enough nutritious foods and drinking enough fluids is challenging. People with dementia begin to forget that they need to eat and drink. Complicating the issue may be dental problems or medications that decrease appetite or make food taste "funny." The consequences of poor nutrition are many, including weight loss, irritability, sleeplessness, bladder or bowel problems, and disorientation.
          </p>

          <h2>Hygiene</h2>

          <p>
            People with dementia often have difficulty remembering "good" hygiene, such as brushing their teeth, toileting, bathing, and regularly changing their clothes. From childhood, we are taught these are highly private and personal activities; to be undressed and cleaned by another can feel frightening, humiliating, and embarrassing. As a result, bathing often causes distress for both caregivers and their loved ones.
          </p>

          <h2>Additional problem areas include:</h2>

          <ul>
            <li>Dressing</li>
            <li>Hallucinations</li>
            <li>Sexually inappropriate behavior</li>
            <li>Verbal outbursts</li>
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
