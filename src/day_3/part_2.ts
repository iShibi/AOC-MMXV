const inputFilePath = `${Deno.cwd()}/src/day_3/input.txt`;
const inputText = await Deno.readTextFile(inputFilePath);

type Direction = '<' | '^' | '>' | 'v';
type HouseLocation = `${number}|${number}`; // x|y

const directions = inputText.split('').slice(0, -1) as Array<Direction>;
const locationHistory = new Map<HouseLocation, true>();

let [x, y] = [0, 0]; // Santa coordinates
let [a, b] = [0, 0]; // Robo-Santa coordinates
locationHistory.set(`${x}|${y}`, true);
let numOfHouses = 1;

for (const [index, direction] of directions.entries()) {
	const isEven = index % 2 === 0;
	if (direction === '<') {
		isEven ? x -= 1 : a -= 1;
	} else if (direction === '>') {
		isEven ? x += 1 : a += 1;
	} else if (direction === '^') {
		isEven ? y += 1 : b += 1;
	} else {
		isEven ? y -= 1 : b -= 1;
	}
	const locationInFocus: HouseLocation = isEven ? `${x}|${y}` : `${a}|${b}`;
	if (!locationHistory.get(locationInFocus)) {
		numOfHouses++;
		locationHistory.set(locationInFocus, true);
	}
}

console.log(numOfHouses);
