import SnackBar from 'component/SnackBar/SnackBar';
import { useSelector, useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';
import { clearSnackBar } from 'store/action/snackBarActions';

function SnackBarContainer() {
  const dispatch = useDispatch();
  const timer = useRef();
  const message = useSelector(store => store.snackBar);

  if (timer.current) {
    clearTimeout(timer.current);
  }

  timer.current = setTimeout(() => {
    dispatch(clearSnackBar());
  }, 2500);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return <SnackBar message={message} />;
}

export default SnackBarContainer;
