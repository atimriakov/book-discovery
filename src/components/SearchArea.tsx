import { FC } from 'react';
import Form from 'react-bootstrap/Form';

type Props = {
	filterText: string | number,
	setFilterText: (props: any) => void
}

export const SearchArea: FC<Props> = ({filterText, setFilterText}) => {
	return (
		<>	
			<br />	
				<Form.Control 
					placeholder="Enter Book name" 
					value={filterText} 
					type="text" 
					onChange={(e) => setFilterText(e.target.value)} 
				/>
			<br />
		</>
	);
}