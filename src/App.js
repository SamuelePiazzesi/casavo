import Footer from "./components/footer";
import Header from "./components/header";
import Steps from "./components/steps";
import { StepsProvider } from "./context/steps";

const App = () => {
	return (
		<>
			<StepsProvider>
				<Header />
				<div className='relative'>
					<div className='pt-24 pb-16 xl:py-56 lg:py-64 lg:mx-16 xl:mx-80 px-4 h-full'>
						<Steps />
					</div>
				</div>

				<Footer />
			</StepsProvider>
		</>
	);
};

export default App;
