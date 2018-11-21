import React, { Component } from "react";
import uuid from "uuid";
import "./App.css";
import Projects from "./Components/Projects";
import AddProject from "./Components/AddProject";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    this.setState({
      projects: [
        { id: uuid.v4(), title: "Business website", category: "web design" },
        { id: uuid.v4(), title: "Social app", category: "mobile development" },
        {
          id: uuid.v4(),
          title: "Ecommerce shopping cart",
          category: "Web development"
        }
      ]
    });
  }
  handleAddProject(project) {
    // console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ project: projects });
  }
  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects: projects });
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects
          projects={this.state.projects}
          onDelete={this.handleDeleteProject.bind(this)}
        />
      </div>
    );
  }
}

export default App;
