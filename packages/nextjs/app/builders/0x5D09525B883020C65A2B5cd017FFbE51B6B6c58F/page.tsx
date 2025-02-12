import type React from "react";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { FaEnvelopeSquare, FaGithub, FaTelegram } from "react-icons/fa";

const Profile: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-4 py-4 sm:px-6 bg-gradient-to-r dark:from-sky-950 dark:to-slate-500 from-sky-800 to-base-300 flex">
            <div className="flex-col flex-1 mt-2">
              <h1 className="mt-2 text-3xl font-bold text-white">XanDev</h1>
              <p className="mt-1 max-w-2xl text-sm text-white">Software Developer & Web3 Engineer</p>
            </div>
            <Image
              className="rounded-lg justify-end flex-0"
              src="/buidlguidl_punk.png"
              width={100}
              height={100}
              alt="Avatar"
            />
          </div>
          <div className="px-4 py-5 sm:p-6 bg-base-100">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="mb-6">
              Hello, I go by Xander or XanDev. I&apos;m a passionate software developer and web3 engineer, currently
              working on building Dapps and working on opensource projects. I love learning about all the new and
              exciting developments on Ethereum and in the blockchain space. I hope to be able to start contributing to
              Ethereum soon!{" "}
            </p>
            <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
            <ul className="space-y-3">
              <SocialLink href="https://github.com/xandev3" icon={<FaGithub size={20} />} label="GitHub" />
              <SocialLink href="https://t.me/XanDev3" icon={<FaTelegram size={20} />} label="Telegram: @XanDev3" />
              <SocialLink
                href="mailto:xandev.eth@gmail.com"
                icon={<FaEnvelopeSquare size={22} />}
                label="Email: xandev.eth@gmail.com"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
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
