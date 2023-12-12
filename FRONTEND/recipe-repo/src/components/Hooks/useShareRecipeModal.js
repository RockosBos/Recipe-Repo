import { useState } from "react";

export default function useShareRecipeModal() {
  const [shareIsOpen, setisOpen] = useState(false);

  const shareToggle = () => {
	if(!shareIsOpen){
		document.body.style.overflow = 'hidden';
	}
	else{
		document.body.style.overflow = 'unSet';
	}
	window.scrollTo({top: 0});
    setisOpen(!shareIsOpen);
  };

  return {
    shareIsOpen,
    shareToggle
  };
}