/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 需要派发的action
 * @since: 2019-04-16 10:47:01
 * @lastTime: 2019-05-16 16:23:04
 */
import axios from 'axios';
import * as containts from './containts';
import { fromJS } from 'immutable'; //

export const changeInputEdit = (DisableInput) => ({
	type: containts.CHANGE_INPUT_EDIT,
	data: fromJS(!DisableInput)
});

export const showModal = (VisibleModal) => ({
	type: containts.SHOW_MODAL,
	data: fromJS(!VisibleModal)
});

export const handleConfirmBlur = (ConfirmDirty) => ({
	type:containts.HANDLE_CONFIRM_BLUR,
	data: fromJS(ConfirmDirty)
})