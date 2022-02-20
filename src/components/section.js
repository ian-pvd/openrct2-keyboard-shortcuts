import Shortcuts from './shortcuts';
// import './section.css';

const Section = (props) => {

	const shortcutGroups = props.shortcutGroups;

	const theGroups = (shortcutGroups) => {
		const groups = [];
		for (const [key,value] of Object.entries(shortcutGroups)) {
			groups.push(<section key={key}><h2>{key}</h2><Shortcuts keyCommands={value} /></section>);
			// console.log(value);
		}
		return groups;
	};

	return <>{theGroups(shortcutGroups)}</>;
}

export default Section;
