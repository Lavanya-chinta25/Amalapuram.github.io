export default function TeachingService() {
  return (
    <div className="mb-12">
      {/* Teaching Plan Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold bg-black text-white px-4 py-2 rounded">Teaching Plan</h2>
        <p className="mt-4 text-gray-800 text-base text-justify">
          Based on my past experience, I believe teaching is one of the most noble professions for two key reasons. First, it provides an opportunity to deepen understanding of fundamental concepts by consistently connecting course material to first principles. Second, it sharpens communication and critical thinking skills by explaining complex topics in an engaging way to a diverse student audience.
          <br /><br />
          During my Ph.D., I experienced this firsthand while lecturing on concept drift in security to 43 students at IIT Hyderabad. Challenging questions prompted deep reflection, one of which led to findings later published at NeurIPS 2023.
          <br /><br />
          I am well-equipped to teach core courses such as Introduction to Programming, Data Structures & Algorithms, Computer Networks, and Operating Systems, as well as electives like Network Security and Machine Learning. My teaching emphasizes practical learning through projects, lab visits, and integration of current research. I'm also interested in offering new courses like "Tailored Machine Learning Methods for Networking," which address domain-specific challenges in network ML applications.
        </p>
      </div>

      {/* Employment Table */}
      <div className="overflow-x-auto">
        <h2 className="text-xl font-bold bg-black text-white px-4 py-2 rounded">Employment</h2>
        <table className="table-auto w-full mt-4 border-collapse min-w-[600px]">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Position</th>
              <th className="border px-4 py-2">Organization</th>
              <th className="border px-4 py-2">Advisor (if applicable)</th>
              <th className="border px-4 py-2">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-4 py-2">Postdoctoral Researcher</td><td className="border px-4 py-2">University of Edinburgh</td><td className="border px-4 py-2">Prof. Mahesh K. Marina</td><td className="border px-4 py-2">Jan 13, 2025 – Current</td></tr>
            <tr><td className="border px-4 py-2">Project Scientist</td><td className="border px-4 py-2">IIT Hyderabad</td><td className="border px-4 py-2">Prof. C. Siva Rama Murthy</td><td className="border px-4 py-2">Aug 2024 – Jan 12, 2025</td></tr>
            <tr><td className="border px-4 py-2">Software Development Engineer-2</td><td className="border px-4 py-2">Oracle India Pvt. Ltd., Bengaluru</td><td className="border px-4 py-2">–</td><td className="border px-4 py-2">July 2016 – April 2019</td></tr>
            <tr><td className="border px-4 py-2">Assistant Manager</td><td className="border px-4 py-2">Family Owned Business</td><td className="border px-4 py-2">–</td><td className="border px-4 py-2">June 2011 – April 2014</td></tr>
          </tbody>
        </table>
      </div>

      {/* Services Table */}
      <div className="mt-6 overflow-x-auto">
        <h2 className="text-xl font-bold bg-black text-white px-4 py-2 rounded">Service</h2>
        <table className="table-auto w-full mt-4 border-collapse min-w-[400px]">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Reviewing</td>
              <td className="border px-4 py-2">
                ICDCS 2025, NeurIPS 2025, Computers & Security, ICVGIP, Complex & Intelligent Systems
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Mentoring</td>
              <td className="border px-4 py-2">
                Supervised UG and PG students at IIT Hyderabad
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Teaching Assistant</td>
              <td className="border px-4 py-2">
                Introduction to Programming, Network Security, Deep Learning
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
