import Bsc from "../../assets/images/bscc.png";
import { FaAngleDown } from "react-icons/fa";
const account = "0xc748673057861a797275cd8a068abb95a902e8de";
const Clipboard = () => {
  return (
    <div className="bg-primary rounded-2xl lg:mx-28 py-4 lg:py-10 px-4 lg:px-10 xl:px-40 copy-board shadow-xl">
      <div className="bg-white rounded-xl p-1 flex items-center justify-between">
        <div className="flex items-center justify-between lg:ml-4">
          <img src={Bsc} alt="" className="w-8" />
          <span className="text-black ml-2 inline-block font-bold">BSC</span>
          <FaAngleDown />
        </div>
        <p className="font-medium text-gray-500 lg:hidden">
          {account.slice(0, 8) + "..." + account.slice(account.length - 5)}
        </p>
        <p className="hidden lg:block font-medium text-gray-500">{account}</p>
        <button className="rounded-xl hidden lg:block lg:pl-8 py-3 px-4 bg-black text-white">
          Copy Address
        </button>
        <button className="rounded-xl lg:hidden  lg:pl-8 py-3 px-4 bg-black text-white">
          Copy
        </button>
      </div>
    </div>
  );
};

export default Clipboard;
