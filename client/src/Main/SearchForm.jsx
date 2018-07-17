import React, { Component } from "react";

class SearchForm extends Component {

    state = {
        topic: '',
        startYear: '',
        endYear: ''
    }

    handleChangeTopic = event => {

        console.log('handleChange is called')
        this.setState({
            topic: event.target.value
        })
    }

    handleChangeStartYear = event => {

        console.log('handleChange is called')
        this.setState({
            startYear: event.target.value
        })
    }

    handleChangeEndYear = event => {

        console.log('handleChange is called')
        this.setState({
            endYear: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleSubmitSearch(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label for="topic">Topic</label>
                        <input
                            type="text"
                            name="topic"
                            value={this.state.topic}
                            onChange={this.handleChangeTopic}
                        />
                    </div>

                    <div>
                        <label for="startYear">Start Year</label>
                        <input
                            type="text"
                            name="startYear"
                            value={this.state.startYear}
                            onChange={this.handleChangeStartYear}
                        />
                    </div>

                    <div>
                        <label for="endYear">End Year</label>
                        <input
                            type="text"
                            name="endYear"
                            value={this.state.endYear}
                            onChange={this.handleChangeEndYear}
                        />
                    </div>

                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        );

    }

    
}

export default SearchForm;
