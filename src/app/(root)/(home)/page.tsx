import CareerPath from "@/src/components/views/home/career-path/career-path";
import IntroBanner from "@/src/components/views/home/intro-banner";
import RecentProjects from "@/src/components/views/home/recent-projects";

export default function Home() {
  return (
    <section className="grid grid-cols-12 gap-[24px] px-3xl container">
      <IntroBanner />
      <RecentProjects />
      <CareerPath />
    </section>
  );
}
