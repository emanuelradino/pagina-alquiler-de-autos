import { Calendar, Car, Heart, SquareGanttChart } from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: Car,
    label: "Autos",
    href: "/dashboard",
  },
  {
    icon: Calendar,
    label: "Reserva de Autos",
    href: "/reserves",
  },
  {
    icon: Heart,
    label: "Mis Autos Favoritos",
    href: "/loved-cars",
  },
];

export const dataAdminSidebar = [
  {
    icon: SquareGanttChart,
    label: "Administra tus Autos",
    href: "/dashboard/admin/cars-manager",
  },
  {
    icon: Calendar,
    label: "Todas las Reservas",
    href: "/dashboard/admin/reserves-admin",
  },
];
