// Factory for creating a reducer to match the api pattern
export default ({ INITIAL_STATE, API_START, API_SUCCESS, API_ERROR }) =>
  (state = INITIAL_STATE, action) => {
    // TODO: This feels a little overly clever. Is there a better way to go
    // about this?
    const type = action.type.split('/')[0];
    const subtype = action.type.split('/')[1];

    switch (subtype) {
      case API_START:
        return {
          ...state.data,
          [type]: {
            pending: true,
          },
        };
      case API_ERROR:
        return {
          ...state.data,
          [type]: {
            pending: false,
            error: action.payload,
          },
        };
      case API_SUCCESS:
        return {
          ...state.data,
          [type]: {
            pending: false,
            data: action.payload.data,
          },
        };
      default:
        return state;
    }
  };
