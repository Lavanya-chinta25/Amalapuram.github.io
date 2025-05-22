export default function AllPublications() {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Selected Publications</h2>

      {/* Publication 1 */}
      <div className="mb-8 p-4 border rounded shadow">
        <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold mb-2">
          IEEE INFOCOM
        </div>
        <p className="text-lg font-bold mt-2">
          “Spider: A semi-supervised continual learning-based network intrusion detection system”
        </p>
        <p className="text-base text-gray-800 mt-1">
          Suresh Kumar Amalapuram, Bheemarjuna Reddy Tamma, Sumohana S. Channappayya
        </p>
        <p className="text-sm text-gray-600 mt-2">
          IEEE INFOCOM 2024 – 43rd IEEE Conference on Computer Communications
        </p>
        <a
          href="https://newslab.iith.ac.in/files/conference/SPIDER-Suresh.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 text-lg mt-2 inline-block"
        >
          📄 View Paper
        </a>
      </div>

      {/* Publication 2 */}
      <div className="mb-8 p-4 border rounded shadow">
        <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold mb-2">
          NeurIPS
        </div>
        <p className="text-lg font-bold mt-2">
          “Augmented memory replay-based continual learning approaches for network intrusion detection”
        </p>
        <p className="text-base text-gray-800 mt-1">
          Suresh Kumar Amalapuram, Sumohana S. Channappayya, Bheemarjuna Reddy Tamma
        </p>
        <p className="text-sm text-gray-600 mt-2">
          37th Conference AdvancesinNeuralInformation Processing Systems (NeurIPS), 2023
        </p>
        <a
          href="https://newslab.iith.ac.in/files/conference/NEURIPS2023.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 text-lg mt-2 inline-block"
        >
          📄 View Paper
        </a>
      </div>

      {/* Publication 3 */}
      <div className="mb-8 p-4 border rounded shadow">
        <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold mb-2">
          COMSNETS
        </div>
        <p className="text-lg font-bold mt-2">
          “Continual learning for anomaly based network intrusion detection”
        </p>
       <p className="text-base text-gray-800 mt-1">
          Suresh Kumar Amalapuram, A. Tadwai, R. Vinta,  S. S. Channappayya, and B. R. Tamma
        </p>
        <p className="text-sm text-gray-600 mt-2">
          COMSNETS 2022 (14th International Conference on COMmunication Systems & NETworkS)
        </p>
        <a
          href="https://newslab.iith.ac.in/files/conference/Suresh_Network_Intrusion.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 text-lg mt-2 inline-block"
        >
          📄 View Paper
        </a>
      </div>

      {/* Publication 4 */}
      <div className="mb-8 p-4 border rounded shadow">
        <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold mb-2">
          ACM AI-ML-Systems
        </div>
        <p className="text-lg font-bold mt-2">
          “On handling class imbalance in continual learning based network intrusion detection systems”
        </p>
        <p className="text-base text-gray-800 mt-1">
           Suresh Kumar Amalapuram, Thushara Tippi Reddy, Sumohana S. Channappayya, Bheemarjuna Reddy Tamma
        </p>
        <p className="text-sm text-gray-600 mt-2">
            Proceedings of the 1st ACM International Conference on AI-ML-Systems, Bangalore (India), 2021
        </p>
        <a
          href="https://newslab.iith.ac.in/files/conference/Suresh_Paper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 text-lg mt-2 inline-block"
        >
          📄 View Paper
        </a>
      </div>
    </div>
  );
}
