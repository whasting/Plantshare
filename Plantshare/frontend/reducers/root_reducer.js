import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import PlantIndexReducer from './plant_index_reducer';
import PlantDetailReducer from './plant_detail_reducer';
import RequestReducer from './request_reducer';

const RootReducer = combineReducers({
	requests: RequestReducer,
  session: SessionReducer,
  plantIndex: PlantIndexReducer,
  plantDetail: PlantDetailReducer,
  errors: ErrorReducer
});

export default RootReducer;
