import Image from "next/image";
import bg from "../../public/ssd-collection-bg-01.jpg";
function Collection() {
  const COLLECTION_ICONS: { src: string }[] = [
    { src: "/aurora-collection-icon-01.png" },
    { src: "/ssd-collection-icon-01.png" },
    { src: "/lucifer-collection-icon-01.png" },
  ];
  return (
    <div
      className="collection flex flex-col items-center pt-10 md:pt-10 xl:h-130v mt-30n md:mt-90n"
      style={{
        background: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="group w-11/12 xl:w-9/12 h-full text-white flex flex-col space-y-5 justify-center items-center xl:items-end xl:self-end xl:pr-20">
        <div className="font-bugfast flex justify-center mb-10">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-right xl:text-head">
            AURORA <span className="text-green-500">CAPSULES</span>
          </p>
        </div>
        <div className="w-full xl:w-6/12 flex flex-col space-y-8">
          <div className="capsules grid justify-items-center gap-y-3 xl:flex xl:space-x-5">
            <div className="cap-1 w-60 h-8 xl:h-10 xl:w-64 bg-red-800 capsule flex items-center justify-center">
              <p>1,111 COLLECTIBLES</p>
            </div>
            <div className="cap-1 w-60 h-8 xl:h-10 xl:w-60 bg-red-800 capsule flex items-center justify-center">
              <p>678 COLLECTORS</p>
            </div>
            <div className="cap-1 w-60 h-8 xl:h-10 xl:w-60 bg-red-800 capsule flex items-center justify-center">
              <p>500 ETH VOLUME</p>
            </div>
          </div>
          <div className="cap-text text-center xl:text-left justify-self-start">
            <p className="text-md md:text-xl xl:text-2xl">
              Minerva Bellatrix, the Commander of the Rebellion, stole a ship
              containing 1,111 Capsules from the evil hands of the Yamamoto
              Family. What they discovered in the capsules changes the fate of
              the Universe forever...{" "}
            </p>
          </div>
        </div>
        <div className="">
          <div className="group-1 grid grid-cols-3">
            {COLLECTION_ICONS.map((el, i) => {
              if (i === 1) {
                return (
                  <div key={i}>
                    <Image
                      className="icon-gray"
                      src={el.src}
                      alt="collection-icon"
                      height={170}
                      width={170}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={i}>
                    <Image
                      className="icon-gray"
                      src={el.src}
                      alt="collection-icon"
                      height={200}
                      width={200}
                    />
                  </div>
                );
              }
            })}
          </div>
          <div className="group-2 mt-10 flex justify-end space-x-8">
            <Image
              src="/opensea-logo-blue-01.png"
              alt="blyr-logo"
              height={65}
              width={65}
            />
            <Image
              src="/blur-io-logo-01.jpg"
              alt="blyr-logo"
              height={65}
              width={65}
            />
            <button className="bg-black text-white w-56 text-xl">
              VIEW COLLECTION
            </button>
          </div>
        </div>
      </div>
      <div
        className="char-list flex mt-5 py-3 w-full overflow-x-scroll"
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        {[...Array(9)].map((_, i) => {
          return (
            <Image
              key={i}
              className="my-6 object-cover"
              src={`/PFPs/ssd-pfp-0${i + 1}.jpg`}
              alt="pfp"
              height={220}
              width={220}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Collection;
