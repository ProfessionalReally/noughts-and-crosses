import { FieldLayout } from './FieldLayout';
import { useReduxSelector } from '@src/hooks/useReduxSelector';

export const Field = () => {
	const { field } = useReduxSelector((state) => state);

	return <FieldLayout field={field} />;
};
