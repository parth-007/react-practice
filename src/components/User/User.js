
import './User.css';
const User = (props) => {
    return (
        <div class='card'>
            <p><strong>ID:</strong> {props.id}</p>
            <p><strong>Username:</strong> {props.username}</p>
            <p><strong>Name:</strong> {props.name}</p>
            <p><strong>Email:</strong> {props.email}</p>
            <p><strong>Suite:</strong> {props.address.suite}</p>
            <p><strong>Phone:</strong> {props.phone}</p>
            <p><strong>Website:</strong> {props.website}</p>
        </div>
    );
}

export default User;