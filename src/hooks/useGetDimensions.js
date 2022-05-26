import { useDimensions } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";

const useGetDimensions = (isRunning) => {
  const dimensionRef = useRef();
  const dimensions = useDimensions(dimensionRef);
  useEffect(() => {
    if (dimensions && !isRunning) {
      const centerTop = dimensions.contentBox.height / 2 - 25;
      const centerLeft = dimensions.contentBox.width / 2 - 25;
      setButtonTop(centerTop);
      setButtonLeft(centerLeft);
    }
  }, [dimensions]);
};

export default useGetDimensions;
