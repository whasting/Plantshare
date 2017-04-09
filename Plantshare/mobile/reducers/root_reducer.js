import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import PlantIndexReducer from './plant_index_reducer';
import PlantDetailReducer from './plant_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  plantIndex: PlantIndexReducer,
  plantDetail: PlantDetailReducer
});

export default RootReducer;
