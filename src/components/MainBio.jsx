export default function MainBio() {
    return (
      <div className="flex-1 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Bio</h2>
        <p className="text-justify mb-4">
            I am Suresh Kumar Amalapuram, currently a Postdoctoral Researcher under the guidance of{' '}
            <a href="https://homepages.inf.ed.ac.uk/mmarina/" className="text-red-600">Prof. Mahesh K. Marina</a> at the School of Informatics, University of Edinburgh. I completed my Ph.D. in Computer Science & Engineering at the{' '}
            <a href="https://www.iith.ac.in/" className="text-red-600">IIT Hyderabad</a>, advised by{' '}
            <a href="https://people.iith.ac.in/tbr/" className="text-red-600">Dr. Bheemarjuna Reddy Tamma</a> and{' '}
            <a href="https://people.iith.ac.in/sumohana/" className="text-red-600">Dr. Sumohana S Channappayya</a>, where my thesis focused on continual learning for intrusion detection systems to address concept drift in network traffic. I hold an M.Tech in Information Technology from{' '}
            <a href="https://www.iitkgp.ac.in/" className="text-red-600">IIT Kharagpur</a> and a B.Tech in Information Science & Technology from Acharya Nagarjuna University. My research interests lie at the intersection of systems and machine learning, particularly in data-driven system security and efficient ML systems.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Research Interests</h2>
        <p className="mb-4 text-justify">
        My research focuses on data-driven system security and systems for machine learning (ML), with emphasis on anomaly detection, intrusion detection, and malware analysis. I also explore ML for networks and operating systems, aiming to build efficient and adaptive ML systems.
        </p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Publications</h2>

        <div className="mb-4">
            <p className="text-base leading-relaxed">
            <span className="bg-black text-white px-2 py-1 rounded text-sm font-semibold mr-2">2024</span>
            “Spider: A semi-supervised continual learning-based network intrusion detection system”
            <a href="https://newslab.iith.ac.in/files/conference/SPIDER-Suresh.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-lg mx-2">📄</a>
            <span className="text-gray-600">
                [<a href="https://newslab.iith.ac.in/files/conference/SPIDER-Suresh.pdf" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">IEEE INFOCOM</a>] (Core A∗)
            </span>
            </p>
        </div>

        <div className="mb-4">
            <p className="text-base leading-relaxed">
            <span className="bg-black text-white px-2 py-1 rounded text-sm font-semibold mr-2">2023</span>
            “Augmented memory replay-based continual learning approaches for network intrusion detection”
            <a href="https://newslab.iith.ac.in/files/conference/NEURIPS2023.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-lg mx-2">📄</a>
            <span className="text-gray-600">
                [<a href="https://newslab.iith.ac.in/files/conference/NEURIPS2023.pdf" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">NeurIPS</a>] (Core A∗)
            </span>
            </p>
        </div>

        <div className="mb-4">
            <p className="text-base leading-relaxed">
            <span className="bg-black text-white px-2 py-1 rounded text-sm font-semibold mr-2">2022</span>
            “Continual learning for anomaly based network intrusion detection”
            <a href="https://newslab.iith.ac.in/files/conference/Suresh_Network_Intrusion.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-lg mx-2">📄</a>
            <span className="text-gray-600">
                [<a href="https://newslab.iith.ac.in/files/conference/Suresh_Network_Intrusion.pdf" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">COMSNETS</a>]
            </span>
            </p>
        </div>

        <div className="mb-4">
            <p className="text-base leading-relaxed">
            <span className="bg-black text-white px-2 py-1 rounded text-sm font-semibold mr-2">2021</span>
            “On handling class imbalance in continual learning based network intrusion detection systems”
            <a href="https://newslab.iith.ac.in/files/conference/Suresh_Paper.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-lg mx-2">📄</a>
            <span className="text-gray-600">
                [<a href="https://newslab.iith.ac.in/files/conference/Suresh_Paper.pdf" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">ACM AI-ML-Systems</a>]
            </span>
            </p>
        </div>
        </div>
      </div>      
    );
  }
  