import Image from "next/image";

import { ArrowUp } from "@/components/icons";

import avatar from "/public/images/avatar.jpg";

import { Trans } from "react-i18next/TransWithoutContext";
import { useTranslation } from "../i18n";
import LanguageSwitch from "@/components/LanguageSwitch";

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
                Hi, I’m Matthieu, a <strong>full-stack</strong> developer
                specializing in <strong>web and mobile</strong>.
              </Trans>
            </p>
          </div>
        </div>
        <p className="prose">
          <Trans i18nKey="catch" t={t}>
            I enjoy solving <strong>complex technical</strong> problems while{" "}
            delivering <strong>premium</strong> user-friendly applications.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="catch2" t={t}>
            When I’m not coding, you can find me at my favorite{" "}
            <strong>CrossFit</strong> box, probably doing burpees, or outside
            with my dog, trying to maintain a <strong>healthy</strong> work-life
            balance.
          </Trans>
        </p>
      </section>
      <section className="mb-12">
        <h2>{t("about_me.title")}</h2>
        <p className="prose">
          <Trans i18nKey="about_me.content.0" t={t}>
            I have expertise in <strong>JavaScript</strong> stacks, both
            front-end and back-end, but I am always curious and ready to learn
            and explore new technologies.
          </Trans>
        </p>
        <p className="prose">
          <Trans i18nKey="about_me.content.1" t={t}>
            With <strong>10 years of experience</strong>, I have a deep
            understanding of the development process, from ideation to
            production deployment.
          </Trans>
        </p>
        <p className="prose">
          <Trans i18nKey={"about_me.content.2"} t={t}>
            I also believe that the best solutions come from{" "}
            <strong>collaboration</strong> and open{" "}
            <strong>communication</strong>, and I am dedicated to working
            closely with my clients to understand their needs and exceed their
            expectations.
          </Trans>
        </p>
      </section>
      <section className="mb-12">
        <h2>{t("skills.title")}</h2>
        <div>
          <h3>{t("skills.languages")}</h3>
          <ul className="inline-items mb-4">
            <li className="before:content-['+_']">TypeScript</li>
            <li className="before:content-['+_']">JavaScript</li>
            <li className="before:content-['+_']">Ruby</li>
            <li className="before:content-['+_']">Python</li>
          </ul>
        </div>
        <div>
          <h3>{t("skills.web_and_mobile")}</h3>
          <ul className="inline-items mb-4">
            <li className="before:content-['+_']">React</li>
            <li className="before:content-['+_']">React Native</li>
            <li className="before:content-['+_']">Node</li>
            <li className="before:content-['+_']">Ruby on Rails</li>
          </ul>
        </div>
        <div>
          <h3>{t("skills.tools")}</h3>
          <ul className="inline-items mb-4">
            <li className="before:content-['+_']">Git</li>
            <li className="before:content-['+_']">GitHub</li>
            <li className="before:content-['+_']">AWS</li>
            <li className="before:content-['+_']">Serverless Framework</li>
          </ul>
        </div>
        <div>
          <h3>{t("skills.exploring")}</h3>
          <ul className="inline-items mb-4">
            <li className="before:content-['+_']">Next.js</li>
            <li className="before:content-['+_']">Vue.js</li>
            <li className="before:content-['+_']">Flutter</li>
            <li className="before:content-['+_']">...</li>
          </ul>
        </div>
      </section>
      <section className="mb-12">
        <h2>{t("experiences.title")}</h2>
        <div>
          <ul>
            <li>
              <div className="flex flex-row mb-4">
                <span className="w-[100px]">2021 - {t("now")}</span>
                <div className="flex-1">
                  <strong>{t("experiences.senior_developer")}</strong>
                  <span> - Dernier Cri</span>
                  <p className="italic text-sm text-zinc-500">
                    <Trans i18nKey="experiences.derniercri_2021" t={t}>
                      I am responsible for the <strong>satisfaction</strong> of
                      startups by turning their ideas into digital reality, one
                      pixel at a time!
                    </Trans>
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
                    <Trans i18nKey="experiences.neuronalys_2019" t={t}>
                      By working on <strong>artificial intelligence</strong>{" "}
                      systems and building <strong>performant</strong> and
                      aesthetic web interfaces, I had the opportunity to push
                      the boundaries of our technologies.
                    </Trans>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-row mb-4">
                <span className="w-[100px]">2014 - 2019</span>
                <div className="flex-1">
                  <strong>{t("experiences.senior_developer")}</strong>
                  <span> - Dernier Cri</span>
                  <p className="italic text-sm text-zinc-500">
                    <Trans i18nKey="experiences.derniercri_2014" t={t}>
                      I contributed to the success of <strong>startups</strong>{" "}
                      by applying my skills to their most ambitious projects.
                    </Trans>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-row mb-4">
                <span className="w-[100px]">2013 - 2014</span>
                <div className="flex-1">
                  <strong>{t("experiences.developer")}</strong>
                  <span> - OP1C</span>
                  <p className="italic text-sm text-zinc-500">
                    <Trans i18nKey="experiences.op1c_2013" t={t}>
                      I brought to life our clients’
                      <strong>social media</strong> dreams by creating quality
                      code, allowing them to stand out and quickly achieve their
                      goals.
                    </Trans>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-row mb-4">
                <span className="w-[100px]">2012 - 2013</span>
                <div className="flex-1">
                  <strong>{t("experiences.developer")}</strong>
                  <span> - Dernier Cri</span>
                  <p className="italic text-sm text-zinc-500">
                    <Trans i18nKey="experiences.derniercri_2012" t={t}>
                      I worked with JavaScript and Ruby on Rails to optimize the{" "}
                      <strong>quality</strong> of our deliverables.
                    </Trans>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2>{t("contact.title")}</h2>
        <p className="prose">{t("contact.prose")}</p>
        <p className="prose">{t("contact.catch")}</p>
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
      <div className="flex justify-end fixed bg-white p-3 top-0 inset-x-0">
        <LanguageSwitch lng={lng} />
      </div>
    </>
  );
}
