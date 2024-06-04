import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {useState} from "react";

interface Props {
  onClick: () => void;
}

const Like = ({onClick}: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  }
  if (status) return <AiFillHeart color="red" size={20} onClick={toggle}/>
  return <AiOutlineHeart color="red" size={20} onClick={toggle}/>
};

export default Like;
