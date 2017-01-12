import React from 'react';
import OverlayMenu from '../../components/OverlayMenu';
import Radium from 'radium';

const AppLayout = ({content}) => (
	<div style={styles}>
        <OverlayMenu />
		{content}
	</div>
)

const styles = {
	height: '100vh',
    overflow: 'auto'
}

export default Radium(AppLayout);
