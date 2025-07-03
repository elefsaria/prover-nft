import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NFTDetail from "./pages/NFTDetail";
import NFTGrid from "./components/NFTGrid";
import { WalletProvider } from "./contexts/WalletContext";
import MyNFTs from "./pages/MyNFTs";


function App() {
  return (
    <WalletProvider>
      <Router>
        <div className="min-h-screen bg-black text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<NFTGrid />} />
            <Route path="/nft/:id" element={<NFTDetail />} />
          </Routes>
        </div>
      </Router>
    </WalletProvider>
  );
}

export default App;
