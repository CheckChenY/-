import React,{ Component} from 'react';
import { Button} from 'antd';
import './Homepage.css';





class Homepage extends Component{
 
    render() {
        return (
        <div>
            <Button type="primary" onClick={this.showModal} className="aaa">
                首页
            </Button>
           
        </div>
        );
    }
}


export default Homepage;