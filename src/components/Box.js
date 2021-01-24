import React, { Component } from 'react'
import "./Box.css"
import axios from "axios"


class Box extends Component {
    state = {
        todo : "",
        isShow: false
    };

    onclick = () => {
        axios.get("http://www.boredapi.com/api/activity/")
            .then(res => {
                const thing = res.data.activity;
                this.setState({
                    todo: thing,
                    isShow: true
                })
            })
    }

    render() {
        return (
            <div className="container">
                <h1>Random Things</h1>
                <div>
                    <button onClick={this.onclick} className="btn btn-primary">I'm Boring</button>
                </div>
                {this.state.isShow ?                 
                    <div className="box" >                                 
                        <div className="things-box">
                            {this.state.todo}
                        </div>               
                    </div> : null}
            </div>
        )
    }
}

export default Box;
