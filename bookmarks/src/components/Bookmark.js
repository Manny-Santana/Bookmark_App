import React, { Component } from "react";
import EditForm from "./EditForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Bookmark extends Component {
  componentDidMount() {
    console.log("bookmark mounted");
  }
  render() {
    console.log(this.props.bookmark);
    const { name, link, description, favorite } = this.props.bookmark;
    return (
      <Router>
        <div className="bookmark">
          <p>
            Name: {name}
          </p>
          <p>
            Link: {link}
          </p>
          <p>
            Description: {description}
          </p>
          <p>
            Favorited: {favorite}
          </p>
          <Link to="/edit">Edit</Link>
        </div>

        <Route
          path="/edit"
          exact
          render={props =>
            <EditForm
              {...props}
              bookmark={this.props.bookmark}
              getBookmarks={this.props.getBookmarks}
            />}
        />
      </Router>
    );
  }
}

export default Bookmark;
