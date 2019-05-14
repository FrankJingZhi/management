import React, { PureComponent } from 'react';
import { Form, Input, Radio } from 'antd';

const RadioGroup = Radio.Group;

class ExamForm extends PureComponent {

    state = {
        value: 1
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

		return (
			<Form {...formItemLayout} onSubmit={this.handleSubmit}>
				<Form.Item label="难度">
					<RadioGroup onChange={this.onChange} value={this.state.value}>
						<Radio value={1}>A</Radio>
						<Radio value={2}>B</Radio>
						<Radio value={3}>C</Radio>
						<Radio value={4}>D</Radio>
					</RadioGroup>
				</Form.Item>
				<Form.Item label="试卷名">
					{getFieldDecorator('examName', {
						rules: [ { required: true, message: 'Please input examName!', whitespace: true } ]
					})(<Input />)}
				</Form.Item>
			</Form>
		);
	}
}
const WrappedExamForm = Form.create({ name: 'registerExam' })(ExamForm);

export default WrappedExamForm;