import {Textarea} from './components/Ui/textarea';

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
			<Textarea />
		</div>
	);
}

export default App;
