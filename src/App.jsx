import './App.css';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';
import Login from './components/Login/login';
import Carrito from './components/carrito/carrito';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/register/register';
import Terrenos from './components/medicion-de-terrenos/terrenos';






function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<>
						<Header />
						<Body />
						<Footer />

					</>} />
					<Route path="/login" element={<>
						<Header />
						<Login />
						<Footer />

					</>} />
					<Route path="/carrito" element={<>
						<Header />
						<Carrito />
						<Footer />

					</>} />
					<Route path="/register" element={<>
						<Header />
						<Register />
						<Footer />

					</>} />
					<Route path="/terrenos" element={<>
						<Header />
						<Terrenos />
						<Footer />

					</>} />



				</Routes>
			</BrowserRouter>

		</div>
	);
}

export default App;
