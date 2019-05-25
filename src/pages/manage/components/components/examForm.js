import React, { PureComponent } from 'react';
import { Form, Input, Radio, Button,notification } from 'antd';

const RadioGroup = Radio.Group;

class ExamForm extends PureComponent {

    state = {
        value: 1
	};
	
	handleSubmit = (e) => {
		const {closeAddHandleClick} = this.props;
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('表单输入的值: ', values);
				this.openNotificationWithIcon('success');
				closeAddHandleClick();
			}
		});
	};

	openNotificationWithIcon = (type) => {
		if(type === 'error'){
			notification[type]({
				message: '报错提示',
				description:
					'抱歉，数据丢失，请重试...'
			});
		}else{
			notification[type]({
				message: '成功提示',
				description:
					'操作成功！'
			});
		}
	};

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value
        });
    };

	render() {
		const { getFieldDecorator } = this.props.form;

		const formItemLayout = {
			labelCol: {
				md: { span: 6 }
			},
			wrapperCol: {
				md: { span: 15 }
			}
		};

		const tailItemLayout = {
			wrapperCol: {
				md: { 
					span: 3,
					offset: 11
				}
			}
		};

		return (
			<Form {...formItemLayout} onSubmit={this.handleSubmit}>
				<Form.Item label="难度">
					<RadioGroup onChange={this.onChange} value={this.state.value}>
						<Radio value={1}>简单</Radio>
						<Radio value={2}>普通</Radio>
						<Radio value={3}>困难</Radio>
					</RadioGroup>
				</Form.Item>
				<Form.Item label="试卷名">
					{getFieldDecorator('examName', {
						rules: [ { required: true, message: '请输入试卷名！', whitespace: true } ]
					})(<Input />)}
				</Form.Item>
				<Form.Item {...tailItemLayout}>
					<Button type="primary" htmlType="submit">
						确定
					</Button>
				</Form.Item>
			</Form>
		);
	}
}
const WrappedExamForm = Form.create({ name: 'registerExam' })(ExamForm);

export default WrappedExamForm;