export const initialState = {
  dataCustomers: [],
  customer:null
};
export const addCustomers = (customer) => {
  return {
    type: "setCustomer",
    customer: customer,
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "setAllCustomers":
      return {
        ...state,
        dataCustomers: action.data
      };
    case "setCustomer":
      return {
        ...state,
        customer: action.data
      };
    default:
      return state;
  }
};
export default reducer;
