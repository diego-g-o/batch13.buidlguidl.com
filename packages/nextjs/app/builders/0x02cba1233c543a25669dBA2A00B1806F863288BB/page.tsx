import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { FaEnvelope, FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const SiddhantProfile: NextPage = () => {
  const socialLinks = [
    { id: "github", href: "https://github.com/siddhant-k08", icon: <FaGithub size={22} />, label: "GitHub" },
    { id: "telegram", href: "https://t.me/siddhantk08", icon: <FaTelegram size={22} />, label: "Telegram" },
    { id: "twitter", href: "https://x.com/Siddhant8903", icon: <FaTwitter size={22} />, label: "Twitter" },
    {
      id: "email",
      href: "mailto:kulkarni.sid0809@gmail.com",
      icon: <FaEnvelope size={22} />,
      label: "kulkarni.sid0809@gmail.com",
    },
  ];

  interface IconLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
  }

  const IconLink: React.FC<IconLinkProps> = ({ href, icon, label }) => {
    return (
      <li>
        <Link href={href} className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition">
          {icon}
          <span>{label}</span>
        </Link>
      </li>
    );
  };

  return (
    <div className={`${poppins.variable} font-sans flex justify-center items-center min-h-screen bg-gray-100`}>
      <div className="w-full max-w-lg bg-white border border-gray-300 rounded-2xl shadow-lg p-8 text-gray-900">
        <div className="flex flex-col items-center space-y-4">
          <Image
            className="rounded-full border-4 border-gray-300"
            src="/siddhant.jpg"
            width={100}
            height={100}
            alt="Avatar"
          />
          <h1 className="text-3xl font-bold">Siddhant</h1>
          <p className="text-gray-600 text-center">Masters Student & Web3 Fullstack Dev</p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">About Me</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Hey everyone! My name is Siddhant, and I am a Web3 developer from India. Currently, I am pursuing my Masters
            in Blockchain and am keen on learning new technologies while building my skillset. I have been involved in
            the Web3 space since 2021, initially starting by collecting and flipping NFTs. I was part of The Graph
            Advocates Program and am now a member of The Graph-BuidlGuidl Cohort, where I provide support for the
            create-eth Subgraph Extension.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Connect with Me</h2>
          <ul className="mt-3 space-y-2">
            {socialLinks.map(({ id, href, icon, label }) => (
              <IconLink key={id} href={href} icon={icon} label={label} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SiddhantProfile;
