import React from "react";
import CategElems from "../CategElems";
import CategoriesItem from "../CategoriesItem";

const CategoriesList = () => {
  const categElem = CategElems.map((item) => <CategoriesItem />);
  return <div>CategoriesList</div>;
};

export default CategoriesList;
