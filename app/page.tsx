import sql from "./db";
import Navbar from "./navbar";

export default async function Lista() {
  const paises = await sql`select id, nome, abbr from paises`;

  return (
    <div className="h-screen bg-black">
      <div className="flex justify-center	">  
      </div>
      <div>
        <ul>
          {paises.map((p) => (
            <li key={p.id}>
              {p.id} - {p.nome} ({p.abbr})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}