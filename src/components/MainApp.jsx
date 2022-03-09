import React from "react";
import { useSelector } from "react-redux";

import LoginError from "./ErrorMsg/LoginError";
import SearchError from "./ErrorMsg/SearchError";
import AppRoutes from "./Routes/AppRoutes";
import Spinner from "./Spinner/Spinner";
import { AppWrapper } from "./styles/globalstyles";

const MainApp = () => {
  const auth = useSelector((state) => state.auth);
  const data = useSelector((state) => state.data);
  const cat = useSelector((state) => state.cat);

  return (
    <AppWrapper>
      <AppRoutes />
      {auth.error && <LoginError />}
      {data.error && <SearchError />}
      {auth.loading && <Spinner />}
      {data.loading && <Spinner />}
      {cat.loading && <Spinner />}
    </AppWrapper>
  );
};

export default MainApp;
