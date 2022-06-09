import React from "react";
import "./App.scss";
// import axios from "axios";

import HomePage from "./screens/HomePage";
import ArtPage from "./screens/ArtPage";
import ArtistPage from "./screens/ArtistPage";
import Participate from "./screens/Participate";
import BidderPage from "./screens/BidderPage";
import ModifyCollectorProfilePage from "./screens/ModifyCollectorProfilePage";
import EmailNotificationsPage from "./screens/EmailNotificationsPage";
import AboutUsPage from "./screens/AboutUsPage";
import MajorWorksPage from "./screens/MajorWorksPage";

import Navigation from "./sections/Navigation";
import Footer from "./sections/Footer";

import { mainNav } from "./data/navData";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MyAuctions from "./screens/MyAuctions";
import PrivacyPolicyPage from "./screens/PrivacyPolicyPage";
import TermsOfUse from "./screens/TermsOfUse";
import AuctionProgress from "./screens/AuctionProgress";
import ArtistsGridPage from "./screens/ArtistsGridPage";
function App() {
  const [connected, setConnected] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [showWalletModal, setShowWalletModal] = React.useState(false);

  const connectWallet = () => {
    setShowWalletModal(true);
  };
  const closeWalletModal = () => {
    setShowWalletModal(false);
  };

  // const getCryptoDetails = async () => {
  //   try {
  //     const response = await axios({
  //       method: "GET",
  //       url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map",

  //       headers: {
  //         "X-CMC_PRO_API_KEY": "fb0fb910-0850-4f4b-9b41-cac24e188187",
  //       },
  //     });
  //     console.log("response: ", response);
  //   } catch (error) {
  //     console.error("errrraaaar", error);
  //   }
  // };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    // getCryptoDetails();
    connected &&
      setUser({
        wallet: "0x42f3...aaa5",
        acc: "4.6123 BBR",
        auctions: 3,
      });
  }, [connected, setUser]);
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navigation
          data={mainNav}
          connectWallet={connectWallet}
          user={user}
          setConnected={setConnected}
          connected={connected}
          closeWalletModal={closeWalletModal}
          showWalletModal={showWalletModal}
          setShowWalletModal={setShowWalletModal}
        />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/art/:id">
            <ArtPage />
          </Route>
          <Route path="/artist/:id">
            <ArtistPage />
          </Route>
          <Route path="/participate/:id">
            <Participate />
          </Route>
          <Route path="/my-profile">
            <BidderPage />
          </Route>
          <Route path="/my-auctions">
            <MyAuctions />
          </Route>
          <Route path="/modify-my-profile">
            <ModifyCollectorProfilePage />
          </Route>
          <Route path="/email-notifications-settings">
            <EmailNotificationsPage />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicyPage />
          </Route>
          <Route path="/terms-of-use">
            <TermsOfUse />
          </Route>
          <Route path="/about-berry-auction">
            <AboutUsPage />
          </Route>
          <Route path="/auction-in-progress">
            <AuctionProgress />
          </Route>
          <Route path="/major-works">
            <MajorWorksPage />
          </Route>
          <Route path="/artist">
            <ArtistsGridPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
