import React from "react";
import { useSelector } from "react-redux";

import AppRoutes from "./Routes/AppRoutes";
import Spinner from "./Spinner/Spinner";

import { MainAppWrapper } from "./Views/MainAppStyles";

const MainApp = () => {
  const { loading } = useSelector((state) => state.auth);
  const data = useSelector((state) => state.data);

  return (
    <MainAppWrapper>
      {loading && <Spinner />}
      {data.loading && <Spinner />}
      <AppRoutes />
    </MainAppWrapper>
  );
};

export default MainApp;
