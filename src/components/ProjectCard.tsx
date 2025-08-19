interface ProjectCardProps {
  title: string;
  description: string;
  variant?: "dark" | "light";
}

export function ProjectCard({
  title,
  description,
  variant = "light",
}: ProjectCardProps) {
  const cardBg = variant === "dark" ? "bg-gray-800" : "bg-gray-200";
  const textColor = variant === "dark" ? "text-white" : "text-black";
  const linkColor = variant === "dark" ? "text-gray-400" : "text-gray-500";

  return (
    <div className={`${cardBg} rounded-lg overflow-hidden`}>
      <div className="flex">
        {/* Image placeholder */}
        <div className="w-48 h-32 bg-gray-300 flex-shrink-0"></div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <h3 className={`text-xl font-semibold mb-3 ${textColor}`}>
              {title}
            </h3>
            <p className={`text-sm leading-relaxed ${textColor}`}>
              {description}
            </p>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <span className={`text-sm ${linkColor}`}>
              Learn more about {title.split(":")[1]?.trim() || title}
            </span>
            <svg
              className={`w-4 h-4 ${linkColor}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
