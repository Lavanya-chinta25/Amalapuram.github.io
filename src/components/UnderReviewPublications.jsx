export default function UnderReviewPublications() {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Under Review Publications</h2>
        <div className="mb-8 p-4 border rounded shadow">
          <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold mb-2">
            IEEE TNSM
          </div>
          <p className="text-lg font-bold mt-2">
            “SOUL: A Semi-supervised Open-world continUal Learning method for network intrusion detection”
          </p>
          <p className="text-base text-gray-800 mt-1">
             S.K. Amalapuram, S. Kumar, B.R. Tamma, and S.S. Channappayya
          </p>
          <p className="text-sm text-gray-600 mt-2">
            IEEE Transactions on Network and Service Management (TNSM), 2025
          </p>
        </div>

        <div className="mb-8 p-4 border rounded shadow">
          <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold mb-2">
            RAID 2025
          </div>
          <p className="text-lg font-bold mt-2">
            “Semi-supervised continual malware detection: Tackling concept drift on a budget”
          </p>
          <p className="text-base text-gray-800 mt-1">
           S.K. Amalapuram, B. Shresta, C.S.R. Murthy, B.R. Tamma, and S.S. Channappayya
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Proceedings of RAID 2025
          </p>
        </div>

        <div className="mb-8 p-4 border rounded shadow">
          <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold mb-2">
            NeurIPS 2025
          </div>
          <p className="text-lg font-bold mt-2">
            “LAMDA: A Longitudinal Android Malware Benchmark for Concept Drift Analysis”
          </p>
          <p className="text-base text-gray-800 mt-1">
             A. Haque, I. Hossain, M. Kamol, J. Alam, S.K. Amalapuram, S. Talukder, M.S. Rahman
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Proceedings of NeurIPS 2025
          </p>
        </div>
  </div>
  );
}