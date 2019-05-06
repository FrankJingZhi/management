import { combineReducers } from 'redux-immutable';
import { reducer as LoginReducer } from '../pages/login/store';
import { reducer as TrainingReducer } from '../pages/training/store';
import { reducer as TestReducer } from '../pages/test/store';
import { reducer as CommonReducer } from '../common/layout/store';
import { reducer as ExamReducer } from '../pages/exam/store';
import { reducer as ManageReducer } from '../pages/manage/store';

const reducer = combineReducers({
	login: LoginReducer,
	test: TestReducer,
	training: TrainingReducer,
	common: CommonReducer,
	exam: ExamReducer,
	manage: ManageReducer,
});

export default reducer;
