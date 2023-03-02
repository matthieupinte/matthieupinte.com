import { useTranslation } from "../i18n";

type Props = {
  params: { lng: string };
};

export default async function Head({ params: { lng } }: Props) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="lang" content={lng} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content={
          t("meta.description") ||
          "Full-stack developer specializing in web and mobile"
        }
      />
      <meta
        name="keywords"
        content="Matthieu, Pinte, développeur, developer, full-stack, web, mobile, JavaScript, React, React.js, React Native, Ruby, Ruby on Rails, Node.js, HTML, CSS, PostgreSQL, git, GitHub, AWS, serverless"
      />
      <meta name="author" content="Matthieu Pinte" />
      <title>Matthieu Pinte</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="alternate" hrefLang="en" href="https://matthieupinte.com/en" />
      <link rel="alternate" hrefLang="fr" href="https://matthieupinte.com/fr" />
      <meta
        property="og:title"
        content={t("meta.og.title") || "Matthieu Pinte - Full-stack developer"}
      />
      <meta
        property="og:description"
        content={
          t("meta.og.description") ||
          "I’m a full-stack developer specializing in web & mobile."
        }
      />
      <meta
        property="og:image"
        content="https://matthieupinte.com/images/avatar.jpg"
      />
      <meta property="og:url" content="https://matthieupinte.com" />
    </>
  );
}
