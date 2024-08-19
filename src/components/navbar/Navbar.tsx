import { useState } from "react";

export default function Navbar() {
	const [data, setData] = useState<string>("Playground 1");

	return (
		<div className="menu flex gap-x-2 bg-[#343a40] p-2">
			<svg
				className="md-i light-i size-10 bg-[#212529] p-2 rounded-md"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="100px"
				height="100px"
			>
				<path
					fill="white"
					d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"
				></path>
			</svg>
			<div className="relative  bg-[#212529] text-white p-2 appearance-none outline-none min-w-52 rounded-md">
				<span className="font-serif">{data}</span>
				{/* playground pop up */}

				{/* drop down arrow */}
				<svg
					className="absolute top-1/2 right-1 transform -translate-y-1/2 pointer-events-none"
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<g>
						<path
							d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
							fill="#ffffff"
						></path>
					</g>
				</svg>
			</div>
		</div>
	);
}
