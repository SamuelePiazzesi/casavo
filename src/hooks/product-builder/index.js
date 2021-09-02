import { useContext } from "react";
import { ProductBuilderContext } from "../../context/product-builder";

const useSteps = () => useContext(ProductBuilderContext);

export default useSteps;
