import Link from 'next/link';

export default function CaregivingSupportPost() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-block text-blue-600 hover:text-blue-700 mb-4">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Where to Go for Caregiving Support
          </h1>
          <p className="text-gray-600">November 2024</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <img
            src="/Where-to-Go-for-Caregiving-Support.png"
            alt="Where to Go for Caregiving Support"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p>
            If you're a family caregiver who is feeling stressed, anxious, and exhausted, rest assured that you're not alone. Many family caregivers struggle with these feelings while taking care of a loved one and trying to balance all of the other responsibilities they have. Some caregivers reach the point where they visit their doctor to get help for their declining physical and mental health, while many others suffer in silence and just do their best to get through the day. In either case, the quality of care they're providing for a loved one often declines. However, there is light at the end of the tunnel for family caregivers needing caregiving support. There are people and groups that are there to help improve your quality of life and ensure your loved one is getting the best care possible.
          </p>

          <h2>Here are some sources that can provide you with the support you need as a family caregiver:</h2>

          <h3>Family</h3>

          <p>
            For some caregivers, asking family members for help is difficult. They worry that they're being a burden and feel guilty asking for assistance. But, many family members say they'd be happy to help more if they were asked and that they're reluctant to volunteer for fear of breaking up the routines you've established caring for your loved one.
          </p>

          <p>
            When you're struggling as a caregiver, be candid with your family and ask for help with some of the tasks that are overloading you. If they came to you, you'd be happy to help, so be confident they'll do the same for you.
          </p>

          <h3>Friends</h3>

          <p>
            An often overlooked source of support for family caregivers is their friends. Good friends are there not only to provide emotional support, but they'll gladly lend a hand when you need help with tasks like running errands, driving your loved one to appointments, grocery shopping, etc.
          </p>

          <h3>Local and Online Support Groups</h3>

          <p>
            A quick Google search will reveal numerous online caregiver support groups you can join, and in some cases, you'll find groups that meet in person in your community. Either way, support groups provide a safe place to talk about what you're experiencing as a family caregiver. Members offer each other encouragement and guidance, and even share techniques they use to provide the best care possible for their loved ones.
          </p>

          <p>
            One popular support group many caregivers rely on is the Caregiver Action Network, based in Washington, D.C. This resource will help you assist your loved one with the day-to-day activities of living. Helpful sections you'll find on their website are the Family Caregiver Toolbox and 10 Tips For Family Caregivers.
          </p>

          <h3>Caregiving Agencies</h3>

          <p>
            There are professional caregivers in your area that are there to support you. They offer a full range of services provided by compassionate, trained caregivers, which will relieve some of the pressure you face.
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

