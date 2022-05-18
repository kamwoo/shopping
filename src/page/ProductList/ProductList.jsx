import styled from 'styled-components';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearProducts, productsAsyncThunk } from 'store/action/productsActions';
import Maybe from 'react-maybe';

import { GridLayout } from 'component/common';
import LoadingSpinner from 'component/LoadingSpinner/LoadingSpinner';
import ProductContainer from 'container/ProductContainer';
import { PRODUCTS_COUNT_PER_PAGE } from 'constant';
import usePagination from 'hooks/usePagination';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 60px 0;
`;

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(store => store.products);
  const { currentPageProducts, Pagination } = usePagination(products, PRODUCTS_COUNT_PER_PAGE);

  useEffect(() => {
    if (products.length) {
      dispatch(clearProducts());
    }
    dispatch(productsAsyncThunk());
  }, []);

  return (
    <Maybe
      of={!!products.length}
      either={
        <Content>
          <GridLayout>
            {currentPageProducts.map(product => (
              <ProductContainer key={product.id} {...product} />
            ))}
          </GridLayout>
          <Pagination />
        </Content>
      }
      orElse={<LoadingSpinner />}
    />
  );
}

export default ProductList;
