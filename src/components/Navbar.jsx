import { useContext } from "react";
import { WalletContext } from "../contexts/WalletContext";

function Navbar() {
  const { wallet, mnemonic, loginNewWallet } = useContext(WalletContext);

  return (
    <div className="bg-gray-900 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Prover NFT" className="h-8" />
        <h1 className="text-xl font-bold">Prover NFT</h1>
      </div>
      <div>
        {wallet ? (
          <div className="text-sm text-green-400">
            Wallet: {wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}
          </div>
        ) : (
          <button
            onClick={loginNewWallet}
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded"
          >
            Generate Wallet
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
