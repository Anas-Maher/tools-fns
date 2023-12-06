function BinarySearch<T = unknown>(
    arr: T[],
    target: T,
    start: number,
    end: number
): number {
    const middle = Math.floor((start + end) / 2);
    const value = arr.at(middle);
    if (start > end || value === undefined || value === null) {
        return -1;
    }
    if (value === target) {
        return middle;
    }
    if (value > target) {
        return BinarySearch(arr, target, start, middle - 1);
    }
    if (value < target) {
        return BinarySearch(arr, target, middle - 1, end);
    }
    return -1;
}
export default BinarySearch;
