import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";

export function FundingSection() {
  return (
    <section className="bg-orange-500 text-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">Funding & Support</h2>
          <p className="text-lg">
            Grow your business by leveraging a fully decentralized ecosystem.
          </p>
        </div>

        {/* Decorative border */}
        <div
          className="h-4 bg-black mb-8"
          style={{
            backgroundImage: `repeating-linear-gradient(
            90deg,
            black 0px,
            black 8px,
            transparent 8px,
            transparent 16px
          )`,
          }}
        ></div>

        {/* Funding section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-4">Funding</h3>
          <p className="text-lg mb-8">
            The Polkadot ecosystem offers multiple funding options for
            initiatives innovating in and growing the ecosystem.
          </p>

          {/* Tabs */}
          <div className="flex gap-8 mb-8">
            <button className="text-lg font-semibold text-black border-b-2 border-black pb-2">
              Ecosystem Grants
            </button>
            <button className="text-lg font-semibold text-black/60 pb-2">
              Treasure & Bounties
            </button>
            <button className="text-lg font-semibold text-black/60 pb-2">
              Funds
            </button>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            size="icon"
            className="text-black hover:bg-black/10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-black hover:bg-black/10"
          >
            <svg
              className="w-6 h-6"
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
          </Button>
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="Project 01: Nodes"
            description="We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations."
            variant="light"
          />
          <ProjectCard
            title="Project 02: Nodes"
            description="We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations."
            variant="light"
          />
          <ProjectCard
            title="Project 03: Nodes"
            description="We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations."
            variant="light"
          />
          <ProjectCard
            title="Project 04: Nodes"
            description="We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations."
            variant="light"
          />
        </div>
      </div>
    </section>
  );
}
