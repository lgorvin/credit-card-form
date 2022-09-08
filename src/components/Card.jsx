import React, { useState } from "react";
import cardFront from "../assets/bg-card-front.png";
import cardBack from "../assets/bg-card-back.png";

const Card = () => {
  const [cardnum, setCardnum] = useState("");
  const [cardname, setCardname] = useState("");
  const [cardmonth, setCardmonth] = useState("");
  const [cardyear, setCardyear] = useState("");
  const [cardcvc, setCardcvc] = useState("");

  const handleChange = (e) => {
    setCardnum(e.target.value);
  };

  const handleChange2 = (e) => {
    setCardname(e.target.value);
  };

  const handleChange3 = (e) => {
    setCardmonth(e.target.value);
  };

  const handleChange4 = (e) => {
    setCardyear(e.target.value);
  };

  const handleChange5 = (e) => {
    setCardcvc(e.target.value);
  };

  const [confirm, setConfirm] = useState(false);
  const handleClick = () => {
    setConfirm(!confirm);
  };

  return (
    <div className="h-screen">
      <div className={!confirm ? "absolute pl-[983px] pt-[396px]" : "hidden"}>
        <h1 className="text-black">CVC</h1>
      </div>
      <div className={!confirm ? "absolute pl-[800px] pt-[220px]" : "hidden"}>
        <h1 className="pb-1 text-black">CARDHOLDER NAME</h1>
        <input
          className="border-2 leading-9 pl-2 pr-16 rounded-md"
          placeholder="e.g. Jane Appleseed"
          type="text"
          value={cardname}
          onChange={handleChange2}
          name=""
          id=""
        />
        <h1 className="pt-5 pb-1 text-black">CARD NUMBER</h1>
        <input
          className="border-2 leading-9 pl-2 pr-16 rounded-md"
          placeholder="e.g. 1234 4567 8912 0000"
          type="text"
          value={cardnum}
          onChange={handleChange}
          name=""
          id=""
        />
        <h1 className="pt-5 pb-1 text-black">EXP. DATE (MM/YY)</h1>
        <input
          className="inline border-2 leading-9 pl-2 w-20 rounded-md"
          placeholder="MM"
          type="text"
          value={cardmonth}
          onChange={handleChange3}
          name=""
          id=""
        />
        <input
          className="inline border-2 leading-9 ml-2 pl-2 w-20 rounded-md"
          placeholder="YY"
          type="text"
          value={cardyear}
          onChange={handleChange4}
          name=""
          id=""
        />
        <input
          className="absolute border-2 leading-9 ml-[15px] pl-2 w-24 rounded-md"
          placeholder="e.g. 123"
          type="text"
          value={cardcvc}
          onChange={handleChange5}
          name=""
          id=""
        />
        <button
          onClick={handleClick}
          className="absolute ml-[-166px] rounded-md w-[280px] p-3 text-center text-white mt-16 bg-slate-800 hover:bg-slate-600 active:bg-slate-300 active:text-black duration-300"
        >
          CONFIRM
        </button>
      </div>
      <div className={!confirm ? "hidden" : "absolute pl-[800px] pt-[220px]"}>
        <div className="pt-12 pl-[100px]">
          <svg
            className="ml-[-5px]"
            width="80"
            height="80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40" cy="40" r="40" fill="url(#a)" />
            <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3" />
            <defs>
              <linearGradient
                id="a"
                x1="-23.014"
                y1="11.507"
                x2="0"
                y2="91.507"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#6348FE" />
                <stop offset="1" stop-color="#610595" />
              </linearGradient>
            </defs>
          </svg>
          <h1 className="text-black text-3xl mt-8 ml-[-44px]">THANK YOU!</h1>
          <p className="text-gray-400 ml-[-80px] mt-4">
            We've added your card details
          </p>
          <button
            onClick={handleClick}
            className="absolute ml-[-98px] rounded-md w-[280px] p-3 text-center text-white mt-8 bg-slate-800 hover:bg-slate-600 active:bg-slate-300 active:text-black duration-300"
          >
            CONTINUE
          </button>
        </div>
      </div>
      <div className="absolute">
        <h1 className="absolute text-white text-2xl pl-40 pt-72">{cardnum}</h1>
        <h1 className="absolute text-white text-lg pl-40 pt-[340px]">
          {cardname}
        </h1>
        <h1 className="absolute text-white text-lg pl-[500px] pt-[340px]">
          {cardmonth}/{cardyear}
        </h1>
        <img className="w-[100%] pt-36 pl-32" src={cardFront} alt="" />
      </div>

      <div className="absolute">
        <h1 className="absolute text-white text-md pl-[580px] pt-[527px]">
          {cardcvc}
        </h1>
        <img className="w-[100%] pt-[420px] pl-56" src={cardBack} alt="" />
      </div>
      <div className="absolute pt-[172px] pl-40">
        <svg
          className=""
          width="84"
          height="47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
          <path
            d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
            stroke="#fff"
          />
        </svg>
      </div>
      <div className="bg1 h-full w-[30%]"></div>
    </div>
  );
};

export default Card;
