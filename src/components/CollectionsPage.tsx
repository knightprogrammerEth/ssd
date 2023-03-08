import Image from "next/image";
import Navbar from "./Navbar";
import bg2 from "../../public/PFPs/ssd-pfp-03.jpg";
import Tile from "./Tile";
import bg from "../../public/space-bg-01.jpg";

function CollectionsPage() {
  return (
    <div
      className="h-full w-full"
      style={{
        background: `url(${bg.src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div className="main-collection flex flex-col items-center mt-20">
        <h1 className="font-bugfast xl:text-6xl text-white">
          COLLECTIONS GALLERY
        </h1>
        {/*
         <div className="gallery-wrapper bg-white h-60v w-50v">
          <div className="gallery bg-zinc-300"></div>
        </div> */}
        {/* <div className="wrapper h-60v w-90v">
          <div className="char-ip h-10 w-20 border-white border-2">
            <input className="border-emerald-200 border-2 h-full w-full" />
          </div>
        </div> */}
        <div className="gallery h-80v w-11/12 lg:w-90v border-white border-2 my-2 flex flex-col items-center">
          <div className="sub-nav px-3 md:px-10 m-10 w-full text-white grid grid-cols-3 gap-5">
            <div className="input-container w-full mr-10 col-span-3 xl:col-span-1 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 search-icon absolute top-2 left-4 lg:top-4 lg:left-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>

              <input
                className="h-10 lg:h-14 w-full pl-14 rounded-full bg-transparent border-white border-2"
                placeholder="Search here..."
              />
            </div>
            <div className="info-tabs flex space-x-10 md:space-x-5 md:justify-around col-span-3 lg:col-span-2 xl:col-span-1">
              <div>
                <p className="font-bugfast text-md lg:text-xl 2xl:text-2xl">
                  1,533
                </p>
                <p className="font-light text-sm">total items</p>
              </div>
              <div>
                <p className="font-bugfast text-md lg:text-xl 2xl:text-2xl">
                  0.029 ETH
                </p>
                <p className="font-light text-sm">floor price</p>
              </div>
              <div>
                <p className="font-bugfast text-md lg:text-xl 2xl:text-2xl">
                  393
                </p>
                <p className="font-light text-sm">owners</p>
              </div>
              <div>
                <p className="font-bugfast text-md lg:text-xl 2xl:text-2xl">
                  26%
                </p>
                <p className="font-light text-sm">unique owners</p>
              </div>
            </div>

            <div className="collection-icons flex justify-center space-x-5 px-10 col-span-3 lg:col-span-1 xl:col-span-1 xl:justify-end">
              <Image
                src="/aurora-collection-icon-01.png"
                alt="col-icon"
                height={75}
                width={75}
              />
              <Image
                src="/aurora-collection-icon-01.png"
                alt="col-icon"
                height={75}
                width={75}
              />
              <Image
                src="/aurora-collection-icon-01.png"
                alt="col-icon"
                height={75}
                width={75}
              />
            </div>
          </div>
          <div className="collection-gallery"></div>
        </div>
      </div>
    </div>
  );
}

export default CollectionsPage;
