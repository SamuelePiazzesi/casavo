import { useContext } from "react";
import { StepsContext } from "../../context/steps";

const useSteps = () => useContext(StepsContext);

export default useSteps;
