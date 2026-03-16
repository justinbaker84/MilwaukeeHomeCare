export default function CaregiverProfile() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            A Day in the Life of a Professional Caregiver
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Understanding what caregiving work actually looks like—the variety of tasks, the emotional rewards, and the real-world experiences—can help you determine if this career path is right for you.
          </p>
        </div>
      </section>

      {/* Daily Responsibilities */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            The Variety of Work
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              One of the defining characteristics of caregiving work is its variety. No two days are identical, and caregivers often work with multiple clients, each with different needs and personalities. This variety can be both rewarding and challenging.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Daily Tasks</h3>
            <p>
              During a typical shift, a caregiver might engage in:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Personal care assistance</strong> — Helping clients with bathing, grooming, dressing, and other hygiene tasks</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Meal preparation</strong> — Planning, shopping for, and cooking nutritious meals tailored to dietary needs</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Household tasks</strong> — Light cleaning, laundry, tidying, and organizing</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Social engagement</strong> — Conversation, playing games, looking at photographs, or engaging in hobbies</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Mobility assistance</strong> — Helping clients move around safely, whether in their home or outdoors</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Transportation and appointments</strong> — Accompanying clients to doctor visits, shopping, or social activities</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Medication reminders</strong> — Helping ensure medications are taken as prescribed</span>
              </li>
            </ul>

            <p>
              The specific mix of tasks depends on each client's needs. One day a caregiver might spend most of the shift helping someone prepare meals and manage household tasks, while the next day might focus primarily on personal care or accompanying someone to appointments.
            </p>
          </div>
        </div>
      </section>

      {/* The Reality of Variety */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Variety Matters in Caregiving
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Positive Side of Variety</h3>
              <p className="text-gray-700 mb-4">
                The variety in caregiving work can be one of its most appealing aspects:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Prevents monotony</strong> — No two shifts are identical, keeping the work engaging and interesting</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Develops diverse skills</strong> — Working with different clients and situations builds competence across multiple areas</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Provides fresh connections</strong> — Building relationships with multiple clients and their families enriches the experience</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Allows flexibility</strong> — Different schedules and client needs can accommodate personal circumstances</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenges of Variety</h3>
              <p className="text-gray-700 mb-4">
                However, the variety also presents challenges:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Constant adaptation</strong> — Each client has different routines, preferences, and needs requiring quick adjustment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Less predictability</strong> — Schedules and priorities can shift, requiring flexibility</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Multiple relationships</strong> — Building and maintaining professional relationships with multiple clients and families takes emotional energy</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Learning curves</strong> — Each new client requires learning their specific needs, preferences, and communication styles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Development */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Developing Caregiving Skills
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Many people ask whether caregiving experience is necessary to start this career. The answer is that prior professional caregiving experience is not required, but a willingness to learn and genuine care for others is essential.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Starting Without Experience</h3>
            <p>
              New caregivers typically:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Receive comprehensive training</strong> — Reputable employers provide thorough training programs covering safety, personal care, hygiene, and client communication</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Learn through shadowing</strong> — Working alongside experienced caregivers before working independently</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Receive ongoing support</strong> — Having supervisors and experienced colleagues available for questions and guidance</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Build skills over time</strong> — Starting with simpler tasks and gradually taking on more complex responsibilities as they gain confidence</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Personal Qualities Matter Most</h3>
            <p>
              The most important qualities for starting a caregiving career aren't technical skills—they're personal qualities that can be developed:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Genuine compassion</strong> — Authentic care for others' well-being and quality of life</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Willingness to learn</strong> — Being open to training and feedback</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Reliability</strong> — Showing up on time and following through on commitments</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Respect for others</strong> — Treating clients with dignity regardless of their circumstances</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Patience</strong> — Understanding that some tasks take time and some clients communicate differently</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Rewards */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            The Deep Rewards of Caregiving Work
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              One of the defining aspects of caregiving is the sense of accomplishment and meaning that comes from the work. Many caregivers report that knowing they made a real difference in someone's day—even in small ways—provides deep professional satisfaction.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sources of Professional Fulfillment</h3>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Tangible impact</strong> — Seeing the direct results of your work in someone's increased comfort, independence, or happiness</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Meaningful relationships</strong> — Building genuine connections with clients and their families</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Making a difference</strong> — Knowing your work helps someone maintain their dignity, independence, and quality of life</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Personal growth</strong> — Learning about life, developing emotional intelligence, and gaining new perspectives</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>End-of-shift satisfaction</strong> — The sense of accomplishment from completing a day of meaningful work</span>
              </li>
            </ul>

            <p>
              Many caregivers describe experiencing a "sense of purpose" in their work—knowing that what they do genuinely matters to the people they serve and helps them live better lives.
            </p>
          </div>
        </div>
      </section>

      {/* Real Experiences */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Real Experiences in Caregiving
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Working with Different Clients</h3>
              <p className="text-gray-700 mb-4">
                One of the most striking aspects of caregiving is how different each client and each day can be:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>A shift might include cooking lunch for one client and engaging them in conversation about their favorite memories</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Another day might focus on helping a different client with personal care and mobility assistance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>A third client might need primarily companionship and light household help</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                This diversity means caregivers rarely experience boredom, but it also requires adaptability and the ability to quickly shift between different tasks and client needs.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Impact of Your Work</h3>
              <p className="text-gray-700">
                What many caregivers emphasize most is knowing that their work makes a real difference. Small actions—helping someone prepare a meal they enjoy, listening to their stories, assisting them with mobility so they can get outside for fresh air, or simply being present during a difficult time—accumulate into meaningful support that helps clients maintain dignity and quality of life.
              </p>
              <p className="text-gray-700 mt-4">
                At the end of each shift, many caregivers report feeling a sense of accomplishment from doing work that genuinely matters to the people they serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Common Questions About Caregiving Work
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What does a caregiver actually do?</h3>
              <p className="text-gray-700">
                Caregivers make regular visits to clients' homes to provide support with daily living activities. This ranges from personal care assistance (bathing, dressing) to meal preparation, household tasks, companionship, and help with mobility or transportation. The specific combination depends on each client's individual needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Do I need experience to become a caregiver?</h3>
              <p className="text-gray-700">
                Professional caregiving experience is not required. What matters most is genuine compassion for helping others, willingness to learn, and reliability. Reputable employers provide comprehensive training programs that equip new caregivers with the skills and knowledge they need. Many successful caregivers started without any prior caregiving experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What's the biggest challenge in caregiving work?</h3>
              <p className="text-gray-700">
                For many caregivers, the biggest challenge is managing the emotional aspects of the work. Working with people experiencing health challenges, cognitive decline, or end-of-life situations can be emotionally demanding. Developing emotional resilience and healthy boundaries while maintaining genuine care is an important skill for long-term success in this work.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What skills develop through caregiving work?</h3>
              <p className="text-gray-700">
                Caregiving work develops a wide range of skills including practical caregiving techniques, communication and listening skills, problem-solving, time management, physical fitness and body mechanics, emotional intelligence, and the ability to work independently and adapt to different situations. These skills are valuable not only within caregiving but across many other professions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Is caregiving work sustainable as a long-term career?</h3>
              <p className="text-gray-700">
                Caregiving can be a sustainable long-term career when there is adequate support, training, fair compensation, opportunities for advancement, and strategies for managing emotional demands. The key factors are finding employers who value caregivers, developing healthy coping strategies, setting professional boundaries, and continually developing skills through professional development opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consideration */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Is Professional Caregiving Right for You?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              For many people, professional caregiving offers meaningful work combined with the ability to make a tangible difference in others' lives. If you find fulfillment in helping others, can remain patient and respectful in challenging situations, are physically capable of assisting with personal care and mobility, and are looking for work with built-in variety and human connection, caregiving may be a rewarding career path.
            </p>
            <p>
              The most successful caregivers are those who genuinely care about their clients' well-being and find deep satisfaction in knowing that their work contributes to their clients' quality of life and independence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
