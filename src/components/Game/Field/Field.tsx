import { FieldLayout } from './FieldLayout';
import { useSelector } from 'react-redux';
import { selectField } from '@src/redux/selectors';

export const Field = () => {
	const field = useSelector(selectField);

	return <FieldLayout field={field} />;
};
