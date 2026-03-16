export default function AlzheimersDementia() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Understanding Alzheimer's and Dementia Care
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Alzheimer's disease and other forms of dementia present significant challenges for both individuals experiencing cognitive changes and their families. Understanding these conditions and the available support options is an important step in planning for long-term care and maintaining quality of life.
          </p>
        </div>
      </section>

      {/* Alzheimer's Disease Overview */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What is Alzheimer's Disease?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Alzheimer's disease is a progressive neurodegenerative disorder that affects memory, thinking, and behavior. It typically begins with mild memory loss and, as the disease progresses, can severely impact a person's ability to carry out daily tasks. Alzheimer's disease accounts for the majority of dementia cases, though it is important to understand that while all cases of Alzheimer's are dementia, not all dementia is Alzheimer's disease.
            </p>
            <p>
              The disease progresses at different rates for different people, generally moving through early, middle, and late stages. In early stages, memory loss may be mild and initially attributed to normal aging. As the disease progresses, individuals may experience confusion about time or place, behavioral changes, and eventually require assistance with basic personal care.
            </p>
          </div>
        </div>
      </section>

      {/* Impact on Families */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            The Family Impact
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Alzheimer's disease and dementia affect not just the individual with the diagnosis, but entire families. Family caregivers often experience emotional, physical, and financial strain as they navigate the progressive nature of the disease. The unpredictability of symptoms, behavioral changes, and the constant need for supervision can be exhausting and overwhelming.
            </p>
            <p className="mt-6">
              Caring for someone with dementia requires patience, compassion, and the ability to adapt to changing needs. Many families find that combining family care with professional support helps maintain both the well-being of the person with dementia and the health of family caregivers themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Home-Based Care Considerations */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Home-Based Dementia Care
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p>
              For many individuals with Alzheimer's or dementia, remaining in their familiar home environment can be beneficial. The comfort of familiar surroundings, routines, and memories often provides a sense of security and can help minimize confusion and anxiety. Home-based care allows individuals to maintain connections to their life history and family relationships in a setting they know well.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Considerations for Home Care with Dementia:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span><strong>Environmental safety</strong> — Modifying the home to prevent wandering, falls, and accidents</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span><strong>Routine and structure</strong> — Maintaining consistent daily routines to reduce confusion and agitation</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span><strong>Memory and dignity</strong> — Honoring the person's life history and treating them with respect regardless of cognitive changes</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span><strong>Activities and engagement</strong> — Providing meaningful activities that provide mental stimulation and emotional connection</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span><strong>Behavior management</strong> — Understanding that behavioral changes are symptoms of the disease, not character flaws</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span><strong>Adaptive care</strong> — Adjusting approaches and support levels as the disease progresses through different stages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dementia Types */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Types of Dementia
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            While Alzheimer's disease is the most common form of dementia, other types exist and require understanding:
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-2">Alzheimer's Disease</h3>
              <p className="text-gray-700 text-sm">The most common form of dementia, accounting for 60-80% of dementia cases. Progressive memory loss and cognitive decline are hallmark features.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-2">Vascular Dementia</h3>
              <p className="text-gray-700 text-sm">Caused by reduced blood flow to the brain, often following strokes. Symptoms may include difficulty with problem-solving, slowed thinking, and memory loss.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-2">Lewy Body Dementia</h3>
              <p className="text-gray-700 text-sm">Characterized by abnormal protein deposits in the brain. Often includes visual hallucinations, movement problems, and sleep disturbances alongside cognitive changes.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-2">Frontotemporal Dementia</h3>
              <p className="text-gray-700 text-sm">Affects the front and sides of the brain. Often causes personality and behavior changes before memory loss occurs.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-2">Mixed Dementia</h3>
              <p className="text-gray-700 text-sm">Occurs when someone has more than one type of dementia simultaneously, such as both Alzheimer's disease and vascular dementia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Approaches */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Approaches to Dementia Care
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Person-Centered Care</h3>
              <p className="text-gray-700 leading-relaxed">
                Effective dementia care recognizes the individual as a whole person with a life history, preferences, and dignity. This approach focuses on understanding the person's unique background, interests, and needs rather than simply managing symptoms. Person-centered care respects the individual's remaining abilities and encourages them to do as much as they can for themselves.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Caregiver Training and Skills</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Professional caregivers working with individuals with dementia benefit from specialized training that includes:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Understanding dementia progression and behavioral symptoms</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Effective communication techniques for people with cognitive impairment</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Safe physical assistance and transfer techniques</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Strategies for managing behavioral challenges and agitation</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Recognition of health changes and when to seek medical attention</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Respite Care</h3>
              <p className="text-gray-700 leading-relaxed">
                Family caregivers of individuals with dementia often experience caregiver burnout. Respite care provides temporary relief, allowing family members to take breaks for rest, personal appointments, or simply to recharge emotionally. This support can be crucial for the long-term sustainability of family caregiving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parkinson's Disease */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Parkinson's Disease and Cognitive Changes
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Parkinson's disease is a progressive neurodegenerative disorder that affects movement and, in many cases, cognitive function. While it is distinct from Alzheimer's disease and other dementias, Parkinson's disease can eventually lead to cognitive changes, including memory loss and confusion, particularly in later stages of the disease.
            </p>

            <p>
              Individuals with Parkinson's disease often experience:
            </p>

            <ul className="space-y-3">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Tremors and rigidity that worsen over time</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Difficulty with movement, balance, and coordination</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Speech and swallowing difficulties</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Sleep disturbances</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Possible cognitive changes and dementia in later stages</span>
              </li>
            </ul>

            <p>
              Home-based care can support individuals with Parkinson's disease by providing assistance with daily activities, helping them maintain independence as long as possible, and offering support as physical and cognitive abilities change.
            </p>
          </div>
        </div>
      </section>

      {/* Support for Families */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Supporting Families Through the Journey
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Caring for someone with dementia or Parkinson's disease is a long-term journey that evolves as the disease progresses. Families benefit from:
            </p>

            <ul className="space-y-4 mt-6 mb-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Education</strong> about the disease process and what to expect</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Practical support</strong> with daily care tasks and supervision</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Respite care</strong> to prevent caregiver burnout</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Professional guidance</strong> as care needs change</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Emotional support</strong> through the challenges and changes</span>
              </li>
            </ul>

            <p>
              While caring for someone with dementia or Parkinson's disease is challenging, many families find meaning and connection in providing thoughtful, compassionate care that honors their loved one's dignity and life story.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
