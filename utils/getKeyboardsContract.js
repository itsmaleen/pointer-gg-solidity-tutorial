import { ethers } from "ethers";

import abi from "../utils/Keyboards.json";

const contractAddress = "0xaa0F6bcB317A71B79b9deEAd766f590d87F53D36";
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
