import Image from "next/image";
import { DreamBuildSeparator } from "./DreamBuildSeparator";

export default function Hero() {
  return (
    <div className="h-screen w-screen min-h-screen min-w-screen">
      <img
        src="/clouds.png"
        alt="clouds"
        className="inset-0 object-cover h-full w-full"
      />
      <div className="flex flex-col justify-between items-center">
        <div
          id="about-section"
          className="absolute top-0 left-0 w-full h-full text-sm sm:text-base flex flex-col items-center justify-center mt-4 sm:mt-8"
        >
          <div className="text-left bg-blue-900/20 backdrop-blur-lg border border-white/30 rounded-lg p-3 sm:p-8 mx-4">
            <h2 className="text-lg sm:text-xl font-extrabold text-white mb-3 sm:mb-6">
              About
            </h2>
            <p className="text-white/90 mb-4 leading-relaxed">
              Our mission is to accelerate the growth of applications built on
              the Eliza Framework.
            </p>
            <p className="text-white/90 mb-6 leading-relaxed">
              We believe in a future where AI-driven systems are open,
              decentralized, and accessible to all.
            </p>
            <p className="text-white/90 mb-6 leading-relaxed">
              The Eliza Foundation provides funding, resources, and research
              support to empower developers building next-generation AI agents
              and applications.{" "}
            </p>
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-3 sm:mb-6">
              Eliza Foundation envisions an internet where:
            </h3>
            <ul className="text-white/90 space-y-2 text-left">
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">•</span>
                Developers are empowered to innovate without gatekeepers
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">•</span>
                AI applications are open-source, transparent, and composable
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">•</span>
                Communities, not corporations, shape the future of intelligent
                systems
              </li>
            </ul>
          </div>
        </div>
      </div>
      <DreamBuildSeparator />
    </div>
  );
}
