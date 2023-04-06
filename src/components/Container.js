import React, { Component } from 'react'
import Counter from './Counter'

export default class Container extends Component {
    constructor() {
        super();
        this.state = {
            noCounters: 0
        }
    }

    handleAddCounter = () => {
        this.setState({
            noCounters: this.state.noCounters + 1
        })
    }

    render() {
        const { noCounters } = this.state;
        let counters = []
        for (let index = 0; index < noCounters; index++) {
            counters.push(
                <tr key={index}>
                    <Counter key={index} />
                </tr>
            )
        }

        return (
            <div className='container'>
                <div className="question">
                    <p><b>
                        Q1. Create a class component Container that renders two buttons: 1. Add Counter, 2. Add Count;
                        and also renders n number of Counter components n=0 on first mount.
                        Clicking Add Counter, appends a Counter component to the Container .
                        The Counter class component attaches a click event listener using the HTML DOM
                        addEventListener method to Add Count button on mount and displays the number of times the
                        Add Count button is pressed after its mount. On unmount, the Counter component should
                        remove the button event listener.
                    </b></p>
                </div>
                <div className="answer">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <button className="btn btn-primary mx-2" onClick={this.handleAddCounter}>Counter</button>
                            <table className="table">
                                <thead></thead>
                                <tbody>
                                    {counters}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
