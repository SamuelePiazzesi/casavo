import React from "react";
import { ProductBuilderProvider } from "../../context/product-builder";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
	return (
		<ProductBuilderProvider>
			<Header />
			<div className="relative">
				<div className="pt-24 pb-16 xl:py-56 lg:py-64 lg:mx-16 xl:mx-80 px-4 h-full">
					ì{children}
				</div>
			</div>

			<Footer />
		</ProductBuilderProvider>
	);
};

export default Layout;
