import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/PortfolioLayout";
import Link from "next/link";

import dynamic from "next/dynamic";
const ProjectGridIsotop = dynamic(
  () => import("@/components/ProjectMasonryIsotop"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Projects",
};

const ProjectsPage = () => {
  return (
    <NoxfolioLayout>
      <PageBanner pageName={"Projects"} />
      <section className="projects-area pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <ProjectGridIsotop />
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
    </NoxfolioLayout>
  );
};
export default ProjectsPage;
