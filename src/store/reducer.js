import { combineReducers } from 'redux-immutable';
import { reducer as LoginReducer } from '../pages/login/store';
import { reducer as TrainingReducer } from '../pages/training/store';
import { reducer as CommonReducer } from '../common/layout/store';
import { reducer as ExamReducer } from '../pages/exam/store';

const reducer = combineReducers({
	login: LoginReducer,
	training: TrainingReducer,
	common: CommonReducer,
	exam: ExamReducer
});

export default reducer;
