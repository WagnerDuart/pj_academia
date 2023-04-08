import { useState } from "react";
import { Home } from "./Home";
import { Logos } from "./Logos";
import { Program } from "./Program";
import { Choose_us } from "./Choose_us";
import { Planos } from "./Planos";
import { Calculate } from "./Calculate";

export function Main() {
//   let number = 0
//   function adicao() {
//     number = number + 1
//     console.log(number)
//   }
{/* <button onClick={adicao}>{number}</button> */}
 

  return (
    <main className="main">
      <Home />
      <Logos />
      <Program />
      <Choose_us />
      <Planos />
      <Calculate />
    </main>
  );
}
