import { FaGoogle, FaGithub, FaLinkedin, FaBook, FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";
import profileImage from "../assets/profile.jpeg"; // adjust the path if needed

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center w-full lg:w-1/4 bg-white p-4 rounded shadow">
      <img
        src={profileImage}
        alt="Profile"
        className="w-32 h-32 rounded"
      />
      <h2 className="text-xl font-bold mt-4 text-center">Suresh Kumar Amalapuram</h2>
      <p className="text-gray-700 text-center mt-1 text-sm">
        Postdoctoral Researcher<br />
        School of Informatics, University of Edinburgh,<br />
        Edinburgh
      </p>

      <div className="mt-4 space-y-2 text-sm text-red-600 w-full">
        <a
          href="https://scholar.google.com/citations?user=DSHKk8YAAAAJ&hl=en&oi=ao"
          className="flex items-center gap-2 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGoogle style={{ color: 'black' }} />
          <span>Google Scholar</span>
        </a>
        <a
          href="https://dblp.org/pid/305/7572.html"
          className="flex items-center gap-2 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBook style={{ color: 'black' }} />
          <span>DBLP</span>
        </a>
        <a
          href="http://github.com/amalapuram"
          className="flex items-center gap-2 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={{ color: 'black' }} />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/suresh-kumar-amalapuram-87a42969/"
          className="flex items-center gap-2 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ color: 'black' }} />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://www.facebook.com/sureshkumar.amalapuram/"
          className="flex items-center gap-2 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook style={{ color: 'black' }} />
          <span>Facebook</span>
        </a>
      </div>

      <div className="mt-4 text-sm text-gray-700 w-full space-y-1">
        <div className="flex items-center gap-2">
          <FaPhone /> +44-7459677487
        </div>
        <div className="flex items-center gap-2">
          <FaPhone /> +91-8967370639
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope /> apskumarkrc@gmail.com
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope /> samalapu@ed.ac.uk
        </div>
      </div>
    </div>
  );
}
