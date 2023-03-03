import Image from "next/image";
function CharacterList() {
  return (
    <div className="w-full h-screen bg-slate-400 flex items-center">
      <div className="w-full bg-orange-200 diagonal-box">
        <div className="diag-content overflow-hidden flex">
          {[...Array(10)].map((_, id) => {
            return (
              <Image
                key={id}
                height={300}
                width={250}
                className="w-48 h-48"
                alt="anime"
                src="/anime.jpg"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CharacterList;
