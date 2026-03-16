export default function MealsAndNutrition() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Nutrition and Meals for Healthy Aging
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Proper nutrition is fundamental to maintaining health, energy, and independence throughout older adulthood. Yet many seniors face challenges in maintaining adequate nutrition as physical limitations, health conditions, and changing circumstances make meal preparation and eating more difficult.
          </p>
        </div>
      </section>

      {/* Why Nutrition Matters */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Nutrition Matters for Seniors
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Adequate nutrition becomes increasingly important as people age. Good nutrition supports multiple aspects of health: it maintains muscle mass and strength, supports immune function, aids wound healing, provides energy for daily activities, and helps manage chronic health conditions. For older adults managing diseases like diabetes, heart disease, or arthritis, nutrition can play a significant role in disease management and symptom control.
            </p>

            <p>
              Yet many seniors consume fewer calories and nutrients than they need, leading to malnutrition, weakness, increased vulnerability to illness, and slower recovery from health setbacks. Sometimes this is because adequate nutrition seems difficult or unpleasant due to physical challenges. Other times it&apos;s simply due to loss of appetite, changes in taste, or decreased motivation to prepare meals living alone.
            </p>

            <p>
              The consequences of poor nutrition in older adults can be serious: weakness and falls, compromised immune function leading to infections, slower wound healing, worsening of chronic conditions, and overall decline in health and functioning. Ensuring adequate, enjoyable nutrition is therefore essential to supporting health and quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Common Nutritional Challenges */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Common Nutritional Challenges in Aging
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Dental Problems</h3>
              <p className="text-gray-700">
                Tooth loss, gum disease, or poorly fitting dentures can make chewing painful or difficult. This often leads seniors to avoid nutritious foods that require chewing—like lean proteins, fresh vegetables, and whole grains—in favor of softer, less nutritious options. Poor dental health can significantly impact nutritional intake and overall nutrition status.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Decreased Appetite</h3>
              <p className="text-gray-700">
                Changes in appetite are common in older age, sometimes due to medications, health conditions, or natural changes in taste and smell. A reduced appetite can lead to inadequate caloric and nutrient intake, contributing to weight loss and weakness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Difficulty with Meal Preparation</h3>
              <p className="text-gray-700">
                Arthritis, reduced mobility, fatigue, or cognitive changes can make shopping for groceries and preparing meals difficult or impossible. Many seniors in this situation turn to convenience foods and takeout, which are often high in sodium, sugar, and unhealthy fats while lacking essential nutrients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Swallowing Difficulties</h3>
              <p className="text-gray-700">
                Conditions like stroke, Parkinson&apos;s disease, or other neurological conditions can affect swallowing ability. This requires modified textures and careful monitoring to ensure adequate nutrition while preventing aspiration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Medication Interactions</h3>
              <p className="text-gray-700">
                Many medications used by older adults affect appetite, taste, or nutrient absorption. Some medications should be taken with food while others shouldn&apos;t, creating complexity around meal timing and food choices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Special Dietary Needs</h3>
              <p className="text-gray-700">
                Managing conditions like diabetes, heart disease, kidney disease, or food allergies often requires specific dietary modifications. Navigating these restrictions while ensuring adequate nutrition and enjoyable meals requires knowledge and planning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Eating Alone</h3>
              <p className="text-gray-700">
                Many older adults who live alone report eating less frequently and preparing less nutritious meals. Eating in isolation can reduce appetite and motivation to prepare or enjoy meals compared to eating in social settings with others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nutritional Requirements */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Nutritional Requirements for Older Adults
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              While caloric needs may decrease with age due to reduced activity, the need for specific nutrients actually increases. Older adults need:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Adequate protein</strong> — Essential for maintaining muscle mass, strength, and immune function. Recommended intake is higher for older adults than younger adults.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Calcium and Vitamin D</strong> — Critical for bone health and preventing osteoporosis, which increases fall and fracture risk in older age.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>B vitamins</strong> — Important for energy production, nerve function, and cognitive health. Some older adults have reduced ability to absorb vitamin B12.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Fiber</strong> — Supports digestive health and bowel regularity, which is often a concern for older adults.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Antioxidants and phytonutrients</strong> — Found in colorful vegetables and fruits, these support immune function and help protect against chronic disease.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Hydration</strong> — Older adults often have a reduced sense of thirst and may not drink enough water, leading to dehydration and associated health problems.</span>
              </li>
            </ul>

            <p>
              Meeting these nutritional needs while accommodating dental problems, swallowing difficulties, food preferences, and medical dietary restrictions requires thoughtful meal planning and preparation.
            </p>
          </div>
        </div>
      </section>

      {/* Supporting Nutrition */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Supporting Adequate Nutrition
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Menu Planning and Recipe Selection</h3>
              <p className="text-gray-700 mb-4">
                Thoughtful menu planning ensures that meals are nutritious, appealing, and meet any dietary restrictions or preferences. This includes:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Planning meals that include all major food groups</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Considering individual taste preferences and cultural foods</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Adapting recipes to meet dietary restrictions (low sodium, diabetic-friendly, etc.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Modifying textures as needed for swallowing or dental difficulties</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Creating variety to prevent meal fatigue</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Grocery Shopping and Meal Preparation</h3>
              <p className="text-gray-700 mb-4">
                For many older adults, shopping for groceries and preparing meals becomes physically difficult or impossible. Support with these tasks might include:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Shopping for fresh, nutritious ingredients</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Preparing meals ahead and storing for later use</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Cooking methods that preserve nutritional value</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Proper food storage and safety practices</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Creating Pleasant Eating Experiences</h3>
              <p className="text-gray-700 mb-4">
                The experience of eating—not just the food itself—affects appetite and enjoyment:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Presenting food in an appetizing, attractive way</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Creating a pleasant eating environment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Sharing meals when possible, as social eating increases appetite and enjoyment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Allowing adequate time for meals without rushing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Accommodating individual preferences and special requests</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Managing Dietary Restrictions</h3>
              <p className="text-gray-700 mb-4">
                Many older adults have medical conditions requiring specific dietary modifications:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Diabetes management</strong> — Controlling carbohydrate intake and monitoring blood sugar through appropriate food choices</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Heart health</strong> — Limiting sodium and saturated fats while including heart-healthy options</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Kidney disease</strong> — Managing protein, sodium, and potassium intake</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Allergies and intolerances</strong> — Avoiding problematic foods while maintaining nutritional balance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
