"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

// Helper function to get last 4 digits of address
const getShortAddress = (address: string) => {
  return address.slice(-4);
};

export default function Greeter() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || isConnecting) {
    return <div>Working on it...</div>;
  }

  return (
    <div>
      {isDisconnected || !address ? <p>Hello Anon</p> : <p>Hello connected user ...{getShortAddress(address)}</p>}
    </div>
  );
}
