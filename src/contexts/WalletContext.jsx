import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { createNewWallet, loadWalletFromMnemonic } from "../utils/wallet";

// Buat Context untuk Wallet
export const WalletContext = createContext();

// Provider untuk membungkus <App />
export const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState(null);
  const [mnemonic, setMnemonic] = useState("");

  // Saat halaman pertama kali dimuat, coba ambil wallet dari localStorage
  useEffect(() => {
    const storedMnemonic = localStorage.getItem("prover_wallet_mnemonic");
    if (storedMnemonic) {
      try {
        const loaded = loadWalletFromMnemonic(storedMnemonic);
        setWallet(loaded);
        setMnemonic(storedMnemonic);
      } catch (err) {
        console.error("Gagal load wallet dari mnemonic:", err);
      }
    }
  }, []);

  // Fungsi untuk membuat wallet baru
  const loginNewWallet = () => {
    const { wallet, mnemonic } = createNewWallet();
    localStorage.setItem("prover_wallet_mnemonic", mnemonic);
    setWallet(wallet);
    setMnemonic(mnemonic);
  };

  return (
    <WalletContext.Provider
      value={{
        wallet,
        mnemonic,
        loginNewWallet,
        setWallet,
        setMnemonic, // dibutuhkan untuk fitur import wallet
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
