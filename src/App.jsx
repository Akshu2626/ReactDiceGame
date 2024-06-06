import React, { useState } from "react";
import Header from "./component/Header";
import GameBody from "./component/GameBody";

const App = () => {
  const [total, setTotal] = useState(5000);
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [isSelected, setisSelected] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  const [spin, setIsSpin] = useState(false);

  const generateRandomNumber = () => {
    let randome = Math.floor(Math.random() * 14);
    setRandomNumber(randome);
    setisSelected(false);
    setIsSpin(true);
    if (randome === 7 && selectedCheckbox === "two") {
      // console.log("5 X");
      let a = selectedOption * 5;
      setTotal((res) => res + a);
    } else if (randome < 7 && selectedCheckbox === "three") {
      // console.log("looser");
      let a = selectedOption * 2;
      setTotal((res) => res + a);
    } else if (randome > 7 && selectedCheckbox === "one") {
      // console.log("winner");
      let a = selectedOption * 2;
      setTotal((res) => res + a);
    } else {
      console.log("something went wrong");
      let a = selectedOption;
      setTotal((res) => res - a);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setisSelected(true);
    setIsSpin(false);
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedCheckbox(value);
  };
  return (
    <div className="main">
      <Header total={total} />
      <GameBody
        handleCheckboxChange={handleCheckboxChange}
        handleSelectChange={handleSelectChange}
        selectedCheckbox={selectedCheckbox}
        selectedOption={selectedOption}
        isSelected={isSelected}
        random={randomNumber}
        generateRandomNumber={generateRandomNumber}
        spin={spin}
      />
    </div>
  );
};

export default App;
