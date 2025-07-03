import { useContext, useEffect, useState } from "react";
import { WalletContext } from "../contexts/WalletContext";
import dummyNFTs from "../data/dummyNFTs";
import NFTCard from "../components/NFTCard";

function MyNFTs() {
  const { wallet } = useContext(WalletContext);
  const [myNFTs, setMyNFTs] = useState([]);

  useEffect(() => {
    if (!wallet) return;

    const listings = JSON.parse(localStorage.getItem("prover_listings")) || {};
    const owned = Object.keys(listings)
      .map((id) => dummyNFTs.find((nft) => nft.id === id))
      .filter(Boolean); // pastikan NFT ditemukan

    setMyNFTs(owned);
  }, [wallet]);

  if (!wallet) {
    return (
      <div className="p-6 text-yellow-400">
        🔐 Silakan login wallet terlebih dahulu untuk melihat NFT Anda.
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🎒 My NFTs</h2>
      {myNFTs.length === 0 ? (
        <p className="text-gray-400">Anda belum me-list NFT apa pun.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {myNFTs.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyNFTs;
