import {
  DashboardLayout,
  Authentication,
  TaxFilingLayout,
  PartnerLayout,
} from "@layouts";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import PendingFiles from "../pages/PendingFiles";
import History from "../pages/History";
import Wallet from "../pages/Wallet";
import Settings from "../pages/Settings";
import Resources from "../pages/Resources";
import Login from "../pages/login";
import Signup from "../pages/signup";
import PanVerification from "../pages/PanVerification";
import { mainDashboard, partnerDashboard } from "@constants";
import { PartnerDashboard } from "../pages/PartnerDashboard";
import PanDetails from "../pages/PanDetails";
import SignupOtp from "../pages/SignupOtp";
import ProfitAndLoss from "../pages/IncomeTaxFiling/Professional/SubDetails/ProfitAndLoss";

export const DashboardRouter = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <DashboardLayout items={mainDashboard} />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "pending-files",
            element: <PendingFiles />,
          },
          {
            path: "history",
            element: <History />,
          },
          {
            path: "wallet",
            element: <Wallet />,
          },
          {
            path: "resources",
            element: <Resources />,
          },
          {
            path: "support",
            element: <div>Support</div>,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
      {
        element: <Authentication />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
          {
            path: "signupotp",
            element: <SignupOtp />,
          },
        ],
      },
      {
        element: <PartnerLayout />,
        children: [
          {
            path: "/pan-verification",
            element: <PanVerification />,
          },
          {
            path: "/pan-details",
            element: <PanDetails />,
          },
          {
            path: "/income-tax-filing",
            element: <TaxFilingLayout />,
          },
          {
            path: "/profit-and-loss-boa",
            element: <ProfitAndLoss />,
          },
        ],
      },
      {
        element: <DashboardLayout items={partnerDashboard} />,
        children: [
          {
            path: "/partner/dashboard",
            element: <PartnerDashboard />,
          },
          {
            path: "/partner/resources",
            element: <>partner</>,
          },
          {
            path: "/partner/support",
            element: <>partner</>,
          },
          {
            path: "/partner/settings",
            element: <>partner</>,
          },
        ],
      },
    ],
  },
]);
