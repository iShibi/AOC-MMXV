const inputFilePath = `${Deno.cwd()}/src/day_1/input.txt`;
const inputText = await Deno.readTextFile(inputFilePath);
const directions = inputText.slice(0, -1).split('') as Array<'(' | ')'>;

let currentFloor = 0;

for (const [index, direction] of directions.entries()) {
	direction === '(' ? currentFloor++ : currentFloor--;
	if (currentFloor === -1) {
		console.log(index + 1);
		break;
	}
}
