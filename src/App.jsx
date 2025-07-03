import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NFTDetail from "./pages/NFTDetail";
import MyNFTs from "./pages/MyNFTs";
import { WalletProvider } from "./contexts/WalletContext";

function App() {
  return (
    <WalletProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nft/:id" element={<NFTDetail />} />
          <Route path="/my-nfts" element={<MyNFTs />} />
        </Routes>
      </Router>
    </WalletProvider>
  );
}

export default App;
