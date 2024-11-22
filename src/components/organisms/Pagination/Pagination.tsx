import React, { useMemo } from "react";
import { PaginationProps } from "./Pagination.types";

export const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const pages = useMemo(() => {
    const pages = [];
    const leftLimit = Math.max(2, currentPage - 2);
    const rightLimit = Math.min(totalPages - 1, currentPage + 2);

    // Sempre mostrar primeira página
    pages.push(1);

    // Adicionar reticências se necessário antes do intervalo
    if (leftLimit > 2) {
      pages.push("...");
    }

    // Adicionar páginas do intervalo
    for (let i = leftLimit; i <= rightLimit; i++) {
      pages.push(i);
    }

    // Adicionar reticências se necessário após o intervalo
    if (rightLimit < totalPages - 1) {
      pages.push("...");
    }

    // Sempre mostrar última página
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages]);

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded border px-3 py-1 disabled:opacity-50"
      >
        &lt;
      </button>

      {pages.map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`rounded border px-3 py-1 ${
              page === currentPage ? "bg-blue-500 text-white" : ""
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="px-2">
            {page}
          </span>
        ),
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded border px-3 py-1 disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
};
