import React, {useState, useEffect} from 'react';

function RenderingData() {
    // const [users, setUsers] = useState([
    const users = ([
        { 'user': 'fred',    'active': false, 'age': 40 },
        { 'user': 'pebbles', 'active': false, 'age': 1  },
        { 'user': 'barney',  'active': true,  'age': 36 }
    ]);


    const [loading, setLoading] = useState(false);

    useEffect(()=>{ // used to demo the state "loading"
        let timerID = setInterval(() => {
            setLoading( prev => !prev );
        }, 1000);

        return ()=>{ // clean up step (runs before the component is "unmounted")
            clearInterval(timerID); 
        };
    }, []); 

    if(!loading){
        return (
            <div >
                <h2>RenderingData Component</h2>

                <br />
                <b>Logical &amp;&amp; Operator (If)</b>
                { users[0].active && <p>{users[0].user} is Active!</p> }
                { users[2].active && <p>{users[2].user} is Active!</p> }

                <b>Ternary Operator (If-Else)</b>
                {users[0].active ? (
                    <p>{users[0].user} is Active!</p>
                ) : (
                    <p>{users[0].user} is Inactive!</p>
                )}

                <b>Array.map() (Iteration)</b>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Active</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => 
                            <tr key={index}>
                                <td>{user.user}</td>
                                <td>{(user.active) ? "yes" : "no"}</td>
                                <td>{user.age}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );

    }else{
        return null; // don't render anything - still loading
    }
}

export default RenderingData;