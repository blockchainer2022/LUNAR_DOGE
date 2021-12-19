import Title from "../components/title";
import { FiCopy } from "react-icons/fi";
import Barcode from "../assets/images/barcode.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
const account = "0xc748673057861a797275cd8a068abb95a902e8de";
const Donate = () => {
  return (
    <section className="donate pt-14 md:pt-32 pb-20" id="donations">
      <div className="container">
        <Title title="Feel like donating?" backtext="Donating" />
        <p className=" max-w-3xl mx-auto text-white font-normal text-xl text-center mt-10 capitalize">
          e'd like to thank all our generous donors for helping us get to where
          we are today! As a community powered project, donations are greatly
          appreciated and can be made at the link below.
        </p>
        <div className="grid sm:grid-cols-2 mt-32 max-w-5xl mx-auto items-center ">
          <div data-aos="fade-right">
            <h3 className="font-bold text-primary capitalize text-3xl">
              wallet address
            </h3>
            <p className="text-white flex text-lg items-center mt-2">
              <span className="sm:hidden  mr-2 inline-block break-all ">
                {account.slice(0, 8) +
                  "..." +
                  account.slice(account.length - 5)}
              </span>
              <span className="hidden mr-2 sm:inline-block break-all ">
                {account}
              </span>
              <CopyToClipboard
                text={account}
                onCopy={() => alert(`${account} copid`)}
                className="cursor-pointer"
              >
                <FiCopy />
              </CopyToClipboard>
            </p>
            <p className="text-white text-xl mt-8 font-medium">
              <b className="text-primary ">Accepted:</b> BNB, Etherium, or $Doge
            </p>
          </div>
          <div data-aos="fade-left">
            <img
              src={Barcode}
              alt=""
              className="mx-auto mt-8 sm:mt-0 sm:mr-0 sm:ml-auto  max-w-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
