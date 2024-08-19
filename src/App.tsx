import ExpenseTracker from "./components/expense-tracker/ExpenseTracker";
import Navbar from "./components/navbar/Navbar";
import Playground from "./components/playground/Playground";

function App() {
	return (
		<>
			<Navbar />
			{/* <div className="relative h-full w-full"> */}
			<Playground />
			{/* <ExpenseTracker /> */}
			{/* </div> */}
		</>
	);
}

export default App;
