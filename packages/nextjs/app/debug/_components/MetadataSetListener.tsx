"use client";

import { useScaffoldWatchContractEvent } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";

export const MetadataSetListener = () => {
  useScaffoldWatchContractEvent({
    contractName: "BatchGraduationNFT",
    eventName: "MetadataSet",
    onLogs: logs => {
      logs.forEach(log => {
        notification.success(`Metadata set by ${log.args.builder} at contract ${log.args.metadataContract}`);
      });
    },
  });

  return null; // This component doesn't render anything
};
