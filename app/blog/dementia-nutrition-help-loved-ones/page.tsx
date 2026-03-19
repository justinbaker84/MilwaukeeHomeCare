import Link from 'next/link';

export default function DementiaNutritionPost() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How to Help Loved Ones with Dementia Get the Nutrition They Need
          </h1>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <img
            src="/How-to-Help-Loved-Ones-with-Dementia.png"
            alt="How to Help Loved Ones with Dementia Get the Nutrition They Need"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p>
            Preparing meals for a loved one with dementia can be a daily challenge. They may be unable to express why they're refusing to eat favorite meals or remember the purpose of a fork. But, two things remain constant – their need for nutrients and your need to make sure that need is met. To improve the experience for both of you, here are twelve tips to help your loved one with dementia get the nutrition they need (courtesy of Family Caregiver Alliance).
          </p>

          <h2>1. Avoid food fights</h2>

          <p>
            Make mealtime as pleasant as possible. Encourage someone to eat, but don't demand, cajole, or threaten.
          </p>

          <h2>2. Choice of two things</h2>

          <p>
            If giving choices, give only two things to choose between. Even if a choice is made, the person may not want it when it is presented. Don't take it personally. If you know their favorite foods, have them available for backup. Favorite foods might change.
          </p>

          <h2>3. Limited quantity sweets</h2>

          <p>
            People often crave sweet things, so make them available in limited quantities unless medically not recommended, e.g., diabetes. Fruit can often fulfill this need. We all lose taste buds as we age, so food doesn't taste the same. For some people, bland food is fine, and for others, we need to spice it up.
          </p>

          <h2>4. Smaller and Frequent meals</h2>

          <p>
            People will often not eat a large meal or the traditional three meals a day. Try offering smaller, more frequent meals. Or offer nutritional supplements between meals. Always have water or other liquids available and offer them often so the person doesn't get dehydrated.
          </p>

          <h2>5. Color Contrast</h2>

          <p>
            Use small plates, as large ones can be overwhelming. Use color contrast of dishes and food for the person to distinguish the food more easily. Turn the plate if the person has eaten all the food on one side. Chop food into small pieces to make it easier to chew. For some people, serving one food at a time might be less overwhelming.
          </p>

          <h2>6. Finger foods</h2>

          <p>
            If coordination and independence are an issue, offer finger foods—sandwiches, cut-up fruits and vegetables, cheese cubes, fish sticks, chicken nuggets, etc.
          </p>

          <h2>7. Straw for liquids</h2>

          <p>
            If a person has trouble swallowing, use a straw when offering liquids. Or use a thickening agent and pureed foods rather than thin liquids. Get a referral to a speech therapist to assess the problem, and learn ways to cue someone to swallow. Learn the Heimlich maneuver.
          </p>

          <h2>8. Softer Foods</h2>

          <p>
            If someone is reluctant to eat, they may have a chewing problem ranging from dentures that don't fit correctly to oral pain or other dental issues. Try softer foods, such as applesauce, cottage cheese, yogurt, eggs, and puddings.
          </p>

          <h2>9. Atmosphere of friendliness</h2>

          <p>
            Sit with the person, if possible, while eating to create an atmosphere of friendliness. People often eat very slowly, and so sitting with the care receiver during the entire meal time might be burdensome. However, if you sit at the beginning of the meal, it will be a way to model eating for the person.
          </p>

          <h2>10. One food item at a time</h2>

          <p>
            If your loved one needs to be fed, offer one food item at a time. Make sure they have swallowed before offering the next bite. Demonstrate and cue eating behavior.
          </p>

          <h2>11. Right Temperature</h2>

          <p>
            Serve food at the right temperature to eat right now. Waiting for food to cool might be a deterrent to eating or a burn hazard.
          </p>

          <h2>12. Healthy Snack</h2>

          <p>
            People with memory problems may not remember to eat or may ask again for a meal, having forgotten they already ate. Keep healthy snacks available, rather than telling them that they just ate.
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
