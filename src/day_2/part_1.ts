const inputFilePath = `${Deno.cwd()}/src/day_2/input.txt`;
const inputText = await Deno.readTextFile(inputFilePath);
const boxes = inputText.split('\n').slice(0, -1).map((line) =>
	line.split('x').map((dimension) => Number.parseInt(dimension))
);

let paperArea = 0;

for (const [l, w, h] of boxes) {
	const surfaceArea = 2 * l * w + 2 * w * h + 2 * h * l;
	const maxDimension = Math.max(l, w, h);
	if (maxDimension === l) {
		paperArea += surfaceArea + w * h;
	} else if (maxDimension === w) {
		paperArea += surfaceArea + l * h;
	} else {
		paperArea += surfaceArea + l * w;
	}
}

console.log(paperArea);
