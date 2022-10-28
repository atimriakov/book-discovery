import { FC } from 'react';
import { BookList} from './components/BookList';
import { Book} from './components/Book';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App: FC = () => {
  return (
    <div>
	<Container>
		<Row className="justify-content-md-center"  md={8}>
			<Col>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<BookList />} />
						<Route path="/:id" element={<Book />} />
					</Routes>
				</BrowserRouter>
			</Col>
		</Row>
	</Container>
    </div>
  );
}

export default App;
