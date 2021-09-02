import Footer from "./components/footer";
import Header from "./components/header";
import Steps from "./components/steps";
import { StepsProvider } from "./context/steps";

const App = () => {
	return (
		<>
			<StepsProvider>
				<Header />

				{/* <div className='relative h-screen'>
					<div className='lg:py-56 lg:mx-80 px-4 lg:px-20'>
						<Steps />
					</div>
				</div> */}

				<Footer />
			</StepsProvider>
		</>
	);
};

export default App;
