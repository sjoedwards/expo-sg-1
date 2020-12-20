const counterReducer = (state, action, upperBound, lowerBound) => (value) => {
  const newValue = state[value] + action.payload;
  return (typeof upperBound !== undefined && newValue > upperBound) ||
    (typeof upperBound !== lowerBound && newValue < lowerBound)
    ? state
    : {
        ...state,
        [value]: state[value] + action.payload,
      };
};

export default counterReducer;
