import React from "react";
import { useNavigate } from "react-router";

export default function About() {
    const navigate=useNavigate();
  return (
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 pb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Brand new
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-violet-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">In</span>
                </span>{' '}
                investing, what is comfortable is rarely profitable.
              </h2>
              <p className="text-base text-gray-400 md:text-lg">
                That's why we at Levi are here to help you in your crypto journey to become rich easier.
              </p>
            </div>
            <div className="grid gap-12 gap-x-24 lg:grid-cols-2">
              <div className="max-w-md pb-8 sm:mx-auto text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24" style={{boxShadow:'0 0 80px #324f9f'}}>
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-5 text-xl text-orange-400 font-bold leading-5">Trade</h6>
                <p className="mb-3 text-lg text-gray-500">
                Easily buy and sell the top ranking cryptos in the world and grow fast.
                </p>
                <a
                  href="#"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  onClick={() => navigate(`/stock`)}
                >
                  Learn more
                </a>
              </div>
              <div className="max-w-md pb-8 sm:mx-auto text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full  mx-auto sm:w-24 sm:h-24" style={{boxShadow:'0 0 80px #324f9f'}}>
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-3 text-xl font-bold text-orange-400 leading-5">Dashboard</h6>
                <p className="mb-3 text-lg text-gray-500">
                Easily keep track of all your earnings using the dashboard section. 
                Using real-time data, you will always know what your money holds.
                
                </p>
                <a
                  href="#"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  onClick={() => navigate(`/dashboard`)}
                >
                  Learn more
                </a>
              </div>
              <div className="max-w-md pb-8 sm:mx-auto text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24" style={{boxShadow:'0 0 80px #324f9f'}}>
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-3 text-xl font-bold leading-5 text-orange-400">News</h6>
                <p className="mb-3 text-lg text-gray-500">
                Stay updated with what is happening in the world of finance.
                Be sure on the changing policies so that you can stay ahead of the race.
                </p>
                <a
                  href="#"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  onClick={() => navigate(`/news`)}
                >
                  Learn more
                </a>
              </div>
              <div className="max-w-md pb-8 sm:mx-auto text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24" style={{boxShadow:'0 0 80px #324f9f'}}>
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-3 text-xl font-bold leading-5 text-orange-400">
                  Watchlist
                </h6>
                <p className="mb-3 text-lg text-gray-500">
                With real-time market data and customisable charts, 
                you can easily track the price movements of your favourite cryptocurrencies and make trades occordingly.
                </p>
                <a
                  href="#"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  onClick={() => navigate(`/know`)}
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        );
      };
