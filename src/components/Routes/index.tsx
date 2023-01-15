import { BrowserRouter, Route, Routes as RoutesWrapper } from 'react-router-dom';
import Profiles from '../Pages/Profiles';


export default function Routes(){
	return(
		<BrowserRouter>
			<RoutesWrapper>
				<Route path='/' element={<Profiles />}/>
			</RoutesWrapper>
		</BrowserRouter>
	);
}