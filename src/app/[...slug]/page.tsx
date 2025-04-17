import fs from "fs/promises"
import path from "path"
import Link from "next/link"
import dotenv from "dotenv"
dotenv.config()

const PATH = (() => {
	if (typeof process.env.PUBLIC_FOLDER === "string" && process.env.PUBLIC_FOLDER.slice(-1) === "/") return process.env.PUBLIC_FOLDER
	throw new Error("MISSING / AT END")
})()


export default async function page({ params }: {
	params: Promise<{ slug: string[] }>
}) {
	const { slug } = await params
	if (slug.length == 1) {
		const novelTitle = slug[0]

		const dirEntries = await fs.readdir(PATH + novelTitle, { encoding: "utf-8", withFileTypes: true })
		const dirItems = dirEntries
			.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
			.map(f => ({ clientPath: novelTitle + "/" + f.name, filename: f.name }))

		return (
			<ul>
				{dirItems.map(dirItem => <li key={dirItem.filename}><Link href={dirItem.clientPath}>{dirItem.filename}</Link></li>)}
			</ul>
		)
	} else if (slug.length === 2) {
		const novelTitle = slug[0]
		const chapterName = slug[1]

		const content = await fs.readFile(`${PATH}${novelTitle}/${chapterName}`, { encoding: "utf-8" })

		const heading = content.split("\n").shift()
		const chapterText = content.split("\n").slice(1)
		return <div className="root">
			<header></header>
			<br /><br /><br />
			<div className="reading-area">
				<div>
					<div style={{ fontSize: "1.25em", fontWeight: "600", textAlign: "center" }}>{heading}</div>
					<br />
					<div>
						{chapterText.map((text, i) => <p key={i}>{text}</p>)}
					</div>
				</div>
			</div>

			<div style={{ margin: "1rem 2rem", display: "flex", gap: "0.25rem", justifyContent: "end" }}>
				<button style={{ borderRadius: "0.25rem", backgroundColor: "#222", border: "1px solid #fff3" }}>
					<svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</button>
				<button style={{ borderRadius: "0.25rem", backgroundColor: "#222", border: "1px solid #fff3" }}>
					<svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</button>
			</div>
			<br /><br /><br /><br /><br /><br />
			<footer></footer>
		</div>
	}

	return <div>ROUTE WRONG</div>
}