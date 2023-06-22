import React from "react";
import { TagSkill } from "../atoms";
import clsx from "clsx";
import { IDetail } from "apis/roadmap/types";

export interface MapItemProps {
  numStep: number;
  details: IDetail[];
  section_name: string;
  odd?: boolean;
  onTap: (detailId: string) => void;
}

const MapItem: React.FC<MapItemProps> = ({
  details,
  section_name,
  numStep,
  odd = false,
  onTap,
}) => {
  return (
    <div
      className={clsx(
        "relative w-fit flex items-center col-span-2 -mt-[150px]",
        {
          "justify-self-end": odd,
          "justify-self-start": !odd,
        }
      )}
    >
      {odd && (
        <>
          <div className="h-fit relative">
            <p className="absolute -top-3 text-4xl font-bold bg-clip-text bg-[linear-gradient(90deg,_#3B8CD2_0%,_#50B2C6_100%)] z-30 right-[30%] text-transparent">
              {numStep}
            </p>
            <svg
              className="h-[150px] -translate-y-8"
              viewBox="0 0 351 197"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="10.3348"
                y1="190.343"
                x2="189.596"
                y2="101.655"
                stroke="#CFCFCF"
                strokeWidth={3}
              />
              <ellipse cx={7} cy={192} rx={7} ry={5} fill="#CFCFCF" />
              <g filter="url(#filter0_d_568_3105)">
                <path
                  d="M138 77.0936V54C138 51.2386 140.239 49 143 49H329C331.761 49 334 51.2386 334 54V79.1262C334 81.0194 332.931 82.7503 331.238 83.5976L238.786 129.863C237.358 130.577 235.674 130.567 234.255 129.834L140.706 81.5364C139.044 80.6783 138 78.9642 138 77.0936Z"
                  fill="url(#paint0_linear_568_3105)"
                />
                <path
                  d="M138 77.0936V54C138 51.2386 140.239 49 143 49H329C331.761 49 334 51.2386 334 54V79.1262C334 81.0194 332.931 82.7503 331.238 83.5976L238.786 129.863C237.358 130.577 235.674 130.567 234.255 129.834L140.706 81.5364C139.044 80.6783 138 78.9642 138 77.0936Z"
                  stroke="url(#paint1_linear_568_3105)"
                  strokeWidth="2.6"
                />
              </g>
              <path
                d="M143.509 47.7119L234.051 1.86888C236.366 0.696699 239.106 0.720236 241.401 1.93202L328.212 47.7768C333.974 50.8196 333.876 59.1058 328.043 62.0115L241.236 105.259C239.031 106.358 236.443 106.379 234.22 105.318L143.675 62.0679C137.683 59.2058 137.585 50.7114 143.509 47.7119Z"
                fill="white"
                stroke="url(#paint2_linear_568_3105)"
                strokeWidth={2}
              />
              <defs>
                <filter
                  id="filter0_d_568_3105"
                  x="121.7"
                  y="37.7002"
                  width="228.6"
                  height="113.991"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy={5} />
                  <feGaussianBlur stdDeviation="7.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.427451 0 0 0 0 0.737255 0 0 0 0 0.815686 0 0 0 0.8 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_568_3105"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_568_3105"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_568_3105"
                  x1="138.733"
                  y1="69.8761"
                  x2="334.44"
                  y2="71.7187"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3B8CD2" />
                  <stop offset={1} stopColor="#50B3C6" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_568_3105"
                  x1="138.733"
                  y1="48.1951"
                  x2="334.44"
                  y2="48.1951"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3B8CD2" />
                  <stop offset={1} stopColor="#50B3C6" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_568_3105"
                  x1="139.847"
                  y1="53.9853"
                  x2="331.478"
                  y2="53.9853"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3B8CD2" />
                  <stop offset={1} stopColor="#50B3C6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="w-[20vw] mt-20 ml-20">
            <h2 className="bg-[linear-gradient(90deg,_#3B8CD2_0%,_#50B2C6_100%)] text-center text-white whitespace-nowrap text-[1.4vw] h-12 flex items-center justify-center font-bold rounded-lg">
              {section_name}
            </h2>
            <div className="w-full h-fit grid grid-cols-2 mt-10 gap-2">
              {details?.map((detail) => (
                <TagSkill
                  key={detail.detail_id}
                  isImportant={detail.is_important}
                  onClick={() => onTap(detail.detail_id)}
                  isCompleted={detail.is_completed}
                >
                  {detail.detail_name}
                </TagSkill>
              ))}
            </div>
          </div>
        </>
      )}
      {!odd && (
        <>
          <div className="w-[20vw] mt-[70px] mr-20">
            <h2 className="bg-[linear-gradient(90deg,_#5F5796_0%,_#3B8AD0_100%,_#FFFFFF00_100%)] text-center text-white whitespace-nowrap text-[1.4vw] h-12 flex items-center justify-center font-bold rounded-lg">
              {section_name}
            </h2>
            <div className="w-full h-fit grid grid-cols-2 pt-10 gap-2">
              {details?.map((detail) => (
                <TagSkill
                  key={detail.detail_id}
                  isImportant={detail.is_important}
                  isCompleted={detail.is_completed}
                  onClick={() => onTap(detail.detail_id)}
                >
                  {detail.detail_name}
                </TagSkill>
              ))}
            </div>
          </div>
          <div className="h-fit relative">
            <p className="absolute -top-3 text-4xl font-bold bg-clip-text bg-[linear-gradient(90deg,_#5F5796_0%,_#3B8AD0_100%,_#FFFFFF00_100%)] z-30 left-[30%] text-transparent">
              {numStep}
            </p>
            <svg
              className="h-[150px] -translate-y-8"
              viewBox="0 0 346 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="-1.5"
                x2="200"
                y2="-1.5"
                transform="matrix(-0.896306 -0.443436 -0.443436 0.896306 339.261 195.687)"
                stroke="#CFCFCF"
                stroke-width="3"
              />
              <ellipse cx="339" cy="195" rx="7" ry="5" fill="#CFCFCF" />
              <g filter="url(#filter0_d_568_3103)">
                <path
                  d="M17 77.0936V54C17 51.2386 19.2386 49 22 49H208C210.761 49 213 51.2386 213 54V79.1262C213 81.0194 211.931 82.7503 210.238 83.5976L117.786 129.863C116.358 130.577 114.674 130.567 113.255 129.834L19.7062 81.5364C18.0441 80.6783 17 78.9642 17 77.0936Z"
                  fill="url(#paint0_linear_568_3103)"
                />
                <path
                  d="M17 77.0936V54C17 51.2386 19.2386 49 22 49H208C210.761 49 213 51.2386 213 54V79.1262C213 81.0194 211.931 82.7503 210.238 83.5976L117.786 129.863C116.358 130.577 114.674 130.567 113.255 129.834L19.7062 81.5364C18.0441 80.6783 17 78.9642 17 77.0936Z"
                  stroke="url(#paint1_linear_568_3103)"
                  stroke-width="2.6"
                />
              </g>
              <path
                d="M22.5094 47.7119L113.051 1.86888C115.366 0.696699 118.106 0.720236 120.401 1.93202L207.212 47.7768C212.974 50.8196 212.876 59.1058 207.043 62.0115L120.236 105.259C118.031 106.358 115.443 106.379 113.22 105.318L22.675 62.0679C16.6831 59.2058 16.5851 50.7114 22.5094 47.7119Z"
                fill="white"
                stroke="url(#paint2_linear_568_3103)"
                stroke-width="2"
              />
              <defs>
                <filter
                  id="filter0_d_568_3103"
                  x="0.699951"
                  y="37.7"
                  width="228.6"
                  height="113.991"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="5" />
                  <feGaussianBlur stdDeviation="7.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.415686 0 0 0 0 0.639216 0 0 0 0 0.847059 0 0 0 0.8 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_568_3103"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_568_3103"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_568_3103"
                  x1="17.7331"
                  y1="69.8761"
                  x2="213.44"
                  y2="71.7187"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5F5796" />
                  <stop offset="1" stop-color="#3B8BD1" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_568_3103"
                  x1="17.7331"
                  y1="48.1951"
                  x2="213.44"
                  y2="48.1951"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5F5796" />
                  <stop offset="1" stop-color="#3B8BD1" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_568_3103"
                  x1="18.847"
                  y1="53.9853"
                  x2="210.478"
                  y2="53.9853"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5F5796" />
                  <stop offset="1" stop-color="#3B8BD1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </>
      )}
    </div>
  );
};

export default MapItem;
