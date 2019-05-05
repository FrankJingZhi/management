/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 需要派发的action
 * @since: 2019-04-16 10:47:01
 * @lastTime: 2019-04-18 17:37:17
 */
import axios from 'axios';
import * as containts from './containts';
import { fromJS } from 'immutable'; 

/**
 * @Author: Frank
 * @lastTime: 2019-05-05 17:40:29
 * @LastAuthor: Do not edit
 * @description: 检查路由
 * @since: 2019-05-05 12:58:11
 */
export const checkRouter = (pathname) => {
    pathname = pathname.split('/')
    return {
        type: containts.CHECK_ROUTER,
        data: fromJS(pathname)
    }
}
