const Paginate = ({postsPerPage, totalPosts, paginate}) => {
    const numbers = [];

    for(let i=1; i<=Math.ceil(totalPosts / postsPerPage);i++){
        numbers.push(i);
    }

    console.log(numbers);
    return(
        <nav>
            <ul>
                {numbers.map(number => (
                    <li><a href='#' onClick={() => paginate(number)}>{number}</a></li>
                ))}
            </ul>
        </nav>
    );
}
export default Paginate;