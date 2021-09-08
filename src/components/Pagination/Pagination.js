import {useState, useEffect} from 'react';
import Posts from './Posts';
import Paginate from './Paginate';
import axios from "axios";

const Pagination = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        setLoading(true);
        const url = 'https://jsonplaceholder.typicode.com/posts';

        const fetchPosts = async () => {
            const response = await axios.get(url);
            setPosts(response.data);
            setLoading(false);
        }
        fetchPosts();
    }, []);

    const lastIndex = currentPage * postsPerPage;
    const firstIndex = lastIndex - postsPerPage;
    const currentPosts = posts.slice(firstIndex, lastIndex);

    const paginate = (number) => setCurrentPage(number);

    return (
        <div>
            <Posts posts={currentPosts} loading={loading}/>
            <Paginate postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>
    );
}

export default Pagination;