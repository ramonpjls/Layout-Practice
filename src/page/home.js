import Header from "../components/header";
import Landing from "../components/landing";
import Menu from "../components/menu";
import Options from "../components/options";
import Publi from "../components/publi";
import Banner from "../components/banner";
import RefurbishedBuild from "../components/refurbishedBuild";
import Opinios from "../components/opinios";
import Information from "../components/information";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="w-auto">
      <Header />
      <Menu />
      <Landing />
      <Options />
      <Publi />
      <Banner />
      <RefurbishedBuild />
      <Opinios />
      <Information />
      <Footer />
    </div>
  );
}

export default Home;
