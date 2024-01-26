type PaginationElement = number | 'ellipsis';

export const generatePagination = (
    currentPage: number,
    totalPages: number,
    maxPages = 5,
): PaginationElement[] => {
    const delta = Math.floor(maxPages / 2);
    const left = currentPage - delta;
    const right = currentPage + delta + 1;
    const range: number[] = [];
    const rangeWithDots: PaginationElement[] = [];
    let l: number | null = null;

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= left && i < right)) {
            range.push(i);
        }
    }

    for (const i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('ellipsis');
                rangeWithDots.push(i -1);
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
}