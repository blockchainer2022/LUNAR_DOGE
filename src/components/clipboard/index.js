import Bsc from "../../assets/images/bscc.png";
import { FaAngleDown } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
const account = "0xc748673057861a797275cd8a068abb95a902e8de";
const Clipboard = () => {
  return (
    <div className="bg-primary rounded-2xl lg:mx-10 py-4 lg:py-14 px-4 lg:px-10 xl:px-40 copy-board shadow-xl">
      <div className="bg-white rounded-xl p-1 flex items-center justify-between">
        <div className="flex items-center justify-between lg:ml-4">
          <img src={Bsc} alt="" className="w-8" />
          <span className="text-black ml-2 text-xl inline-block font-bold">
            BSC
          </span>
          <FaAngleDown />
        </div>
        <p className="font-medium text-gray-700 lg:hidden">
          {account.slice(0, 8) + "..." + account.slice(account.length - 5)}
        </p>
        <p className="hidden lg:block font-medium text-gray-700">{account}</p>
        <CopyToClipboard
          text={account}
          onCopy={() => alert(`${account} copied`)}
        >
          <button className="rounded-xl hidden lg:block lg:pl-8 py-3 px-4 bg-black text-white font-semibold text-xl">
            Copy Address
          </button>
        </CopyToClipboard>
        <CopyToClipboard
          text={account}
          onCopy={() => alert(`${account} copied`)}
        >
          <button className="rounded-xl lg:hidden  lg:pl-8 py-3 px-4 bg-black text-white">
            Copy
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Clipboard;
