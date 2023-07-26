'use client'

import sql from "./db";
import Navbar from "./navbar";

export default async function Lista() {
  const paises = await sql`select id, nome, abbr from paises`;

  return (
    <div className="flex h-screen justify-center  bg-black">
      <div className="flex justify-center bg-zinc-700 ">
        <div className="">
          <ul className="text-white	">
            {paises.map((p) => (
              <li key={p.id}>
                {p.id} - {p.nome} ({p.abbr})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}