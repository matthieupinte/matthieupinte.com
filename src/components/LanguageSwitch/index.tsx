import Link from "next/link";

import { languages } from "@/app/i18n/config";

export type Props = {
  lng: string;
  path: string;
};

const LanguageSwitch = ({ lng, path }: Props) => {
  return (
    <ul className="inline-items">
      {languages.map((l) => (
        <li
          key={l}
          className={`uppercase ${l === lng && "border-b border-black"}`}
        >
          <Link href={`/${l}${path}`} className="hover:no-underline">
            {l}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LanguageSwitch;
