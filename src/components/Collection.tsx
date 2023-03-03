import bg from "../../public/ssd-collection-bg-01.jpg";
function Collection() {
  return (
    <div
      className="collection h-screen w-screen flex justify-center"
      style={{ background: `url(${bg.src})` }}
    >
      <div className="w-9/12 h-full text-white flex flex-col space-y-8 justify-center items-end">
        <div className="font-bugfast">
          <p style={{ fontSize: "7rem" }}>
            AURORA <span className="text-green-500">CAPSULES</span>
          </p>
        </div>
        <div className="capsules flex space-x-5">
          <div className="cap-1 h-10 w-60 bg-red-800 capsule flex items-center justify-center">
            <p>1,111 COLLECTIBLES</p>
          </div>
          <div className="cap-1 h-10 w-60 bg-red-800 capsule flex items-center justify-center">
            <p>678 COLLECTORS</p>
          </div>
          <div className="cap-1 h-10 w-60 bg-red-800 capsule flex items-center justify-center">
            <p>500 ETH VOLUME</p>
          </div>
        </div>
        <div className="cap-text w-2/4">
          <p className="text-2xl">
            Minerva Bellatrix, the Commander of the Rebellion, stole a ship
            containing 1,111 Capsules from the evil hands of the Yamamoto
            Family. What they discovered in the capsules changes the fate of the
            Universe forever...{" "}
          </p>
        </div>
      </div>
      <div className="chars"></div>
    </div>
  );
}
export default Collection;
