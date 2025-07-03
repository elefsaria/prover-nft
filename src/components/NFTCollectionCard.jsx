function NFTCollectionCard({ collection }) {
  return (
    <div className="bg-gray-800 rounded-xl p-4 shadow hover:bg-gray-700 transition">
      <h2 className="text-lg font-semibold">{collection.name}</h2>
      <p>Volume: {collection.volume} {collection.chain}</p>
      <p>Floor: {collection.floor} {collection.chain}</p>
      <p className="text-green-400">{collection.change}</p>
    </div>
  );
}

export default NFTCollectionCard;
