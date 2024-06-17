"use client"
import { useState } from "react";
import Header from "./components/Header";
import LeftArea from "./components/LeftArea";
import RightArea from "./components/RightArea";

export default function Home() {
  const [rotate, setRotate] = useState(0)
  return (
    <main>
      <LeftArea rotate={rotate} />
      <Header />
      <RightArea rotate={rotate} setRotate={setRotate} />

    </main>
  );
}
