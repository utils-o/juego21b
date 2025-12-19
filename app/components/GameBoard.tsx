import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LevelSelector from "./LevelSelector";
import cardsData from "../data/cards";

const positions = Array.from({ length: 4 }, (_, row) =>
  Array.from({ length: 6 }, (_, col) => ({ x: col, y: row }))
).flat();

export default function GameBoard() {
  const [player1Pos, setPlayer1Pos] = useState(0);
  const [player2Pos, setPlayer2Pos] = useState(0);
  const [level, setLevel] = useState("calentando"); // antes "chill"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [currentCard, setCurrentCard] = useState<any>(null);
  const [showCard, setShowCard] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [boardCells, setBoardCells] = useState<any[]>([]);

  useEffect(() => {
    const generateBoardCells = () => {
      const newBoardCells = Array(24).fill(null);
      newBoardCells[0] = "Inicio";

      // eslint-disable-next-line prefer-const
      let remainingIndices = [...Array(24).keys()].slice(1);

      const setRandomCells = (label: string, count: number) => { // Añadimos tipos
        for (let i = 0; i < count; i++) {
          const randIdx = Math.floor(Math.random() * remainingIndices.length);
          const cellIndex = remainingIndices[randIdx];
          newBoardCells[cellIndex] = label;
          remainingIndices.splice(randIdx, 1);
        }
      };

      if (level === "calentando") {
        setRandomCells("???", 13);
        setRandomCells("Beber", 5);
        setRandomCells("Especiales", 5);
      } else if (level === "calentitos") {
        setRandomCells("Especiales", 14);
        setRandomCells("???", 6);
        setRandomCells("Beber", 5);
      } else {
        const defaultTypes = ["???", "Beber", "Especiales"];
        remainingIndices.forEach((index) => {
          const randomType = defaultTypes[Math.floor(Math.random() * defaultTypes.length)];
          newBoardCells[index] = randomType;
        });
      }

      return newBoardCells;
    };

    setBoardCells(generateBoardCells());
  }, [level]);

  const rollDice = (player) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    setShowCard(false);

    const newPosition = player === 1
      ? (player1Pos + diceRoll) % boardCells.length
      : (player2Pos + diceRoll) % boardCells.length;

    if (player === 1) setPlayer1Pos(newPosition);
    else setPlayer2Pos(newPosition);

    setTimeout(() => {
      const cellType = boardCells[newPosition];
      if (cellType !== "Inicio") {
        const randomCard = cardsData[level][cellType][Math.floor(Math.random() * cardsData[level][cellType].length)];
        setCurrentCard(randomCard);
        setShowCard(true);
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#092421] text-white relative">

      {/* Selector de nivel arriba a la derecha */}
    <div className="relative left-72 z-10">
      <LevelSelector setLevel={setLevel} currentLevel={level} />
    </div>

      <div className="relative grid grid-cols-6 grid-rows-4 w-[60vw] h-[60vh] border-2 border-[#8c1b2add]">
        {boardCells.map((cell, index) => {
          const { x, y } = positions[index];
          return (
            <div
              key={index}
              className={`absolute w-[16.25%] h-[24.3%] flex items-center justify-center text-sm 
                ${cell === "Inicio" ? "bg-[#8c1b2add] text-white font-bold" : 
                cell === "???" ? "bg-[#dfe7d1] text-[#092421]" :
                cell === "Beber" ? "bg-[#69ad7b]" : 
                "bg-[#28524c]"}`}
              style={{ left: `${x * 16.75}%`, top: `${y * 25.1}%` }}
            >
              {cell}
            </div>
          );
        })}

        <motion.div
          className="absolute w-6 h-6 bg-[#bd505fdd] rounded-full"
          animate={{ left: `${positions[player1Pos].x * 17}%`, top: `${positions[player1Pos].y * 25.1}%` }}
          transition={{ type: "spring", stiffness: 100 }}
        />
        <motion.div
          className="absolute w-6 h-6 bg-[#d2b526dd] rounded-full"
          animate={{ left: `${positions[player2Pos].x * 17}%`, top: `${positions[player2Pos].y * 25.1}%` }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </div>

      <div className="flex gap-4 mt-4">
        <button className="bg-[#bd505fdd] px-4 py-2 rounded-lg" onClick={() => rollDice(1)}>IZARO</button>
        <button className="bg-[#d2b526dd] px-4 py-2 rounded-lg" onClick={() => rollDice(2)}>IÑIGO</button>
      </div>

      {showCard && currentCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-[#fffdf4] text-white w-96 overflow-hidden border border-[#fffdf4]">
            <button
              className="absolute top-2 right-2 text-white text-xl font-bold hover:text-[#8c1b2add]"
              onClick={() => setShowCard(false)}
            >
              &times;
            </button>
            <div className="bg-[#092421] border-2 border-[#092421] p-4 text-center">
              <h2 className="text-lg font-bold">{currentCard.title}</h2>
            </div>
            <div className="p-4 whitespace-pre-line min-h-[150px] flex items-center justify-center text-[#092421] text-center">
              {currentCard.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
