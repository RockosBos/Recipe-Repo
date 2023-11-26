import { useState } from "react";

export default function useDeleteRecipeModal() {
  const [isOpen, setisOpen] = useState(false);

  const deleteToggle = () => {
	console.log("Test");
	if(!isOpen){
		document.body.style.overflow = 'hidden';
	}
	else{
		document.body.style.overflow = 'unSet';
	}
	window.scrollTo({top: 0});
    setisOpen(!isOpen);
  };

  return {
    isOpen,
    deleteToggle
  };
}