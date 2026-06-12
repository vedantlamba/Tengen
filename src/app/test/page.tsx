import { prisma } from "@/lib/db";
import React from "react";

async function TestPage() {
  const voices = await prisma.voice.findMany();
  return (
    <div className="p-5 flex flex-col gap-5">
      <div>Voices - {voices.length}</div>
      <div>
        <ul className="flex flex-col gap-3">
          {voices.map((voice, index) => {
            return <li key={index}>Name - {voice.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default TestPage;
