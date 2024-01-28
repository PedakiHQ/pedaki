type PaginationElement = number | 'ellipsis_l' | 'ellipsis_r';

export const generatePagination = (
  currentPage: number,
  totalPages: number,
): PaginationElement[] => {
  if (currentPage === 1 && currentPage === totalPages) return [1];
  const center: PaginationElement[] = [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ],
    // @ts-ignore
    filteredCenter = center.filter(p => p > 1 && p < totalPages),
    includeThreeLeft = currentPage === 5,
    includeThreeRight = currentPage === totalPages - 4,
    includeLeftDots = currentPage > 5,
    includeRightDots = currentPage < totalPages - 4;

  if (includeThreeLeft) filteredCenter.unshift(2);
  if (includeThreeRight) filteredCenter.push(totalPages - 1);

  if (includeLeftDots) filteredCenter.unshift('ellipsis_l');
  if (includeRightDots) filteredCenter.push('ellipsis_r');

  return [1, ...filteredCenter, totalPages];
};
