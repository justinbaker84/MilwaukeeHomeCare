import Link from 'next/link';

export default function HeatExhaustionPost() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Summer Safety: How to Detect Heat Exhaustion in Seniors
          </h1>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <img
            src="/Summer-Safety-How-to-Detect-Heat-Exhaustion-in-Seniors.png"
            alt="Summer Safety: How to Detect Heat Exhaustion in Seniors"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p>
            With another summer upon us in Northern Milwaukee, heat exhaustion in seniors is a concern for those who have older loved ones that enjoy having "fun in the sun" during the warmer months. Many seniors love to spend a large part of their summer days outdoors collecting shells on the beach, golfing, gardening, playing with grandchildren, or enjoying other favorite activities. Heat exhaustion can sneak up on seniors. How can you detect it and get your senior loved one cooled off or the help they need if they experience heat exhaustion?
          </p>

          <h2>Signs and Symptoms of Heat Exhaustion</h2>

          <p>
            According to the well-respected Mayo Clinic, the signs and symptoms of heat exhaustion include:
          </p>

          <ul>
            <li>Cool, moist skin with goosebumps when in the heat</li>
            <li>Heavy sweating</li>
            <li>Faintness</li>
            <li>Dizziness</li>
            <li>Fatigue</li>
            <li>Weak, rapid pulse</li>
            <li>Low blood pressure upon standing</li>
            <li>Muscle cramps</li>
            <li>Nausea or vomiting</li>
            <li>Headache</li>
            <li>Extreme thirst</li>
            <li>Mild confusion</li>
            <li>Decreased urine output</li>
          </ul>

          <h2>Immediate Steps to Take</h2>

          <p>
            Left untreated, heat exhaustion can lead to heatstroke, which is a life-threatening condition. If your senior loved one is showing signs of heat exhaustion, the Mayo Clinic suggests taking these steps immediately:
          </p>

          <ul>
            <li>Move the person out of the heat and into a shady or air-conditioned place.</li>
            <li>Lay the person down and elevate the legs and feet slightly.</li>
            <li>Remove tight or heavy clothing.</li>
            <li>Have the person sip chilled water, a decaffeinated sports drink containing electrolytes, or other nonalcoholic beverage without caffeine.</li>
            <li>Cool the person by spraying or sponging with cool water and fanning.</li>
            <li>Monitor the person carefully.</li>
          </ul>

          <p>
            Contact a health care provider if signs or symptoms worsen or if they don't improve after taking first-aid measures.
          </p>

          <h2>When to Call 911</h2>

          <p>
            Call 911 if the person's condition gets worse, especially if they experience:
          </p>

          <ul>
            <li>Fainting</li>
            <li>Agitation</li>
            <li>Confusion</li>
            <li>Seizures</li>
            <li>Inability to drink</li>
            <li>Core body temperature — measured by a rectal thermometer — of 104 F (40 C)</li>
          </ul>

          <h2>Preventing Heatstroke</h2>

          <p>
            Heatstroke is predictable and preventable. Take these steps to prevent your senior loved one from experiencing heatstroke during hot weather:
          </p>

          <h3>Have them wear loose-fitting, lightweight clothing</h3>

          <p>
            Wearing excess clothing or clothing that fits tightly won't allow their body to cool properly.
          </p>

          <h3>Protect against sunburn</h3>

          <p>
            Sunburn affects the body's ability to cool itself, so have them wear a wide-brimmed hat and sunglasses and use a broad-spectrum sunscreen with an SPF of at least 15. Apply sunscreen generously, and reapply every two hours — or more often if they're swimming or sweating.
          </p>

          <h3>Make sure they drink plenty of fluids</h3>

          <p>
            Keeping them hydrated will help their bodies sweat and maintain a normal body temperature.
          </p>

          <h3>Take extra precautions with certain medications</h3>

          <p>
            Be on the lookout for heat-related problems if they take medications that can affect their body's ability to stay hydrated and dissipate heat.
          </p>

          <h3>Have them take it easy during the hottest parts of the day</h3>

          <p>
            If they can't avoid strenuous activity in hot weather, make sure they continuously sip fluids and rest frequently in a cool spot. Try to schedule exercise or physical labor for cooler parts of the day, such as early morning or evening.
          </p>

          <h3>Have them get acclimated to heat and humidity</h3>

          <p>
            Limit time spent working or exercising in heat until they're conditioned for it. Seniors who are not used to hot weather are especially susceptible to heat-related illness. It can take several weeks for a person's body to adjust to hot weather.
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
