import React from 'react';
import Radium from 'radium';

const PublicLayout = ({content}) => (
	<div style={styles}>
		{content}
	</div>
)

const styles = {
	backgroundColor: '#3498db',
    height: '100vh',
    overflow: 'auto'
}

export default Radium(PublicLayout);
