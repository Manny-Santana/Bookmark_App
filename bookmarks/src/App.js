// @ts-nocheck
import React, { Component } from "react";
import "./App.css";
import Input from "./components/Input";
import axios from "axios";
import Bookmark from "./components/Bookmark";

const baseURL = "http://localhost:3003";
console.log("baseURL = ", baseURL);

class App extends Component {
  constructor() {
    super();
    this.state = {
      bookmarks: []
    };

    this.getBookmarks = this.getBookmarks.bind(this);
  }

  componentDidMount() {
    this.getBookmarks();
  }

  async getBookmarks() {
    const response = await axios.get(`${baseURL}/bookmark`);
    const bookmarksData = response.data;
    this.setState({
      bookmarks: bookmarksData
    });
  }

  render() {
    const renderBookmarks = this.state.bookmarks.map(bookmark => {
      return (
        <Bookmark
          key={bookmark._id}
          bookmark={bookmark}
          getBookmarks={this.getBookmarks}
        />
      );
    });

    return (
      <div className="App">
        <h1> Useful Book Marks </h1>
        <Input getBookmarks={this.getBookmarks} />
        {renderBookmarks}
      </div>
    );
  }
}

export default App;
