import { FieldLayout } from './FieldLayout';
import { selectField } from '@src/redux/selectors';
import { useAppSelector } from '@src/redux/hooks';

export const Field = () => {
	const field = useAppSelector(selectField);

	return <FieldLayout field={field} />;
};
