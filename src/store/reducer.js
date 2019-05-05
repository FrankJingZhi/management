import { combineReducers } from 'redux-immutable';
import { reducer as LoginReducer } from '../pages/login/store';
import { reducer as TrainingReducer } from '../pages/training/store';
import { reducer as TestReducer } from '../pages/test/store';
import { reducer as TrainingTestReducer } from '../pages/trainingTest/store';
import { reducer as CommonReducer } from '../common/layout/store';
import { reducer as ExamReducer } from '../pages/exam/store';
import { reducer as UserManageReducer } from '../pages/userManage/store';

const reducer = combineReducers({
	login: LoginReducer,
	trainingTest: TrainingTestReducer,
	test: TestReducer,
	training: TrainingReducer,
	common: CommonReducer,
	exam: ExamReducer,
	userManage: UserManageReducer,
});

export default reducer;
