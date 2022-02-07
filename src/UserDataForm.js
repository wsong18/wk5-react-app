import { useState, useEffect} from 'react';

function UserDataForm(props) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        setUserData({
            fullName: "Jason Borne"
            , programName: "CPA"
            // , campus: "markham"
            // , campuses: ["king", "newnham"]
            // , housing: "off campus"
            , enrolled: true
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('The Form Was Submitted: ' + JSON.stringify(userData));
    }

    const handleChange = (e) => {
        let target = e.target; // the element that initiated the event, e.g. onChange
        let value /*= target.value*/; // its value, e.g. "Jason Borne"
        let name = target.name; // its name, e.g. "fullName"

        if(target.type === 'checkbox'){
            value = target.checked
        } else if (target.type === 'select-multiple'){
            value = [];
            for(let i = 0; i < target.options.length; i++){
                if(target.options[i].selected){
                    value.push(target.options[i].value);
                }
            }
        } else {
            value = target.value
        }

        setUserData(userData => {
            // return a new object built with the properties from userData 
            // including a new property name:value.  If name:value exists, it will be 
            // overwritten, ie: let obj1 = {x:5,x:6}; console.log(obj1); // {x: 6}  
            return {...userData, [name]: value}; 
        });
    }

    if (!userData) {
        return null; // render nothing until the form data is loaded
    } else {
        return (
            <>
                <h2>User Data Form</h2>
                <p>Example in Week 5: React form - a “controlled component”</p>

                <hr />
                <form onSubmit={handleSubmit} className="form-horizontal">
                    {/* <label>
                        Full Name:
                    <input type="text" name="fullName" value={userData.fullName} onChange={handleChange} />
                    </label><br /> */}
                    <div className="form-group">
                        <label for="fullName" className="col-sm-2 control-label">Full Name</label>
                        <div className="col-sm-10">
                            <input type="fullName" className="form-control" id="fullName" placeholder="Email" />
                        </div>
                    </div>

                    <label>Full Program Name:
                        <textarea name="programName" value={userData.programName} onChange={handleChange}></textarea>
                    </label><br />

                    <label>Campus: </label>
                    <select name="campus" value={userData.campus} onChange={handleChange}>
                        <option value="">- Select -</option>
                        <option value="king">King</option>
                        <option value="markham">Markham</option>
                        <option value="newnham">Newnham</option>
                        <option value="downtown">Downtown</option>
                    </select><br />

                    <label>Campuses: </label>
                    <select multiple="multiple" name="campuses" value={userData.campuses} onChange={handleChange}>
                        <option value="">- Select -</option>
                        <option value="king">King</option>
                        <option value="markham">Markham</option>
                        <option value="newnham">Newnham</option>
                        <option value="downtown">Downtown</option>
                    </select><br />

                    <label>Housing: </label>
                    <label>
                        Residence <input name="housing" type="radio" checked={userData.housing === "residence"} value="residence" onChange={handleChange} />
                    </label>&nbsp;&nbsp;&nbsp;
                    <label>
                        Off Campus <input name="housing" type="radio" checked={userData.housing === "off campus"} value="off campus" onChange={handleChange} />
                    </label><br />

                    <label>Enrolled: 
                        <input name="enrolled" type="checkbox" checked={userData.enrolled} onChange={handleChange}></input>
                    </label> <br />


                    <button type="submit">Submit</button>
                </form>

                <hr />
                <p><b>The value of state "userData":</b> <mark>{JSON.stringify( userData ) }</mark></p>
            </>
        );
    }
}

export default  UserDataForm;