import CatalogList from '../components/CatalogList/CatalogList';
import {  useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchCars } from '../redux/Operations';

const Catalog = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

 

  useEffect(() => {
    dispatch(fetchCars(page));
  },[dispatch,page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <>
      <CatalogList click={handleLoadMore}  />
    </>
  );
};
export default Catalog;
