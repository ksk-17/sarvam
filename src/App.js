import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./screens/Login.js";
import Register from "./screens/Register.js";
import Home from "./screens/Home.js";
import Dashboard from "./screens/Dashboard.js";
import Editor from "./screens/Editor.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/editor/:projectId",
      element: <Editor />
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
