import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMusicLoading } from "../redux/features/musicSlice";
import SideNav from "./SideNav";


const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_STATISTICS" });

    dispatch(getMusicLoading());
  }, [dispatch]);

  return (
    <>
      <Header />  
      <SideNav />
      <Outlet />
    </>
  );
};

export default Layout;
