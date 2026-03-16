import Link from 'next/link';

export default function SelfCarePost() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-block text-blue-600 hover:text-blue-700 mb-4">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Give Yourself the Gift of Self-Care
          </h1>
          <p className="text-gray-600">November 2023</p>
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

          <ul className="space-y-3 ml-6 text-lg">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">•</span>
              <span>Sleep deprivation</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">•</span>
              <span>Anxiety and depression</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">•</span>
              <span>Difficulty performing simple tasks</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">•</span>
              <span>Rapid weight gain or loss</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">•</span>
              <span>Postponing or completely ignoring medical appointments</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">•</span>
              <span>Substance abuse</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">•</span>
              <span>Not exercising enough</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">•</span>
              <span>Poor eating habits</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">•</span>
              <span>Lack of interest in activities once enjoyed</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">•</span>
              <span>Social isolation and loneliness</span>
            </li>
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

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Flexible In-Home Respite Care for Seniors in Northern Milwaukee</h2>

            <p className="text-lg leading-relaxed text-blue-900 mb-4">
              When you're ready to take a well-deserved break any time of year, put your mind at ease by contacting the caring professionals from Home Instead® Senior Care. Conveniently available in Northern Milwaukee, our senior care services help to enhance the aging experience by providing practical support at home delivered with a human touch.
            </p>

            <p className="text-lg leading-relaxed text-blue-900">
              Our reliable in-home solutions help aging adults stay engaged in everyday life with tailor-made support to stay safe and well at home. At Home Instead, it is always our mission to provide a care plan personalized to your family's needs – bringing you all comfort, companionship, and peace of mind.
            </p>
          </div>
          </div>
        </div>
      </article>

      {/* Navigation */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-block text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </section>
    </div>
  );
}
