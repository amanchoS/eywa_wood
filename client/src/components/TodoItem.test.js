import { render, screen} from '@testing-library/react';
import TodoItem from './TodoItem';

describe('Todo item component', () => {
    test('buttons are visible', () => {
        render(<TodoItem title="Test item" />);
        
        const doneButton = screen.getByText('Done');
        const deleteButton = screen.getByText('Delete');


        expect(doneButton).toBeInTheDocument();
        expect(deleteButton).toBeInTheDocument();

    });
});