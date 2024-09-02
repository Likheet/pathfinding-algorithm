import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import "jquery/dist/jquery.min.js"; // Import jQuery
import "popper.js/dist/umd/popper.min.js"; // Import Popper.js
import "bootstrap/dist/js/bootstrap.min.js"; // Import Bootstrap's JavaScript

const brand = window.innerWidth > 600 ? "Pathfinding Visualizer" : "Pathfinder";

class NavBar extends Component {
  state = {
    algorithm: "Visualize Algorithm",
    maze: "Generate Maze",
    pathState: false,
    mazeState: false,
    speedState: "Speed",
  };

  selectAlgorithm(selection) {
    if (this.props.visualizingAlgorithm) {
      return;
    }
    if (
      selection === this.state.algorithm ||
      this.state.algorithm === "Visualize Algorithm" ||
      this.state.algorithm === "Select an Algorithm!"
    ) {
      this.setState({ algorithm: selection });
    } else if (this.state.pathState) {
      this.clearPath();
      this.setState({ algorithm: selection });
    } else {
      this.setState({ algorithm: selection });
    }
  }

  selectMaze(selection) {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) {
      return;
    }
    if (
      selection === this.state.maze ||
      this.state.maze === "Generate Maze" ||
      this.state.maze === "Select a Maze!"
    ) {
      this.setState({ maze: selection });
    } else if (!this.state.mazeState) {
      this.setState({ maze: selection });
    } else {
      this.clearGrid();
      this.setState({ maze: selection });
    }
  }

  visualizeAlgorithm() {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) {
      return;
    }
    if (this.state.pathState) {
      this.clearTemp();
      return;
    }
    if (
      this.state.algorithm === "Visualize Algorithm" ||
      this.state.algorithm === "Select an Algorithm!"
    ) {
      this.setState({ algorithm: "Select an Algorithm!" });
    } else {
      this.setState({ pathState: true });
      if (this.state.algorithm === "Visualize Dijkstra")
        this.props.visualizeDijkstra();
      else if (this.state.algorithm === "Visualize A*")
        this.props.visualizeAStar();
      else if (this.state.algorithm === "Visualize Greedy BFS")
        this.props.visualizeGreedyBFS();
      else if (this.state.algorithm === "Visualize Bidirectional Greedy")
        this.props.visualizeBidirectionalGreedySearch();
      else if (this.state.algorithm === "Visualize Breadth First Search")
        this.props.visualizeBFS();
      else if (this.state.algorithm === "Visualize Depth First Search")
        this.props.visualizeDFS();
      else if (this.state.algorithm === "Visualize Random Walk")
        this.props.visualizeRandomWalk();
    }
  }

  generateMaze() {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) {
      return;
    }
    if (this.state.mazeState || this.state.pathState) {
      this.clearTemp();
    }
    if (
      this.state.maze === "Generate Maze" ||
      this.state.maze === "Select a Maze!"
    ) {
      this.setState({ maze: "Select a Maze!" });
    } else {
      this.setState({ mazeState: true });
      if (this.state.maze === "Generate Random Maze")
        this.props.generateRandomMaze();
      else if (this.state.maze === "Generate Recursive Maze")
        this.props.generateRecursiveDivisionMaze();
      else if (this.state.maze === "Generate Vertical Maze")
        this.props.generateVerticalMaze();
      else if (this.state.maze === "Generate Horizontal Maze")
        this.props.generateHorizontalMaze();
    }
  }

  clearGrid() {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) {
      return;
    }
    this.props.clearGrid();
    this.setState({
      algorithm: "Visualize Algorithm",
      maze: "Generate Maze",
      pathState: false,
      mazeState: false,
    });
  }

  clearPath() {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) {
      return;
    }
    this.props.clearPath();
    this.setState({
      pathState: false,
      mazeState: false,
    });
  }

  clearTemp() {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) {
      return;
    }
    this.props.clearGrid();
    this.setState({
      pathState: false,
      mazeState: false,
    });
  }

  changeSpeed(speed) {
    if (this.props.visualizingAlgorithm || this.props.generatingMaze) {
      return;
    }
    let value = [10, 10];
    if (speed === "Slow") value = [50, 30];
    else if (speed === "Medium") value = [20, 20];
    else if (speed === "Fast") value = [10, 15];
    this.setState({ speedState: speed });
    this.props.updateSpeed(value[0], value[1]);
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="https://likheet.github.io/pathfinding-algorithm/">
          {brand}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Algorithms" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => this.selectAlgorithm("Visualize Dijkstra")}>
                Dijkstra's Algorithm
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.selectAlgorithm("Visualize A*")}>
                A* Algorithm
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.selectAlgorithm("Visualize Greedy BFS")}>
                Greedy Best First Search
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.selectAlgorithm("Visualize Bidirectional Greedy")}>
                Bidirectional Greedy Search
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => this.selectAlgorithm("Visualize Breadth First Search")}>
                Breadth First Search
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.selectAlgorithm("Visualize Depth First Search")}>
                Depth First Search
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.selectAlgorithm("Visualize Random Walk")}>
                Random Walk
              </NavDropdown.Item>
            </NavDropdown>
            <Button variant="success" onClick={() => this.visualizeAlgorithm()}>
              {this.state.algorithm}
            </Button>
            <NavDropdown title="Mazes" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => this.selectMaze("Generate Random Maze")}>
                Random Maze
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.selectMaze("Generate Recursive Maze")}>
                Recursive Division Maze
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.selectMaze("Generate Vertical Maze")}>
                Vertical Division Maze
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.selectMaze("Generate Horizontal Maze")}>
                Horizontal Division Maze
              </NavDropdown.Item>
            </NavDropdown>
            <Button variant="success" onClick={() => this.generateMaze()}>
              {this.state.maze}
            </Button>
            <Button variant="danger" onClick={() => this.clearGrid()}>
              Clear Grid
            </Button>
            <NavDropdown title={this.state.speedState} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => this.changeSpeed("Slow")}>
                Slow
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.changeSpeed("Medium")}>
                Medium
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.changeSpeed("Fast")}>
                Fast
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;