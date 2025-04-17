"use client"
type ChapterNavigatorProps = {
	previousChapterName: string | null
	nextChapterName: string | null
}

export default function ChapterNavigator({ previousChapterName, nextChapterName }: ChapterNavigatorProps) {
	return (
		<div style={{ margin: "1rem 2rem", display: "flex", gap: "0.25rem", justifyContent: "end" }}>
			{previousChapterName}
			{nextChapterName}
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
	)
}