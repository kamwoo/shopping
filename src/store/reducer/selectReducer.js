import { SELECT_ACTION_TYPE } from 'store/action/selectActions';

const selectedProductId = -1;

function selectReducer(state = selectedProductId, action) {
  switch (action.type) {
    case SELECT_ACTION_TYPE.SELECT_PRODUCT:
      return action.payload.id;
    default:
      return state;
  }
}

export { selectReducer };
