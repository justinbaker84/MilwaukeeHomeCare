import Link from 'next/link';

export default function HolidayDepressionPost() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-block text-blue-600 hover:text-blue-700 mb-4">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Senior Care Awareness – Holiday Season Depression
          </h1>
          <p className="text-gray-600">November 2025</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <img
            src="/Senior-Care-Awareness-Holiday-Season-Depression.png"
            alt="Senior Care Awareness – Holiday Season Depression"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p>
            For many seniors, the words &quot;Blue Christmas&quot; are more than just a song title; they describe how they feel as another holiday season comes upon them. Memories of Thanksgiving dinners with the whole family, wrapping gifts for the kids on Christmas Eve, and celebrating New Year&apos;s Eve with friends and family can be painful reminders of lost loved ones or family living far away.
          </p>

          <h2>Signs of Holiday Depression in Seniors</h2>

          <p>Look for these signs that your senior loved one is experiencing depression:</p>

          <ul>
            <li>Sadness or feelings of despair.</li>
            <li>Unexplained or aggravated aches and pains.</li>
            <li>Loss of interest in socializing or hobbies.</li>
            <li>Weight loss or loss of appetite.</li>
            <li>Feelings of hopelessness or helplessness.</li>
            <li>Lack of motivation and energy.</li>
          </ul>

          <p>
            By recognizing that they&apos;re feeling depressed, you&apos;re in a position to help them through the holiday blues. Of course, helping them deal with depression during the holidays isn&apos;t easy, but we&apos;d like to give you a few practical tips to keep their spirits (and yours) up.
          </p>

          <h2>Getting them participating</h2>

          <p>
            A depressed senior finds it difficult to join in the festivities when they&apos;re feeling blue. They tend to withdraw when they&apos;re around others or isolate themselves in a &quot;safe place&quot; in their home, which is typically the bedroom.
          </p>

          <p>
            You can help them by asking and encouraging them to help out with family traditions like decorating the tree, baking holiday cookies, and watching favorite Christmas classics together.
          </p>

          <h2>Have an open conversation about the past</h2>

          <p>
            Even though it might be painful, Mom or Dad may very likely want to reminisce about the past. Offer to pull out family photo albums and home videos. You&apos;ll want to have a box of Kleenex handy, but shedding a few tears is often therapeutic for seniors dealing with holiday depression.
          </p>

          <h2>Help them get engaged in their favorite hobbies</h2>

          <p>
            People love having a hobby for many reasons, but a big one is that it takes our minds off of things that are troubling us. A depressed senior can think themself into a downward spiral very quickly. Encouraging them to do things that give them pleasure – reading, painting, listening to music, writing, baking, or something else they enjoy – will help them experience that feeling of fulfillment that is so important to an aging adult.
          </p>

          <h2>Get them out and about</h2>

          <p>
            If they have the mobility, take them for a walk around the block to see the neighbor&apos;s holiday decorations. If walking is a challenge for them, take them for a drive to see one of the neighborhoods that put up all of the lights and decorations for people to drive by and enjoy. When you get home, enjoy a cup of hot chocolate with them by the tree.
          </p>

          <h2>Build in breaks for them</h2>

          <p>
            An over-tired senior can begin feeling melancholy pretty quickly. Make sure your senior gets adequate rest during the hectic holiday season. Help them keep their regular schedule and routines.
          </p>

          <h2>Have them get some exercise</h2>

          <p>
            Many seniors stop doing the things that keep them healthy during the holidays, including exercising. Walking inside the warm mall or around the block for just 20 minutes every day will help keep their spirits up and help them have a better night&apos;s sleep.
          </p>

          <h2>Take care of yourself</h2>

          <p>
            It&apos;s hard to help someone fight the blues if you&apos;re not feeling well yourself. Do your best not to overeat or over-indulge during the holidays, and make sure you get regular rest and exercise as well. You&apos;ll enjoy the holidays more and can also be an inspiration to the senior in your life.
          </p>

          <h2>Respite Care Support</h2>

          <p>
            Respite Care can also provide you relief during the holidays and help you feel your best. If your loved one lives in Northern Milwaukee, we can help. Our compassionate caregivers can provide them one-on-one attention and help with medication reminders, diet-specific meal preparations, and more as you practice well-deserved self-care.
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

