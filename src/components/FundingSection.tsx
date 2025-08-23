import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ProjectCardVertical } from "./ProjectCardVertical";

export function FundingSection() {
  return (
    <section className="bg-orange-500 text-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="">
          <h2 className="text-4xl font-bold mb-4">Funding & Support</h2>
          <p className="text-lg">
            Grow your project with Eliza Foundation funding and resources by
            tapping into our decentralized ecosystem of builders and
            researchers.
          </p>
        </div>

        <img src="/pixels-divider.png" alt="" className="w-full my-16" />

        {/* Funding section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-4">Funding</h3>
          <p className="text-lg mb-8">
            The Eliza Foundation provides multiple funding opportunities for
            developers and teams building on the Eliza Framework — from
            ecosystem grants to research bounties and community-driven funds.
          </p>

          {/* Tabs */}
          <Tabs defaultValue="ecosystem-grants">
            <TabsList className="flex gap-8 mb-8">
              <TabsTrigger
                value="ecosystem-grants"
                className="text-lg font-semibold pb-2"
              >
                Ecosystem Grants
              </TabsTrigger>
              <TabsTrigger
                value="bounties-challenges"
                className="text-lg font-semibold pb-2"
              >
                Bounties & Challenges
              </TabsTrigger>
              <TabsTrigger value="funds" className="text-lg font-semibold pb-2">
                Research & Collaboration Funds
              </TabsTrigger>
            </TabsList>
            <TabsContent value="ecosystem-grants">
              {/* Project cards grid */}
              <p className="text-lg mb-8 ml-3">
                Supporting developers who are pushing the boundaries of what’s
                possible with Eliza-powered applications.
              </p>
              <div className="flex items-center justify-center">
                <div className="flex justify-start items-center mr-8">
                  <img
                    src="/left-chevron.png"
                    className="h-8 w-20 cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <ProjectCardVertical
                    title="Project 01: Framework Development"
                    description="Funding and supporting teams advancing the Eliza Framework itself — infrastructure, tooling, and core protocols."
                    variant="light"
                  />
                  <ProjectCardVertical
                    title="Project 02: AI Agents & Applications"
                    description="Backing developers building intelligent agents, dApps, and consumer applications powered by Eliza."
                    variant="light"
                  />
                  <ProjectCardVertical
                    title="Project 03: Ecosystem Growth"
                    description="Collaborating with partners to expand adoption and create real-world use cases for Eliza-powered AI."
                    variant="light"
                  />
                  <ProjectCardVertical
                    title="Project 04: Research & Education"
                    description="Funding initiatives that advance AI safety, ethics, and decentralized governance within the Eliza ecosystem."
                    variant="light"
                  />
                </div>
                <div className="flex justify-end items-center ml-8">
                  <img
                    src="/right-chevron.png"
                    className="h-8 w-20 cursor-pointer"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="bounties-challenges">
              <p className="text-lg mb-8 ml-3">
                Rewarding contributors who solve key technical challenges or
                contribute to core infrastructure.
              </p>
            </TabsContent>
            <TabsContent value="funds">
              <p className="text-lg mb-8 ml-3">
                Supporting academics, researchers, and developers exploring the
                next frontier of open AI systems.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        <img src="/pixels-divider.png" alt="" className="w-full my-16" />

        {/* Funding section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-4">Support</h3>
          <p className="text-lg mb-8">
            The Eliza ecosystem offers comprehensive support for builders — from
            funding and technical guidance to research, education, and business
            development partnerships.
          </p>

          {/* Tabs */}
          <Tabs defaultValue="business-development">
            <TabsList className="flex gap-8 mb-8">
              <TabsTrigger
                value="business-development"
                className="text-lg font-semibold pb-2"
              >
                Business Development
              </TabsTrigger>
              <TabsTrigger
                value="implementation-partners"
                className="text-lg font-semibold pb-2"
              >
                Implementation Partners
              </TabsTrigger>
              <TabsTrigger
                value="others"
                className="text-lg font-semibold pb-2"
              >
                Other Support
              </TabsTrigger>
            </TabsList>
            <TabsContent value="business-development">
              {/* Project cards grid */}
              <p className="text-lg mb-8 ml-3">
                We provide mentorship, ecosystem connections, and resources to
                help Eliza projects grow sustainably.
              </p>
              <div className="flex items-center justify-center">
                <div className="flex justify-start items-center mr-8">
                  <img
                    src="/left-chevron.png"
                    className="h-8 w-20 cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <ProjectCardVertical
                    title="Project 01: Framework Development"
                    description="Funding and supporting teams advancing the Eliza Framework itself — infrastructure, tooling, and core protocols."
                    variant="light"
                  />
                  <ProjectCardVertical
                    title="Project 02: AI Agents & Applications"
                    description="Backing developers building intelligent agents, dApps, and consumer applications powered by Eliza."
                    variant="light"
                  />
                  <ProjectCardVertical
                    title="Project 03: Ecosystem Growth"
                    description="Collaborating with partners to expand adoption and create real-world use cases for Eliza-powered AI."
                    variant="light"
                  />
                  <ProjectCardVertical
                    title="Project 04: Research & Education"
                    description="Funding initiatives that advance AI safety, ethics, and decentralized governance within the Eliza ecosystem."
                    variant="light"
                  />
                </div>
                <div className="flex justify-end items-center ml-8">
                  <img
                    src="/right-chevron.png"
                    className="h-8 w-20 cursor-pointer"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="implementation-partners">
              <p className="text-lg mb-8 ml-3">
                Work with experienced teams to accelerate technical deployment
                and integration of your Eliza-powered applications.
              </p>
            </TabsContent>
            <TabsContent value="others">
              <p className="text-lg mb-8 ml-3">
                Access collaboration opportunities, educational programs, and
                community-driven initiatives.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
