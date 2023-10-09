import "./App.css";
import Search from "./Components/Search";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Home />,
      },
      {
         path: "/Search",
         element: <Search />,
      },
   ]);
   return (
      <>
         <RouterProvider router={router} />
         <div className="modifFooter">
            <Footer />
         </div>
      </>
   );
}

export default App;
