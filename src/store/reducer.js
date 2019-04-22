import { combineReducers } from 'redux-immutable';
import { reducer as LoginReducer } from '../pages/login/store';
import { reducer as TrainingReducer } from '../pages/training/store';
import { reducer as CommonReducer } from '../common/layout/store';

const reducer = combineReducers({
	login: LoginReducer,
	training: TrainingReducer,
	common: CommonReducer
});

export default reducer;
