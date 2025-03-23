import layers from "../assets/images/layers.png";
import sisyphus from "../assets/images/sisyphus.png";
import circooles from "../assets/images/circooles.png";
import catalog from "../assets/images/catalog.png";
import quoties from "../assets/images/quoties.png";

const InfiniteScroll = () => {
  const items = [
    { id: 1, name: "Layers", icon: layers },
    { id: 2, name: "Sisyphus", icon: sisyphus },
    { id: 3, name: "Circooles", icon: circooles },
    { id: 4, name: "Catalog", icon: catalog },
    { id: 5, name: "Quoties", icon: quoties },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white py-4">
      {/* Scroll Wrapper */}
      <div className="flex items-center gap-x-16 animate-scroll">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-3 min-w-[150px]">
            <img src={item.icon} alt={item.name} className="w-10 h-10" />
            <span className="text-lg font-semibold text-primary1">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
