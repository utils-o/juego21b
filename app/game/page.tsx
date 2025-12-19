"use client"; // Necesario para manejar estado en la App Router

/*import { useState } from "react";
import Board from "@/app/components/Board";
import Dice from "@/app/components/Dice";
import PlayerInfo from "@/app/components/PlayerInfo";
import Cards from "@/app/components/Card";

export default function GamePage() {
  const [position, setPosition] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [cardType, setCardType] = useState<"seduction" | "punishment" | null>(null);

  const rollDice = () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    const newPosition = (position + diceRoll) % 8;

    setPosition(newPosition);
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);

    if (newPosition === 4 || newPosition === 6) {
      setCardType("seduction");
    } else if (newPosition === 2 || newPosition === 7) {
      setCardType("punishment");
    } else {
      setCardType(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Board position={position} />
      {cardType && <Cards type={cardType} />}
    </div>
  );
}*/

import GameBoard from "../components/GameBoard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#092421]  text-white">
      <GameBoard />
    </main>
  );
}
