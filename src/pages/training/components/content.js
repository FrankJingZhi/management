/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 训练、测试页面的content部分
 * @since: 2019-04-19 15:12:49
 * @lastTime: 2019-04-19 15:21:37
 */
import React from 'react';
import { connect } from 'react-redux';
import '../style.js';

const ContentUI = (props) => {
    return(
        <div>这是训练页面</div>
    )
} 

const mapStateToProps = (state) => ({
	
});

const mapDispatchToProps = (dispatch) => ({
	
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentUI);