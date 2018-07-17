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
        const styles = {
            width: "18rem"
          };
        return (
            <div>
            <div className="container">
            <div className="row-justify-content-center">
            <div className="col-md-4 m-auto">
            <div className="card" style= {styles}>
            <h4 className="card-header">
              Search For the News
            </h4>
            <form onSubmit={this.handleSubmit}>
            <ul className="list-group list-group-flush text-center">
            
            <label htmlFor="topic">Topic
            <br/>
            <input
                type="text"
                name="topic"
                value={this.state.topic}
                onChange={this.handleChangeTopic}
            />
            </label><br/>
              <ul className="list-group list-group-flush text-center">
              <label htmlFor="startYear">Start Year</label>
              <input
                  type="text"
                  name="startYear"
                  value={this.state.startYear}
                  onChange={this.handleChangeStartYear}
              />
              </ul><br/>
              <li className="list-group list-group-flush text-center">
              <label htmlFor="endYear">End Year</label>
              <input
                  type="text"
                  name="endYear"
                  value={this.state.endYear}
                  onChange={this.handleChangeEndYear}
              />
              </li><br/>
                    <div>
                    <button type="submit" class="btn btn-success">Submit Search</button>
                    </div><br/>
              
            </ul>
            </form>
               
                </div>
                </div>
                </div>
            </div>
            </div>
        );

    }

    
}

export default SearchForm;
