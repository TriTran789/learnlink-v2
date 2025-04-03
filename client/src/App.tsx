import { useRoutes } from "react-router-dom";
import PATH from "@/constants/PATH";
import HomePage from "@/pages/HomePage";
import SignInPage from "@/pages/SignInPage";
import DashboardLayout from "@/layouts/DashboardLayout";
import TeacherPage from "./pages/TeacherPage";

const App = () => {
  return useRoutes([
    {
      path: PATH.HOME,
      element: <HomePage />,
    },
    {
      path: PATH.SIGN_IN,
      element: <SignInPage />,
    },
    {
      path: PATH.DASHBOARD,
      element: <DashboardLayout />,
      children: [
        {
          path: PATH.TEACHERS,
          element: <TeacherPage />,
        },
      ],
    },
  ]);
};

export default App;
