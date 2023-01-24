import Head from "next/head";

import { Poppins, Josefin_Sans } from "@next/font/google";
import Header from "@/components/Layout/Header";
import Image from "next/image";
import Why from "@/components/Home/Why";
import Recent from "@/components/Home/Recent";
import Testinominal from "@/components/Home/Testinominal";
import { FacebookIcon } from "@/components/icons/facebook";
import { InstagramIcon } from "@/components/icons/instagram";
import { TwitterIcon } from "@/components/icons/twitter";
import Footer from "@/components/Layout/Footer";
import { Project } from "@/types";

const josefin_Sans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});
interface Props {
  projects: Project[];
}
export default function Home(props: Props) {
  const { projects } = props;

  return (
    <>
      <Header />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={`text-3xl font-bold underline  `}>Hello world!</h1>
      <section className="mt-16 bg-no-repeat bg-cover  bg-desktop-banner py-16 flex flex-col items-center justify-items-center">
        <div className="my-32">
          <h3 className="text-7xl font-isidorasans font-bold text-brand-blue mt-24">
            We bring your Colours to life
          </h3>
          <div className="flex justify-center font-semibold mt-16 mb-24">
            <button className="p-5 px-16 rounded-l-3xl bg-brand-blue text-xl text-white">
              FREE <span>QUOTE</span>{" "}
            </button>
            <button className="p-5 rounded-r-3xl px-16 bg-brand-blue-dark  text-xl text-white">
              VIEW <span>PROJECTS</span>
            </button>
          </div>
        </div>
      </section>

      <section className="grid bg-white md:grid-cols-8 items-center px-4   md:px-16  ">
        <div className="col-span-6 ">
          <h3
            className={` md:text-2xl  font-isidorasans font-medium my-4 md:mb-8 text-brand-blue `}
          >
            LONG-TERM ASSET PROTECTION
          </h3>
          <p
            className={`md:text-xl font-isidorasans_regular    text-black md:text-gray-400 `}
          >
            Melbourne Painters has a scheduled and systematic approach in
            providing <br /> preventive and proactive maintenance.
          </p>
        </div>
        <div className="col-span-2 flex items-center">
          <Image
            src="/imgs/Painters-Melbourne-Accredited-Painter-512px-300x300.jpg"
            width={400}
            height={300}
            alt=""
          />
          <Image
            src="/imgs/warranty.png"
            width={100}
            style={{ objectFit: "contain" }}
            height={50}
            alt=""
          />
        </div>
      </section>

      <section className="flex">
        <div className="  flex flex-col justify-end  h-72  bg-cover bg-center bg-no-repeat bg-Atura-Dandenong-South-Night">
          <div className="bg-dark-overlay py-4">
            <h4 className="text-center px-24 text-white text-md font-medium">
              Exterior Painting
            </h4>
            {/* <button>View Service</button> */}
          </div>
        </div>
      </section>
      <Why />
      <Recent data={projects} />
      <Testinominal />
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
