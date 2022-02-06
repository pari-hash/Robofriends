import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import "./App.css";
import Errorboundry from "../Components/Errorboundry";
import Scroll from "../Components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => {
        this.setState({ robots: user });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const { searchfield, robots } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (!robots.length) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <Errorboundry>
              <CardList robots={filteredRobots} />
            </Errorboundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
