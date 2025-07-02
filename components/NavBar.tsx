import { FaGithub } from "react-icons/fa";

export default function NavBar() {
    return (
        <nav className="bg-[#212121] text-white text-base sm:text-lg md:text-xl font-bold h-15 sm:h-15 md:h-15 flex items-center">
            <div className="w-full flex justify-center gap-6 sm:gap-8">
                <a
                    href="/JoseAntunes_CV.pdf"
                    download
                    className="hover:text-[#FFD900]"
                >CV</a>
                <a 
                    href="https://github.com/23-jose" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#FFD900] pt-1"
                ><FaGithub size={20} /></a>
            </div>
        </nav>
    );
}
