/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 需要派发的action
 * @since: 2019-04-16 10:47:01
 * @lastTime: 2019-05-16 12:02:35
 */
import axios from 'axios';
import * as containts from './containts';
import { fromJS } from 'immutable'; //

export const changeInputEdit = (DisableInput) => {
    console.log('disabled:',DisableInput)
    
	return {
		type: containts.CHANGE_INPUT_EDIT,
		data: fromJS(!DisableInput)
	};
};
