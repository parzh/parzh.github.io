/** @private */
const names = [
	"Elly",
	"Bodil",
	"Annie",
	"Janne",
	"Clara",
	"Fritz",
	"Verner",
	"Tue",
	"Torben",
	"Bent",
	"Kurt",
];

/** @private */
const adjectives = [
	"Angry",
	"Round",
	"Fierce",
	"Meaty",
	"Thin",
	"Serious",
	"Fearless",
	"Nice",
	"Symptomatic",
	"Festive",
	"Cheerful",
];

/** @private */
function chooseFrom<Value>(list: Value[]): Value {
	return list[Math.floor(list.length * Math.random())];
}

export default function getRandomName(): string {
	return `${ chooseFrom(names) }, the ${ chooseFrom(adjectives) }`;
}
