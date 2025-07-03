import { useContext, useState } from "react";
import { WalletContext } from "../contexts/WalletContext";
import ImportWallet from "./ImportWallet";

function Navbar() {
  const { wallet, mnemonic, loginNewWallet } = useContext(WalletContext);
  const [showMnemonic, setShowMnemonic] = useState(false);

  return (
    <div className="bg-gray-900 px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
      {/* Logo dan Nama */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Prover NFT" className="h-8" />
        <h1 className="text-xl font-bold">Prover NFT</h1>
      </div>

      {/* Wallet & Action Area */}
      <div className="text-right w-full md:w-auto">
        {wallet ? (
          <>
            {/* Alamat Wallet */}
            <div className="text-sm text-green-400 mb-1">
              Wallet: {wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}
            </div>

            {/* Tombol Lihat Seed Phrase */}
            <button
              onClick={() => setShowMnemonic(!showMnemonic)}
              className="text-xs underline text-blue-400 hover:text-blue-300"
            >
              {showMnemonic ? "Sembunyikan Seed Phrase" : "Lihat Seed Phrase"}
            </button>

            {/* Seed Phrase */}
            {showMnemonic && (
              <p className="mt-1 p-2 bg-gray-800 rounded text-xs text-white break-words max-w-md">
                {mnemonic}
              </p>
            )}
          </>
        ) : (
          <>
            {/* Tombol Generate Wallet */}
            <button
              onClick={loginNewWallet}
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-sm mb-2"
            >
              Generate Wallet Baru
            </button>

            {/* Komponen Import Wallet */}
            <ImportWallet />
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
