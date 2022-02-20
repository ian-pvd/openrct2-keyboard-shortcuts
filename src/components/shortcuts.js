import isEmpty from "lodash/isEmpty";
import './shortcuts.css';

const Shortcuts = (props) => {

	const keyCommands = props.keyCommands;

	const theKeyCommands = (keyCommands) => {
		// console.log(keyCommands);
		const commands = [];
		for (const [key,value] of Object.entries(keyCommands)) {
			// console.log(`/* ${key} */`);
			// console.log(typeof value);
			// console.log(value);
			if (typeof value === 'string' || isEmpty(value)) {
				commands.push(<li key={key} className="shortcuts__item"><dl><dt>{key.replace(/_/g,' ')}</dt><dd>{isEmpty(value) ? <span>—</span> : <kbd>{value.replace(/\+/g,' + ').replace('GUI','⌘')}</kbd>}</dd></dl></li>);
			} else {
				commands.push(
					<li key={key} className="shortcuts__item shortcuts__item--nested"><Shortcuts keyCommands={value} /></li>
				);
			}
		}
		return <ul>{commands}</ul>;
	};

	return <div className="shortcuts">{theKeyCommands(keyCommands)}</div>;
}

export default Shortcuts;
