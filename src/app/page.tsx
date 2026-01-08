import { FaGithub } from "react-icons/fa";
import NavBar from "../../components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#2E2E2E] text-white min-h-screen">
      <NavBar></NavBar>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-25 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto py-10">
        <div className="flex flex-col">
          <div className="w-full max-w-[200px] h-auto object-cover mt-3">
              <img src="/photo.png" alt="myPhoto"/>
          </div> 
          <h1 className="text-2xl font-semibold mt-5 mb-1">José Antunes - 호세 안툰스</h1>
          <p className="text-lg flex items-center mb-5">josemiguel@g.skku.edu</p>
          <p className="text-base leading-relaxed">I am a Portuguese Computer Science and Engineering graduate from Sungkyunkwan University in South Korea. I am interested in web development, blockchain technologies, and researching biases in large language models. I am currently working as an intern at {" "}
            <a 
              className="text-[#FFD900] hover:underline"
              href="https://hli.skku.edu"
              target="_blank"
              rel="noopener noreferrer"
            >HLILab</a>.
          </p>
        </div>
        <div className="flex flex-col gap-7 text-base">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#FFD900]">Education</h2>
            <p className="font-medium font-semibold">Sungkyunkwan University (Feb. 2021 - Feb. 2026)</p>
            <p>B.Sc. in Computer Science and Engineering</p>
            <p>GPA: 3.62 / 4.5</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#FFD900]">Experience</h2>
            <p className="font-medium font-semibold">HLILab Research Internship (Sept. 2025 - Feb. 2026)</p>
            <p className="mb-2">Worked as an undergraduate research intern on an individual project that aims to evaluate gender and cultural bias in LLMs.</p>

            <p className="font-medium font-semibold">SWE2021 Teaching Assistant (Sept. - Dec. 2025)</p>
            <p className="mb-2">Participated as a teaching assistant in the Open Source Software Practice (SWE2021) course</p>

            <p className="font-medium font-semibold">HLILab 2025 Summer Internship (Jul. - Aug. 2025)</p>
            <p className="mb-2">Worked as an undergraduate research intern with HLILab’s Cultural Values of LLMs project team.</p>

            <p className="font-medium font-semibold">OISS Tutoring Program (Mar. - Jun. 2025)</p>
            <p>Conducted one-on-one tutoring with a junior student to provide guidance and support for the Java Programming Lab (SWE2023) course.</p>
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
                ><FaGithub /> BV - Blockchain Visualiser (Mar. - Nov. 2025)
                </a>
              </p>
              <p>
                A web platform that oﬀers easy access to Bitcoin and Ethereum transaction and environmental impact data, with the goal of improving the transparency of these blockchains.
              </p>
            </div>
            <div className="mb-2">
              <p>
                <a
                  href="https://github.com/23-jose/Capstone_Team_F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FFD900] hover:underline font-semibold"
                ><FaGithub /> HallyuGo (Sept. - Dec. 2024)
                </a>
              </p>
              <p>
                A guide map application that helps users explore Hallyu hotspots. It provides comprehensive information for exploring the best K-Culture destinations in South Korea.
              </p>
            </div>
            <div className="mb-2">
              <p>
                <a
                  href="https://github.com/23-jose/PoW_vs_PoS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FFD900] hover:underline font-semibold"
                ><FaGithub /> PoW vs. PoS (Dec. 2024)
                </a>
              </p>
              <p>
                Individual research experiment that compared blockchains with diﬀerent consensus mechanisms across diﬀerent metrics in order to assess energy consumption.
              </p>
            </div>
            <div className="mb-2">
              <p>
                <a
                  href="https://github.com/23-jose/AnonymousACL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FFD900] hover:underline font-semibold"
                ><FaGithub /> Anonymous ACL Submission (Nov. 2023)
                </a>
              </p>
              <p>
                Simulated the elaboration, anonymous submission, and peer review process of papers to an ACL-style conference by conducting artificial intelligence prompt engineering experiments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}