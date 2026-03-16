import Link from 'next/link';

export default function DementiaBehaviorsPost() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-block text-blue-600 hover:text-blue-700 mb-4">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            A Caregiver's Guide to Dementia Behaviors
          </h1>
          <p className="text-gray-600">August 2025</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <img
            src="/A-Caregivers-Guide-to-Dementia-Behaviors-.png"
            alt="A Caregiver's Guide to Dementia Behaviors"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p>
            Being a family caregiver for a loved one with dementia is very demanding. As many as 90 percent of caregivers caring for people who have dementia say their loved one exhibits behavior that is worrisome or challenging for them. If you're wondering if the behaviors you're seeing from your loved one are typical of seniors with dementia, The Family Caregiver Alliance has found these behaviors to be commonly found as a guide to dementia:
          </p>

          <h2>Wandering</h2>

          <p>
            People with dementia walk seemingly aimlessly for various reasons, such as boredom, medication side effects, or to look for "something" or someone. They also may be trying to fulfill a physical need—thirst, hunger, a need to use the toilet or exercise.
          </p>

          <h2>Incontinence</h2>

          <p>
            The loss of bladder or bowel control often occurs as dementia progresses. Sometimes accidents result from environmental factors; for example, someone can't remember where the bathroom is located or can't get to it in time.
          </p>

          <h2>Agitation</h2>

          <p>
            Agitation refers to various behaviors associated with dementia, including irritability, sleeplessness, and verbal or physical aggression. Often these types of behavior problems progress with the stages of dementia, from mild to more severe.
          </p>

          <p>
            Agitation may be triggered by a variety of things, including environmental factors, fear, and fatigue. Most often, agitation is triggered when the person experiences "control" being taken from them.
          </p>

          <h2>Repetitive speech or actions</h2>

          <p>
            People with dementia often repeat a word, statement, question, or activity repeatedly. While this behavior is usually harmless for the person with dementia, it can be annoying and stressful to caregivers. Sometimes the behavior is triggered by anxiety, boredom, fear, or environmental factors.
          </p>

          <h2>Paranoia</h2>

          <p>
            Seeing a loved one suddenly become suspicious, jealous, or accusatory is unsettling. Remember, what the person is experiencing is very real to them. It is best not to argue or disagree. This, too, is part of dementia—try not to take it personally.
          </p>

          <h2>Sleeplessness</h2>

          <p>
            Restlessness, agitation, disorientation, and other troubling behavior in people with dementia often get worse at the end of the day and sometimes continue throughout the night.
          </p>

          <p>
            Experts believe this behavior, commonly called sundowning, is caused by a combination of factors, such as exhaustion from the day's events and changes in the person's biological clock that confuse day and night.
          </p>

          <h2>Eating/Nutrition</h2>

          <p>
            Ensuring your loved one is eating enough nutritious foods and drinking enough fluids is challenging. People with dementia begin to forget that they need to eat and drink. Complicating the issue may be dental problems or medications that decrease appetite or make food taste "funny." The consequences of poor nutrition are many, including weight loss, irritability, sleeplessness, bladder or bowel problems, and disorientation.
          </p>

          <h2>Hygiene</h2>

          <p>
            People with dementia often have difficulty remembering "good" hygiene, such as brushing their teeth, toileting, bathing, and regularly changing their clothes. From childhood, we are taught these are highly private and personal activities; to be undressed and cleaned by another can feel frightening, humiliating, and embarrassing. As a result, bathing often causes distress for both caregivers and their loved ones.
          </p>

          <h2>Additional problem areas include:</h2>

          <ul>
            <li>Dressing</li>
            <li>Hallucinations</li>
            <li>Sexually inappropriate behavior</li>
            <li>Verbal outbursts</li>
          </ul>

          <h2>Home Instead Can Help With Dementia Care</h2>

          <p>
            If your loved one has dementia, we can help. Our professional caregivers are experienced and skilled at caring for seniors with dementia. They provide compassionate care, which allows aging adults with dementia to continue to live at home in Naples, where they're most comfortable with familiar surroundings.
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

