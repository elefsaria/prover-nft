import NFTCollectionCard from "../components/NFTCollectionCard";

const dummyCollections = [
  {
    name: "Courtyard.io",
    volume: "4.1M",
    floor: "48.68",
    change: "+6.8%",
    chain: "POL",
  },
  {
    name: "Larvva Lads",
    volume: "97.4",
    floor: "0.0054",
    change: "+12.4%",
    chain: "ETH",
  },
  {
    name: "Frogana",
    volume: "1.4K",
    floor: "0.862",
    change: "+1.6%",
    chain: "SOL",
  },
];

function Home() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {dummyCollections.map((col, idx) => (
        <NFTCollectionCard key={idx} collection={col} />
      ))}
    </div>
  );
}

export default Home;
