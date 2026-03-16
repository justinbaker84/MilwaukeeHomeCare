import Link from 'next/link';

export default function MemoryCarePost() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-block text-blue-600 hover:text-blue-700 mb-4">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Is Your Loved One Ready for Memory Care?
          </h1>
          <p className="text-gray-600">December 2024</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <img
            src="/Is-Your-Loved-One-Ready-for-Memory-Care-1.png"
            alt="Is Your Loved One Ready for Memory Care?"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p>
            Memory loss related to Alzheimer's disease and other forms of dementia is a progressive condition that worsens over time. As their degree of memory loss increases, your loved one will require an increasing amount of care, which may eventually become a full-time need. While families do all they can to provide loving and compassionate care for an aging adult with increasing memory loss, specialized care from a well-trained professional caregiver may become necessary if you want them to continue living at home. How do you know as a family caregiver that you need help providing the care your loved one needs? Here are five signs we've found at Home Instead of Milwaukee to be reliable indicators that memory care is needed.
          </p>

          <h2>Your loved one is struggling with activities of daily living</h2>

          <p>
            This is a common benchmark used to judge if a senior needs extra help. As a family member, you may have noticed that their level of self-care has changed, such as not dressing correctly, bathing infrequently, or having a noticeable body odor.
          </p>

          <h2>They're getting lost on routes they take frequently</h2>

          <p>
            From trips to the grocery store to walks around the neighborhood, your loved one is losing their bearings while they're out, and you're becoming increasingly concerned that you're going to soon need help finding them.
          </p>

          <h2>They aren't taking their medications properly</h2>

          <p>
            Seniors in the early stages of Alzheimer's and dementia will begin to either underdose, overdose, or totally forget to take their medications. This can lead to further health complications, necessitating additional care.
          </p>

          <h2>You're concerned for their safety</h2>

          <p>
            If your loved one is leaving appliances or burners on after cooking, leaving doors open or unlocked, or wandering and getting lost, their safety is in jeopardy. Unexplained bruises they don't remember getting are also a red flag that should be taken seriously.
          </p>

          <h2>Their living conditions are subpar</h2>

          <p>
            If you're noticing that mail is piling up, the food in the refrigerator is spoiled, their once tidy home or room is constantly messy, dirty dishes are left out, etc., it may very well be time for outside assistance.
          </p>

          <h2>Compassionate Memory Care in Milwaukee</h2>

          <p>
            Home Instead Senior Care of Milwaukee can provide the high-quality memory care your loved one needs in the comfort of their own home. Our CAREgivers have received special training through our critically acclaimed training program CARE: Changing Aging Through Research and Education. This program is changing how people live with Alzheimer's and other forms of dementia.
          </p>

          <h2>Our specially trained CAREgivers provide help to seniors with memory-related issues in many ways:</h2>

          <ul>
            <li>Encouragement to do as much as they can on their own</li>
            <li>Personal care assistance, such as toileting, bathing, and grooming</li>
            <li>Maintain a routine to discourage agitation and outbursts</li>
            <li>Mental stimulation through conversation and other activities</li>
            <li>Maintaining a safe environment</li>
            <li>Manage changing behaviors</li>
            <li>Adapting the level of care as the disease progresses</li>
            <li>Honor who the senior was earlier in life</li>
            <li>Provide nutritious meals</li>
            <li>Assist with ambulation and socialization</li>
            <li>Transport to medical appointments and other events</li>
            <li>Support the family</li>
            <li>Light housework and other household tasks</li>
            <li>Pet care</li>
          </ul>

          <p>
            All of our care is delivered with patience, empathy, and compassion, allowing you to have peace of mind while you take time to rest and recharge. Whether it be for several hours a day or around the clock, we'll be there when you need us.
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

