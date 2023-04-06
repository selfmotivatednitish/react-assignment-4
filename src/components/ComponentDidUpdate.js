import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {
    render() {
        return (

            <div className='container'>
                <div className="question">
                    <hr />
                    <p><b>
                        Q3. What is the purpose of componentDidUpdate() lifecycle method?
                    </b></p>
                </div>
                <div className="answer">
                    <p className='text-start'>
                        The componentDidUpdate() lifecycle method in React is called immediately after updating occurs. It is called after the component's state or props have been updated and the re-rendering of the component is completed.
                    </p>
                    <br />
                    <p className='text-start'>
                        The purpose of the componentDidUpdate() method is to allow the component to perform additional actions that are necessary after an update, such as fetching new data from an API, updating the DOM, or executing other side effects.
                    </p>
                    <br />
                    <p className='text-start'>
                        This method receives two arguments: prevProps and prevState. These arguments represent the previous values of the component's props and state, respectively, before the most recent update.
                    </p>
                </div>
            </div>
        )
    }
}
