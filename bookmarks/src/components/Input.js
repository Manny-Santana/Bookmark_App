import React, { Component } from "react";
import axios from "axios";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      link: ""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
  }

  async handleCreateSubmit(event) {
    try {
      event.preventDefault();
      const url = "http://localhost:3003/bookmark";
      const payload = {
        name: this.state.name,
        link: this.state.link
      };
      await axios.post(url, payload);
      await this.props.getBookmarks();
    } catch (err) {
      console.log("Create Submit Error: ", err);
    }
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleCreateSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Title"
          onChange={this.handleOnChange}
        />
        <input
          type="text"
          name="link"
          placeholder="URL"
          onChange={this.handleOnChange}
        />
        <input type="submit" value="Add Bookmark" />
      </form>
    );
  }
}

export default Input;
