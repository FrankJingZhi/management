import React,{PureComponent} from 'react';
import { Statistic } from 'antd';
import {connect} from 'react-redux';

const Countdown = Statistic.Countdown;
const deadline = Date.now() + 1000 * 60 * 60 * 1; // Moment is also OK

class Timer extends PureComponent{
    render(){
        return(
            <Countdown 
                title="考试剩余时间：" 
                value={deadline} 
                format="HH:mm:ss" 
                // onFinish={}
                style={{textAlign:'right',marginBottom:'20px'}}
            />
        )
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
	
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);