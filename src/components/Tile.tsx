import bg from "../../public/PFPs/ssd-pfp-01.jpg";
function Tile() {
  return (
    <div className="tile">
      <div className="hexagon">
        <div className="hex2">
          <div>
            <h1 className="SideText"> SPACE DEFENDER</h1>
            <div
              className="img"
              style={{
                background: `url(${bg.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>

            <p className="BottomText">#1234</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tile;
