function NumbersSort(arr: number[], order?: "ASC" | "DESC") {
	switch (order) {
		default:
		case "ASC":
			return arr.toSorted((a, b) => a - b);
		case "DESC":
			return arr.toSorted((a, b) => b - a);
	}
}
export default NumbersSort;
