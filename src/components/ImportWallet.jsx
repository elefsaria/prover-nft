import { useContext, useState } from "react";
import { WalletContext } from "../contexts/WalletContext";
import { loadWalletFromMnemonic } from "../utils/wallet";

function ImportWallet() {
  const { setWallet, setMnemonic } = useContext(WalletContext);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleImport = () => {
    try {
      const wallet = loadWalletFromMnemonic(input.trim());
      localStorage.setItem("prover_wallet_mnemonic", input.trim());
      setWallet(wallet);
      setMnemonic(input.trim());
      setError("");
      alert("Wallet berhasil diimport!");
    } catch (err) {
      setError("Seed phrase tidak valid.");
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded mt-4">
      <h2 className="font-semibold text-lg mb-2">Import Wallet dengan Seed Phrase</h2>
      <textarea
        className="w-full p-2 bg-gray-800 rounded text-white"
        rows="3"
        placeholder="masukkan seed phrase di sini..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      {error && <p className="text-red-500 mt-1">{error}</p>}
      <button
        onClick={handleImport}
        className="mt-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        Import Wallet
      </button>
    </div>
  );
}

export default ImportWallet;
