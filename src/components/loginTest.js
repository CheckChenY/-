import React, { Component } from 'react';

import { addTodo } from './action';
import { connect } from 'react-redux';

import './login.css';
import { Button, Input} from 'antd';

const Search = Input.Search;

class Login extends Component {
    constructor(props){
        super(props);
        this.changeFetch = this.changeFetch.bind(this);
    }

    // componentDidMount(){
    //     const self = this,
    //     { dispa }
    // }

    changeFetch=()=>{
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => {
                console.log(res.status)
                res.json().then(data => {
                    console.log(data)
                })
            })
    }

  render() {

    const self = this;
    console.log(self);
    return (
      <div className="login">
        <div className='login-box'>
            <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            enterButton
            />
            <Button type="primary" onClick={this.changeFetch}>Button</Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAdd: (text) => {
			dispatch(addTodo(text));
		}
	}
}

// export default App;
export default connect(null,mapDispatchToProps)(Login);