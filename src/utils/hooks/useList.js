import {isEqual} from 'lodash';
import {useState} from 'react';

export const useList = (data) => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useState('');
  const [filterParams, setFilterParams] = useState([]);
  const [filterCheck, setFilterCheck] = useState([]);
  const [loading, setLoading] = useState(false);
  const [footerLoading, setFooterLoading] = useState(false);
  const [dataEmpty, setDataEmpty] = useState(false);
  const isLastPage = isEqual(page, totalPage);

  const handleMovePage = (num) => {
    setPage(num);
  };

  const handleEndList = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };

  return {
    isLastPage,
    page,
    setPage,
    totalPage,
    setTotalPage,
    searchValue,
    setSearchValue,
    searchParams,
    setSearchParams,
    filterParams,
    setFilterParams,
    filterCheck,
    setFilterCheck,
    handleMovePage,
    loading,
    setLoading,
    handleEndList,
    dataEmpty,
    setDataEmpty,
    footerLoading,
    setFooterLoading,
  };
};
