/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 需要派发的action
 * @since: 2019-04-28 18:29:11
 * @lastTime: 2019-04-28 18:30:07
 */
import axios from 'axios';
import * as containts from './containts';
import { fromJS } from 'immutable'; 

/**
 * @Author: Frank
 * @lastTime: 2019-04-30 18:31:39
 * @LastAuthor: Do not edit
 * @description: 获取表格数据api
 * @since: 2019-04-30 13:59:26
 */
export const getTableInfo = ()=>{
    return(dispatch)=>{
        axios.get('/api/manage/userInfo.json')
        .then((res)=>{
            const data = res.data.data;
            dispatch(getTableInfoAction(data))
        })
    }
}
const getTableInfoAction = (data) =>({
    type:containts.GET_TABLE_INFO,
    data: fromJS(data)
})

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 修改选中行数据
 * @since: 2019-04-30 18:20:19
 */
export const changeSelectedRowKeys = (data) =>({
    type:containts.CHANGE_SELECTED_ROW_KEYS,
    data: fromJS(data)
})
export const changeSelectedRows = (data) =>({
    type:containts.CHANGE_SELECTED_ROWS,
    data: fromJS(data)
})

