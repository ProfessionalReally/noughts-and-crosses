import { FieldLayout } from './FieldLayout';
import { connect } from 'react-redux';
import { selectField } from '@src/redux/selectors';
import { Component } from 'react';
import { RootState } from '@src/redux/store';

type FieldProps = ReturnType<typeof mapStateToProps>;

export class FieldComponent extends Component<FieldProps> {
	render() {
		const { field } = this.props;
		return <FieldLayout field={field} />;
	}
}

const mapStateToProps = (state: RootState) => ({ field: selectField(state) });

export const Field = connect(mapStateToProps)(FieldComponent);
