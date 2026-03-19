import Link from 'next/link';

export default function NationalSeniorCitizensDayPost() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            5 Fun Activities to Enjoy this National Senior Citizens Day
          </h1>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <img
            src="/5-Fun-Activities-to-Enjoy-this-National-Senior-Citizens-Day-1.png"
            alt="5 Fun Activities to Enjoy this National Senior Citizens Day"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p>
            August 21st is National Senior Citizens Day, making it the perfect time to reflect and acknowledge the elders that fill our lives with joy. While representing a significant portion of our country's population, seniors deserve a special day where they know that their efforts and achievements are valued. Why not spend National Senior Citizens Day introducing your loved ones to fun activities they can enjoy throughout the year? If that's your goal, these entertainment ideas should make the festivities even more memorable for you both.
          </p>

          <h2>How Staying Active Benefits Older Adults</h2>

          <p>
            Numerous studies have determined that seniors who remain physically active once they reach age 65 typically enjoy these health benefits as a result:
          </p>

          <ul>
            <li>Improved bone, muscle, and joint health</li>
            <li>Lower risk of falling and fall-related fractures</li>
            <li>A reduced likelihood to develop chronic anxiety and depression</li>
            <li>Stronger immune system</li>
            <li>Higher self-esteem</li>
            <li>Reduced risk of dying from coronary heart disease and developing high blood pressure, colon cancer, and diabetes</li>
            <li>Greater likelihood to live independently</li>
            <li>Sharper mental acuity that helps slow cognitive decline</li>
          </ul>

          <h2>Healthy Entertainment Ideas for Seniors</h2>

          <p>
            Older adults can still have fun and enjoy life while celebrating holidays like National Senior Citizens Day. These five activities are a great way for seniors to engage with others all year long:
          </p>

          <h3>Take a nature walk</h3>

          <p>
            Although this activity is simple, the benefits of walking include stress relief, promoting a better night's sleep, and improved cardiovascular endurance. Whether it's a short walk around the neighborhood or taking your senior to a big park, a nature walk can do wonders for their body and mind.
          </p>

          <p>
            Being out in nature helps lower blood pressure, increase physical fitness, and speed up the recovery process. Are there any ducks or pigeons around? As an added benefit, feeding birds while taking a nature walk can give an older adult a renewed sense of purpose.
          </p>

          <h3>Have a picnic</h3>

          <p>
            While you're enjoying all the benefits of your nature walk, why not combine it with a picnic? If your loved one has mobility issues, plan a picnic or cookout with them right in their backyard and invite some friends and family. Once your delicious and nutritious meal is ready, spend time talking, sharing stories, or fondly reminiscing about days gone by while enjoying your culinary creations.
          </p>

          <h3>Go to the museum</h3>

          <p>
            Depending on what your loved one's interests are, going to the museum can be a lot of fun. For example, if it's an art museum, you can both quietly observe each piece while pondering what it means to you. Taking an older veteran to a war museum will allow them to think back to when they proudly served their country. No matter what museum you choose to visit, being there can have a positive effect on your senior's physical and emotional health.
          </p>

          <h3>Watch old movies</h3>

          <p>
            If it's raining or too hot on August 21st, a good backup plan is watching old movies with your loved one. Watching movies is a relaxing indoor activity that will allow them to escape from life's stressors for a while. Find a streaming service that offers a lot of classic movies or TV shows, and then let your loved one pick out some of their favorites.
          </p>

          <h3>Do some arts and crafts</h3>

          <p>
            Although this may sound childish, doing arts and crafts can be therapeutic for older adults – starting with the fact it helps improve their motor skills. From finger painting to candle making, joining your loved one for a fun-filled afternoon of arts and crafts can be a great way for you both to reduce stress and share some laughs while unleashing your inner creativity!
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
