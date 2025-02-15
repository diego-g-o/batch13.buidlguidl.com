import React from "react";

const Page = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          width: "600px",
          padding: "20px",
          backgroundColor: "rgb(20, 20, 20)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <Avatar />
        <NameandBio />
        <Socials />
      </div>
    </div>
  );
};

function Avatar() {
  return (
    <div style={{ display: "flex", alignItems: "center", color: "rgb(255, 255, 255)" }}>
      <img
        src="https://i.pinimg.com/474x/d7/31/4c/d7314c015805cbf159e1099c869233ee.jpg"
        alt="Avatar"
        style={{ width: "100px", height: "100px", borderRadius: "50%", marginRight: "20px" }}
      />
      <div>
        <p style={{ fontSize: "1.1em", margin: 0 }}>0x6C0FB309933931d111634921287aF902667032C4</p>
      </div>
    </div>
  );
}

function NameandBio() {
  return (
    <div style={{ marginTop: "20px", textAlign: "center", color: "rgb(255, 255, 255)" }}>
      <h1 style={{ fontSize: "2em", margin: "10px 0" }}>Divyansh Dewangan</h1>
      <p style={{ fontSize: "1.2em", margin: "10px 0" }}>
        I`@apos`m a sophomore in college, diving deep into Web3 and absolutely loving the journey. Started learning a
        few months back, and now I`@apos`m grinding hard—one day, I want to be part of the Ethereum Foundation. When
        I`@apos`m not lost in smart contracts and decentralization, you`@apos`ll probably find me playing chess or
        yapping about psychology (seriously, I could talk for hours).
      </p>
    </div>
  );
}

function Socials() {
  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <p style={{ fontSize: "1.2em", margin: "10px 0", color: "rgb(255, 255, 255)" }}>
        <strong>Connect me in :</strong>
      </p>
      <ul style={{ listStyleType: "none", padding: 0, display: "flex", justifyContent: "center", margin: 0 }}>
        <li style={{ margin: "0 15px" }}>
          <a href="https://x.com/DivyanshD_7" target="_blank" style={{ color: "#00acee", textDecoration: "none" }}>
            X
          </a>
        </li>
        <li style={{ margin: "0 15px" }}>
          <a
            href="https://www.instagram.com/divyanshh._.20/?next=%2F"
            target="_blank"
            style={{ color: "#e4405f", textDecoration: "none" }}
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Page;
