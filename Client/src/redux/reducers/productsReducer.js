import React from 'react';

function reducer(state = { vehicle: '' }, action) {
  switch (action.type) {
    case "SAVE_PRODUCT_ID":
      return {
        id: action.data.id
      };
    default:
      return "No";
  }
}

export default reducer;