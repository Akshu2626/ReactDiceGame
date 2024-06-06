import PointBox from "./PointBox";

const GameBody = ({
  selectedCheckbox,
  handleCheckboxChange,
  selectedOption,
  handleSelectChange,
  isSelected,
  random,
  generateRandomNumber,
  spin
}) => {
  return (
    <div className="gamebody">
      <PointBox random={random} isSelected={spin} />
      
      <button
        className="playbtn"
        disabled={isSelected === true ? false : true}
        onClick={generateRandomNumber}
        style={{
          backgroundColor: isSelected === true ? "black" : "grey",
          color: isSelected === true ? "white" : "whitesmoke",
        }}
      >
        Play
      </button>
      <div className="radiobtn">
        <label htmlFor="#">
          7 ⬆
          <input
            type="radio"
            value="one"
            checked={selectedCheckbox === "one"}
            onChange={handleCheckboxChange}
          />
        </label>
        <label htmlFor="#">
          7
          <input
            type="radio"
            value="two"
            checked={selectedCheckbox === "two"}
            onChange={handleCheckboxChange}
          />
        </label>
        <label htmlFor="#">
          7 ⬇
          <input
            type="radio"
            value="three"
            checked={selectedCheckbox === "three"}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>
      <div className="optionselete">
        <select
          className="selectInput"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="">YOUR BET</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="500">500</option>
        </select>
      </div>
    </div>
  );
};

export default GameBody;
