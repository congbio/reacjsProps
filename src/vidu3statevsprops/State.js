import React, { Component } from 'react';
import One from './One';
import Products_data from '../data/data';

class States extends Component {
    constructor(){
        var arr =Products_data()
        super()
        this.state ={arr}
    }
    render() {
        return (
            <div>
                {
                    this.state.arr.map(ele =>{
                       return (<One img = {ele.img} name = {ele.name}></One>) 
                    }
                    )
                }
            </div>
        );
    }
}

export default States;