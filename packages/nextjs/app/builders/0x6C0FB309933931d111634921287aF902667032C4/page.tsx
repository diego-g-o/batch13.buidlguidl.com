import Image from "next/image";
import Link from "next/link";

const DivyanshPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="w-[600px] p-6 rounded-lg shadow-lg transition-all duration-500 bg-gradient-to-br from-red-500 to-orange-400 dark:from-red-900 dark:to-black text-black dark:text-white">
        <Avatar />
        <NameandBio />
        <Socials />
      </div>
    </div>
  );
};

function Avatar() {
  return (
    <div className="flex items-center">
      <Image
        src="https://i.pinimg.com/474x/d7/31/4c/d7314c015805cbf159e1099c869233ee.jpg"
        alt="Avatar"
        width={96}
        height={96}
        className="rounded-full mr-4 border-2 border-white"
      />
      <p className="text-lg font-semibold">0x6C0FB309933931d111634921287aF902667032C4</p>
    </div>
  );
}

function NameandBio() {
  return (
    <div className="text-center mt-6">
      <h1 className="text-2xl font-bold">Divyansh Dewangan</h1>
      <p className="mt-2 text-lg">
        I&apos;m a sophomore in college, diving deep into Web3 and absolutely loving the journey. Started learning a few
        months back, and now I&apos;m grinding hard—one day, I want to be part of the Ethereum Foundation.
      </p>
    </div>
  );
}

function Socials() {
  return (
    <div className="text-center mt-6">
      <p className="text-lg font-semibold">Connect with me:</p>
      <div className="flex justify-center space-x-6 mt-2">
        <Link href="https://x.com/DivyanshD_7" target="_blank" className="text-blue-400 hover:underline">
          X
        </Link>
        <Link href="https://www.instagram.com/divyanshh._.20" target="_blank" className="text-pink-500 hover:underline">
          Instagram
        </Link>
      </div>
    </div>
  );
}

export default DivyanshPage;
