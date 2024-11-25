import { memo, useCallback } from "react";
import { SimplePagination } from "@/components/organisms";
import { useSpaceStationsStore } from "@/store";
import { PaginationProps } from "./Pagination.types";

export const Pagination = memo(({ totalCount = 1 }: PaginationProps) => {
  const {
    paginationData: { currentPage, itemsPerPage, offset },
    setPagination,
  } = useSpaceStationsStore();

  const handlePageChange = useCallback(
    (page: number, isNext: boolean) => {
      setPagination({
        currentPage: page,
        offset: offset + (isNext ? itemsPerPage : -itemsPerPage),
      });
    },
    [itemsPerPage, offset, setPagination],
  );

  return (
    <div className="flex w-full items-center justify-center">
      <SimplePagination
        totalCount={totalCount}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        nextPageHandle={(page) => handlePageChange(page, true)}
        previousPageHandle={(page) => handlePageChange(page, false)}
      />
    </div>
  );
});
