import FirstHero from "./Firsthero";
import CardDeck from "./CardDeck";
import SecondHero from "./Secondhero";
import CardTable from "./Cardtable";
import Header from "../Header";
import Footer from "../Footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <FirstHero />
      <CardDeck />
      <SecondHero />
      <CardTable />
      <Footer />
    </div>
  );
};

export default Homepage;
