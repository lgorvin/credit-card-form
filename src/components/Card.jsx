import React from "react";
import cardFront from "../assets/bg-card-front.png";
import cardBack from "../assets/bg-card-back.png";

const Card = () => {
  return (
    <div className="h-screen">
      <div className="absolute pl-[800px] pt-[220px]">
        <h1 className="pb-1 text-black">CARDHOLDER NAME</h1>
        <input
          className="border-2 leading-9 pl-2 pr-16 rounded-md"
          placeholder="e.g. Jane Appleseed"
          type="text"
          name=""
          id=""
        />
        <h1 className="pt-5 pb-1 text-black">CARD NUMBER</h1>
        <input
          className="border-2 leading-9 pl-2 pr-16 rounded-md"
          placeholder="e.g. 1234 4567 8912 0000"
          type="text"
          name=""
          id=""
        />
        <h1 className="pt-5 pb-1 text-black">EXP. DATE (MM/YY)</h1>
        <input
          className="inline border-2 leading-9 pl-2 w-20 rounded-md"
          placeholder="MM"
          type="text"
          name=""
          id=""
        />
        <input
          className="inline border-2 leading-9 ml-2 pl-2 w-20 rounded-md"
          placeholder="YY"
          type="text"
          name=""
          id=""
        />
        <input
          className="inline border-2 leading-9 ml-4 pl-2 w-24 rounded-md"
          placeholder="e.g. 123"
          type="text"
          name=""
          id=""
        />
      </div>
      <div className="absolute">
        <h1 className="absolute text-white text-2xl pl-40 pt-72">
          0000 0000 0000 0000
        </h1>
        <h1 className="absolute text-white text-lg pl-40 pt-[340px]">
          Jane Appleseed
        </h1>
        <h1 className="absolute text-white text-lg pl-[500px] pt-[340px]">
          00/00
        </h1>
        <img className="w-[100%] pt-36 pl-32" src={cardFront} alt="" />
      </div>

      <div className="absolute">
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
