import { useEffect, useState } from "react";
import { IPerson } from "../types/types";

export const usePagination = (
  dataEntries: IPerson[],
  elementsOnPage: number = 5
) => {
  const amountOfPages: number = Math.ceil(dataEntries.length / elementsOnPage);

  const [actualPageIdx, setActualPageIdx] = useState(1);
  const [lastPageIdx, setLastPageIdx] = useState(amountOfPages);
  const [entriesOnSelectedPage, setEntriesOnSelectedPage] =
    useState(elementsOnPage);
  const [isBusy, setIsBusy] = useState(false);

  const goToNextPage = () => {
    setActualPageIdx((currentPage) => currentPage + 1);
  };

  const goToPrevPage = () => {
    setActualPageIdx((currentPage) => currentPage - 1);
  };

  const goToFirstPage = () => {
    setActualPageIdx(1);
  };

  const goToLastPage = () => {
    setActualPageIdx(amountOfPages);
  };

  //   const goToPage = (pageIdx) => {};

  useEffect(() => {
    setIsBusy(true);
    setTimeout(() => {
      setIsBusy(false);
    }, 333);
  }, []);

  return [
    { actualPageIdx, lastPageIdx, entriesOnSelectedPage, isBusy },
    { goToFirstPage, goToPrevPage, goToNextPage, goToLastPage },
  ];
};
