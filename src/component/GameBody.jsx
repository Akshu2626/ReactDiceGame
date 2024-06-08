import PointBox from "./PointBox";

const GameBody = ({
  selectedCheckbox,
  handleCheckboxChange,
  selectedOption,
  handleSelectChange,
  isSelected,
  random,
  generateRandomNumber,
  spin,
  titlee,
}) => {
  return (
    <div className="gamebody">
      <h1
        className="losswon"
        style={{
          backgroundColor: titlee === true ? "red" : "yellow",
          display: titlee === true ? "none" : "block",
        }}
      >
        You Won
      </h1>
      <PointBox random={random} isSelected={spin} />

      <button
        className="playbtn"
        disabled={isSelected === true ? false : true}
        onClick={generateRandomNumber}
        style={{
          backgroundColor: isSelected === true ? "green" : "grey",
          color: isSelected === true ? "white" : "whitesmoke",
        }}
      >
        Play
      </button>
      <div className="radiobtn">
        <label
          style={{
            backgroundColor: selectedCheckbox === "one" ? "green" : "grey",
          }}
        >
          7 ⬆
          <input
            hidden
            type="radio"
            value="one"
            checked={selectedCheckbox === "one"}
            onChange={handleCheckboxChange}
          />
        </label>
        <label
          style={{
            backgroundColor: selectedCheckbox === "two" ? "green" : "grey",
          }}
        >
          7
          <input
            type="radio"
            hidden
            value="two"
            checked={selectedCheckbox === "two"}
            onChange={handleCheckboxChange}
          />
        </label>
        <label
          style={{
            backgroundColor: selectedCheckbox === "three" ? "green" : "grey",
          }}
        >
          7 ⬇
          <input
            type="radio"
            hidden
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
