import React, { useState, useEffect } from "react";
import { ReactPictureAnnotation } from "react-picture-annotation";
import Dropdown from "./Dropdown";

const Annotataor = (props) => {
  const [pageSize, setPageSize] = useState({
    width: 800,
    height: 600,
  });

  useEffect(() => {
    // Check if the window object is available
    if (typeof window !== "undefined") {
      // Set the initial page size
      setPageSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      // Add event listener for window resize
      const handleResize = () => {
        setPageSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener("resize", handleResize);

      // Clean up the event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const onSelect = (e, selectedId) =>
    console.log("onselct", selectedId, "e", e);
  const onChange = (data) => console.log("onChnage", data);

  return (
    <div className="annotation">
      <ReactPictureAnnotation
        {...props}
        inputElement={(value, onChange, onDelete) => (
          <Dropdown
            value={value}
            onChange={onChange}
            onDelete={onDelete}
            options={props.options}
          />
        )}
        image="https://source.unsplash.com/random/800x600"
        onSelect={onSelect}
        onChange={onChange}
        width={pageSize.width}
        height={pageSize.height}
      />
    </div>
  );
};

export default Annotataor;
