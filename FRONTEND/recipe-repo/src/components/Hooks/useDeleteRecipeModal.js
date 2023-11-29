import { useState } from "react";

export default function useDeleteRecipeModal() {
  const [deleteIsOpen, setisOpen] = useState(false);

  const deleteToggle = () => {
	if(!deleteIsOpen){
		document.body.style.overflow = 'hidden';
	}
	else{
		document.body.style.overflow = 'unSet';
	}
	window.scrollTo({top: 0});
    setisOpen(!deleteIsOpen);
  };

  return {
    deleteIsOpen,
    deleteToggle
  };
}