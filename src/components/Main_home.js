import { useState } from "react";
import { Home } from "./Home";
import { Program } from "./Program";
import { Choose_us } from "./Choose_us";
import { Planos } from "./Planos";
import { Calculate } from "./Calculate";
import { Instrutores, Instrutors } from "./Instrutors";

export function Main_home() {

  return (
    <main className="main">
      <Home />
      <Program />
      <Choose_us />
      <Planos />
      <Instrutors />
      <Calculate />
    </main>
  );
}
