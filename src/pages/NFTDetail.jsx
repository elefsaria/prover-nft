import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import dummyNFTs from "../data/dummyNFTs";
import { WalletContext } from "../contexts/WalletContext";

function NFTDetail() {
  const { id } = useParams();
  const nft = dummyNFTs.find((n) => n.id === id);
  const { wallet } = useContext(WalletContext);

  const isListed = localStorage.getItem("prover_listings");
  const listings = isListed ? JSON.parse(isListed) : {};

  const handleList = () => {
    if (!wallet) return alert("Login dulu bro 😅");

    const newListings = {
      ...listings,
      [nft.id]: {
        owner: wallet.address,
        timestamp: Date.now(),
      },
    };

    localStorage.setItem("prover_listings", JSON.stringify(newListings));
    alert("NFT berhasil di-list!");
  };

  if (!nft) return <div className="p-6 text-red-500">NFT tidak ditemukan 😢</div>;

  const isOwnedByMe = listings[nft.id]?.owner === wallet?.address;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{nft.name}</h2>
      <img src={nft.image} alt={nft.name} className="w-64 h-64 object-cover rounded mb-4" />
      <p className="text-gray-300 mb-2">{nft.description}</p>
      {isOwnedByMe ? (
        <p className="text-green-400">✅ NFT ini sudah Anda listing.</p>
      ) : (
        wallet && (
          <button onClick={handleList} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded mt-4">
            List NFT Ini
          </button>
        )
      )}
    </div>
  );
}

export default NFTDetail;
