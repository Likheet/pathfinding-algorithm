import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min.js"; // Import jQuery
import "popper.js/dist/popper.min.js"; // Import Popper
import "bootstrap/js/dist/dropdown";
import PathfindingVisualizer from "./pathfindingVisualizer/pathfindingVisualizer";
import { createRoot } from 'react-dom/client';
import * as serviceWorker from './serviceWorker'; // Import serviceWorker

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <PathfindingVisualizer />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();