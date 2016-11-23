import React from 'react';
import OverlayMenu from '../components/OverlayMenu.jsx';

export default AppLayout = ({content}) => (
	<div className="app-layout">
        <OverlayMenu />
		{content}
	</div>
)
