const inputFilePath = `${Deno.cwd()}/src/day_3/input.txt`;
const inputText = await Deno.readTextFile(inputFilePath);

type Direction = '<' | '^' | '>' | 'v';
type HouseLocation = `${number}|${number}`; // x|y

const directions = inputText.split('').slice(0, -1) as Array<Direction>;
const locationHistory = new Map<HouseLocation, true>();

let [x, y] = [0, 0];
locationHistory.set(`${x}|${y}`, true);
let numOfHouses = 1;

for (const direction of directions) {
	if (direction === '<') {
		x -= 1;
	} else if (direction === '>') {
		x += 1;
	} else if (direction === '^') {
		y += 1;
	} else {
		y -= 1;
	}
	if (!locationHistory.get(`${x}|${y}`)) {
		numOfHouses++;
		locationHistory.set(`${x}|${y}`, true);
	}
}

console.log(numOfHouses);
