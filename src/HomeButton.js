import { useNavigate } from "react-router-dom";

function HomeButton() {

    const navigate = useNavigate()

    function handleClick() {
        navigate("/?from=HomeButton");
    }

    return (
        <div >
            <h2>HomeButton page</h2>
            <p>Redirect/Navigate to Home page in JavaScript code</p>

            <br />
            <button type="button" onClick={handleClick}>
                Go home
            </button>
        </div>
    );
}

export default HomeButton;