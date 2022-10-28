import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, FC } from 'react';
import { BASE_BOOK_URL } from '../utils/constants';
import { IBook } from '../utils/types';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Book: FC = () => {
	const {id} = useParams();
	const navigate = useNavigate();
	const [book, setBook] = useState<IBook>();
		
	useEffect(() => {
		fetch(`${BASE_BOOK_URL}/${id}`)
		.then((responce) => responce.json())
		.then((data) => setBook(data.book));
	}, []);
	
	
	return(
		<>
		{book &&
			<Card style={{ width: '70rem' }}>
			  <Row className='no-gutters'>
			  <Col md={5} lg={5}  >
			  <Card.Img variant="top" src={book.coverImageUrl} />
			  </Col>
			  <Col>
			  <Card.Body>
				<Card.Title>{book.title}</Card.Title>
				<Card.Subtitle>- {book.author}</Card.Subtitle>
				<Card.Text>{book.synopsis}</Card.Text>
				<Button variant="primary" onClick={() => navigate(-1)}>Go back to list</Button>
			  </Card.Body>
			  </Col>
			  </Row>
			</Card>
		}
		</>
	)
}