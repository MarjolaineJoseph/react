import React, { Component } from 'react';

//equivaut a ca
//var header = {
//    render:function(){
//      <div>Logo</div>
//      <input/>
//
//    }
//}

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            keywords:''
        }        
    }

    inputChange(event){
        this.setState({keywords:event.target.value})
    }

    render() {
        return (
            <header>
                <div className="logo"
                    onClick={()=>(console.log('clicked'))}>
                    Logo
                </div>
                <input onChange={this.inputChange.bind(this)}/>

            </header>
        )
    }
}

export default Header;