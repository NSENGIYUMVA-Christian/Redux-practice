import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";
function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOPen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
    // eslint-disable-next-line
  }, [cartItems]);

  // handling api requests
  useEffect(() => {
    dispatch(getCartItems());
    // eslint-disable-next-line
  }, []);

  //if it is loading
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  //console.log(isOpen);
  return (
    <main>
      {isOPen && <Modal />}

      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
