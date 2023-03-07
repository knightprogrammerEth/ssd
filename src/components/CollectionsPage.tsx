import Navbar from "./Navbar";
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
      <div className="main flex flex-col items-center mt-20">
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
        <div className="gallery h-80v w-90v border-white border-2 my-2 flex flex-col items-center">
          <div className="sub-nav m-4 text-white flex space-x-10">
            <div className="input-container md:w-80">
              <input
                className="h-8 md:h-14 w-full px-3 rounded-full"
                placeholder="Search here..."
              />
            </div>
            <div>
              <p className="font-bugfast text-2xl">1,533</p>
              <p className="font-light text-sm">total items</p>
            </div>
            <div>
              <p className="font-bugfast text-2xl">0.029 ETH</p>
              <p className="font-light text-sm">floor price</p>
            </div>
            <div>
              <p className="font-bugfast text-2xl">393</p>
              <p className="font-light text-sm">owners</p>
            </div>
            <div>
              <p className="font-bugfast text-2xl">26%</p>
              <p className="font-light text-sm">unique owners</p>
            </div>
          </div>
          {/*some */}
          {/* <Tile /> */}
        </div>
      </div>
    </div>
  );
}

export default CollectionsPage;
