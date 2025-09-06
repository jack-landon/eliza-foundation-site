"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardVertical } from "./ProjectCardVertical";

export function SupportSection() {
  const isMobile = useIsMobile();
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          <div>
            <h3 className="text-4xl font-bold mb-6">Support</h3>
            <p className="text-lg">
              The Eliza ecosystem offers comprehensive support for builders —
              from funding and technical guidance to research, education, and
              business development partnerships.
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-6">Business Development</h3>
            <p className="text-lg">
              We provide mentorship, ecosystem connections, and resources to
              help Eliza projects grow sustainably.
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-6">Implementation Partners</h3>
            <p className="text-lg">
              Work with experienced teams to accelerate technical deployment and
              integration of your Eliza-powered applications.
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-6">Other Support</h3>
            <p className="text-lg">
              Access collaboration opportunities, educational programs, and
              community-driven initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
