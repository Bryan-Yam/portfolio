import React from "react";
import questImg from "../assets/quest.png";

const Projects = () => {
  return (
    <div className="w-full bg-default">
      <div className="text-kinda-white mx-24 md:mx-48 place-items-center text-center">
        <h1 className="w-full font-sans font-light text-2xl md:text-4xl pt-9 pb-12">
          welcome to my box! take a look through, see if something catches your
          eye.
        </h1>
      </div>
      <div className="grid pb-10 lg:pb-0 place-content-center lg:flex lg:justify-between mx-20 lg:mx-80 md:mx-40">
        <div className="group rounded-full relative cursor-pointer overflow-hidden drop-shadow-3xl transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-[250px] w-[250px] md:h-[500px] md:w-[500px]">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
              src={questImg}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/80"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-sans text-2xl md:text-3xl pb-5 md:pb-24 text-kinda-white">
              Quest Redesign
            </h1>
            <p className="mb-3 text-sm md:text-xl italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Simplifying Waterloo's student info platform
            </p>
            <p className="mb-3 text-xs md:text-lg italic text-text-purple opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              hi-fi prototyping, UXR, accessible design
            </p>
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-custom text-sm text-white shadow shadow-black/60 border-zinc-50 hover:text-kinda-white">
              See More
            </button>
          </div>
        </div>
        <div className="lg:flex justify-center items-center hidden">
          <svg
            width="300"
            height="300"
            viewBox="0 0 192 154"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_11_295)">
              <path
                d="M6 78.2022C12.0047 70.7678 26.8736 54.7551 38.0253 48.4645L44.8878 51.2095L28.0174 3L111.226 56.7567L117.517 77.7789L131.814 82.9651L183.855 11.0063L146.825 85.3507H155.261L187 127.384L88.0648 139.393L72.624 147.114C70.3462 141.698 67.5382 134.868 64.5485 127.384L58.613 137.964C58.1554 136.591 43.5534 86.9307 36.3096 62.2721C26.9787 68.8708 13.8069 75.2282 6 78.2022Z"
                fill="black"
              />
              <path
                d="M6 78.2022C12.0047 70.7678 26.8736 54.7551 38.0253 48.4645L44.8878 51.2095M6 78.2022C22.0126 63.7908 41.1706 51.7814 46.3175 51.7814M6 78.2022C13.8069 75.2282 26.9787 68.8708 36.3096 62.2721M46.6035 51.8957L46.3175 51.7814M46.6035 51.8957C45.7577 53.8859 43.9271 56.0384 41.4566 58.2355M46.6035 51.8957L78.3428 105.113M46.3175 51.7814L44.8878 51.2095M84.6335 115.66L74.3397 130.529M84.6335 115.66L78.3428 105.113M84.6335 115.66L109.224 74.7709M74.3397 130.529L72.624 147.114M74.3397 130.529L111.226 113.373M74.3397 130.529L88.0648 139.393M72.624 147.114C70.3462 141.698 67.5382 134.868 64.5485 127.384M72.624 147.114L88.0648 139.393M41.4566 58.2355C39.9522 59.5733 38.2106 60.9277 36.3096 62.2721M41.4566 58.2355C42.1633 69.0438 54.4022 101.984 64.5485 127.384M36.3096 62.2721C43.5534 86.9307 58.1554 136.591 58.613 137.964L64.5485 127.384M28.0174 3L44.8878 51.2095M28.0174 3L88.0648 95.3586M28.0174 3L111.226 56.7567L117.517 77.7789M88.0648 95.3586L78.3428 105.113M88.0648 95.3586L109.224 74.7709M109.224 74.7709L117.517 77.7789M138.39 85.3507L111.226 113.373M138.39 85.3507H146.825M138.39 85.3507L131.814 82.9651M111.226 113.373L187 127.384M187 127.384L88.0648 139.393M187 127.384L155.261 85.3507H146.825M146.825 85.3507L183.855 11.0063L131.814 82.9651M131.814 82.9651L117.517 77.7789"
                stroke="#424242"
                stroke-width="2.28752"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_11_295"
                x="0.733579"
                y="0.229004"
                width="191.235"
                height="153.029"
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
                <feOffset dx="0.57188" dy="2.28752" />
                <feGaussianBlur stdDeviation="1.14376" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.72 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_11_295"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_11_295"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="grid pb-10 lg:pb-0 place-content-center lg:flex lg:justify-between mx-20 lg:mx-80 md:mx-40">
        <div className="lg:flex justify-center items-center hidden">
          <svg
            width="300"
            height="300"
            viewBox="0 0 192 154"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_76_2)">
              <path
                d="M185 78.2022C178.995 70.7678 164.126 54.7551 152.975 48.4645L146.112 51.2095L162.983 3L79.7741 56.7567L73.4834 77.7789L59.1864 82.9651L7.14534 11.0063L44.1746 85.3507H35.7393L4 127.384L102.935 139.393L118.376 147.114C120.654 141.698 123.462 134.868 126.452 127.384L132.387 137.964C132.845 136.591 147.447 86.9307 154.69 62.2721C164.021 68.8708 177.193 75.2282 185 78.2022Z"
                fill="black"
              />
              <path
                d="M185 78.2022C178.995 70.7678 164.126 54.7551 152.975 48.4645L146.112 51.2095M185 78.2022C168.987 63.7908 149.829 51.7814 144.682 51.7814M185 78.2022C177.193 75.2282 164.021 68.8708 154.69 62.2721M144.397 51.8957L144.682 51.7814M144.397 51.8957C145.242 53.8859 147.073 56.0384 149.543 58.2355M144.397 51.8957L112.657 105.113M144.682 51.7814L146.112 51.2095M106.367 115.66L116.66 130.529M106.367 115.66L112.657 105.113M106.367 115.66L81.7757 74.7709M116.66 130.529L118.376 147.114M116.66 130.529L79.7741 113.373M116.66 130.529L102.935 139.393M118.376 147.114C120.654 141.698 123.462 134.868 126.452 127.384M118.376 147.114L102.935 139.393M149.543 58.2355C151.048 59.5733 152.789 60.9277 154.69 62.2721M149.543 58.2355C148.837 69.0438 136.598 101.984 126.452 127.384M154.69 62.2721C147.447 86.9307 132.845 136.591 132.387 137.964L126.452 127.384M162.983 3L146.112 51.2095M162.983 3L102.935 95.3586M162.983 3L79.7741 56.7567L73.4834 77.7789M102.935 95.3586L112.657 105.113M102.935 95.3586L81.7757 74.7709M81.7757 74.7709L73.4834 77.7789M52.6098 85.3507L79.7741 113.373M52.6098 85.3507H44.1746M52.6098 85.3507L59.1864 82.9651M79.7741 113.373L4 127.384M4 127.384L102.935 139.393M4 127.384L35.7393 85.3507H44.1746M44.1746 85.3507L7.14534 11.0063L59.1864 82.9651M59.1864 82.9651L73.4834 77.7789"
                stroke="#424242"
                stroke-width="2.28752"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_76_2"
                x="0.174985"
                y="0.229004"
                width="191.235"
                height="153.029"
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
                <feOffset dx="0.57188" dy="2.28752" />
                <feGaussianBlur stdDeviation="1.14376" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.72 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_76_2"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_76_2"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="group rounded-full relative cursor-pointer overflow-hidden drop-shadow-3xl transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-[250px] w-[250px] md:h-[500px] md:w-[500px]">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
              src={questImg}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/80"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-sans text-2xl md:text-3xl pb-5 md:pb-24 text-kinda-white">
              Quest Redesign
            </h1>
            <p className="mb-3 text-sm md:text-xl italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Simplifying Waterloo's student info platform
            </p>
            <p className="mb-3 text-xs md:text-lg italic text-text-purple opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              hi-fi prototyping, UXR, accessible design
            </p>
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-custom text-sm text-white shadow shadow-black/60 border-zinc-50 hover:text-kinda-white">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
