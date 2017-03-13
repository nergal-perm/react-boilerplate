import { combineReducers } from 'redux';
import SampleReducer from './sample_reducer';

const rootReducer = combineReducers({
	sample: SampleReducer
});

export default rootReducer;