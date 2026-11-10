import { createContext, useContext } from "react";

export const ItemContext = createContext();
//allows me to just equate the deconstructed values without importing itemContext anymore just the function
export const useItemContext = () => useContext(ItemContext);