import Link from "next/link";
import { Separator } from "./ui/separator";

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  variant?: "dark" | "light";
}

export function ProjectCardVertical({
  title,
  description,
  imgSrc,
  variant = "light",
}: ProjectCardProps) {
  //   const cardBg = variant === "dark" ? "bg-gray-800" : "bg-gray-200";
  //   const textColor = variant === "dark" ? "text-white" : "text-black";
  //   const linkColor = variant === "dark" ? "text-gray-400" : "text-gray-500";

  return (
    <div className={`bg-gray-50 overflow-hidden`}>
      <div className="flex flex-col">
        {/* Image placeholder */}
        <img src={imgSrc} alt="" className="h-40 w-full flex-shrink-0" />

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <h3 className={`text-xl font-semibold mb-3 text-black`}>{title}</h3>
            <p className={`text-sm leading-relaxed text-black`}>
              {description}
            </p>
          </div>

          <Separator className="mt-4" />

          <div className="flex justify-between items-center gap-2 mt-4">
            <Link
              href={"#"}
              className={`text-sm text-gray-500 hover:underline`}
            >
              Learn more about {title.split(":")[1]?.trim() || title}
            </Link>
            <img src="/right-arrow-feature.png" alt="arrow-right" />
          </div>
        </div>
      </div>
    </div>
  );
}
