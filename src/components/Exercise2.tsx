import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Exercise2 = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      {clicked ? (
        <AiFillHeart
          // In color you can use an rgb, hexadecimal or word
          color="red"
          onClick={() => {
            setClicked(false);
            console.log("clicked");
          }}
        />
      ) : (
        <AiOutlineHeart
          onClick={() => {
            setClicked(true);
            console.log("clicked");
          }}
        />
      )}
    </div>
  );
};

export default Exercise2;
