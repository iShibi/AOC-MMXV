const inputFilePath = `${Deno.cwd()}/src/day_2/input.txt`;
const inputText = await Deno.readTextFile(inputFilePath);
const boxes = inputText.split('\n').slice(0, -1).map((line) =>
	line.split('x').map((dimension) => Number.parseInt(dimension))
);

let ribbonLength = 0;

for (const [l, w, h] of boxes) {
	const volume = l * w * h;
	const maxDimension = Math.max(l, w, h);
	if (maxDimension === l) {
		ribbonLength += volume + (2 * (w + h));
	} else if (maxDimension === w) {
		ribbonLength += volume + (2 * (l + h));
	} else {
		ribbonLength += volume + (2 * (l + w));
	}
}

console.log(ribbonLength);
