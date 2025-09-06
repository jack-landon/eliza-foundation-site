"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ProjectCardVertical } from "./ProjectCardVertical";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function FundingSection() {
  // State for the first tabs section
  const [fundingTab, setFundingTab] = useState("ecosystem-grants");
  // State for the second tabs section
  const [supportTab, setSupportTab] = useState("business-development");
  const isMobile = useIsMobile();

  // Function to navigate to next tab
  const goToNextTab = (
    currentTab: string,
    tabOptions: string[],
    setTab: (value: string) => void
  ) => {
    const currentIndex = tabOptions.indexOf(currentTab);
    const nextIndex = (currentIndex + 1) % tabOptions.length;
    setTab(tabOptions[nextIndex]);
  };

  // Function to navigate to previous tab
  const goToPrevTab = (
    currentTab: string,
    tabOptions: string[],
    setTab: (value: string) => void
  ) => {
    const currentIndex = tabOptions.indexOf(currentTab);
    const prevIndex =
      currentIndex === 0 ? tabOptions.length - 1 : currentIndex - 1;
    setTab(tabOptions[prevIndex]);
  };

  const fundingTabs = ["ecosystem-grants", "bounties-challenges", "funds"];
  const supportTabs = [
    "business-development",
    "implementation-partners",
    "others",
  ];

  return (
    <section className="bg-[#FF5800] text-black py-16 px-6 ">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Funding & Support</h2>
          <p className="text-lg">
            Grow your project with Eliza Foundation funding and resources by
            tapping into our decentralized ecosystem of builders and
            researchers.
          </p>
        </div>

        {/* <img src="/pixels-divider.png" alt="" className="w-full my-16" /> */}

        {/* Funding section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-4">Funding</h3>
          <p className="text-lg mb-8">
            The Eliza Foundation provides multiple funding opportunities for
            developers and teams building on the Eliza Framework — from
            ecosystem grants to research bounties and community-driven funds.
          </p>

          {/* Tabs */}
          <Tabs value={fundingTab} onValueChange={setFundingTab}>
            <TabsList className="items-start sm:items-center flex flex-col sm:flex-row sm:gap-8 mb-8">
              <TabsTrigger
                value="ecosystem-grants"
                className="sm:text-lg font-semibold pb-2"
              >
                Ecosystem Grants
              </TabsTrigger>
              <TabsTrigger
                value="bounties-challenges"
                className="sm:text-lg font-semibold pb-2"
              >
                Bounties & Challenges
              </TabsTrigger>
              <TabsTrigger
                value="funds"
                className="sm:text-lg font-semibold pb-2"
              >
                Research & Collaboration Funds
              </TabsTrigger>
            </TabsList>
            <TabsContent value="ecosystem-grants">
              <ProjectCardVertical
                title="Ecosystem Grants"
                description="Supporting developers who are pushing the boundaries of what’s
                possible with Eliza-powered applications."
                imgSrc="/project-images/ecosystem-grants-img.png"
                variant="light"
              />
            </TabsContent>
            <TabsContent value="bounties-challenges">
              <ProjectCardVertical
                title="Bounties & Challenges"
                description="Rewarding contributors who solve key technical challenges or
                contribute to core infrastructure."
                imgSrc="/project-images/ecosystem-grants-img.png"
                variant="light"
              />
            </TabsContent>
            <TabsContent value="funds">
              <ProjectCardVertical
                title="Research & Collaboration Funds"
                description="Supporting academics, researchers, and developers exploring the
                next frontier of open AI systems."
                imgSrc="/project-images/ecosystem-grants-img.png"
                variant="light"
              />
            </TabsContent>
            {/* <div className="flex items-center justify-center">
              {!isMobile && (
                <div
                  onClick={() =>
                    goToPrevTab(fundingTab, fundingTabs, setFundingTab)
                  }
                  className="flex justify-start items-center mr-8"
                >
                  <img
                    src="/left-chevron.png"
                    className="h-8 w-20 cursor-pointer"
                  />
                </div>
              )}

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

              {!isMobile && (
                <div
                  onClick={() =>
                    goToNextTab(fundingTab, fundingTabs, setFundingTab)
                  }
                  className="flex justify-end items-center ml-8"
                >
                  <img
                    src="/right-chevron.png"
                    className="h-8 w-20 cursor-pointer"
                  />
                </div>
              )}
            </div> */}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
