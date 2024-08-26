import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:9000/menu";

const MenuContext = createContext();

const initialState = {
  items: [],
  cart: [
    {
      item: "americano",
      quantity: 3,
      totalPrice: 15,
      priceUnit: "dollor",
    },
  ],
  isLoading: false,
  error: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "menu/dataRecived":
      return { ...state, items: action.payload };
    case "menu/addItem":
      return { ...state, cart: [...state.cart, action.payload] };
    case "menu/deleteItem":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "menu/increaseQuantity":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? item.quantity++ : ""
        ),
      };
    case "menu/decreasQuantity":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? item.quantity-- : ""
        ),
      };
    default:
      return state;
  }
}

function MenuProvider({ children }) {
  const [{ cart, items, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: "menu/loading" });
        const response = await fetch(BASE_URL);
        const data = await response.json();
        dataRecived(data);
      } catch (error) {
        dispatch({ type: "menu/error", payload: error.message });
      }
    }
    fetchData();
  }, []);

  function dataRecived(data) {
    dispatch({ type: "menu/dataRecived", payload: data });
  }
  
  function addItem(id) {
    const newItem = "";
    dispatch({ type: "menu/addItem", payload: newItem });
  }
  
  function deleteItem(id) {
    dispatch({ type: "menu/deleteItem", payload: id });
  }
  
  function increaseQuantity(id) {
    dispatch({ type: "menu/increaseQuantity", payload: id });
  }

  function decreasQuantity(id) {
    dispatch({ type: "menu/decreasQuantity", payload: id });
  }

  return (
    <MenuContext.Provider
      value={{
        cart,
        items,
        isLoading,
        error,
        addItem,
        deleteItem,
        increaseQuantity,
        decreasQuantity,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined)
    throw new Error("You Are Using The Context Out Of The Provider 😐.");
  return context;
}

export { MenuProvider, useMenu };
