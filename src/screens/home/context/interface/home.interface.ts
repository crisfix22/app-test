import { Operation } from "../../services/interfaces/home.interfaces";

export interface HomeContextType {
    operations: Array<Operation>;
    setOperations: (operations: Array<Operation>) => void;
}