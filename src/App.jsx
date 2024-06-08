import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import GameBody from "./component/GameBody";
import spinn from "./assets/spin.mp3";
import countIncrese from "./assets/pointincrese.wav";
import Confetti from "react-confetti";

const App = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [isSelected, setisSelected] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  const [spin, setIsSpin] = useState(false);
  const [congress, setCongress] = useState(true);
  const [titlee, setTitlee] = useState(true);

  const [total, setTotal] = useState("loading...");

  const UpateData = async () => {
    try {
      const response = await fetch("http://localhost:3001/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: total }), // Sending data as JSON
      });
      const result = await response.json();
      console.log("Response from server:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3001/")
        .then((res) => res.json())
        .then((data) => setTotal(data))
        .catch((e) => console.log("Error"));
    };
    fetchData();
  }, []);

  const playSpinSound = () => {
    const audio = new Audio(spinn);
    audio.play();
  };
  const playCountSound = () => {
    const audio = new Audio(countIncrese);
    audio.play();
  };

  const generateRandomNumber = () => {
    playSpinSound();
    let randome = Math.floor(Math.random() * 14);
    setRandomNumber(randome);
    setisSelected(false);
    setIsSpin(true);
    setTimeout(() => {
      playCountSound();
      if (randome === 7 && selectedCheckbox === "two") {
        // console.log("5 X");
        setCongress(false);
        setTimeout(() => {
          setCongress(true);
        }, 3000);

        setTitlee(false);
        setTimeout(() => {
          setTitlee(true);
        }, 5000);

        let a = selectedOption * 5;
        UpateData();
        setTotal((res) => res + a);
      } else if (randome < 7 && selectedCheckbox === "three") {
        // console.log("looser");
        setTitlee(false);
        setTimeout(() => {
          setTitlee(true);
        }, 5000);
        let a = selectedOption * 2;

        setTotal((res) => res + a);
        UpateData();
      } else if (randome > 7 && selectedCheckbox === "one") {
        // console.log("winner");

        setTitlee(false);
        setTimeout(() => {
          setTitlee(true);
        }, 5000);

        let a = selectedOption * 2;
        UpateData();

        setTotal((res) => res + a);
      } else {
        console.log("something went wrong");
        let a = selectedOption;
        // let negitiveNum = a * -1;
        UpateData();
        setTotal((res) => {
          return res - a;
        });
      }
    }, 2500);
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
      <Confetti hidden={congress === true ? true : false} />
      <GameBody
        handleCheckboxChange={handleCheckboxChange}
        handleSelectChange={handleSelectChange}
        selectedCheckbox={selectedCheckbox}
        selectedOption={selectedOption}
        isSelected={isSelected}
        random={randomNumber}
        generateRandomNumber={generateRandomNumber}
        spin={spin}
        titlee={titlee}
      />
    </div>
  );
};

export default App;
