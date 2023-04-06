import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        this.addCountBtn.addEventListener('click', this.handleAddCount);
    }

    componentWillUnmount() {
        this.addCountBtn.removeEventListener('click', this.handleAddCount);
    }

    handleAddCount = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    render() {
        const {count} = this.state
        return (
            <>
                <td className='col-2'>
                    <button type="button" className="btn btn-outline-success" ref={el => this.addCountBtn = el}>Add Count</button>
                </td>
                <td className='col-2'>
                    <p>Count: {count}</p>
                </td>

            </>
        );
    }
}
