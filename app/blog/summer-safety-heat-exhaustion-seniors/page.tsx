import Link from 'next/link';

export default function HeatExhaustionPost() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-block text-blue-600 hover:text-blue-700 mb-4">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Summer Safety: How to Detect Heat Exhaustion in Seniors
          </h1>
          <p className="text-gray-600">February 2025</p>
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

