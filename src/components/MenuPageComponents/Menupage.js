import { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import FullMenu from "./FullMenu";
import LunchSpecials from "./LunchSpecials";
import Header from "../Header";
import Footer from "../Footer";

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
    <Header />
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Full Menu
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Lunch Specials
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <FullMenu />
        </TabPane>
        <TabPane tabId="2">
          <LunchSpecials />
        </TabPane>
      </TabContent>
    <Footer />
    </div>
  );
}

export default MenuPage;
