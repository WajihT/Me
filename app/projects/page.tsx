import { ProjectItem } from "@/components/ProjectItem";
import { Project, projects } from "../utils/constants";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Projects - Wajih Tarkhani",
  description: "Explore my projects and contributions.",
  openGraph: {
    title: "Projects - Wajih Tarkhani",
    description: "Explore my projects and contributions.",
    url: "https://wajih.info/projects",
    images: "https://wajih.info/api/og?type=Projects",
  },
};

export default function Page() {
  return (
    <main className="flex flex-col items-start justify-star p-3 md:p-5 max-w-full md:max-w-[75%] lg:max-w-[50%] mx-auto">
      <div>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
