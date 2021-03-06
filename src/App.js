import GlobalStyle from 'GlobalStyle';

import { Provider } from 'react-redux';
import { store } from 'store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from 'component';
import { PATH } from 'constant/path';

import ProductList from 'page/ProductList/ProductList';
import ShoppingCart from 'page/ShoppingCart/ShoppingCart';
import ProductDetail from 'page/ProductDetail/ProductDetail';
import SnackBarContainer from 'container/SnackBarContainer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <NavBar />
          <Routes>
            <Route path={PATH.PRODUCT_LIST} element={<ProductList />} />
            <Route path={PATH.PRODUCT_DETAIL} element={<ProductDetail />} />
            <Route path={PATH.SHOPPING_CART} element={<ShoppingCart />} />
            <Route path="*" element={<ProductList />} />
          </Routes>
          <SnackBarContainer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
