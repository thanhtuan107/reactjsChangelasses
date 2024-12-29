import { useState } from "react";
import Glass from "./glass";
import data from "./data.json";
import GlassDetails from "./glass-details";

export default function ChangeGlass() {
  const glass = [
    { id: 1, url: "/glassesImage/g1.jpg" },
    { id: 2, url: "/glassesImage/g2.jpg" },
    { id: 3, url: "/glassesImage/g3.jpg" },
    { id: 4, url: "/glassesImage/g4.jpg" },
    { id: 5, url: "/glassesImage/g5.jpg" },
    { id: 6, url: "/glassesImage/g6.jpg" },
    { id: 7, url: "/glassesImage/g7.jpg" },
    { id: 8, url: "/glassesImage/g8.jpg" },
    { id: 9, url: "/glassesImage/g9.jpg" },
  ];

  const [dataDedails, setDataDedails] = useState("");

  const handleChangeUrlGlass = (index) => {
    const glass = data[index];
    setDataDedails(glass);
  };
  console.log(dataDedails);

  return (
    <div className="bg_ bg-[url('/glassesImage/background.jpg')] bg-cover bg-center w-screen h-screen">
      <nav className="bg-black opacity-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <div className="hidden w-full md:block md:w-auto uppercase text-3xl text-white font-medium">
            Try Glass App Online
          </div>
        </div>
      </nav>

      <div className="flex justify-center mt-16 relative">
        
        <div className="w-[200px] rounded-xl overflow-hidden relative">
          {!!dataDedails && <GlassDetails glass={dataDedails} />}
          <img
            className="h-full w-[200px]"
            src="/glassesImage/model.jpg"
            alt="model"
          />
        </div>
        
        <div className="ml-10">
          <div className="grid grid-cols-3 w-full py-2 px-2.5 bg-gray-200 rounded-xl">
            {glass.map((glass, index) => {
              return (
                <button
                  onClick={() => handleChangeUrlGlass(index)}
                  key={glass.id}
                  className="h-20 w-40 bg-gray-200"
                >
                  <Glass urlImg={glass.url} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
