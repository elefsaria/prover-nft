import React, { useContext, useState } from "react";
import { WalletContext } from "../contexts/WalletContext";
import ImportWallet from "./ImportWallet";
import { Link } from "react-router-dom";

function Navbar() {
  const { wallet, mnemonic, loginNewWallet } = useContext(WalletContext);
  const [showMnemonic, setShowMnemonic] = useState(false);

  return (
    <div className="bg-gray-900 px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Prover NFT" className="h-8" />
        <h1 className="text-xl font-bold">Prover NFT</h1>
      </div>

      <div className="text-right w-full md:w-auto">
        {wallet ? (
          <>
            <div className="text-sm text-green-400 mb-1">
              Wallet: {wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}
            </div>
            <button
              onClick={() => setShowMnemonic(!showMnemonic)}
              className="text-xs underline text-blue-400 hover:text-blue-300"
            >
              {showMnemonic ? "Sembunyikan Seed Phrase" : "Lihat Seed Phrase"}
            </button>
            {showMnemonic && (
              <p className="mt-1 p-2 bg-gray-800 rounded text-xs text-white break-words max-w-md">
                {mnemonic}
              </p>
            )}
            <Link
              to="/my-nfts"
              className="block mt-2 text-sm underline text-blue-400 hover:text-blue-300"
            >
              🎒 Lihat My NFTs
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={loginNewWallet}
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-sm mb-2"
            >
              Generate Wallet Baru
            </button>
            <ImportWallet />
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
