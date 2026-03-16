export default function RespiteCare() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Understanding Respite Care
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Respite care is temporary, substitute care provided to seniors to give family caregivers a break from their caregiving responsibilities. It&apos;s an important resource for maintaining both the health and well-being of caregivers and the quality of life for people receiving care.
          </p>
        </div>
      </section>

      {/* What is Caregiver Burden */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            The Reality of Family Caregiving
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Family caregiving can be rewarding and meaningful, but it&apos;s also physically and emotionally demanding. Many family caregivers—whether adult children caring for aging parents, spouses caring for partners, or other relatives—experience significant strain from the constant demands of caregiving.
            </p>

            <p>
              Family caregivers often:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Manage medical appointments, medications, and health monitoring</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Provide personal care assistance</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Handle household tasks and finances</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Provide emotional support and companionship</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Be available for emergencies and unexpected needs</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Balance caregiving with work, family, and personal responsibilities</span>
              </li>
            </ul>

            <p>
              These responsibilities often happen continuously, without breaks, holidays, or sick days. Many family caregivers are available 24/7, forgoing sleep, personal time, and attention to their own health needs.
            </p>
          </div>
        </div>
      </section>

      {/* Effects of Caregiver Burden */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Effects of Caregiver Burden and Burnout
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Caregiver burden—the physical, emotional, and financial strain of caregiving—can have serious consequences for caregivers&apos; own health and well-being. Research consistently shows that family caregivers experience higher rates of:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Physical Health Effects</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>High blood pressure and heart disease</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Chronic stress-related conditions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Weakened immune function</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Sleep disturbances and fatigue</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Neglect of own medical care</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Mental and Emotional Effects</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Depression and anxiety</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Emotional exhaustion and burnout</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Grief and loss</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Reduced quality of life</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Isolation and loneliness</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Life Impact Effects</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Financial strain</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Work disruptions and job loss</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Neglect of other family relationships</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Loss of social life and hobbies</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Care Quality Effects</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Reduced patience and increased irritability</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Decreased quality of care provided</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Increased risk of caregiver stress or abuse</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What is Respite Care */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What is Respite Care?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Respite care is temporary, substitute care provided to a person needing care to give family caregivers a scheduled break from their caregiving responsibilities. The word &quot;respite&quot; comes from the term meaning a break or rest.
            </p>

            <p>
              Respite care can be:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Short-term</strong> — A few hours, an afternoon, or an evening to allow a caregiver to run errands or have personal time</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Extended</strong> — Several days or a week to allow caregivers to take a vacation or handle other responsibilities</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>In-home</strong> — A substitute caregiver comes to the person&apos;s home</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Facility-based</strong> — The person receiving care temporarily moves to a facility like an assisted living home or adult day program</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Regular and scheduled</strong> — Set times (like every Tuesday afternoon or one weekend a month) that caregivers can rely on</span>
              </li>
            </ul>

            <p>
              The key is that respite care is temporary, arranged care that allows family caregivers to have a predictable break from caregiving.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits for Caregivers */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Benefits of Respite Care for Caregivers
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Physical Health Benefits</h3>
              <p className="text-gray-700 mb-4">
                Regular breaks from caregiving allow caregivers to:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Rest and recover from physical demands</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Attend to their own medical needs and appointments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Exercise and maintain physical health</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Reduce stress-related health problems</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emotional and Mental Health Benefits</h3>
              <p className="text-gray-700 mb-4">
                Respite breaks contribute to emotional well-being by:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Reducing stress, anxiety, and depression</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Providing psychological relief and recharging</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Restoring patience, compassion, and emotional capacity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Preventing burnout and emotional exhaustion</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality of Life Benefits</h3>
              <p className="text-gray-700 mb-4">
                Respite care helps caregivers:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Pursue hobbies and personal interests</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Maintain relationships with friends and family</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Take vacations or extended time away</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Handle other responsibilities and obligations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Simply have time alone or for activities they enjoy</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Improved Care Quality</h3>
              <p className="text-gray-700">
                Ironically, taking breaks makes caregivers better caregivers. When caregivers have time to rest and recharge, they return to caregiving with renewed patience, compassion, and emotional capacity. This often improves the quality of care provided and strengthens relationships between caregivers and care recipients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Care Recipients */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Benefits of Respite Care for Seniors
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              While respite care benefits caregivers, it also benefits the seniors receiving care:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Mental stimulation</strong> — Interaction with new caregivers provides mental engagement and fresh social interaction</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Reduced tension</strong> — Sometimes tension develops in caregiver-care recipient relationships; interaction with different caregivers can provide a welcome change</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Maintained routines</strong> — Well-coordinated respite care maintains familiar routines and reduces disruption</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Quality interaction</strong> — A well-rested, emotionally stable caregiver often provides higher quality interaction and care</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Continuity of care</strong> — Respite care allows family caregivers to remain the primary caregiver long-term by preventing burnout</span>
              </li>
            </ul>

            <p>
              Both caregivers and care recipients benefit when respite care allows family caregiving relationships to continue in healthy, sustainable ways.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Respite Care */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Types of Respite Care
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">In-Home Respite Care</h3>
              <p className="text-gray-700 mb-3">
                A substitute caregiver comes to the person&apos;s home to provide care, allowing the family caregiver to leave. This maintains familiarity and routine for the person receiving care.
              </p>
              <p className="text-sm text-gray-600">Best for: People who prefer staying in their home; those with significant care needs; those with dementia or anxiety about unfamiliar environments</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Adult Day Programs</h3>
              <p className="text-gray-700 mb-3">
                The person receiving care attends a structured program during the day while the family caregiver has time free. Programs typically include activities, meals, and social interaction.
              </p>
              <p className="text-sm text-gray-600">Best for: People who enjoy social activities; those who benefit from structured programs; those with mild to moderate care needs</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Facility-Based Respite</h3>
              <p className="text-gray-700 mb-3">
                The person receiving care temporarily moves to a facility like assisted living or a continuing care community for a few days or weeks.
              </p>
              <p className="text-sm text-gray-600">Best for: Extended respite needs; people who benefit from professional medical supervision; situations requiring intensive care</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Family/Friend Respite</h3>
              <p className="text-gray-700 mb-3">
                Another family member, friend, or volunteer provides temporary care, allowing the primary caregiver a break.
              </p>
              <p className="text-sm text-gray-600">Best for: Families with available support networks; informal care arrangements; short-term breaks</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Scheduled vs. Emergency Respite</h3>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">Scheduled respite</span> is planned in advance on a regular basis (like every Tuesday or one weekend monthly). <span className="font-semibold">Emergency respite</span> is arranged quickly when an unexpected situation arises.
              </p>
              <p className="text-sm text-gray-600">Scheduled respite is generally more sustainable and effective for long-term caregiver support</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
