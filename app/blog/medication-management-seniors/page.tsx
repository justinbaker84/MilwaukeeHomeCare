import Link from 'next/link';

export default function MedicationManagementPost() {
  return (
    <div className="min-h-screen">
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-block text-blue-600 hover:text-blue-700 mb-4">← Back to Blog</Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">7 Tips For Assisting a Senior With Medication Management</h1>
          <p className="text-gray-600">December 2023</p>
        </div>
      </section>
      {/* Featured Image */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <img
            src="/7-tips-for-assisting-a-senior-with-medication-management.jpg"
            alt="7 Tips For Assisting a Senior With Medication Management"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <article className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p>Most seniors need assistance with medication management. Many take multiple medications throughout the day, and it&apos;s easy for a mix-up to happen. Taking medication correctly is essential for treating your older adult&apos;s health conditions and managing their symptoms. That&apos;s why medication management for seniors is so important. Here are seven tips to help a senior with their medication management.</p>
          <h2>1. Keep everything in one location</h2>
          <p>Keep all medications, vitamins, OTC meds, and supplements in one location. Use a clear plastic storage bin to ensure that everything stays together.</p>
          <h2>2. Make sure medication is stored properly</h2>
          <p>In general, medication should be kept in a cool, dry place away from windows and sources of heat. The bathroom medicine cabinet isn't ideal because of heat and humidity.</p>
          <h2>3. Create and maintain an up-to-date medication list</h2>
          <p>Record names, dosages, frequency, prescriber names, and purposes of each medication. This helps prevent adverse drug interactions.</p>
          <h2>4. Pre-sort medications for the week</h2>
          <p>Using a pill organizer allows you to help your senior pre-sort prescriptions for the upcoming week, with enough compartments for every dose.</p>
          <h2>5. Make sure medication instructions are clear</h2>
          <p>Follow the doctor's instructions exactly. Ensure your senior understands which medications are safe to take together.</p>
          <h2>6. Set up medication reminders and a tracking system</h2>
          <p>Use alarms, apps, or basic alarm clocks for reminders. Track medications with a simple chart using checkmarks or X's.</p>
          <h2>7. Plan ahead for medication refills</h2>
          <p>Ask for 90-day supplies through mail order pharmacy when possible. Use automatic refills and delivery services to stay organized.</p>
        </div>
      </article>
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-block text-blue-600 hover:text-blue-700 font-medium">← Back to Blog</Link>
        </div>
      </section>
    </div>
  );
}

