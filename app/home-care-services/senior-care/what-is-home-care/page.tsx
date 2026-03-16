export default function WhatIsHomeCare() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:py-5xl font-bold text-gray-900 mb-6">
            What Is In-Home Senior Care?
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Understanding what home care services entail and how they differ from other types of care can help families make informed decisions about supporting aging loved ones.
          </p>
        </div>
      </section>

      {/* Home Care vs Home Health */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Understanding Different Types of Care
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              When considering options for aging loved ones, it's important to understand that different types of care serve different purposes. Two commonly confused types are home health care and in-home care (sometimes called personal care or custodial care).
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Home Health Care</h3>
            <p>
              Home health care involves medical and therapeutic services provided in the home, typically ordered by a physician and provided by licensed healthcare professionals.
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Nursing services</strong> — Assessment, medication management, wound care, monitoring of medical conditions</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Therapeutic services</strong> — Physical therapy, occupational therapy, speech therapy, rehabilitation</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Medical necessity</strong> — Usually covered when medically necessary and ordered by a physician</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Insurance coverage</strong> — Often covered by Medicare or insurance when medically necessary</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">In-Home Care (Personal Care)</h3>
            <p>
              In-home care, also called personal care or custodial care, focuses on support with daily living activities. It's non-medical support that helps people maintain independence and quality of life.
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Activities of daily living assistance</strong> — Bathing, dressing, grooming, toileting, mobility</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Household support</strong> — Meal preparation, cleaning, laundry, errands</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Companionship and engagement</strong> — Social interaction, activities, emotional support</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Not medically ordered</strong> — Based on individual need rather than medical necessity</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Insurance coverage</strong> — Often not covered by Medicare but may be covered by long-term care insurance</span>
              </li>
            </ul>

            <p>
              Many families need both types of care. For example, someone recovering from surgery might receive home health nursing care for wound care while also receiving in-home care help with bathing and meals.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Services */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Range of In-Home Care Services
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              In-home care encompasses a wide range of services designed to support people with different needs. Services are individualized based on what each person needs.
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Care Assistance</h3>
                <p className="text-gray-700 mb-4">
                  Help with personal hygiene and daily personal activities:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Bathing and showering</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Dressing and grooming</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Toileting and incontinence care</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Mobility assistance and transfers</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Household Support</h3>
                <p className="text-gray-700 mb-4">
                  Help with household tasks and activities:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Meal planning and preparation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Light housekeeping and tidying</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Laundry and linen care</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Grocery shopping and errands</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Companionship and Engagement</h3>
                <p className="text-gray-700 mb-4">
                  Social interaction and meaningful activities:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Conversation and social interaction</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Games, hobbies, and recreational activities</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Walks and outdoor activities</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Reminiscence and storytelling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Specialized Care Support</h3>
                <p className="text-gray-700 mb-4">
                  Assistance with specific conditions or situations:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Dementia and Alzheimer's care support</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Medication reminders and monitoring</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Post-operative recovery support</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Transitional care after hospitalization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Transportation and Mobility Support</h3>
                <p className="text-gray-700 mb-4">
                  Help getting around and to appointments:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Escorted transportation to appointments</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Assistance with medical visit coordination</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Help with mobility and walking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits from Home Care */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Who Can Benefit from In-Home Care?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              In-home care can benefit people in many different situations. It's not limited to elderly people or those with specific diagnoses—anyone who needs help with daily activities to maintain safety and independence may benefit.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Situations Where Home Care Helps</h3>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Post-hospitalization</strong> — Recovery after surgery or illness when people need temporary assistance with activities</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Chronic illness management</strong> — Ongoing support for people with conditions like diabetes, heart disease, or arthritis</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Cognitive impairment</strong> — Support for people with dementia, Alzheimer's disease, or other cognitive changes</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Mobility limitations</strong> — Assistance for people with arthritis, stroke recovery, or other conditions affecting movement</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Social isolation</strong> — Companionship and engagement for people at risk of loneliness</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Caregiver support</strong> — Respite care or shared care for family members who are providing care</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Aging in place</strong> — General support to help people remain in their homes as they age</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Signs That Home Care Might Be Helpful</h3>
            <p>
              Consider whether in-home care might benefit a loved one if you notice:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Difficulty with personal hygiene or grooming</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Struggling to prepare meals or maintain adequate nutrition</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Difficulty moving around, transferring, or walking safely</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Neglected housekeeping or home maintenance</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Missed medications or confusion about medication timing</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Cognitive changes affecting memory or decision-making</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Increasing isolation or loneliness</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Difficulty with household finances or bill paying</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Safety concerns (leaving appliances on, wandering, risky behaviors)</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Recent loss or grief affecting ability to manage daily life</span>
              </li>
            </ul>

            <p>
              These signs don't mean someone needs 24-hour care—they may need just a few hours per week of professional support to maintain independence and safety.
            </p>
          </div>
        </div>
      </section>

      {/* Quality of Life Impact */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            How Home Care Affects Quality of Life
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              One of the most important aspects of in-home care is its impact on quality of life. When people receive appropriate support, they often experience improvements in physical health, emotional well-being, and overall life satisfaction.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Benefits of In-Home Care</h3>

            <div className="space-y-4 my-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-2">Maintained Independence</h4>
                <p className="text-gray-700 text-sm">
                  Support allows people to continue doing things for themselves rather than becoming dependent. This preserves autonomy and dignity.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-2">Familiar Environment</h4>
                <p className="text-gray-700 text-sm">
                  Staying in one's own home provides comfort, familiarity, and connection to memories and meaningful spaces.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-2">Community Connection</h4>
                <p className="text-gray-700 text-sm">
                  Remaining in one's community maintains relationships with neighbors, friends, local organizations, and established healthcare providers.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-2">Social Engagement</h4>
                <p className="text-gray-700 text-sm">
                  In-home caregivers provide companionship and encourage engagement in activities, reducing loneliness and promoting mental health.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-2">Better Health Outcomes</h4>
                <p className="text-gray-700 text-sm">
                  Support with meals, medications, mobility, and household tasks often leads to better health outcomes and reduced hospitalizations.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-2">Customized Support</h4>
                <p className="text-gray-700 text-sm">
                  Care can be tailored to individual preferences, schedules, and routines, rather than fitting into a facility's schedule.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">A Day of Meaningful Support</h3>
            <p>
              A well-designed day of in-home care combines practical assistance with engagement and connection. A typical day might include:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Morning assistance with shower, dressing, and breakfast</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Medication reminders and assistance with morning tasks</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Household tasks like light tidying or laundry</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Meaningful activities—conversation, games, hobbies, reminiscence</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Preparation of lunch with social eating together</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Outdoor time, walks, or other activities</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Evening preparation—meal prep, tidying, helping with bedtime routine</span>
              </li>
            </ul>

            <p>
              The balance between practical assistance and meaningful engagement is what makes effective in-home care. It's not just about completing tasks—it's about supporting a person's overall well-being and quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Customized Care */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Individualized Care Planning
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              One of the key advantages of in-home care is that it's completely customizable. Services can be tailored to match each person's specific needs, preferences, and circumstances.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Elements of Customized Care</h3>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Specific needs assessment</strong> — Determining exactly what support is needed</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Hours and scheduling</strong> — Determining how many hours and what times work best</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Preferences and values</strong> — Understanding what matters to the person</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Routines and habits</strong> — Adapting care to fit existing routines</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Goals and priorities</strong> — Focusing on what helps achieve the person's goals</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Adjustment over time</strong> — Modifying as needs change and feedback is received</span>
              </li>
            </ul>

            <p>
              Because every person is unique, effective in-home care starts with understanding that person and their individual situation, then designing services that fit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
