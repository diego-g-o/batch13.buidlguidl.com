import type React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { FaEnvelopeSquare, FaGithub, FaTelegram } from "react-icons/fa";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["ui-sans-serif"],
});

const Profile: NextPage = () => {
  return (
    <div className={`${inter.variable} font-serif col-span-1 grid grid-cols-1 m-auto justify-center`}>
      <div className="grid grid-cols-1 px-6 w-full max-w-4xl my-0 ">
        <div className="col-span-1 flex-col max-w-4xl mx-auto overflow-hidden">
          <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 my-6 space-y-1 py-4 sm:px-6 bg-gradient-to-r dark:from-sky-950 dark:to-slate-500 from-sky-800 to-base-300 flex">
            <div className="flex-col flex-1 mt-2">
              <h1 className="mt-2 text-3xl font-bold text-white">XanDev</h1>
              <p className="mt-1 max-w-2xl text-sm text-white">Software Developer & Web3 Engineer</p>
            </div>
            <Image
              className="rounded-lg justify-end flex-0 w-auto max-w-none"
              src="/buidlguidl_punk.png"
              width={100}
              height={100}
              alt="Avatar"
            />
          </div>
          <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 mb-6 space-y-3 py-4  sm:p-6 ">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="mb-8">
              Hello, I go by Xander or XanDev. I&apos;m a passionate about learning to be a software developer and web3
              engineer, currently working on building Dapps and working on opensource projects. I started my career as
              Systems Administrator for 5 years supporting Windows and Linux environments and decided to make a career
              change to self-learn software development.
              <br />
              <br />
              I began with the Javascript/NodeJs Odin Project course and then completed Cyfrin&apos;s Solidity Smart
              Contract Development and now working on SpeedRunEthereum. I love learning about all the new and exciting
              developments on Ethereum and in the blockchain space. I hope to be able to start contributing to more
              Ethereum projects soon!
              <br />
            </p>
            <h2 className="text-2xl font-semibold">Connect with Me</h2>
            <ul className="space-y-3">
              <IconLink href="https://github.com/xandev3" icon={<FaGithub size={20} />} label="GitHub" />
              <IconLink href="https://t.me/XanDev3" icon={<FaTelegram size={20} />} label="Telegram: @XanDev3" />
              <IconLink
                href="mailto:xandev.eth@gmail.com"
                icon={<FaEnvelopeSquare size={22} />}
                label="Email: xandev.eth@gmail.com"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

interface IconLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const IconLink: React.FC<IconLinkProps> = ({ href, icon, label }) => {
  return (
    <li>
      <Link href={href} className="flex items-center space-x-3 link no-underline">
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default Profile;
