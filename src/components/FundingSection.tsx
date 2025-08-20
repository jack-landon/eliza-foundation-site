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
            Grow your business by leveraging a fully decentralized ecosystem.
          </p>
        </div>

        <img src="/pixels-divider.png" alt="" className="w-full my-16" />

        {/* Funding section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-4">Funding</h3>
          <p className="text-lg mb-8">
            The Polkadot ecosystem offers multiple funding options for
            initiatives innovating in and growing the ecosystem.
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
                value="treasure-bounties"
                className="text-lg font-semibold pb-2"
              >
                Treasure & Bounties
              </TabsTrigger>
              <TabsTrigger value="funds" className="text-lg font-semibold pb-2">
                Funds
              </TabsTrigger>
            </TabsList>
            <TabsContent value="ecosystem-grants">
              {/* Project cards grid */}
              <div className="flex items-center justify-center">
                <div className="flex justify-start items-center mr-8">
                  <img src="/left-chevron.png" className="h-8 w-20" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <ProjectCardVertical
                    title="Project 01: Nodes"
                    description="We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations."
                    variant="light"
                  />
                  <ProjectCardVertical
                    title="Project 02: Nodes"
                    description="We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations."
                    variant="light"
                  />
                  <ProjectCardVertical
                    title="Project 03: Nodes"
                    description="We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations."
                    variant="light"
                  />
                  <ProjectCardVertical
                    title="Project 04: Nodes"
                    description="We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations."
                    variant="light"
                  />
                </div>
                <div className="flex justify-end items-center ml-8">
                  <img src="/right-chevron.png" className="h-8 w-20" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="treasure-bounties">More Coming...</TabsContent>
            <TabsContent value="funds">More Coming...</TabsContent>
          </Tabs>
        </div>

        <img src="/pixels-divider.png" alt="" className="w-full my-16" />

        {/* Funding section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-4">Support</h3>
          <p className="text-lg mb-8">
            The ecosystem offers supplemental support for business development,
            technical implementation, and other key objectives.
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
                Others
              </TabsTrigger>
            </TabsList>
            <TabsContent value="business-development">
              {/* Project cards grid */}
              <div className="flex items-center justify-center">
                <div className="flex justify-start items-center mr-8">
                  <img src="/left-chevron.png" className="h-8 w-20" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <ProjectCardVertical
                    title="Project 01: Nodes"
                    description="We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations."
                    variant="light"
                  />
                  <ProjectCardVertical
                    title="Project 02: Nodes"
                    description="We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations."
                    variant="light"
                  />
                  <ProjectCardVertical
                    title="Project 03: Nodes"
                    description="We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations."
                    variant="light"
                  />
                  <ProjectCardVertical
                    title="Project 04: Nodes"
                    description="We support Web 3.0 teams and open-source projects through funding, advocacy, research and collaborations."
                    variant="light"
                  />
                </div>
                <div className="flex justify-end items-center ml-8">
                  <img src="/right-chevron.png" className="h-8 w-20" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="treasure-bounties">More Coming...</TabsContent>
            <TabsContent value="funds">More Coming...</TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
