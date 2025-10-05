import { WorkExperienceItem } from "@/components/WorkExperienceItem";
import { workExperiences } from "../utils/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Wajih Tarkhani",
  description:
    "Discover my work experience and the companies I've worked in.",
  openGraph: {
    title: "Work - Wajih Tarkhani",
    description:
      "Discover my work experience and the companies I've collaborated with.",
    url: "https://wajihtarkhani.com/work",
    images: "https://wajihtarkhani.com/api/og?type=Work",
  },
};

export default function Page() {
  return (
    <main className="flex flex-col items-start justify-start w-full md:w-[75%] lg:w-[50%] p-3 md:p-5 mx-auto">
      <div>
        {workExperiences.map((experience, index) => (
          <WorkExperienceItem
            key={index}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}
