import React, { Component } from 'react';

export default class Create extends Component {
  constructor(props) {
      super(props);
      this.onChangePersonName = this.onChangePersonName.bind(this);
      this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
      this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          title: '',
          content: '',
      }
  }
  onChangePersonName(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      content: e.target.value
    })  
  }
  onChangeGstNumber(e) {
    this.setState({
    })
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`The values are ${this.state.title}, ${this.state.content}, and ${this.state.business_gst_number}`)
    this.setState({
      title: '',
      content: '',
    })
  }
 
  render() {
      return (
          <div style={{ marginTop: 10 }}>
              <h3>Add New Business</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Title:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                        />
                  </div>
                  <div className="form-group">
                      <label>Content: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.content}
                        onChange={this.onChangeContent}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Register Note" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
      )
  }
}