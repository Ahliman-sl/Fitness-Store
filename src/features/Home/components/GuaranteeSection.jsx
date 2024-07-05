import moneyBack1 from "../../../images/moneyBack1.webp";
import moneyBack2 from "../../../images/moneyBack2.webp";
import moneyBack3 from "../../../images/moneyBack3.webp";

function GuaranteeSection() {
  return (
    <section className="w-full h-[60rem] lg:h-[30rem] mt-5 p-5 bg-black text-slate-50 flex flex-col gap-5 items-center justify-center guaranteeOverlay">
      <h3 className="text-4xl z-10 font-bold text-center">
        30-day Money-Back Guarantee
      </h3>
      <p className="z-10 text-center">
        If you are not 100% satisfied, tell us within 30 days, and get your
        money back.
      </p>
      <div className="w-max h-max flex flex-col md:flex-row gap-10 z-10 text-center ">
        <div className="w-[10rem] h-[13rem] flex flex-col items-center justify-center">
          <img src={moneyBack1} className="w-[10rem] h-[10rem] object-cover" />
          <p className="font-bold">Free Return In Reasonable Days</p>
        </div>
        <div className="w-[10rem] h-[13rem] flex flex-col items-center justify-center">
          <img src={moneyBack2} className="w-[10rem] h-[10rem] object-cover" />
          <p className="font-bold">Free Shipping delivery US Only</p>
        </div>
        <div className="w-[10rem] h-[13rem] flex flex-col items-center justify-center">
          <img src={moneyBack3} className="w-[10rem] h-[10rem] object-cover" />
          <p className="font-bold">Free Support in each proccess</p>
        </div>
      </div>
    </section>
  );
}

export default GuaranteeSection;
