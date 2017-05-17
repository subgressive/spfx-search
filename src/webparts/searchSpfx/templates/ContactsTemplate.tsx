import * as React from 'react';

import styles from '../components/SearchSpfx.module.scss';
import { ISearchSpfxWebPartProps } from '../ISearchSpfxWebPartProps';

export interface IContactsTemplate extends ISearchSpfxWebPartProps {
	results: any[];
}

export default class ContactsTemplate extends React.Component<IContactsTemplate, {}> {
	public render(): JSX.Element {
		return (
			<div className={styles.searchSpfx}>
				<div className={styles.searchSpfx}>
					<h1 className='ms-font-xxl'>Contacts</h1>
					{
						this.props.results.map((result, index) => {
							return (
								<div>
								<h3>{result.UserName}</h3>
								{result.JobTitle}<br/>
								{result.WorkEmail}<br/>
								<br/>
								</div>
							);
						})
					}
				</div>
			</div>
		);
	}
}