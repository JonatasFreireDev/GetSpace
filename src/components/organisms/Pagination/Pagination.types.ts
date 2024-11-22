export interface PaginationProps {
  totalCount: number;
  itemsPerPage: number;
  currentPage: number;
  nextPageHandle: (page: number) => void;
  previousPageHandle: (page: number) => void;
}
