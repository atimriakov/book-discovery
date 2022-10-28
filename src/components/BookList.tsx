import {useState, useEffect, FC} from 'react';
import { SearchArea } from './SearchArea';
import { Link  } from 'react-router-dom';
import { Loading } from './Loading';
import { BASE_BOOK_URL } from '../utils/constants';
import { IBook } from '../utils/types';


export const BookList: FC = () => {
	const [books, setBooks] = useState<IBook[]>([]);
	const [filterText, setFilterText] = useState('');
	const [loading, setLoading] = useState(true);
		
	useEffect(() => {
		setLoading(true);
		fetch(`${BASE_BOOK_URL}?q=${filterText}`)
		.then((responce) => {setLoading(false); return responce.json()})
		.then((data) => setBooks(data.books));
	}, [filterText]);
	

	return(
		<>
			<SearchArea filterText={filterText} setFilterText={setFilterText}/>
			{loading && <Loading />}
			{books.length ? books.map((book) => (
				<p key={book.id}>
				
				<Link to={book.id}> 
					{book.title}
				</Link> - {book.author} 
				</p>
			) )
			: <p>No book found</p>
			}	
		</>
	)
}