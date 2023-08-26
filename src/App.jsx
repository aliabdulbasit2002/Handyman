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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="userprofile" element={<Userprofile />} />
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
        <Route path="ActiveBooking" element={<ActiveBooking/>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
