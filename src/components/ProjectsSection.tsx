import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6">Projects</h2>
          <p className="text-lg text-gray-300 max-w-4xl">
            We support developers and open-source initiatives across the Eliza
            ecosystem through funding, advocacy, research, and collaboration.
          </p>
        </div>

        <div className="space-y-6">
          <ProjectCard
            title="Project 01: Framework Development"
            description="Funding and supporting teams advancing the Eliza Framework itself — infrastructure, tooling, and core protocols."
            variant="dark"
          />
          <ProjectCard
            title="Project 02: AI Agents & Applications"
            description="Backing developers building intelligent agents, dApps, and consumer applications powered by Eliza."
            variant="dark"
          />
          <ProjectCard
            title="Project 03: Ecosystem Growth"
            description="Collaborating with partners to expand adoption and create real-world use cases for Eliza-powered AI."
            variant="dark"
          />
          <ProjectCard
            title="Project 04: Research & Education"
            description="Funding initiatives that advance AI safety, ethics, and decentralized governance within the Eliza ecosystem."
            variant="dark"
          />
        </div>
      </div>
    </section>
  );
}
