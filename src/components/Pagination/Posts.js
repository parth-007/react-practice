import Paginate from "./Paginate";

const Posts = ({posts, loading}) => {
    if(loading) {
        return <h2>Loading</h2>
    }
    return (
        <div>
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
}

export default Posts;