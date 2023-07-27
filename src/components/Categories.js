import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <h1>{categories.length > 0 ? categories[0] : 'Under construction'}</h1>
    </>
  );
};
export default Categories;
