import Head from "next/head";
import { CiDark } from "react-icons/ci";
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import me from "../assets/arcel.png";
import ParticlesBG from "@/components/ParticlesBG";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParticlesBG />
      <main id="particles-js" className="absolute px-6 lg:px-10">
        <section id="home">
          <div className="px-8 flex flex-col-reverse justify-around items-center lg:flex-row lg:py-0 lg:min-h-screen">
            <div className="py-2 lg:w-1/2">
              <h2 className="py-2 text-4xl text-dark text-center lg:text-7xl lg:text-start">
                Arcel Luceno
              </h2>
              <h3 className="py-2 text-xl text-center lg:text-start lg:text-4xl">
                Software Developer
              </h3>
              <p className="py-5 text-lg text-md leading-8 text-center lg:text-start lg:text-xl">
                A strong understanding of front-end and back-end development,
                and proficient in multiple programming languages. Extensive
                expertise in large system architecture development and
                administration, as well as network design and configuration.
              </p>
              <div className="text-5xl flex justify-center gap-12 py-3 text-gray-500 lg:justify-start lg:gap-8">
                <a
                  href="https://www.facebook.com/arcelluceno11"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillFacebook className="cursor-pointer hover:text-dark hover:-rotate-3" />
                </a>
                <a href="https://www.twitter.com/arcelluceno11" target="_blank" rel="noreferrer">
                  <AiFillTwitterSquare className="cursor-pointer hover:text-dark hover:-rotate-3" />
                </a>
                <a
                  href="https://www.linkedin.com/in/arcel-luceno-730319206/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin className="cursor-pointer hover:text-dark hover:-rotate-3" />
                </a>
              </div>
              <div className="mt-16 flex justify-center items-center lg:justify-start">
                <a
                  className="px-4 py-2 rounded-md bg-dark text-lg text-white hover:bg-gray-200 hover:text-dark lg:text-xl"
                  href="#home"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-45 h-45 mt-10 mb-2 lg:m-0 mx-auto bg-gradient-to-b from-dark to-white rounded-full overflow-hidden lg:h-1/2">
              <Image src={me} alt="me"/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
