import  React from 'react';
import { withRouter } from "react-router-dom";


 class pageNotFound extends React.Component {
	render() {
		return(
                <div>
                 <p>Page not found</p>
                </div>
               
			)
	}
}

export default withRouter(pageNotFound);