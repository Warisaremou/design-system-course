import Textarea from "./components/Ui/textarea";

function App() {
	return (
		<div>
			<div className="p-5 border w-fit space-y-5 rounded-md border-grey-200">
				<div>
					<h1>TYPOGRAPHY</h1>
					<div>
						<h1>Heading 1</h1>
						<h2>Heading 2</h2>
						<p className="body">Body Regular</p>
						<p className="body-medium">Body Medium</p>
						<p className="body-semibold">Body Semibold</p>
						<span className="caption text-state-error">Caption</span>
					</div>
				</div>
				<div className="size-36 bg-linear" />
			</div>
			<div className="p-5 m-2 border w-fit space-y-5 rounded-md border-gray-200">
				<Textarea placeholder="Textarea" borderColor="border-gray-300" />
				<Textarea placeholder="Textarea" borderColor="border-black" />
				<Textarea placeholder="Textarea" borderColor="border-purple-500" />
				<Textarea placeholder="Textarea" borderColor="border-purple-700" />
				<Textarea placeholder="Textarea" borderColor="border-red-500" />
				<Textarea placeholder="Textarea" borderColor="border-green-500" />
				<Textarea placeholder="Textarea" borderColor="border-green-700" />
			</div>
		</div>
	);
}

export default App;
