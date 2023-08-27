import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layout
import RootLayout from "./Layout/RootLayout";

// Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AllCatrgories from "./Pages/AllCatrgories";
import Booking from "./Pages/Booking";
import Userprofile from "./Pages/Userprofile";
import SingleCategory from "./Pages/SingleCategory";
import ServiceCardDetails from "./Pages/ServiceCardDetails";
import ActiveBooking from "./Pages/ActiveBooking";
import AllBooking from "./Pages/AllBooking";
import { Navigate } from "react-router-dom/dist";

const App = () => {
  const RequireAuth = ({ children }) => {
    const activeUser = localStorage.getItem("user");
    const currentUser = JSON.parse(activeUser);

    return currentUser ? children : <Navigate to="/login" />;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route
          path="userprofile"
          element={
            <RequireAuth>
              <Userprofile />
            </RequireAuth>
          }
        />

        <Route
          path="business/serviceProfile/:id"
          element={<ServiceCardDetails />}
        />
        <Route path="Categories" element={<AllCatrgories />} />
        <Route
          path="singleCategory/:singlecategory"
          element={<SingleCategory />}
        />
        <Route path="Booking" element={<Booking />} />
        <Route
          path="allbookings"
          element={
            <RequireAuth>
              <AllBooking />
            </RequireAuth>
          }
        />
        <Route
          path="ActiveBooking"
          element={
            <RequireAuth>
              <ActiveBooking />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
