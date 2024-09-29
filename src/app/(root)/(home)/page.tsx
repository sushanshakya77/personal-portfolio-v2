import { CareerPath } from "@/src/pages/home/career-path";
import { IntroBanner } from "@/src/pages/home/intro-banner";
import { RecentProjects } from "@/src/pages/home/recent-projects";

export default function Home() {
  return (
    <section className="grid grid-cols-12 gap-[24px] px-3xl container">
      <IntroBanner />
      <RecentProjects />
      <CareerPath />
    </section>
  );
}
