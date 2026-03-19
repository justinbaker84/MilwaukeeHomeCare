import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      slug: 'how-to-find-right-caregiver-support-system',
      title: 'How to Find the Right Caregiver Support System',
      image: '/How-to-Find-the-Right-Caregiver-Support-System-.png',
      excerpt: 'Building a reliable support system is key to successful caregiving. Learn how to assess needs, prioritize tasks, and create your caregiving "dream team".',
      date: 'December 2023'
    },
    {
      slug: 'give-yourself-gift-of-self-care',
      title: 'Give Yourself the Gift of Self-Care',
      image: '/give-yourself-the-gift-of-self-care.png',
      excerpt: 'Caregiver burnout is real. Discover practical self-care strategies to stay healthy and refreshed throughout the holiday season and beyond.',
      date: 'November 2023'
    },
    {
      slug: 'preparing-home-alzheimers-holiday-season',
      title: "Preparing the Home for a Family Member with Alzheimer's this Holiday Season",
      image: '/Preparing-the-Home-for-a-Family-Member-with-Alzheimers-this-Holiday-Season.png',
      excerpt: "Creating a safe and comfortable home environment for loved ones with Alzheimer's requires thoughtful preparation. Learn practical tips.",
      date: 'October 2023'
    },
    {
      slug: 'encouraging-loved-one-home-care-assistance',
      title: 'Encouraging Your Loved One to Get Home Care Assistance',
      image: '/Encouraging-Your-Loved-One-to-Get-Home-Care-Assistance.png',
      excerpt: 'Having the conversation about home care can be difficult. Learn strategies to gently encourage your loved one to accept the help they need.',
      date: 'March 2026'
    },
    {
      slug: 'senior-care-awareness-holiday-depression',
      title: 'Senior Care Awareness – Holiday Season Depression',
      image: '/Senior-Care-Awareness-Holiday-Season-Depression.png',
      excerpt: 'The holidays can be a difficult time for seniors. Discover practical ways to help your loved one overcome holiday blues and stay engaged.',
      date: 'November 2025'
    },
    {
      slug: 'dementia-nutrition-help-loved-ones',
      title: 'How to Help Loved Ones with Dementia Get the Nutrition They Need',
      image: '/How-to-Help-Loved-Ones-with-Dementia.png',
      excerpt: 'Meal preparation for someone with dementia requires patience and creativity. Explore 12 practical tips for better nutrition outcomes.',
      date: 'September 2025'
    },
    {
      slug: 'caregivers-guide-dementia-behaviors',
      title: "A Caregiver's Guide to Dementia Behaviors",
      image: '/A-Caregivers-Guide-to-Dementia-Behaviors-.png',
      excerpt: 'Understanding common dementia behaviors like wandering, agitation, and repetition can help you respond with compassion and patience.',
      date: 'August 2025'
    },
    {
      slug: 'caregiver-health-depression',
      title: 'Caregiver Health: Depression and Caregiving',
      image: '/Caregiver-Health-Depression-and-Caregiving.png',
      excerpt: 'Family caregiving puts mental health at risk. Learn about depression symptoms and effective treatment options for caregivers.',
      date: 'July 2025'
    },
    {
      slug: 'recovering-hospital-stay-temporary-caregiver',
      title: 'Recovering After a Hospital Stay – Could a Temporary Home Caregiver Help?',
      image: '/Recovering-After-a-Hospital-Stay.png',
      excerpt: 'Transitional care at home can ease recovery after hospitalization. Explore the benefits of professional caregiver support.',
      date: 'June 2025'
    },
    {
      slug: 'national-senior-citizens-day-activities',
      title: '5 Fun Activities to Enjoy this National Senior Citizens Day',
      image: '/5-Fun-Activities-to-Enjoy-this-National-Senior-Citizens-Day-1.png',
      excerpt: 'National Senior Citizens Day is the perfect time to celebrate your loved ones. Explore five fun activities to enjoy together.',
      date: 'May 2025'
    },
    {
      slug: 'home-care-tips-family-caregivers',
      title: '5 Home Care Tips All Family Caregivers Need to Know',
      image: '/5-Home-Care-Tips-All-Family-Caregivers-Need-to-Know-1.png',
      excerpt: 'Whether you\'re new to caregiving or a seasoned pro, these five practical tips will help ensure your loved one gets the care they deserve.',
      date: 'April 2025'
    },
    {
      slug: 'benefits-hiring-in-home-care',
      title: 'The Benefits of Hiring In-Home Care',
      image: '/The-Benefits-of-Hiring-In-Home-Care.png',
      excerpt: 'In-home care provides personalized support while allowing seniors to age in place. Discover five key benefits for seniors and families.',
      date: 'March 2025'
    },
    {
      slug: 'summer-safety-heat-exhaustion-seniors',
      title: 'Summer Safety: How to Detect Heat Exhaustion in Seniors',
      image: '/Summer-Safety-How-to-Detect-Heat-Exhaustion-in-Seniors.png',
      excerpt: 'Learn to recognize the signs of heat exhaustion in seniors and take immediate action to keep your loved ones safe this summer.',
      date: 'February 2025'
    },
    {
      slug: 'senior-receptive-home-care',
      title: 'How to Help a Senior Become Receptive to Receiving Home Care',
      image: '/5-Fun-Activities-to-Enjoy-this-National-Senior-Citizens-Day-1.png',
      excerpt: 'Getting your loved one to accept home care can be challenging. Learn proven strategies to help them embrace the support they need.',
      date: 'January 2025'
    },
    {
      slug: 'is-loved-one-ready-memory-care',
      title: 'Is Your Loved One Ready for Memory Care?',
      image: '/Is-Your-Loved-One-Ready-for-Memory-Care-1.png',
      excerpt: "Recognizing when your loved one needs specialized memory care is crucial. Discover five key signs that indicate it's time for professional support.",
      date: 'December 2024'
    },
    {
      slug: 'where-to-go-caregiving-support',
      title: 'Where to Go for Caregiving Support',
      image: '/Where-to-Go-for-Caregiving-Support.png',
      excerpt: 'Family caregivers don\'t have to struggle alone. Discover valuable resources and support options available to help you through your caregiving journey.',
      date: 'November 2024'
    },
    {
      slug: 'become-professional-caregiver-steps',
      title: '5 Easy Steps to Become a Professional Caregiver',
      image: '/5-easy-steps-to-become-a-professional-caregiver.jpg',
      excerpt: 'Interested in becoming a caregiver? Explore the skills, qualifications, and career opportunities in the fast-growing home care industry.',
      date: 'October 2024'
    },
    {
      slug: 'talking-family-member-home-care',
      title: '8 Tips for Talking to Your Family Member About Home Care',
      image: '/8-Tips-for-Talking-to-Your-Family-Member-About-Home-Care.png',
      excerpt: 'Having the conversation about home care can be challenging. Learn eight practical tips for talking with your aging loved one.',
      date: 'September 2024'
    },
    {
      slug: 'is-home-care-right-fit',
      title: 'Is Home Care the Right Fit for my Family Member?',
      image: '/Is-Home-Care-the-Right-Fit-for-my-Family-Member.png',
      excerpt: "Considering home care for your loved one? Explore three important questions to help you determine if it's the right choice.",
      date: 'August 2024'
    },
    {
      slug: 'know-when-senior-needs-home-care',
      title: 'How to Know When a Loved One Needs Senior Home Care',
      image: '/How-to-Know-When-a-Loved-One-Needs-Senior-Home-Care.png',
      excerpt: 'Learn seven important signs that indicate your loved one may benefit from professional home care services.',
      date: 'July 2024'
    },
    {
      slug: 'caregivers-stay-refreshed',
      title: 'Ways Caregivers Can Stay Refreshed and Keep Smiling',
      image: '/Ways-Caregivers-can-Stay-Refreshed-and-Keep-Smiling.png',
      excerpt: 'Family caregivers need to take care of themselves. Discover practical strategies for staying refreshed and maintaining your well-being.',
      date: 'June 2024'
    },
    {
      slug: 'senior-caring-spouse-ill',
      title: "Tips for Seniors Caring for a Spouse Who's Ill",
      image: '/Tips-for-Seniors-Caring-for-a-Spouse-Whos-Ill.png',
      excerpt: 'Caring for an ill spouse brings unique challenges. Learn five tips to help senior caregivers manage the physical and emotional demands.',
      date: 'May 2024'
    },
    {
      slug: 'caregiving-industry-facts',
      title: '10 Caregiving Industry Facts You Should Know',
      image: '/10-Caregiving-Industry-facts-you-should-know.png',
      excerpt: 'Over 3.4 million home care workers provide essential support across the U.S. Explore ten interesting facts about the caregiving industry.',
      date: 'April 2024'
    },
    {
      slug: 'value-caregivers-aging-population',
      title: 'Value of Caregivers to the Aging Population',
      image: '/Value-O-fCaregivers-to-the-aging-population.jpg',
      excerpt: 'Professional caregivers play a vital role in helping seniors age in place. Learn how your caregiving efforts make a real difference.',
      date: 'March 2024'
    },
    {
      slug: 'early-warning-signs-dementia',
      title: 'Watch Out for These 8 Early Warning Signs of Dementia',
      image: '/watch-out-for-these-8-early-warning-signs-of-dementia.jpg',
      excerpt: 'Recognizing early dementia symptoms is crucial for getting timely help. Explore eight warning signs to watch for in your loved one.',
      date: 'February 2024'
    },
    {
      slug: 'balance-work-caregiving',
      title: '5 Ways to Effectively Balance Work and Caregiving',
      image: '/5-ways-to-effectively-balance-work-and-caregiving.jpg',
      excerpt: 'Juggling work and caregiving responsibilities is challenging. Discover five practical strategies to achieve better balance.',
      date: 'January 2024'
    },
    {
      slug: 'medication-management-seniors',
      title: '7 Tips For Assisting a Senior With Medication Management',
      image: '/7-tips-for-assisting-a-senior-with-medication-management.jpg',
      excerpt: 'Proper medication management is critical for senior health. Learn seven essential tips to prevent errors and ensure compliance.',
      date: 'December 2023'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Senior Care Resources & Articles
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Explore practical articles and resources about aging, caregiving, senior health, and aging in place. Our blog features information to help families understand and navigate senior care topics.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <article className="group cursor-pointer overflow-hidden rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-gray-200 h-48 sm:h-56">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-block text-blue-600 font-medium text-sm group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Blog */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            About These Resources
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              These articles provide practical information and guidance for families navigating aging and caregiving. Topics include caregiver support, self-care strategies, creating safe home environments, and understanding various aspects of aging and care.
            </p>
            <p>
              While these resources provide general information, they're not a substitute for professional advice. Always consult with healthcare providers, elder law attorneys, or other specialists for guidance specific to your situation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
