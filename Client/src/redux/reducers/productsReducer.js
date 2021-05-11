import React from 'react';

function reducer(state = { id: '' }, action) {
  switch (action.type) {
    case "SAVE_PRODUCT_ID":
      return {
        ...state, id: action.data.id
      };
    default:
      return {};
  }
}

export default reducer;
