export default function HospiceCareServices() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Understanding Hospice and End-of-Life Care
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            When a serious illness is no longer curable, hospice care provides an approach focused on comfort, quality of life, and dignity in the final stage of life. Understanding hospice care and available support services can help families make informed decisions during this significant time.
          </p>
        </div>
      </section>

      {/* What is Hospice */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What is Hospice Care?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Hospice is a specialized type of care that focuses on comfort, dignity, and quality of life for people with serious, progressive illnesses that are no longer responsive to curative treatment. Rather than pursuing treatments aimed at curing the illness, hospice care emphasizes managing symptoms, controlling pain, and supporting the person&apos;s emotional and spiritual needs during their final days or months.
            </p>

            <p>
              Hospice is based on the philosophy that life should be lived as fully and comfortably as possible during the final stage of illness. Care focuses on:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Symptom management and pain control</strong> — Ensuring comfort through medication and support</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Preserving dignity</strong> — Respecting the person&apos;s values, preferences, and autonomy</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Emotional and spiritual support</strong> — Addressing psychological and spiritual needs</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Family support</strong> — Helping loved ones through the dying process and grief</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Quality time together</strong> — Supporting meaningful connection and conversations</span>
              </li>
            </ul>

            <p>
              Hospice can be provided in various settings: at home, in hospitals, in nursing homes, or in specialized hospice facilities. Many people prefer receiving hospice care at home, surrounded by familiar people and environments.
            </p>
          </div>
        </div>
      </section>

      {/* Hospice vs Curative Care */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            A Different Approach to Care
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Curative Care Focus</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Aimed at fighting disease and prolonging life</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>May involve aggressive treatments and interventions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Side effects from treatment may be accepted as necessary</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Focus on quantity of life</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Often administered in hospitals or medical settings</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Hospice Care Focus</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Aimed at comfort, dignity, and quality of life</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Focuses on symptom management and pain control</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Avoids treatments that would not improve comfort</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Focus on quality of life in remaining time</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Often provided at home with family present</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Typical Hospice Services */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Understanding Typical Hospice Services
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Hospice services vary by provider and program, but typically include:
            </p>
          </div>

          <div className="space-y-6 mt-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3">Medical Services</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Physician oversight and management of end-of-life care</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Nursing visits to monitor condition and manage symptoms</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Medication management and pain control</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Medical equipment as needed</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3">Support Services</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Emotional and psychological counseling</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Social services and case management</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Spiritual care and chaplaincy services</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Support groups for family members</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3">Care Limitations</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Most hospice programs provide limited hours of direct care (often 1-2 hours per day)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Nursing visits may be weekly or as-needed</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Many programs require a primary family caregiver present in the home</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Round-the-clock care is typically not included in basic hospice services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Family Caregiver Role */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            The Family Caregiver Role in Hospice
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              An important reality of home hospice is that family members typically provide significant hands-on care between hospice nurse visits. Family caregivers often:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Provide personal care and hygiene assistance</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Monitor symptoms and watch for changes</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Administer medications or assist with medication management</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Assist with repositioning to prevent bedsores</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Provide emotional support and presence</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Handle household tasks and meal preparation</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Be available for emergencies and unexpected needs</span>
              </li>
            </ul>

            <p>
              This reality can create significant caregiver burden during an already emotionally challenging time. Many families find that additional care support helps them manage both the practical demands and allows them to focus on emotional and relational aspects of being with their loved one during this final chapter.
            </p>
          </div>
        </div>
      </section>


      {/* Maintaining Dignity */}
      <section className="py-16 sm:py-24 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Maintaining Dignity and Quality of Life
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              During end-of-life, maintaining dignity and quality of life remains central. Additional care support helps by:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Supporting physical comfort</strong> — Ensuring personal care, cleanliness, and comfort assistance</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Preventing complications</strong> — Proper positioning, hygiene, and care reduce pressure ulcers and infections</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Providing companionship</strong> — Fighting loneliness and isolation during a vulnerable time</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Alleviating family stress</strong> — Allowing family members to be present emotionally rather than exhausted by caregiving tasks</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Reducing caregiver burden</strong> — Allowing families to focus on quality time and meaningful connection</span>
              </li>
            </ul>

            <p>
              The goal is to support a death with dignity, surrounded by comfort, respect, and love from family members and caregivers who are present to provide practical and emotional support.
            </p>
          </div>
        </div>
      </section>

      {/* Supporting Family Members */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Supporting Family Members Through End-of-Life
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              End-of-life is an emotionally and spiritually significant time for families. While hospice services include counseling and spiritual care, additional support can help families navigate this transition:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Respite from caregiving tasks</strong> — Allowing family members to focus on being present emotionally rather than managing all practical tasks</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Permission to step back</strong> — Understanding that families don&apos;t need to handle all care alone</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Help with practical matters</strong> — Managing household tasks so family can be present</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>24-hour support</strong> — Available support overnight when family needs to rest</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Continuity of care</strong> — Professional presence ensuring consistent, quality care when family is not able to provide it</span>
              </li>
            </ul>

            <p>
              Supporting families through end-of-life means honoring their need to be fully present to their loved one, emotionally and relationally, during this final, precious time together.
            </p>
          </div>
        </div>
      </section>

      {/* Planning Ahead */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Planning for End-of-Life Care
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              When someone enters hospice care, several important conversations and decisions need to happen:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Understand hospice services</strong> — Learn what the hospice program includes and its limitations</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Assess family caregiver capacity</strong> — Honestly evaluate what family can realistically provide</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Explore supplemental support</strong> — Identify what additional services might be needed or helpful</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Plan ahead</strong> — Arrange support services in advance rather than in crisis</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Honor preferences</strong> — Ensure the dying person&apos;s wishes about care and presence are known and respected</span>
              </li>
            </ul>

            <p>
              Thoughtful planning allows families to be as prepared as possible for this difficult transition and ensures that the focus remains on comfort, dignity, and meaningful time together.
            </p>
          </div>
        </div>
      </section>

      {/* Local Hospice Resources */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Local Hospice Resources
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            If you&apos;re considering hospice care options in the Wauwatosa and Milwaukee area, Agrace Hospice provides compassionate end-of-life care and support for families during this important time.
          </p>
          <div className="bg-purple-50 p-8 rounded-lg border border-purple-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Agrace Hospice - Wauwatosa</h3>
            <p className="text-gray-700 mb-6">
              Agrace provides specialized hospice care with a focus on comfort, dignity, and family support. Their team works with your family to create a care plan that honors your loved one&apos;s wishes during this final chapter.
            </p>
            <a href="https://www.agrace.org/locations/wauwatosa/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-lg">
              Learn more about Agrace Hospice →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
