import React from "react";
import Header from "./Header";
import FirstHero from "./Firsthero";
import CardDeck from "./CardDeck";
import SecondHero from "./Secondhero";
import CardTable from "./Cardtable";
import Footer from "./Footer"


function Homepage() {

    return (
        <div>
            < Header />
            < FirstHero />
            < CardDeck />
            < SecondHero />
            < CardTable />
            < Footer />
        </div>
    )
}


export default Homepage

