import Image from "next/image";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Nokcha.eth builder profile",
  description: "BuidlGuild Batch #13 participant",
});

const links = [
  { name: "X", url: "https://twitter.com/nokcha75" },
  { name: "Farcaster", url: "https://warpcast.com/nokcha" },
  { name: "GitHub", url: "https://github.com/nokcha75" },
  { name: "BuidlGuild", url: "https://app.buidlguidl.com/builders/0xCC634aD49a8685D5247313Fa26E961215c0bBF7F" },
  { name: "OpenSea", url: "https://opensea.io/nokcha" },
  { name: "ENS", url: "https://app.ens.domains/nokcha.eth" },
];

const Nokcha: NextPage = () => {
  return (
    <>
      <div className="text-center mt-8 bg-secondary p-24">
        <Image
          src="/blitnaut.webp"
          alt="Nokcha"
          width={216}
          height={216}
          className="mx-auto rounded-full"
          style={{ width: "auto", height: "auto" }}
        />
        <h1 className="text-4xl my-5">Nokcha.eth</h1>
        <p className="text-neutral mb-5 mx-auto max-w-3xl">
          I&apos;m a student about to finish my Master&apos;s degree in Information Security, and have a strong interest
          in Ethereum. I&apos;m currently learning more about Solidity with the goal of getting into auditing and
          security research. I&apos;m also looking forward to contributing to open source and building cool things!
        </p>
        <p className="text-neutral flex justify-center whitespace-nowrap">────── Social links ──────</p>
        <div className="space-x-3 flex justify-center">
          {links.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nokcha;
