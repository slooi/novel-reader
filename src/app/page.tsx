import fs from "fs/promises"
import { PATH } from "./constants";
import Link from "next/link";


export default async function Home() {
  const dirEntries = await fs.readdir(PATH, { encoding: "utf-8", withFileTypes: true })
  const novelNames = dirEntries
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
    .map(f => f.name)


  return (
    <ul className="">
      {novelNames.map(novelName => <li key={novelName}><Link href={novelName}>{novelName}</Link></li>)}
    </ul>
  );
}
