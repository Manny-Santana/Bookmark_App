import React, { Component } from "react";
import Axios from "axios";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      link: ""
    };
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    console.log("edit mounted ");
    this.setState({
      name: this.props.bookmark.name,
      link: this.props.bookmark.link
    });
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  async handleEditSubmit(event) {
    try {
      event.preventDefault();
      console.log("editted...");
      const bookID = this.props.bookmark._id;
      const url = `http://localhost:3003/bookmark/${bookID}`;
      const newState = {
        name: this.state.name,
        link: this.state.link
      };
      const updatedBook = await Axios.put(url, newState);
      console.log("updated bookmark", updatedBook);
      this.props.getBookmarks();
    } catch (err) {
      console.log("update submit error: ", err);
    }
  }

  render() {
    return (
      <div>
        <h1>Edit</h1>
        <form onSubmit={this.handleEditSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
          <input
            type="text"
            name="link"
            value={this.state.link}
            onChange={this.handleOnChange}
          />
          <input type="submit" value="Update Bookmark" />
        </form>
      </div>
    );
  }
}

export default EditForm;
