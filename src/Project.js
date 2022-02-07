import { useParams } from 'react-router-dom';

function Project() {

    let { id } = useParams();

    return (
      <div >
        <h2>Specific Project Page</h2>
        <p>The passed in id: { id }</p>
      </div>
    );
  }
  
  export default Project;