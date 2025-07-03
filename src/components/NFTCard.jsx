import React from "react";
import { Link } from "react-router-dom";

function NFTCard({ nft }) {
  return (
    <Link to={`/nft/${nft.id}`} className="block border p-4 rounded hover:shadow-lg bg-gray-800 hover:bg-gray-700">
      <img src={nft.image} alt={nft.name} className="w-full h-48 object-cover rounded mb-2" />
      <h3 className="text-white font-semibold">{nft.name}</h3>
      <p className="text-sm text-gray-400">{nft.description}</p>
    </Link>
  );
}

export default NFTCard;
