import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import QuesForm from '../components/quesForm';

class EditQues extends PureComponent {
	render(){
		return(
			<QuesForm />
		)
	}
}

export default withRouter(EditQues);
