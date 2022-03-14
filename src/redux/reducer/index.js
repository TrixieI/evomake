let initState = {
  file: null,
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "FILE":
      return { ...state, file: action.payload };
    default:
      return { ...state };
  }
};
