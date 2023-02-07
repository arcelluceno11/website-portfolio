import Head from "next/head";
import { CiDark, CiLight } from "react-icons/ci";
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import me from "../assets/arcel.png";
import ParticlesBG from "@/components/ParticlesBG";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParticlesBG theme={darkMode ? "dark" : "light"} />
      <header className="absolute w-screen pt-6 px-6 z-50 lg:pt-10 lg:px-10 dark:text-gray-200">
        <nav className="flex justify-between">
          <ul className="flex items-center">
            <li>
              <a href="https://github.com/arcelluceno11" target="_blank"
                  rel="noreferrer">
                <AiFillGithub className="text-xl cursor-pointer" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/arcelluceno11" target="_blank"
                rel="noreferrer"
                className="text-xl mx-2 cursor-pointer"
              >
                arcelluceno11
              </a>
            </li>
          </ul>

          <ul className="flex items-center">
            <li>
              <CiDark
                className={
                  darkMode
                    ? "hidden"
                    : "" + "  text-dark cursor-pointer text-3xl"
                }
                onClick={() => setDarkMode(!darkMode)}
              />
              <CiLight
                className={
                  !darkMode
                    ? "hidden"
                    : "" + " text-gray-200 cursor-pointer text-3xl"
                }
                onClick={() => setDarkMode(!darkMode)}
              />
            </li>
            <li>
              <a
                className="px-4 py-2 rounded-md ml-8 bg-dark text-white hover:bg-white hover:text-dark hover:border-dark hover:border-2 dark:bg-gray-200 dark:text-dark dark:hover:bg-gray-200"
                href="#home"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="absolute pt-20 lg:pt-0">
        <section id="home" className="px-8 pb-10">
          <div className="flex flex-col-reverse justify-around items-center lg:flex-row lg:py-0 lg:min-h-screen">
            <div className="py-2 lg:w-1/2">
              <h2 className="py-2 text-4xl text-dark text-center lg:text-7xl lg:text-start dark:text-gray-300">
                Arcel Luceno
              </h2>
              <h3 className="py-2 text-xl text-center lg:text-start lg:text-4xl dark:text-white">
                Software Developer
              </h3>
              <p className="py-5 text-lg text-md leading-8 text-center lg:text-start lg:text-xl dark:text-white">
                A strong understanding of front-end and back-end development,
                and proficient in multiple programming languages. Extensive
                expertise in large system architecture development and
                administration, as well as network design and configuration.
              </p>
              <div className="text-5xl flex justify-center gap-12 py-3 text-gray-500 lg:justify-start lg:gap-8 dark:text-gray-100">
                <a
                  href="https://www.facebook.com/arcelluceno11"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillFacebook className="cursor-pointer hover:text-dark hover:-rotate-3 dark:hover:text-gray-300" />
                </a>
                <a
                  href="https://www.twitter.com/arcelluceno11"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillTwitterSquare className="cursor-pointer hover:text-dark hover:-rotate-3 dark:hover:text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/arcel-luceno-730319206/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin className="cursor-pointer hover:text-dark hover:-rotate-3 dark:hover:text-gray-300" />
                </a>
              </div>
              <div className="mt-16 flex justify-center items-center lg:justify-start">
                <a
                  className="px-4 py-2 rounded-md bg-dark text-lg text-white hover:bg-gray-200 hover:text-dark lg:text-xl dark:bg-white dark:text-dark dark:hover:text-gray-200 dark:hover:bg-dark dark:hover:border-white dark:hover:border-2"
                  href="#home"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-45 h-45 mt-10 mb-2 lg:m-0 mx-auto bg-gradient-to-b from-dark to-white rounded-full overflow-hidden lg:h-1/2 dark:from-white dark:to-dark">
              <Image src={me} alt="me" />
            </div>
          </div>
        </section>
        {/*
          <section id="skills">
          <div className="flex flex-col justify-evenly lg:flex-row">
            <div className="px-6 bg-dark py-2 lg:w-1/2 dark:bg-white">
              <h2 className="py-2 text-white text-center text-4xl dark:text-dark">
                Skills
              </h2>
            </div>
            <div className=" bg-white py-2 lg:w-1/2"></div>
          </div>
        </section>
        */}
      </main>
    </div>
  );
}
