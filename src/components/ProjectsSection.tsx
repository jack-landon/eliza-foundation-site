import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6">Projects</h2>
          <p className="text-lg text-gray-300 max-w-4xl">
            We support Web 3.0 teams and open-source projects through funding,
            advocacy, research and collaborations.
          </p>
        </div>

        <div className="space-y-6">
          <ProjectCard
            title="Project 01: Web3"
            description="We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations."
            variant="dark"
          />
          <ProjectCard
            title="Project 02: Nodes"
            description="We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations."
            variant="dark"
          />
        </div>
      </div>
    </section>
  );
}
