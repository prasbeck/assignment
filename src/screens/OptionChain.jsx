import React, { useState } from "react";
import { HiAdjustments, HiOutlineChevronRight } from "react-icons/hi";

function OptionChain() {
  const [basketOpen, setBasketOpen] = useState(false);
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17.18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
  ];
  return (
    <div className="mx-20 px-10 mb-20 relative">
      {basketOpen && (
        <div className=" z-50 absolute   left-[10%] top-[30%] w-[80%] flex justify-center my-auto">
          <div className="bg-white ">
            <div className=" bg-blue-600 gap-x-16 text-sm grid grid-cols-5 py-2 px-4 text-white">
              <div>
                <p>Max profit</p>
                <p>24,000/-</p>
              </div>
              <div>
                <p>Max loss</p>
                <p>Unlimited</p>
              </div>
              <div>
                <p>Risk:Reward</p>
                <p>NA</p>
              </div>
              <div>
                <p>Probability</p>
                <p>32%</p>
              </div>
              <div>
                <p>Breakeven</p>
                <p className=" flex gap-x-1">
                  <span className=" pt-1">
                    <HiOutlineChevronRight />
                  </span>
                  38124.2
                </p>
              </div>
            </div>
            <div className=" flex px-4 text-gray-600 text-xs py-3">
              <div className=" w-1/3">Instrument</div>
              <div className=" w-2/3 flex">
                <p className=" w-1/6">B/S</p>
                <p className=" w-1/6">Type</p>
                <p className=" w-1/6">Qty</p>
                <p className=" w-1/6">Price</p>
                <p className=" w-1/6">Trigger</p>
                <p className=" w-2/6"></p>
              </div>
            </div>
            <div className=" h-44 overflow-y-scroll">
              {data.slice(0, 3).map((item) => {
                return (
                  <div
                    className={` flex px-4 text-sm py-1 ${
                      item % 2 === 1 ? "bg-gray-100" : "bg-white"
                    }`}
                    key={item}
                  >
                    <div className=" w-1/3">NIFTY 18MAY23 18200 CE</div>
                    <div className=" w-2/3 flex">
                      <div className=" w-1/6">
                        <p
                          className={` w-5 h-5 text-center ${
                            item % 2 === 0 ? "bg-pink-400" : "bg-blue-400"
                          } `}
                        >
                          {item % 2 === 0 ? "S" : "B"}
                        </p>
                      </div>
                      <p className=" w-1/6">
                        {item % 2 === 0 ? "NRML" : "MIS"}
                      </p>
                      <div className=" w-1/6 pr-2">
                        <div className=" border-2 border-gray-300">50</div>
                      </div>
                      <div className=" w-1/6 pr-2">
                        <div className=" border-2 border-gray-300">120.5</div>
                      </div>

                      <div className=" w-1/6">
                        <div className=" border-2 border-gray-300 h-[100%]"></div>
                      </div>
                      <div className=" w-2/6 text-blue-500 flex justify-center gap-x-3">
                        <div>
                          <p>SL</p>
                        </div>
                        <div>
                          <p>Tgt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <hr className=" border-gray-300" />
            <div className=" px-4 mb-4 py-2 text-sm flex justify-between">
              <div className=" flex gap-x-7">
                <div>
                  <p>Margin required: $243</p>
                  <p>Available funds: $1200</p>
                </div>
                <button className=" bg-yellow-400 px-2 py-1 h-8 mt-2">
                  Auto hedge
                </button>
              </div>
              <div className=" grid grid-cols-2 gap-x-5 mt-2">
                <button
                  className=" px-5 py-1 border-2 h-8 border-blue-600"
                  onClick={() => setBasketOpen(false)}
                >
                  Close basket
                </button>
                <button
                  className=" bg-blue-600 px-5 h-8  py-1"
                  onClick={() => setBasketOpen(false)}
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="my-7 flex  justify-between">
        <div className=" flex gap-x-12">
          <div className=" flex gap-x-7 ">
            <div className=" flex gap-x-4 h-10 ">
              <div className=" border-2 border-gray-400 py-1 px-4 relative pr-16">
                <p className=" uppercase">nifty</p>
                <p className=" text-gray-400 absolute -top-3 px-2 bg-[rgb(245,245,245)] text-sm left-2">
                  Scrip
                </p>
              </div>
              <div className=" border-2 border-gray-400 py-1 px-4 relative">
                <p>18 May 2023</p>
                <p className=" text-gray-400 absolute -top-3 px-2 bg-[rgb(245,245,245)] text-sm left-2">
                  Exp
                </p>
              </div>
            </div>
            <div className=" w-1/4 flex gap-x-4">
              <div>
                <p className=" leading-tight text-left text-sm font-semibold   text-gray-500">
                  Spot
                </p>
                <div className=" flex gap-x-2">
                  <p>18,245.3</p>
                  <sub className=" pt-3 text-green-600">0.35%</sub>
                </div>
              </div>
              <div>
                <p className=" leading-tight text-left text-sm font-semibold   text-gray-500">
                  Fut
                </p>
                <div className=" flex gap-x-2">
                  <p>18,251.1</p>
                  <sub className=" pt-3 text-green-600">0.35%</sub>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex gap-x-4 w-1/4">
            <div>
              <p className=" w-16 leading-tight text-left text-sm font-semibold  text-gray-500">
                Max pain
              </p>
              <div className=" flex gap-x-2">
                <p>18,200</p>
              </div>
            </div>
            <div>
              <p className=" leading-tight text-left text-sm font-semibold   text-gray-500">
                PCR
              </p>
              <div className=" flex gap-x-2">
                <p>0.92</p>
              </div>
            </div>
            <div>
              <p className=" leading-tight text-left text-sm font-semibold   text-gray-500">
                Support
              </p>
              <div className=" flex gap-x-2">
                <p>18100</p>
              </div>
            </div>
            <div>
              <p className=" leading-tight text-left text-sm font-semibold   text-gray-500">
                Resistance
              </p>
              <div className=" flex gap-x-2">
                <p>18500</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" relative flex">
            <button className=" w-40 flex justify-center py-1">
              <span className=" pt-1 mr-1">
                <HiAdjustments />
              </span>
              <p>Filters</p>
            </button>
            <button
              className=" w-36 bg-blue-600 text-white  px-4 py-1"
              onClick={() => setBasketOpen(!basketOpen)}
            >
              Basket
            </button>
            <div className=" rounded-full w-6 h-6 p-1 bg-yellow-300 px-2 absolute font-bold text-xs -top-2 -right-2">
              3
            </div>
          </div>
          <div className=" flex justify-end mt-7 gap-x-6">
            <button className=" w-24 bg-blue-600 rounded-lg py-1 text-white">
              LTP
            </button>
            <button className=" w-24 bg-gray-300 rounded-lg py-1">
              Greeks
            </button>
          </div>
        </div>
      </div>
      <div className="min-w-[800px] overflow-x-scroll">
        <div className=" flex  uppercase bg-white py-2">
          <div className="text-center w-1/2">Calls</div>
          <div className="text-center w-1/2">Puts</div>
        </div>
        <div className="flex text-center">
          <div className=" w-5/12 border-b-2 flex  py-2 bg-blue-100 border-blue-300">
            <div className=" w-3/12">OI Buildup</div>
            <div className=" w-1/12">IV</div>
            <div className=" w-1/12">OI</div>
            <div className=" w-2/12">Volume</div>
            <div className=" w-1/12">Chng%</div>
            <div className=" w-2/12">LTP</div>
            <div className=" w-2/12"></div>
          </div>
          <div className=" border-x-2 w-2/12 py-2 border-b-2 bg-purple-100 border-purple-300">
            Strike
          </div>
          <div className=" w-5/12 flex flex-row-reverse  py-2 border-b-2 bg-blue-100 border-blue-300">
            <div className=" w-3/12">OI Buildup</div>
            <div className=" w-1/12">IV</div>
            <div className=" w-1/12">OI</div>
            <div className=" w-2/12">Volume</div>
            <div className=" w-1/12">Chng%</div>
            <div className=" w-2/12">LTP</div>
            <div className=" w-2/12"></div>
          </div>
        </div>
        <div className=" overflow-scroll h-96">
          {data.map((item) => {
            return (
              <div className="flex text-center" key={item}>
                <div
                  className={` w-5/12 border-b-2 py-2 flex text-sm ${
                    Math.floor(item / 10) % 2 === 1
                      ? "bg-white border-gray-300"
                      : "bg-yellow-100 border-yellow-300"
                  } `}
                >
                  <div className=" w-3/12">
                    <p>Long buildup</p>
                  </div>
                  <div className=" w-1/12">9.4</div>
                  <div className=" w-1/12">35K</div>
                  <div className=" w-2/12">1.25K</div>
                  <div className=" w-1/12 text-green-600">+123%</div>
                  <div className=" w-2/12">1,245.3</div>
                  <div className=" w-2/12 flex justify-center gap-x-2">
                    <div className=" bg-gray-50 border-2 border-gray-300 text-xs align-middle w-5 h-5 ">
                      B
                    </div>
                    <div className=" bg-gray-50 border-2 border-gray-300 text-xs align-middle w-5 h-5 ">
                      S
                    </div>
                  </div>
                </div>
                <div className=" border-x-2 w-2/12 py-1 border-b-2 bg-purple-100 border-purple-300">
                  17950
                </div>
                <div
                  className={` w-5/12 flex text-sm py-2 flex-row-reverse border-b-2 ${
                    Math.floor(item / 10) % 2 === 0
                      ? "bg-white border-gray-300"
                      : "bg-yellow-100 border-yellow-300"
                  } `}
                >
                  <div className=" w-3/12">
                    <p>Long unwinding</p>
                  </div>
                  <div className=" w-1/12">9.2</div>
                  <div className=" w-1/12">1.4K</div>
                  <div className=" w-2/12">982</div>
                  <div className=" w-1/12 text-red-500">-44.2%</div>
                  <div className=" w-2/12">15.3</div>
                  <div className=" w-2/12 flex justify-center gap-x-2">
                    <div className=" bg-gray-50 border-2 border-gray-300 text-xs align-middle w-5 h-5 ">
                      B
                    </div>
                    <div className=" bg-gray-50 border-2 border-gray-300 text-xs align-middle w-5 h-5 ">
                      S
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OptionChain;
