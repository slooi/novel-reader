import dotenv from "dotenv"
dotenv.config()
export const PATH = (() => {
	if (typeof process.env.PUBLIC_FOLDER === "string" && process.env.PUBLIC_FOLDER.slice(-1) === "/") return process.env.PUBLIC_FOLDER
	throw new Error("MISSING / AT END")
})()