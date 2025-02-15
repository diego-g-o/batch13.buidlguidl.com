import { Address } from "~~/components/scaffold-eth";

const Contacts = () => {
  return (
    <div className="flex flex-col ml-12">
      <div className="flex flex-wrap justify-center items-center gap-4 mt-4 px-4">
        <Address address="0xfd1F5B5F618313E19fA0eA3eEFAb422337AF4f99" />
        <span className="hidden sm:inline">·</span>

        <a href="https://github.com/hara-desu" target="_blank" rel="noreferrer" className="link">
          My github
        </a>
        <span className="hidden sm:inline">·</span>

        <p>
          <strong>Connect on</strong>
        </p>

        <p className="text-center">
          <strong>Telegram:</strong> @konyangichu
        </p>
        <span className="hidden sm:inline">·</span>

        <p className="text-center">
          <strong>X:</strong> @ladazimina13
        </p>
        <span className="hidden sm:inline">·</span>

        <p className="text-center">
          <strong>Warpcast:</strong> @ladawinter
        </p>
      </div>
    </div>
  );
};

export default Contacts;
