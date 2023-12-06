function AlphabeticSort(arr: string[], order?: "ASC" | "DESC") {
    switch (order) {
        default:
        case "ASC":
            return arr.toSorted((a, b) => a.localeCompare(b));
        case "DESC":
            return arr.toSorted((a, b) => b.localeCompare(a));
    }
}
export default AlphabeticSort;
