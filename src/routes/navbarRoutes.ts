export const employeeRoutes = [
  {
    name: "Home",
    route: "/",
    isAdminRoute: false,
  },
  {
    name: "About",
    route: "/about",
    isAdminRoute: false,
  },
  {
    name: "Contact",
    route: "/contact",
    isAdminRoute: false,
  },
];

export const adminRoutes = [
  {
    name: "Admin Dashbaord",
    route: "/admin-dashboard",
    isAdminRoute: true,
  },
  {
    name: "Admin Marina",
    route: "/admin-marina",
    isAdminRoute: true,
  },
];
