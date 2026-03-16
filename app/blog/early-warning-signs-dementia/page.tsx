import Link from 'next/link';

export default function DementiaWarningSignsPost() {
  return (
    <div className="min-h-screen">
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-block text-blue-600 hover:text-blue-700 mb-4">← Back to Blog</Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Watch Out for These 8 Early Warning Signs of Dementia</h1>
          <p className="text-gray-600">February 2024</p>
        </div>
      </section>
      {/* Featured Image */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <img
            src="/watch-out-for-these-8-early-warning-signs-of-dementia.jpg"
            alt="Watch Out for These 8 Early Warning Signs of Dementia"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <article className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p>As we get older, we sometimes don&apos;t exhibit the clarity of thought we once had. We may find ourselves losing our train of thought, misplacing our glasses, or forgetting names more often. Noticing this and dwelling upon it can make you think that perhaps you are developing dementia. Take heart – you&apos;re not alone. It&apos;s a fear that many aging adults have. It&apos;s more noticeable, perhaps, when you see these changes happening with an older loved one in your life. Cognitive changes can happen slowly or quickly, and it&apos;s imperative that you look for the early warning signs of dementia for the health and safety of your loved one.</p>
          <h2>Early Warning Signs of Dementia to Look For</h2>
          <p>How do you know if a senior is beginning to develop dementia or just feeling the natural effects of aging? Medical tests can be performed to diagnose this illness, but there are also early warning signs you can look for during your regular interactions with your loved one. Here are eight of them:</p>
          <ul>
            <li><strong>Memory problems</strong> — particularly remembering recent events</li>
            <li><strong>Difficulty performing familiar tasks</strong> — everyday tasks become increasingly difficult</li>
            <li><strong>Problems with language</strong> — trouble expressing thoughts and getting the right words out</li>
            <li><strong>Disorientation in time and space</strong> — struggling to get their bearings</li>
            <li><strong>Impaired judgment</strong> — erratic behavior fueled by a lack of sound judgment</li>
            <li><strong>Misplacing items</strong> — frequently losing things like glasses or keys</li>
            <li><strong>Apathy and withdrawal or depression</strong> — feelings of melancholy and withdrawal</li>
            <li><strong>Personality or behavior changes</strong> — changes in brain often accompanied by outward changes</li>
          </ul>
          <p>If you're concerned about seeing some of these signs, take the next step and talk to their doctor. Only a qualified healthcare provider, after multiple tests and assessments, can confirm if someone has dementia.</p>
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

