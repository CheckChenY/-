
import React,{ Component} from 'react';
import intl from 'react-intl-universal';

import { Button} from 'antd';
import {
	Link
} from 'react-router-dom';

class Logout extends Component{    
        handleLogout = () => {            
            localStorage.clear();
        }      
        render() {            
            return (
                <div>
                    <Link to='/'>
                        <Button onClick={this.handleLogout}
                        style={{
                            border:'none',
                            padding:'0',
                        }} >
                            {intl.get('log_out')}
                        </Button>
                    </Link>
                </div>
            );
    }
}
  
export default Logout;

