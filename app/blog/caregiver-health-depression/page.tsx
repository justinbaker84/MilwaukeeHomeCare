import Link from 'next/link';

export default function CaregiverDepressionPost() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-block text-blue-600 hover:text-blue-700 mb-4">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Caregiver Health: Depression and Caregiving
          </h1>
          <p className="text-gray-600">July 2025</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <img
            src="/Caregiver-Health-Depression-and-Caregiving.png"
            alt="Caregiver Health: Depression and Caregiving"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p>
            Family caregivers spend an average of more than 24 hours a week helping their loved ones continue to live at home. Unfortunately, this time commitment and all the other obligations a caregiver has often put their physical and mental health at the bottom of their to-do list.
          </p>

          <p>
            Over time, that sacrifice can have serious consequences. For example, the Family Caregiver Alliance reports that 40% to 70% of caregivers have symptoms of depression. While genetics, brain chemistry, and life experiences can play a role in depression, caregiving can accelerate its onset.
          </p>

          <h2>The symptoms of depression</h2>

          <p>
            If you're a family caregiver and have been feeling down more than usual, take a moment to evaluate how you're feeling and look at these commons symptoms of depression:
          </p>

          <ul>
            <li>Becoming easily agitated or frustrated</li>
            <li>Feelings of worthlessness or guilt</li>
            <li>Feelings of hopelessness</li>
            <li>Thoughts of death, dying, or suicide</li>
            <li>Disturbed sleep</li>
            <li>Fatigue or loss of energy</li>
            <li>Loss of interest or pleasure in usual activities</li>
            <li>Difficulty thinking or concentrating</li>
            <li>Changes in appetite and weight</li>
            <li>Physical symptoms that do not respond to treatment, such as headaches, digestive disorders, and pain</li>
          </ul>

          <p>
            If you're concerned that you might be suffering from depression, see your doctor as soon as possible. Some medical conditions and certain medications can cause similar symptoms to depression; your doctor can do a medical exam and lab tests to rule these out.
          </p>

          <h2>Treatment for depression</h2>

          <p>
            Depression can be effectively treated. And the sooner treatment begins, the sooner you'll feel better. Treatment often involves a combination of medication, therapy, and support.
          </p>

          <h3>Medication</h3>

          <p>
            Antidepressants are very effective in treating depression. Keep in mind that it will take time for you to feel the full benefit. In some cases, it may take 4-6 weeks. Once you begin taking antidepressants, don't stop without first consulting your doctor. Stopping abruptly can cause unwanted side effects.
          </p>

          <h3>Counseling</h3>

          <p>
            With or without antidepressants, your doctor may refer you to a counselor, psychologist, psychiatrist, or social worker. Counseling can also be a valuable treatment for depression by helping you address the problems you're facing.
          </p>

          <p>
            You may want to interview several professionals before selecting one to work with. It's important that you feel comfortable with the person you'll be talking with. Your doctor, insurance provider, or community mental health clinic may be able to provide referrals.
          </p>

          <h3>Support</h3>

          <p>
            Besides medication and counseling, support from family and friends is also essential for treating depression. The people close to you will be happy to pitch in if you ask them to help with some of your daily tasks, such as meal preparation, laundry, light housekeeping, and running errands.
          </p>

          <p>
            Also, consider respite care. With respite care, a professional caregiver will care for your loved one while you take some time to rest and recharge your batteries. They can help out for a few hours a day, a few days a week, or more. You'll have peace of mind knowing that an experienced pro is caring for your loved one.
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

