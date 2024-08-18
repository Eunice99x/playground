export default function Playground() {
	return (
		<div className="wrapper w-full h-screen relative">
			<ul className="ul-playground absolute text-[#85898b] font-bold left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-6">
				<li className="flex justify-between w-full">
					<span>New Workspace</span>
					<span>
						<span className="bg-[#343a40] p-2 rounded-md">Ctrl</span>
						<span className="mx-2">+</span>
						<span className="bg-[#343a40] p-2 rounded-md">X</span>
					</span>
				</li>

				<li className="flex gap-8 justify-between w-full">
					<span>Clean Workspace</span>
					<span>
						<span className="bg-[#343a40] p-2 rounded-md">Ctrl</span>
						<span className="mx-2">+</span>
						<span className="bg-[#343a40] p-2 rounded-md">U</span>
					</span>
				</li>

				<li className="flex gap-8 justify-between w-full">
					<span>Open Tools</span>
					<span>
						<span className="bg-[#343a40] p-2 rounded-md">Ctrl</span>
						<span className="mx-2">+</span>
						<span className="bg-[#343a40] p-2 rounded-md">T</span>
					</span>
				</li>

				<li className="flex gap-8 justify-between w-full">
					<span>Open Settings</span>
					<span>
						<span className="bg-[#343a40] p-2 rounded-md">Ctrl</span>
						<span className="mx-2">+</span>
						<span className="bg-[#343a40] p-2 rounded-md">P</span>
					</span>
				</li>
			</ul>
		</div>
	);
}
