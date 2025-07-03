import { ethers } from "ethers";

export const createNewWallet = () => {
  const wallet = ethers.Wallet.createRandom();
  return { wallet, mnemonic: wallet.mnemonic.phrase };
};

export const loadWalletFromMnemonic = (mnemonic) => {
  return ethers.Wallet.fromMnemonic(mnemonic);
};
