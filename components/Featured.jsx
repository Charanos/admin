import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured__item">
        <span className="title">revenue</span>
        <div className="revenue">
          <span className="rev">$3, 414 </span>
          <span className="rate">
            -3.8 <BiChevronDown className="icon" />
          </span>
        </div>
        <span className="last">compared to last month</span>
      </div>

      <div className="featured__item">
        <span className="title">sales</span>
        <div className="revenue">
          <span className="rev">$1, 400 </span>
          <span className="rate">
            +5.3 <BiChevronUp className="icon pos" />
          </span>
        </div>
        <span className="last">compared to last month</span>
      </div>

      <div className="featured__item">
        <span className="title">expenditure</span>
        <div className="revenue">
          <span className="rev">$2, 225 </span>
          <span className="rate">
            -8.3 <BiChevronDown className="icon" />
          </span>
        </div>
        <span className="last">compared to last month</span>
      </div>

      <div className="featured__item">
        <span className="title">savings</span>
        <div className="revenue">
          <span className="rev">$23, 414 </span>
          <span className="rate">
            +3.5 <BiChevronUp className="icon pos" />
          </span>
        </div>
        <span className="last">compared to last month</span>
      </div>
    </div>
  );
};

export default Featured;
