export default function EmployeePortal() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-8 sm:pt-20 sm:pb-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Home Instead Employee Portal
          </h1>
        </div>
      </section>

      {/* Employee File Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">


          <div className="grid md:grid-cols-3 gap-8">
            {/* HR Portal */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Employee File:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <a href="https://homeinstead-milwaukee.applicantstack.com/o/x/login" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline">HR Portal</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <a href="https://www.homeinsteademployeeexperience.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline">Employee Experience Survey</a>
                </li>
              </ul>
            </div>

            {/* Smart Forms */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Smart Forms:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <a href="https://www.formrouter.net/pdfviewer/web/viewer.html?file=/forms@HISC/Time_Off_Request.pdf&filefields=/forms@HISC/Time_Off_Request.txt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline">Employee Time Off Request Form</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <a href="https://formrouter.net/pdfviewer/web/viewer.html?file=/forms@HISC/CGAAvailabilityPartTime3.pdf&filefields=/forms@HISC/CGAAvailabilityPartTime3.txt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline">Part-Time Availability Form</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <a href="https://www.formrouter.net/pdfviewer/web/viewer.html?file=/forms@HISC/CGAAvailabilityFullTime.pdf&filefields=/forms@HISC/CGAAvailabilityFullTime.txt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline">Full-Time Availability Form</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <a href="https://www.formrouter.net/pdfviewer/web/viewer.html?file=/forms@HISC/CG_Reduction_Of_Work.pdf&filefields=/forms@HISC/CG_Reduction_Of_Work.txt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline">Reduction of Work Form</a>
                </li>
              </ul>
            </div>

            {/* Schedule & Pay Roll */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule & Pay Roll:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <a href="https://app.clearcareonline.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline">ClearCare App (Caregiver Schedule Portal)</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <a href="https://payplus4hisc.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline">Pay Roll Portal (Check Stubs &amp; W-2&apos;s)</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <a href="https://www.payactiv.com/lp/card-gp2de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline">PayActive App (Partial Pay Advance)</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
