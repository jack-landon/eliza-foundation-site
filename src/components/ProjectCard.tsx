import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  variant?: "dark" | "light";
}

export function ProjectCard({
  title,
  description,
  imgSrc,
  variant = "light",
}: ProjectCardProps) {
  //   const cardBg = variant === "dark" ? "bg-gray-800" : "bg-gray-200";
  //   const textColor = variant === "dark" ? "text-white" : "text-black";
  //   const linkColor = variant === "dark" ? "text-gray-400" : "text-gray-500";

  return (
    <div className={`bg-gray-100 overflow-hidden`}>
      <div className="flex">
        {/* Image placeholder */}
        {/* <div className="w-48 bg-gray-200 flex-shrink-0"></div> */}
        <img
          src={imgSrc}
          alt=""
          className="w-1/3 bg-gray-200 flex-shrink-0 object-cover"
        />

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <h3 className={`text-xl font-semibold mb-3 text-black`}>{title}</h3>
            <p className={`text-sm leading-relaxed text-black`}>
              {description}
            </p>
          </div>

          <hr className="mt-4 border-gray-400" />

          <div className="flex justify-between items-center gap-2 mt-4">
            <Link
              href={"#"}
              className={`text-sm text-gray-400 hover:underline`}
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
