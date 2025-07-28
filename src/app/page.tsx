import { FaGithub } from "react-icons/fa";
import NavBar from "../../components/NavBar";

export default function Home() {
  return (
    <div className="bg-[#2E2E2E] text-white min-h-screen">
      <NavBar></NavBar>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-25 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto py-10">
        <div className="flex flex-col">
          <img
            src="/photo.png"
            className="w-full max-w-[200px] h-auto object-cover mt-5"/>
          <h1 className="text-2xl font-semibold mt-3 mb-5">José Antunes - 호세 안툰스</h1>
          <p className="text-lg">Sungkyunkwan University</p>
          <p className="text-lg flex items-center mb-5">josemiguel@g.skku.edu</p>
          <p className="text-base leading-relaxed">I am a Portuguese international student at Sungkyunkwan University, pursuing an undergraduate degree in Computer Science and Engineering. I am interested in web development, blockchain technologies, and AI, but I am still exploring different areas of interest. Currently an intern at {" "}
            <a 
              className="text-[#FFD900] hover:underline"
              href="https://hli.skku.edu"
              target="_blank"
              rel="noopener noreferrer"
            >HLILab</a>.
          </p>
        </div>
        <div className="flex flex-col md:gap-7 text-base">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#FFD900]">Education</h2>
            <p className="font-medium font-semibold">Sungkyunkwan University (Feb 2021 - Present)</p>
            <p>B.Sc. in Computer Science and Engineering</p>
            <p>GPA: 3.63 / 4.5</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#FFD900]">Experience</h2>
            <p className="font-medium font-semibold">SKKU Tutoring Program (Mar - Jun 2025)</p>
            <p className="mb-2">Provided one-on-one tutoring for the Java Programming Lab course.</p>

            <p className="font-medium font-semibold">HLILab Summer Internship (Jul 2025 - Present)</p>
            <p>Working on the Cultural Values of LLMs research project.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#FFD900]">Projects</h2>
            <div className="mb-2">
              <p>
                <a
                  href="https://github.com/23-jose/blockchainvisualiser"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FFD900] hover:underline font-semibold"
                ><FaGithub /> BV - Blockchain Visualiser (Ongoing)
                </a>
              </p>
              <p>
                Created a platform for accessing Bitcoin and Ethereum transaction data and estimating energy consumption.
              </p>
            </div>
            <div className="mb-2">
              <p>
                <a
                  href="https://github.com/23-jose/Capstone_Team_F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FFD900] hover:underline font-semibold"
                ><FaGithub /> Hallyu-Go (Sep - Dec 2024)
                </a>
              </p>
              <p>
                Created a guide map application for travels exploring Korean pop culture hotspots.
              </p>
            </div>
            <div className="mb-2">
              <p>
                <a
                  href="https://github.com/23-jose/PoW_vs_PoS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FFD900] hover:underline font-semibold"
                ><FaGithub /> PoW vs. PoS (Dec 2024)
                </a>
              </p>
              <p>
                Compared blockchain energy usage by analyzing CPU, memory, disk, and network traffic metrics.
              </p>
            </div>
            <div className="mb-2">
              <p>
                <a
                  href="https://github.com/23-jose/AnonymousACL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FFD900] hover:underline font-semibold"
                ><FaGithub /> Anonymous ACL Submission (Nov 2023)
                </a>
              </p>
              <p>
                Simulated ACL-style paper submission and review process through AI prompt engineering activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}