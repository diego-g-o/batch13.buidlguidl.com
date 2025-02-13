import { Address } from "~~/components/scaffold-eth";

const DescriptionContacts = () => {
  return (
    <div className="flex flex-col ml-12">
      {/* Description */}
      <div className="flex flex-col space-y-1 py-3">
        <h1 className="text-4xl my-0 px-12">I am Lada, nice to meet you!</h1>

        <p className="text-neutral text-xl text-blue-400 px-12 mt-0">
          I am a Fintech Masters student on academic leave. Learning about web3 and, specifically, Ethereum. Also,
          looking for a job.
        </p>
      </div>

      {/* Contacts */}
      <div className="flex flex-col mt-4">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-lg w-full">
            <div className="flex justify-center items-center gap-2">
              <Address address="0xfd1F5B5F618313E19fA0eA3eEFAb422337AF4f99" />
            </div>
            <span>·</span>

            <div className="text-center">
              <a href="https://github.com/hara-desu" target="_blank" rel="noreferrer" className="link">
                My github
              </a>
            </div>
            <span>·</span>

            <div className="flex justify-center items-center gap-2">
              <p>
                <strong>Connect on</strong>
              </p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <p className="m-0 text-center">
                <strong>Telegram:</strong> @konyangichu
              </p>
            </div>
            <span>·</span>
            <div className="flex justify-center items-center gap-2">
              <p className="m-0 text-center">
                <strong>X:</strong> @ladazimina13
              </p>
            </div>
            <span>·</span>
            <div className="flex justify-center items-center gap-2">
              <p className="m-0 text-center">
                <strong>Warpcast:</strong> @ladawinter
              </p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DescriptionContacts;
