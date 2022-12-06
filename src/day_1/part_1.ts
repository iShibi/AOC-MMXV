const inputFilePath = `${Deno.cwd()}/src/day_1/input.txt`;
const inputText = await Deno.readTextFile(inputFilePath);
const directions = inputText.slice(0, -1).split('') as Array<'(' | ')'>;

let currentFloor = 0;

for (const direction of directions) {
	direction === '(' ? currentFloor++ : currentFloor--;
}

console.log(currentFloor);
