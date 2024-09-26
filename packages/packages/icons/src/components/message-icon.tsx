import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@elementor/ui';

const MessageIcon = React.forwardRef( ( props: SvgIconProps, ref ) => {
	return (
		<SvgIcon viewBox="0 0 24 24" { ...props } ref={ ref }>
			<path fillRule="evenodd" clipRule="evenodd" d="M7 5C6.40326 5 5.83097 5.23705 5.40901 5.65901C4.98705 6.08097 4.75 6.65326 4.75 7.25V18.4393L7.46967 15.7197C7.61032 15.579 7.80109 15.5 8 15.5H17C17.5967 15.5 18.169 15.2629 18.591 14.841C19.0129 14.419 19.25 13.8467 19.25 13.25V7.25C19.25 6.65326 19.0129 6.08097 18.591 5.65901C18.169 5.23705 17.5967 5 17 5H7ZM4.34835 4.59835C5.05161 3.89509 6.00544 3.5 7 3.5H17C17.9946 3.5 18.9484 3.89509 19.6516 4.59835C20.3549 5.30161 20.75 6.25544 20.75 7.25V13.25C20.75 14.2446 20.3549 15.1984 19.6516 15.9017C18.9484 16.6049 17.9946 17 17 17H8.31066L4.53033 20.7803C4.31583 20.9948 3.99324 21.059 3.71299 20.9429C3.43273 20.8268 3.25 20.5533 3.25 20.25V7.25C3.25 6.25544 3.64509 5.30161 4.34835 4.59835Z" />
		</SvgIcon>
	);
} );

export default MessageIcon;
