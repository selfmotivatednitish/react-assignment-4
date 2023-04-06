import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
    render() {
        return (
            <div className='container'>
                <div className="question">
                    <hr />
                    <p><b>
                        Q2. What is the purpose of componentDidMount() lifecycle method?
                    </b></p>
                </div>
                <div className="answer">
                    <p className='text-start'>
                        The componentDidMount() lifecycle method is called by React immediately after a component is mounted or inserted into the DOM (Document Object Model). This method is only called once during the lifecycle of a component.
                    </p>
                    <br />
                    <p className='text-start'>
                        The purpose of the componentDidMount() method is to enable the component to perform any necessary actions after it has been rendered in the DOM, such as fetching data from a server, initializing third-party libraries, setting up event listeners, and so on.
                    </p>
                    <br />
                    <p className='text-start'>
                        The componentDidMount() is an important lifecycle method for setting up a component after it has been rendered and making sure it has all the necessary data and resources it needs to function properly.
                    </p>
                </div>
            </div>
        )
    }
}
