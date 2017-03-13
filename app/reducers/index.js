import { combineReducers } from 'redux';
import SampleReducer from './sample-reducer';

const rootReducer = combineReducers({
	sample: SampleReducer
});

export default rootReducer;