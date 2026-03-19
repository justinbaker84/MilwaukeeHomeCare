import Link from 'next/link';

export default function SelfCarePost() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Give Yourself the Gift of Self-Care
          </h1>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <img
            src="/give-yourself-the-gift-of-self-care.png"
            alt="Give Yourself the Gift of Self-Care"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-gray-800">
          <p className="text-lg leading-relaxed">
            The holiday season is a joyous time of year filled with good food, fellowship, and the exchanging of presents. As an informal caregiver, the greatest gift of all is the love and nurturing you provide to older loved ones year-round so they can age in place with dignity and respect. But with everything else on your plate, it's also vital to focus on your health and well-being as the calendar transitions to a new year. If you're not sure how to stay recharged this holiday season, what follows are several self-care tips that every family caregiver should know.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6 pb-3 border-b-2 border-blue-200">Holiday Caregiver Burnout Warning Signs</h2>

          <p className="text-lg leading-relaxed">
            As the holiday season approaches, the average caregiver runs the risk of getting overworked, overtired, and overstressed. Exhaustion, worry, limited resources, and strained relationships are daily challenges that caregivers face at any time of year.
          </p>

          <p className="text-lg leading-relaxed">Caregiver burnout warning signs include:</p>

          <ul>
            <li>Sleep deprivation</li>
            <li>Anxiety and depression</li>
            <li>Difficulty performing simple tasks</li>
            <li>Rapid weight gain or loss</li>
            <li>Postponing or completely ignoring medical appointments</li>
            <li>Substance abuse</li>
            <li>Not exercising enough</li>
            <li>Poor eating habits</li>
            <li>Lack of interest in activities once enjoyed</li>
            <li>Social isolation and loneliness</li>
          </ul>

          <p className="text-lg leading-relaxed">
            No matter how hard you try, ignoring these symptoms won't make them go away. If allowed to persist, caregiver burnout will eventually put a damper on your holiday festivities.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6 pb-3 border-b-2 border-blue-200">How to Stay Refreshed All Season Long</h2>

          <p className="text-lg leading-relaxed">Here are several ways to avoid caregiver burnout this holiday season:</p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Prioritize tasks</h3>

          <p className="text-lg leading-relaxed">
            No matter how hard you try, your loved one's condition will eventually worsen. Rather than allowing yourself to get overwhelmed, prioritize your daily tasks and focus on the most important ones — like taking Grandma to your child's school holiday program. After all, even Santa Claus takes vacations!
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Get enough sleep</h3>

          <p className="text-lg leading-relaxed">
            The human body requires seven to eight hours of sleep every day to replenish its energy stores and heal. Lying awake at night worrying about things outside your control won't make you feel very jolly this holiday season.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Eat healthier</h3>

          <p className="text-lg leading-relaxed">
            Although they may be harder to avoid at holiday gatherings, fat-filled and sugary foods aren't the long-term solution to a healthier you. Instead, eat a nutrient-rich diet filled with fresh fruits, veggies, beans, and nuts.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Reward yourself</h3>

          <p className="text-lg leading-relaxed">
            Not everyone has what it takes to be a successful caregiver. Reward yourself for a job well done by doing something you enjoy every week. Use your newfound downtime to get a massage, learn a new hobby, or binge-watch your favorite Christmas movies. After all, you've earned it!
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Keep a caregiving journal</h3>

          <p className="text-lg leading-relaxed">
            Another way to emotionally decompress is by keeping a daily caregiving journal. Use it to record both positive and negative experiences that you are going through — like the fact you were able to get Mom out of the house today to help wrap presents.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Exercise regularly</h3>

          <p className="text-lg leading-relaxed">
            Exercising for at least 20 minutes 3 to 5 times a week will help you reduce stress, sleep better, and fight off illnesses — all of which will keep you feeling refreshed to decorate the tree or bake cookies.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Join a support group</h3>

          <p className="text-lg leading-relaxed">
            Caregiver support groups are a great place to share your innermost feelings with like-minded individuals who understand what you're going through. Whether you attend online or in-person, fellow group members can also be an invaluable source of caregiving tips.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Seek professional counseling</h3>

          <p className="text-lg leading-relaxed">
            Negative feelings like anxiety and depression can make you feel like a Grinch when least expected. Speaking with a licensed therapist will provide you with the opportunity to express your thoughts without being judged. A professional counselor can also provide you with tips on staying positive when nothing else seems to work.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Take a break</h3>

          <p className="text-lg leading-relaxed">
            Asking for help doesn't make you a failure. Avoid burnout by seeking relief through community resources, family, or trusted friends. Another option at your disposal is hiring a professional respite caregiver from a reputable home care provider.
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
