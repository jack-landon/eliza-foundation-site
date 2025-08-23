import { ArrowLeft, ArrowRight } from "lucide-react";

export function DreamBuildSeparator() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-12 flex items-center justify-center overflow-hidden bg-white z-20">
      {/* Left colored sections - mirrored */}
      <div className="flex">
        <div className="bg-blue-700 h-12 w-32"></div>
        <div className="bg-gray-500 h-12 w-16"></div>
        <div className="bg-gray-400 h-12 w-12"></div>
        <div className="bg-gray-800 h-12 w-20"></div>
        <div className="bg-orange-500 h-12 w-8"></div>
      </div>

      {/* Center DREAM and BUILD sections */}
      <div className="flex font-tiny5 text-lg">
        <div className="bg-blue-600 h-12 flex items-center px-6 gap-2 group hover:underline cursor-pointer">
          <ArrowLeft className="w-4 h-4 text-white" />
          <span className="text-white font-bold text-sm tracking-wider group-hover:underline">
            DREAM
          </span>
        </div>
        <div className="bg-orange-500 h-12 flex items-center px-6 gap-2 group hover:underline cursor-pointer">
          <span className="text-white font-bold text-sm tracking-wider group-hover:underline">
            BUILD
          </span>
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Right colored sections - mirrored from left */}
      <div className="flex">
        <div className="bg-orange-500 h-12 w-8"></div>
        <div className="bg-gray-800 h-12 w-20"></div>
        <div className="bg-gray-400 h-12 w-12"></div>
        <div className="bg-gray-500 h-12 w-16"></div>
        <div className="bg-blue-700 h-12 w-32"></div>
      </div>
    </div>
  );
}
