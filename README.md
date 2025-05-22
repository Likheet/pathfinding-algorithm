# Pathfinding Algorithm Visualizer

Welcome to the Pathfinding Algorithm Visualizer! This interactive web application is your gateway to exploring and understanding a variety of pathfinding and maze generation algorithms in a fun, visual, and engaging way.

Have you ever wondered how GPS navigators efficiently find the shortest route, or how characters in video games navigate complex digital environments? This tool brings these complex processes to life directly in your browser. Set up your own scenarios on a grid: define start and end points, add obstacles by drawing walls, or generate intricate mazes with a click. Then, select an algorithm and watch it work its magic!

This visualizer serves as an educational tool designed to make learning about algorithms intuitive and enjoyable. You can experiment with:

*   **Pathfinding Algorithms:** A*, Bidirectional Greedy Search, Breadth-First Search (BFS), Depth-First Search (DFS), Dijkstra's Algorithm, Greedy Best-First Search, and Random Walk.
*   **Maze Generation Algorithms:** Horizontal Maze, Random Maze, Recursive Division, and Vertical Maze.

Whether you're a student diving into computer science, a developer looking to refresh your knowledge, or simply a curious mind, this visualizer offers a hands-on experience to demystify these fascinating algorithms.

## Key Features

*   **Interactive Grid:** Easily create walls and define start/end nodes by clicking and dragging on the grid.
*   **Algorithm Selection:** Choose from a diverse set of pathfinding algorithms to compare their behaviors.
*   **Maze Generation:** Instantly generate complex mazes using various algorithms with a single click.
*   **Custom Obstacle Creation:** Manually draw walls and obstacles on the grid to design unique challenges.
*   **Flexible Start/End Points:** Define the starting and target points for pathfinding with ease.
*   **Real-time Visualization:** Observe the selected algorithm as it explores the grid step-by-step, in real time.
*   **Clear Path Highlighting:** Once a path is found, it is clearly highlighted on the grid.
*   **Comprehensive Clear Options:** Utilize buttons to clear walls, paths, or reset the entire board for a fresh start.
*   **Speed Control:** Adjust the visualization speed to watch the process in slow motion or accelerate it.
*   **Responsive Design:** Enjoy a consistent and user-friendly experience across different screen sizes.

## Implemented Algorithms

This visualizer showcases a range of pathfinding and maze generation techniques, allowing you to see their differences and strengths firsthand.

### Pathfinding Algorithms

*   **A* Search:** A highly popular and efficient algorithm that uses heuristics to intelligently guide its search, often guaranteeing the shortest path.
*   **Bidirectional Greedy Search:** Enhances search speed by exploring from both the start and end points simultaneously, meeting in the middle.
*   **Breadth-First Search (BFS):** Explores all neighbor nodes at the current depth before moving to the next level. Guarantees the shortest path in unweighted graphs.
*   **Depth-First Search (DFS):** Traverses as far as possible along each branch before backtracking. Simple, but doesn't guarantee the shortest path.
*   **Dijkstra's Algorithm:** Reliably finds the shortest path in graphs with non-negative edge weights, though it can be slower than A* in some cases.
*   **Greedy Best-First Search:** Chooses the path that currently appears best based on a heuristic, without considering the accumulated cost. Fast, but may not find the optimal path.
*   **Random Walk:** A basic algorithm that randomly moves to a neighboring node until the target is found. Useful for comparing against more systematic methods.

### Maze Generation Algorithms

*   **Horizontal Maze:** Creates maze patterns with a tendency to form long horizontal corridors and passages.
*   **Random Maze:** Generates a maze by randomly placing walls across the grid, resulting in a chaotic and unpredictable layout.
*   **Recursive Division:** Systematically divides the grid into smaller rectangular sections by adding walls with passages, creating well-structured mazes.
*   **Vertical Maze:** Creates maze patterns with a tendency to form long vertical corridors and passages.

## How to Use This Visualizer

Getting started with the Pathfinding Algorithm Visualizer is straightforward! Access the live application here: [https://likheet.github.io/pathfinding-algorithm/](https://likheet.github.io/pathfinding-algorithm/)

Here’s how you can interact with the visualizer:

1.  **Select an Algorithm:** Begin by choosing a pathfinding algorithm from the options provided in the navigation bar.
2.  **Prepare the Grid:**
    *   **Generate a Maze:** Pick a maze generation algorithm to instantly create a complex environment.
    *   **Manual Obstacles:** Alternatively, draw your own obstacles (walls) by clicking and dragging your mouse across the grid cells.
3.  **Define Start and End Points:** Click on any two distinct cells on the grid to place the start node (typically green) and the end node (typically red).
4.  **Visualize the Algorithm:** Click the main "Visualize" button (often named after the selected algorithm, e.g., "Visualize A*") to see the chosen algorithm in action.
5.  **Observe the Process:** Watch as the algorithm explores the grid, marking visited nodes and, if a path exists, highlighting the shortest one found.
6.  **Control and Reset:**
    *   Use 'Clear Board' to reset the entire grid, including all walls, start/end points, and paths.
    *   Use 'Clear Path' or 'Clear Walls' for more targeted resets.
    *   Adjust the visualization speed using the provided controls to better understand the algorithm's steps.

Dive in and experiment with different algorithms, mazes, and obstacle configurations to see how they perform and what paths they discover!

## Running the Project Locally

If you're interested in running the project on your local machine for development, experimentation, or offline use, follow these steps:

1.  **Prerequisites:** Make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download them from [https://nodejs.org/](https://nodejs.org/).
2.  **Clone the Repository:**
    ```bash
    git clone [YOUR_REPOSITORY_URL_HERE] # Replace with the URL you forked to, if applicable
    cd [YOUR_REPOSITORY_DIRECTORY_HERE]   # Replace with the directory name
    ```
3.  **Install Dependencies:** Navigate to the project directory in your terminal and run:
    ```bash
    npm install
    ```
4.  **Run the Application:** Once dependencies are installed, you can use the following scripts:
    *   **`npm start`**: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view it. The page will automatically reload if you make code changes.
    *   **`npm test`**: Launches the test runner in interactive watch mode.
    *   **`npm run build`**: Builds the app for production into the `build` folder. This version is optimized for performance.
    *   **`npm run deploy`**: Deploys the application to GitHub Pages (if you have it configured for your fork).

## Technologies Used

This project is built with a modern web development stack, primarily utilizing:

*   **React:** A JavaScript library for building dynamic and interactive user interfaces and managing component state.
*   **JavaScript (ES6+):** The core programming language used for all application logic and algorithm implementations.
*   **HTML5:** The standard markup language for creating the structure and content of the web pages.
*   **CSS3:** Used for styling the application, ensuring a visually appealing and responsive design.
*   **Bootstrap:** Leverged for its responsive grid system and pre-styled components to accelerate UI development.

## Contributing

We welcome contributions, issues, and feature requests! Your help is appreciated in making this visualizer even better for everyone.

If you'd like to contribute to the project:

1.  Check the [issues page]([YOUR_REPOSITORY_ISSUES_LINK_HERE]) for existing tasks, bugs, or feature suggestions.
2.  Fork the repository to your own GitHub account.
3.  Create a new feature branch for your work (`git checkout -b feature/MyAmazingFeature`).
4.  Make your changes and commit them with clear messages (`git commit -m 'Add MyAmazingFeature'`).
5.  Push your feature branch to your fork (`git push origin feature/MyAmazingFeature`).
6.  Open a Pull Request back to the main project repository.

We'll review your contribution and merge it if it aligns with the project's goals. Thank you for your interest and effort!

## License

This project currently does not have a specific license.

If you are the author or maintainer, consider adding an open source license to specify how others can use, modify, and distribute your code. This clarifies the terms under which your project is shared and can encourage broader community engagement. Choosing a license like MIT, Apache 2.0, or GPL can be beneficial.
