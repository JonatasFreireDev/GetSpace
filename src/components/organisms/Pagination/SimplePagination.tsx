import React, { memo } from "react";
import { PaginationProps } from "./Pagination.types";

export const SimplePagination: React.FC<PaginationProps> = memo(
  ({
    totalCount,
    itemsPerPage,
    currentPage,
    nextPageHandle,
    previousPageHandle,
  }) => {
    const totalPages = Math.ceil(totalCount / itemsPerPage);

    return (
      <div className="flex items-center space-x-4">
        <button
          onClick={() => previousPageHandle(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded border px-4 py-2 disabled:opacity-50"
        >
          &lt;
        </button>

        <span>
          {currentPage} of {totalPages} {totalPages > 1 ? "pages" : "page"}
        </span>

        <button
          onClick={() => nextPageHandle(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded border px-4 py-2 disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    );
  },
);
