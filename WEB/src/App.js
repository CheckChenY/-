import React, {
	Component
} from 'react';
import {
	BrowserRouter as Router,
	Route,
	// Link
} from 'react-router-dom';

// import { Router, Route ,Link} from 'react-router'

import Login from './components/login';
import Vister from './components/home/index';

import User from './components/home/user'

import intl from 'react-intl-universal';
import StockNews from './components/stockNews/index';
import HKDetail from './components/detail/HKinformationdetails';
import IssueDetail from './components/detail/HKissuedetails';

import BackPassword from './components/backPassword';

// import { browserHistory } from 'react-router';
// import createHistory from 'history/createBrowserHistory';
// import Editpassword from './components/editpassword/edit';
// const history = createHistory();

// import Test from './test';

// 定义资源包的路径
const locales = {
	"zh-TW": require('./locales/zh-TW.json'),
	"zh-CN": require('./locales/zh-CN.json'),
};

class App extends Component {
	state = {
		initDone: false
	}

	componentDidMount() {
		this.loadLocales();
	}

	loadLocales() {
		// init method will load CLDR locale data according to currentLocale
		// react-intl-universal is singleton, so you should init it only once in your app
		intl.init({
			currentLocale: 'zh-TW', // TODO: determine locale here
			locales,
		})
		.then(() => {
			// After loading CLDR locale data, start to render
			this.setState({
				initDone: true
			});
		});
	}

	render() {

		return(
			<Router>
				<div className='container'>
					
					<Route exact path="/" component={Vister} />

					<Route path="/login" component={Login} />

					<Route exact path="/index" component={User} />

					<Route path="/backPassword" component={BackPassword} />

					<Route path="/StockNews" component={StockNews} />

					<Route path="/HKDetail" component={HKDetail} />

					<Route path="/IssueDetail" component={IssueDetail} />

					{/* <Route exact path="/" component={Test} /> */}
				</div>
        </Router>
		)
	}
}

export default App;