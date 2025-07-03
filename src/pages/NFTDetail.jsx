import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { WalletContext } from "../contexts/WalletContext";
import dummyNFTs from "../data/dummyNFTs";

function NFTDetail() {
  const { id } = useParams();
  const nft = dummyNFTs.find((n) => n.id === id);
  const { wallet } = useContext(WalletContext);
  const [price, setPrice] = useState("");
  const [listed, setListed] = useState(nft?.price !== null);

  const handleList = () => {
    if (!price || isNaN(price)) return alert("Masukkan harga yang valid");
    nft.price = price; // simpan ke memori (simulasi)
    setListed(true);
  };

  if (!nft) return <div className="p-6 text-red-500">NFT tidak ditemukan.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={nft.image} alt={nft.name} className="rounded w-full mb-4" />
      <h2 className="text-2xl font-bold mb-2">{nft.name}</h2>
      <p className="mb-4">{nft.description}</p>

      {listed ? (
        <div className="text-green-400">NFT sudah di-list seharga {nft.price} ETH</div>
      ) : wallet ? (
        <div className="mt-4">
          <h4 className="mb-1 font-semibold">List NFT for Sale</h4>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="0.05"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="px-2 py-1 bg-gray-800 rounded text-white w-24"
            />
            <span>ETH</span>
            <button
              onClick={handleList}
              className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
            >
              List
            </button>
          </div>
        </div>
      ) : (
        <div className="text-yellow-400 mt-4">Login untuk bisa listing NFT.</div>
      )}
    </div>
  );
}

export default NFTDetail;
