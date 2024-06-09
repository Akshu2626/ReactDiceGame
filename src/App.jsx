import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import GameBody from "./component/GameBody";
import spinn from "./assets/spin.mp3";
import cong from "./assets/cong.mp3";
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

  if (total <= 0) {
    alert("Inefficient Balance");
  }

  const UpateData = async () => {
    try {
      const response = await fetch("https://sevenupbackend.onrender.com/", {
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
      fetch("https://sevenupbackend.onrender.com/")
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

  const Congratulation = () => {
    const audio = new Audio(cong);
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
        Congratulation();
        setTimeout(() => {
          setCongress(true);
        }, 3000);

        setTitlee(false);
        setTimeout(() => {
          setTitlee(true);
        }, 5000);

        let a = selectedOption * 5;
        setTotal((res) => res + a);
        UpateData();
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

        setTotal((res) => res + a);
        UpateData();
      } else {
        console.log("something went wrong");
        let a = selectedOption;
        // let negitiveNum = a * -1;
        // let xyz=10

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
