import React from "react";
import { ProductBuilderProvider } from "../../context/product-builder";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
	return (
		<ProductBuilderProvider>
			<Header />
			<div className="relative">
				<div className="pt-32 pb-16 xl:py-48 md:py-36 lg:py-64 lg:mx-16 xl:mx-96 px-4 h-full">
					{children}
				</div>
			</div>

			<Footer />
		</ProductBuilderProvider>
	);
};

export default Layout;
