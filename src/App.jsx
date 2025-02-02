import Button from "./components/Ui/Button";

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
			<div className="flex flex-col w-32 gap-2 ">
				<Button variant="primary"> Connexion</Button>
				<Button variant="secondary"> Connexion</Button>
				<Button variant="success"> Success</Button>
				<Button variant="danger">Warning</Button>
				<Button variant="outline">Input</Button>
			</div>
		</div>
	);
}

export default App;
