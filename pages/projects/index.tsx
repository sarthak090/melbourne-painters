import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { Project } from "@/types";
import Link from "next/link";
import { NextSeo } from "next-seo";
interface Props {
  projects: Project[];
}
export default function Portfolio(props: Props) {
  return (
    <>
      <NextSeo title={"Projects"} />
      <Header />
      <section className="mt-40 mx-16">
        <h1 className="mt-16 text-4xl text-center my-4 font-semibold text-brand-blue">
          PROJECTS
        </h1>
        <hr />
        <p className="my-4 text-xl">
          At Melbourne Painters Group our core value is delivering high-quality
          painting finishes that not only look great to the eye but will last
          many years to come. We believe that hard work, attention to detail and
          using ultra-premium painting products are what creates a long-lasting,
          breath taking painting finish. Below you will find the links to some
          of our recent projects we have explained what products and methods our
          painters have used to achieve great results for these projects. Should
          you have any further questions about these projects or want to get a
          free measure and quote feel free to contact us on our contact us page
          and one of our friendly staff will endeavor to assist you with your
          inquiry.
        </p>
        <div className="grid md:grid-cols-3 gap-8 my-8">
          {props.projects.map((project) => (
            <div key={project.id} className="overflow-hidden">
              <div
                style={{
                  backgroundImage: `linear-gradient(172deg, rgba(0,0,0,1) 0%, rgba(27,27,27,0) 0%, rgba(40,40,55,0.1966911764705882) 0%, rgba(62,65,68,1) 97%) , url(${project.x_featured_media_large})  `,
                }}
                className="  bg-overlay  font-semibold bg-center hover:scale-110 transition-all duration-700 ease-in-out  bg-dicken-streen text-xl text-white  bg-no-repeat bg-cover border flex flex-col items-center gap-8 justify-center py-32"
              >
                <p>{project.title.rendered}</p>
                <Link href={`/projects/${project.slug}`}>
                  <button className="px-6 py-3 hover:bg-brand-blue-dark bg-brand-blue rounded-3xl">
                    VIEW PROJECTS
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const url = process.env.NEXT_WP_API_URL + `/projects`;
  const projects = await fetch(url).then((r) => r.json());

  return {
    props: {
      projects,
    },
  };
};
