import Image from "next/image";

import { ArrowUp } from "@/components/icons";

import avatar from "/public/avatar.jpg";

import { Trans } from "react-i18next/TransWithoutContext";
import { useTranslation } from "../i18n";

type Props = {
  params: { lng: string };
};

export default async function Page({ params: { lng } }: Props) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <section className="mb-12">
        <div className="flex items-center mb-4">
          <Image
            alt="Matthieu Pinte"
            className="rounded-full"
            src={avatar}
            placeholder="blur"
            width={100}
            priority
          />
          <div className="flex-1 p-4 pr-0">
            <h1>Matthieu Pinte</h1>
            <p>
              <Trans i18nKey="iam" t={t}>
                Hi, I’m Matthieu. I’m a{" "}
                <strong>full stack web & mobile developer</strong>
              </Trans>
            </p>
          </div>
        </div>
        <p>
          I’m passionate about tackling complex technical{" "}
          <strong>challenges</strong> and delivering{" "}
          <strong>high-quality</strong>, user-friendly applications.
        </p>
      </section>
      <section className="mb-12">
        <h2>About me</h2>
        <p className="prose">
          I specialize in <strong>JavaScript</strong> stacks, front and back,
          but I like to think of myself as a techno agnostic, always eager to
          learn and work with new technologies.
        </p>
        <p className="prose">
          With <strong>10 years of experience</strong> in the industry, I have
          developed a deep understanding of the development process, from
          ideation to deployment.
        </p>
        <p className="prose">
          When I’m not coding, you can find me at my favorite{" "}
          <strong>CrossFit</strong> gym probably doing burpees or out with my
          dog, attempting to maintain a <strong>healthy</strong> work-life
          balance.
        </p>
      </section>
      <section className="mb-12">
        <h2>Skills & stacks</h2>
        <div>
          <h3>Languages</h3>
          <ul className="inline-items mb-4">
            <li className="before:content-['+_']">TypeScript</li>
            <li className="before:content-['+_']">JavaScript</li>
            <li className="before:content-['+_']">Ruby</li>
            <li className="before:content-['+_']">Python</li>
          </ul>
        </div>
        <div>
          <h3>Web & Mobile</h3>
          <ul className="inline-items mb-4">
            <li className="before:content-['+_']">React</li>
            <li className="before:content-['+_']">React Native</li>
            <li className="before:content-['+_']">Node</li>
            <li className="before:content-['+_']">Ruby on Rails</li>
          </ul>
        </div>
        <div>
          <h3>Tools</h3>
          <ul className="inline-items mb-4">
            <li className="before:content-['+_']">Git</li>
            <li className="before:content-['+_']">GitHub</li>
            <li className="before:content-['+_']">AWS</li>
            <li className="before:content-['+_']">Serverless Framework</li>
          </ul>
        </div>
        <div>
          <h3>Exploring</h3>
          <ul className="inline-items mb-4">
            <li className="before:content-['+_']">Next.js</li>
            <li className="before:content-['+_']">Vue.js</li>
            <li className="before:content-['+_']">Flutter</li>
            <li className="before:content-['+_']">...</li>
          </ul>
        </div>
      </section>
      <section className="mb-12">
        <h2>Experiences</h2>
        <div>
          <ul>
            <li>
              <div className="flex flex-row mb-4">
                <span className="w-[100px]">2021 - now</span>
                <div className="flex-1">
                  <strong>Senior Developer</strong>
                  <span> - Dernier Cri</span>
                  <p className="italic text-sm text-zinc-500">
                    Make <strong>startups happy</strong> and turn their dreams
                    into digital reality - one pixel at a time!
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-row mb-4">
                <span className="w-[100px]">2019 - 2021</span>
                <div className="flex-1">
                  <strong>AI Developer</strong>
                  <span> - Neuronalys</span>
                  <p className="italic text-sm text-zinc-500">
                    Working on <strong>Artificial Intelligence</strong> systems
                    and building web interfaces that looked so good, even my
                    computer was impressed.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-row mb-4">
                <span className="w-[100px]">2014 - 2019</span>
                <div className="flex-1">
                  <strong>Senior Developer</strong>
                  <span> - Dernier Cri</span>
                  <p className="italic text-sm text-zinc-500">
                    Wielding my development powers to help{" "}
                    <strong>startups</strong> achieve greatness.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-row mb-4">
                <span className="w-[100px]">2013 - 2014</span>
                <div className="flex-1">
                  <strong>Developer</strong>
                  <span> - OP1C</span>
                  <p className="italic text-sm text-zinc-500">
                    Spent my days crafting code to bring client’s{" "}
                    <strong>social media</strong> visions to life.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-row mb-4">
                <span className="w-[100px]">2012 - 2013</span>
                <div className="flex-1">
                  <strong>Developer</strong>
                  <span> - Dernier Cri</span>
                  <p className="italic text-sm text-zinc-500">
                    Played with JavaScript and Ruby on Rails all day long -
                    using it to <strong>improve products</strong>.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2>Contact</h2>
        <p className="prose">
          If you’re looking for a developer who is passionate about their work
          and committed to delivering high-quality applications, then look no
          further.
        </p>
        <p className="prose">Let’s connect and discuss your project!</p>
        <div>
          <ul className="inline-items">
            <li>
              <a href="https://github.com/matthieupinte" target="_blank">
                <ArrowUp className="inline-block" /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/matthieupinte/"
                target="_blank"
              >
                <ArrowUp className="inline-block" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://en.malt.fr/profile/matthieupinte"
                target="_blank"
              >
                <ArrowUp className="inline-block" /> Malt
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
