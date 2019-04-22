/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 需要派发的action
 * @since: 2019-04-16 10:47:01
 * @lastTime: 2019-04-16 15:20:49
 */
import axios from 'axios';
import * as containts from './containts';
import { fromJS } from 'immutable'; //

/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 登录api
 * @since: 2019-04-16 10:47:01
 */
export const loginClick = (userName,password) => {
    return (dispatch)=>{
        axios({
            method:'post',
            url:'/api/login/login.json',
            data:{
                userName
            }
        }).then((res)=>{
            let data = {};
            if(res.status){
                data = {
                    name:userName,
                    permission:res.data.permission
                }
            }else{
                data = {
                    name:null,
                    permission:null
                }
            }
            dispatch(changeUserInfo(data))
        }).catch(()=>{
            console.log('服务器繁忙，请稍后...')
        })
    }
}

export const changeUserInfo = (data) => ({
    type:containts.CHANGE_USER_INFO,
    data: fromJS(data)
})