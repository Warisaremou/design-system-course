import Textarea from "./components/Ui/textarea";
import Button from "./components/Ui/Button";

function App() {
	return (
		<div className="grid grid-cols-3 p-5 gap-5 [&>div]:space-y-5">
			<div>
				<div className="flex flex-col gap-3">
					<h1>TYPOGRAPHY</h1>
					<div>
						<h1>Heading 1</h1>
						<h2>Heading 2</h2>
						<p className="body">Body Regular</p>
						<p className="body-medium">Body Medium</p>
						<p className="body-semibold">Body Semibold</p>
						<span className="caption">Caption</span>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<h1>COLORS</h1>
					<div>
						<p className="caption">gradient</p>
						<div className="size-20 bg-linear" />
					</div>
					<div>
						<h2>Primary</h2>
						<div className="flex gap-1">
							<div>
								<p className="caption">primary-100</p>
								<div className="size-20 bg-primary-100" />
							</div>
							<div>
								<p className="caption">primary-200</p>
								<div className="size-20 bg-primary-200" />
							</div>
							<div>
								<p className="caption">primary-300</p>
								<div className="size-20 bg-primary-300" />
							</div>
						</div>
					</div>
					<div>
						<h2>Grey</h2>
						<div className="flex gap-1">
							<div>
								<p className="caption">grey-100</p>
								<div className="size-20 bg-grey-100" />
							</div>
							<div>
								<p className="caption">grey-200</p>
								<div className="size-20 bg-grey-200" />
							</div>
							<div>
								<p className="caption">grey-300</p>
								<div className="size-20 bg-grey-300" />
							</div>
							<div>
								<p className="caption">grey-400</p>
								<div className="size-20 bg-grey-400" />
							</div>
						</div>
					</div>
					<div>
						<h2>State</h2>
						<div className="flex gap-1">
							<div>
								<p className="caption">state-error</p>
								<div className="size-20 bg-state-error" />
							</div>
							<div>
								<p className="caption">state-success</p>
								<div className="size-20 bg-state-success" />
							</div>
							<div>
								<p className="caption">state-warning</p>
								<div className="size-20 bg-state-warning" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h1>Textarea</h1>
				<div className="flex flex-col gap-5">
					<Textarea placeholder="Textarea" borderColor="border-gray-300" />
					<Textarea placeholder="Textarea" borderColor="border-black" />
					<Textarea placeholder="Textarea" borderColor="border-purple-500" />
					<Textarea placeholder="Textarea" borderColor="border-purple-700" />
					<Textarea placeholder="Textarea" borderColor="border-red-500" />
					<Textarea placeholder="Textarea" borderColor="border-green-500" />
					<Textarea placeholder="Textarea" borderColor="border-green-700" />
				</div>
			</div>
			<div>
				<h1>Buttons</h1>
				<div className="flex flex-col gap-5 [&>button]:w-fit">
					<Button variant="primary">Connexion</Button>
					<Button variant="secondary">Connexion</Button>
					<Button variant="success">Success</Button>
					<Button variant="danger">Warning</Button>
					<Button variant="outline">Input</Button>
				</div>
			</div>
		</div>
	);
}

export default App;
