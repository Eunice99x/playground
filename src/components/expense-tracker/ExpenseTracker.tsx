import { useState } from "react";

export default function ExpenseTracker() {
	const [descriptionValue, setDescriptionValue] = useState<string>("");
	const [amount, setAmount] = useState<number>();
	return (
		<div className="absolute min-w-[450px] font-serif transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-white bg-[#343a40] shadow-md rounded-md p-2">
			<h1 className="text-2xl mb-2">Expense Tracker</h1>
			<p className="text-xl">Your Balance</p>
			<h1 className="text-3xl mb-4">$ 0.00</h1>
			<ul className="flex justify-evenly bg-[#212529] rounded py-2 mb-4">
				<li>
					<span className="text-xl">INCOME</span>
					<br />
					<span className="text-2xl text-green-400">$ 0.00</span>
				</li>
				<li>
					<span className="text-xl">EXPENSE</span>
					<br />
					<span className="text-2xl text-red-400">$ 0.00</span>
				</li>
			</ul>
			<div className="mb-4">
				<h3 className="text-xl mb-2">History</h3>
				<hr />
			</div>
			<div className="mb-4">
				<h3 className="text-xl mb-2">Add new transaction</h3>
				<hr />
			</div>
			<form>
				<div className="form-control flex flex-col mb-2">
					<label htmlFor="text">Description</label>
					<input
						className="p-2 outline-none text-[#343a40]"
						type="text"
						onChange={(e) => setDescriptionValue(e.target.value)}
						value={descriptionValue}
						placeholder="what is it?"
					/>
				</div>
				<div className="form-control flex flex-col mb-2">
					<label htmlFor="amount">Amount</label>
					<input
						className="p-2 outline-none text-[#343a40]"
						type="number"
						onChange={(e) => setAmount(e.target.value)}
						value={amount}
						placeholder="Enter amount..."
					/>
				</div>
				<button className="btn bg-purple-600 p-2">Add transaction</button>
			</form>
		</div>
	);
}
