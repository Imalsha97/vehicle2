import React from "react";
import {
  Navbar,
  Header,
  Features,
  Download,
  Faq,
  Footer,
  Analytcs
} from "../components/index.js";



function Home() {
  return (
    <main>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>

      <Features />
      <Analytcs/>
      <Download />
      {/* <Subscribe/> */}
      <Faq />
      <Footer />
    </main>
  );
}

export default Home;
