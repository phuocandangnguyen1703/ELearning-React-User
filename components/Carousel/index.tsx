import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Button, { EButton } from "../Button";
import Image from "next/image";

export default function Carousel() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const items = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  ];

  // we want the scope to be always to be in the scope of the array so that the carousel is endless
  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length;

  // so that the carousel is endless, we need to repeat the items twice
  // then, we slice the the array so that we only have 3 items visible at the same time
  const visibleItems = [...items, ...items].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );
  const handleClick = (newDirection: any) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };
  return (
    <div className="main-wrapper">
      <div className="wrapper h-[450px]">
        {/*AnimatePresence is necessary to show the items after they are deleted because only max. 3 are shown*/}
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item, index) => {
            // The layout prop makes the elements change its position as soon as a new one is added
            // The key tells framer-motion that the elements changed its position
            return (
              <motion.div
                className="card"
                key={item}
                layout
                custom={{
                  direction,
                  position: () => {
                    if (item === visibleItems[0]) {
                      return "left";
                    } else if (item === visibleItems[1]) {
                      return "center";
                    } else {
                      return "right";
                    }
                  },
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1 }}
              >
                {index === 1 ? (
                  <div className="shadow-xl bg-gradient-gray rounded-md flex-1 w-full flex items-center justify-center h-[450px]">
                    <Image
                      src={item}
                      alt={"image"}
                      width={450}
                      height={450}
                      className="h-[450px] rounded-md object-cover"
                    ></Image>
                  </div>
                ) : (
                  <div className="py-36 shadow-xl bg-gradient-gray rounded-md w-full flex items-center justify-center flex-1 h-[300px]">
                    <Image
                      src={item}
                      alt={"image"}
                      width={450}
                      height={450}
                      className="h-[450px] rounded-md object-cover"
                    ></Image>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="buttons">
        <Button
          type={EButton.Rounded}
          onClick={() => handleClick(-1)}
          width={50}
          height={50}
        >
          <i className="fa-solid fa-angle-left"></i>
        </Button>
        <Button
          type={EButton.Rounded}
          onClick={() => handleClick(1)}
          width={50}
          height={50}
        >
          <i className="fa-solid fa-angle-right"></i>
        </Button>
      </div>
    </div>
  );
}

const variants = {
  enter: ({ direction }: any) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position, direction }: any) => {
    return {
      scale: position() === "center" ? 1 : 0.9,
      width: position() === "center" ? "450px" : "100px",
      x: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: position() === "center" ? 1 : 0.7,
    };
  },
  exit: ({ direction }: any) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  },
};

function getZIndex({ position, direction }: any) {
  const indexes = {
    left: direction > 0 ? 2 : 1,
    center: 3,
    right: direction > 0 ? 1 : 2,
  };
  return Object(indexes)[position()];
}
