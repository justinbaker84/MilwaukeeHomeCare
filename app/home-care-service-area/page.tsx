export default function ServiceArea() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Senior Care Service Areas in Milwaukee
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Understanding what service areas are available is an important first step in finding senior care resources. This page provides information about the Milwaukee region and highlights the various communities and areas surrounding the city.
          </p>
        </div>
      </section>

      {/* Geography and Service Area Importance */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Understanding Service Areas for Senior Care
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Senior care services are typically organized around geographic regions and service areas. This allows care providers to understand local communities, coordinate care effectively, and ensure that professional caregivers can reach clients efficiently and provide consistent, high-quality support.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Milwaukee Region</h3>
            <p>
              The Milwaukee metropolitan area encompasses Milwaukee County and surrounding regions, including a mix of urban, suburban, and community areas. Each area has distinct characteristics, populations, and service infrastructure.
            </p>

            <p>
              Understanding where senior care services are available helps:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Ensure accessibility</strong> — Knowing which areas are served helps families access care for their loved ones</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Support consistency</strong> — Service areas allow providers to build relationships with local healthcare facilities and resources</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Enable coordination</strong> — Local service areas facilitate better communication and coordination among caregivers</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Support timeliness</strong> — Geographic organization helps ensure caregivers can respond quickly to clients' needs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Territory Map */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Senior Care Service Areas Map
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <img 
              src="/Territory-Map-copy-1200x1200-a575d8f1-aec8-4d6d-9e99-33346d5632c6.png"
              alt="Senior care service areas in Milwaukee and surrounding regions"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <p className="text-center text-gray-600 text-sm mt-4 max-w-4xl mx-auto">
            This map shows the service areas and regions served in the Milwaukee metropolitan area, including northern Milwaukee, western Milwaukee County (Waukesha County), and surrounding communities.
          </p>
        </div>
      </section>

      {/* Milwaukee Communities */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Milwaukee Communities
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            The Milwaukee area includes a diverse range of communities, each with unique characteristics and demographics. The region includes:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Northern Milwaukee */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Northern Milwaukee</h3>
              <p className="text-gray-700 mb-4">
                The northern part of Milwaukee includes various neighborhoods and communities serving diverse populations with different age demographics and support needs.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Urban neighborhoods</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Mixed residential areas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Healthcare facilities and services</span>
                </li>
              </ul>
            </div>

            {/* Waukesha County */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Waukesha County</h3>
              <p className="text-gray-700 mb-4">
                Waukesha County, west of Milwaukee, includes suburban communities with growing senior populations seeking accessible care services.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Suburban communities</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Mixed residential-commercial areas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Growing senior population</span>
                </li>
              </ul>
            </div>

            {/* North Shore */}
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">North Shore</h3>
              <p className="text-gray-700 mb-4">
                The North Shore includes communities north of Milwaukee along Lake Michigan, including Shorewood, Whitefish Bay, Glendale, and others.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Shorewood</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Whitefish Bay</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Glendale</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Fox Point, Bayside, River Hills</span>
                </li>
              </ul>
            </div>

            {/* Milwaukee County South */}
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Milwaukee County South</h3>
              <p className="text-gray-700 mb-4">
                Southern Milwaukee County includes communities south of Milwaukee city limits with diverse residential and commercial characteristics.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Oak Creek</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>St. Francis</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Franklin</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Cudahy</span>
                </li>
              </ul>
            </div>

            {/* Racine County */}
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Racine County</h3>
              <p className="text-gray-700 mb-4">
                Racine County, south of Milwaukee, includes communities like Racine, Waterford, and others, serving populations in the southern region.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-pink-600 font-bold">•</span>
                  <span>Racine</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-600 font-bold">•</span>
                  <span>Waterford</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-600 font-bold">•</span>
                  <span>Union Grove</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-600 font-bold">•</span>
                  <span>Mt. Pleasant</span>
                </li>
              </ul>
            </div>

            {/* Ozaukee & Washington Counties */}
            <div className="bg-gray-100 p-6 rounded-lg border border-gray-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ozaukee & Washington Counties</h3>
              <p className="text-gray-700 mb-4">
                Counties north of Milwaukee including communities along Lake Michigan and inland areas serving northern region populations.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-gray-600 font-bold">•</span>
                  <span>Port Washington</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-600 font-bold">•</span>
                  <span>Cedarburg</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-600 font-bold">•</span>
                  <span>West Bend</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-600 font-bold">•</span>
                  <span>And surrounding areas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Demographic Information */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Understanding Milwaukee's Senior Population
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              The Milwaukee metropolitan area is home to a substantial senior population. Understanding the demographic characteristics of these communities helps explain why senior care services are important:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Growing aging population</strong> — Like many regions, Wisconsin's population is aging, with increasing numbers of people over 65</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Diverse communities</strong> — Milwaukee serves diverse populations with varying cultural backgrounds, languages, and healthcare needs</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Healthcare infrastructure</strong> — The region has established medical centers, hospitals, and healthcare providers</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span><strong>Housing diversity</strong> — Communities range from urban apartments to suburban homes to rural areas</span>
              </li>
            </ul>

            <p>
              These demographic factors make senior care services an important part of the healthcare landscape in the Milwaukee region.
            </p>
          </div>
        </div>
      </section>

      {/* Finding Resources */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Finding Senior Care Resources in Your Area
          </h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">In Your Service Area</h3>
              <p className="text-gray-700">
                If you or a loved one lives in one of the communities shown on the service area map, you may be able to access in-home senior care services. These services can provide support with daily activities, personal care, household tasks, and companionship.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Outside Your Service Area</h3>
              <p className="text-gray-700 mb-4">
                If you or a loved one lives outside the service area, resources are still available. Many senior care providers operate across multiple regions and states. Additionally:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Local Area Agencies on Aging</strong> — These organizations can provide information about services in your region</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Provider networks</strong> — Many larger care providers maintain networks across multiple locations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Healthcare provider referrals</strong> — Doctors and hospitals can refer you to services in your area</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Online directories</strong> — National directories can help you locate senior care services locally</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Questions to Ask</h3>
              <p className="text-gray-700 mb-4">
                When exploring senior care options, consider asking:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>What specific services are available in my area?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>How are caregivers trained and vetted?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>What are the service hours and scheduling options?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>How much does care cost, and what payment options are available?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Can services be customized to specific needs?</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
