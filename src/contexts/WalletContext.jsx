import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { createNewWallet, loadWalletFromMnemonic } from "../utils/wallet";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState(null);
  const [mnemonic, setMnemonic] = useState("");

  useEffect(() => {
    const storedMnemonic = localStorage.getItem("prover_wallet_mnemonic");
    if (storedMnemonic) {
      const loaded = loadWalletFromMnemonic(storedMnemonic);
      setWallet(loaded);
      setMnemonic(storedMnemonic);
    }
  }, []);

  const loginNewWallet = () => {
    const { wallet, mnemonic } = createNewWallet();
    localStorage.setItem("prover_wallet_mnemonic", mnemonic);
    setWallet(wallet);
    setMnemonic(mnemonic);
  };

  return (
    <WalletContext.Provider value={{ wallet, mnemonic, loginNewWallet }}>
      {children}
    </WalletContext.Provider>
  );
};
