import type { Component } from 'solid-js';
import { Route, Routes } from '@solidjs/router';

import Home from './routes/Home/Home';

const App: Component = () => {
  return <>
		<Routes>
			<Route path="/" component={Home} />
		</Routes>
	</>;
};

export default App;
