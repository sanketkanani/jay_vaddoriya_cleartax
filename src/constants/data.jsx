import { NavLink } from "react-router-dom";
import { Icons } from "./icons";

export const PendingITRFiles = [
  {
    name: "Viren Kumar",
    panNo: "CVPXXXXX",
    ay: "2018-19",
    taxAmount: "8121",
  },
  {
    name: "Viren Kumar",
    panNo: "CVPXXXXX",
    ay: "2018-19",
    taxAmount: "8121",
  },
  {
    name: "Viren Kumar",
    panNo: "CVPXXXXX",
    ay: "2018-19",
  },
  {
    name: "Viren Kumar",
    panNo: "CVPXXXXX",
    ay: "2018-19",
    taxAmount: "8121",
  },
  {
    name: "Viren Kumar",
    panNo: "CVPXXXXX",
    ay: "2018-19",
  },
  {
    name: "Viren Kumar",
    panNo: "CVPXXXXX",
    ay: "2018-19",
  },
  {
    name: "Viren Kumar",
    panNo: "CVPXXXXX",
    ay: "2018-19",
    taxAmount: "8121",
  },
  {
    name: "Viren Kumar",
    panNo: "CVPXXXXX",
    ay: "2018-19",
    taxAmount: "8121",
  },
];

export const PreviousRechargesData = [
  {
    iconColor: "#16DBCC",
    iconBGColor: "#DCFAF8",
    icon: Icons.AppleOutline,
    text: "Money added ",
    time: "5h ago",
    price: "$450",
  },
  {
    iconColor: "#FFBB38",
    iconBGColor: "#FFF5D9",
    icon: Icons.UserOutline,
    text: "Money added ",
    time: "2 days ago",
    price: "$160",
  },
  {
    iconColor: "#396AFF",
    iconBGColor: "#E7EDFF",
    icon: Icons.PlayStation,
    text: "Money added ",
    time: "5 days ago",
    price: "$1085",
  },
  {
    iconColor: "#FF82AC",
    iconBGColor: "#FFE0EB",
    icon: Icons.UserOutline,
    text: "Money added ",
    time: "10 days ago",
    price: "$90",
  },
];

export const LastTransactionData = [
  {
    iconColor: "#FF82AC",
    iconBGColor: "#FFE0EB",
    icon: Icons.UserOutline,
    text: "Filed for Akash Akshay",
    num: "CFSXXXXX",
    date1: "25 Jan 2021",
    date2: "12 March 2024",
    status: "Pending",
    amount: "-$150",
  },
  {
    iconColor: "#396AFF",
    iconBGColor: "#E7EDFF",
    icon: Icons.PlayStation,
    text: "Filed for Akash Akshay",
    num: "CFSXXXXX",
    date1: "25 Jan 2021",
    date2: "12 March 2024",
    status: "Completed",
    amount: "-$340",
  },
  {
    iconColor: "#FF82AC",
    iconBGColor: "#FFE0EB",
    icon: Icons.UserOutline,
    text: "Filed for Akash Akshay",
    num: "CFSXXXXX",
    date1: "25 Jan 2021",
    date2: "12 March 2024",
    status: "Completed",
    amount: "-$340",
  },
];

export const EBooksData = [
  {
    iconColor: "#396AFF",
    iconBGColor: "#E7EDFF",
    icon: Icons.Settings,
    text: "Guide to save max tax ",
  },
  {
    iconColor: "#28C5B9",
    iconBGColor: "#DCFAF8",
    icon: Icons.Renew,
    text: "Guide to save max tax ",
    isVideo: true,
  },
  {
    iconColor: "#FF82AC",
    iconBGColor: "#FFE0EB",
    icon: Icons.UserOutline,
    text: "Guide to save max tax ",
    isDocument: true,
  },
  {
    iconColor: "#396AFF",
    iconBGColor: "#E7EDFF",
    icon: Icons.Settings,
    text: "Guide to save max tax ",
  },
  {
    iconColor: "#28C5B9",
    iconBGColor: "#DCFAF8",
    icon: Icons.Renew,
    text: "Guide to save max tax ",
  },
  {
    iconColor: "#FF82AC",
    iconBGColor: "#FFE0EB",
    icon: Icons.UserOutline,
    text: "Guide to save max tax ",
  },
  {
    iconColor: "#396AFF",
    iconBGColor: "#E7EDFF",
    icon: Icons.Settings,
    text: "Guide to save max tax ",
  },
  {
    iconColor: "#28C5B9",
    iconBGColor: "#DCFAF8",
    icon: Icons.Renew,
    text: "Guide to save max tax ",
  },
  {
    iconColor: "#FF82AC",
    iconBGColor: "#FFE0EB",
    icon: Icons.UserOutline,
    text: "Guide to save max tax ",
  },
];

export const mainDashboard = [
  {
    key: "/",
    icon: Icons.Home,
    label: <NavLink to="/"> Dashboard </NavLink>,
  },
  {
    key: "/pending-files",
    icon: Icons.PendingFiles,
    label: <NavLink to="/pending-files"> Pending Files </NavLink>,
  },
  {
    key: "/history",
    icon: Icons.History,
    label: <NavLink to="/history"> History </NavLink>,
  },
  {
    key: "/wallet",
    icon: Icons.Wallet,
    label: <NavLink to="/wallet"> Wallet </NavLink>,
  },
  {
    key: "/resources",
    icon: Icons.Resources,
    label: <NavLink to="/resources"> Resources </NavLink>,
  },
  {
    key: "/support",
    icon: Icons.User,
    label: <NavLink to="/support"> Support </NavLink>,
  },
  {
    key: "/settings",
    icon: Icons.Setting,
    label: <NavLink to="/settings"> Settings </NavLink>,
  },
];

export const partnerDashboard = [
  {
    key: "/partner/dashboard",
    icon: Icons.Home,
    label: <NavLink to="/partner/dashboard"> Dashboard </NavLink>,
  },
  {
    key: "/partner/resources",
    icon: Icons.Resources,
    label: <NavLink to="/partner/resources"> Resources </NavLink>,
  },
  {
    key: "/partner/support",
    icon: Icons.User,
    label: <NavLink to="/partner/support"> Support </NavLink>,
  },
  {
    key: "/partner/settings",
    icon: Icons.Setting,
    label: <NavLink to="/partner/settings"> Settings </NavLink>,
  },
];
