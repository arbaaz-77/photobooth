import React from "react";
import { Grid } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Grid color="purple" height="50" width="200" className="m-5" />
      <p className="text-lg text-center py-2">{message}</p>
    </div>
  );
};

export default Spinner;
