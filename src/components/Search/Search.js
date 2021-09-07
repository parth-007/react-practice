import './Search.css';
import React, {useState, useEffect} from 'react';
import User from '../User/User';

const Search = () => {

    const [users, setUsers] = useState();

    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/users';

        fetch(url)
            .then(res => res.json())
            .then(function(data){
                setUsers(data);
                console.log(data);
            });

    },[]);

    return (
        <div class="d-flex">
            {users && users.map(u => <User key={u.id} {...u} />)}
        </div>
   );
};

export default Search;