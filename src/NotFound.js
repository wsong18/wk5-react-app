import { Navigate } from "react-router-dom";

function NotFound() {
  return (
    <div >
        <h2>Resource not found</h2>
        <p>404 Error</p>

        <br />
        <p>Testing Redirect/Navigate to Home page in JSX (markup) code</p>
        <Navigate to="/?from=NotFound" />
    </div>
  );
}

export default NotFound;