import { useLocation } from 'react-router-dom';

function Projects() {

    let location = useLocation();

    const urlParams = new URLSearchParams(location.search);

    return (
      <div >
        <h2>All Projects Page</h2>
        <p>Query string: { location.search } </p>
        <p>Query parameters and values:</p>
        <ul>
            <li>page: {urlParams.get("page")}</li>
            <li>perPage: {urlParams.get("perPage")}</li>
        </ul>
      </div>
    );
  }
  
  export default Projects;