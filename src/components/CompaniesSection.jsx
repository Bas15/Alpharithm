import CountUp from "../components/reactbits/CountUp";
import InfiniteScroll from "./InfiniteScroll";

const CompaniesSection = () => {
  return (
    <div className="flex flex-col items-center py-4 space-y-4">
      <div className="flex space-x-1 text-text2">
        <span>Join</span>
        <span>
          <CountUp
            from={50}
            to={4000}
            separator=","
            direction="up"
            duration={1}
            className=""
          />
          +
        </span>
        <span>companies already growing</span>
      </div>
      <div>
        <InfiniteScroll />
      </div>
    </div>
  );
};

export default CompaniesSection;
