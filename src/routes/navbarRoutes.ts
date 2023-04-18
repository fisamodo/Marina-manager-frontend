export const publicRoutes = [
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

export const privateRoutes = [
  {
    name: "Admin Dashbaord",
    route: "/admin-dashboard",
    isAdminRoute: true,
  }
]