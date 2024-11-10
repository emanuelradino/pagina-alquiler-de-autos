import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableReservesProps } from "./TableReserves.types";
import { formatPrice } from "@/lib/formatPrice";
import { format } from "date-fns";

export function TableReserves(props: TableReservesProps) {
  const { orders } = props;

  const totalAmount = orders.reduce((acc, booking) => {
    return acc + parseFloat(booking.totalAmount);
  }, 0);

  return (
    <Table>
      <TableCaption>Una lista de sus reservas recientes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Auto</TableHead>
          <TableHead>Fecha de inicio</TableHead>
          <TableHead>Fecha de fin</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead className="text-right">Total a pagar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.carName}</TableCell>
            <TableCell>
              {format(new Date(order.orderDate), "dd/MM/yyyy")}
            </TableCell>
            <TableCell>
              {format(new Date(order.orderEndDate), "dd/MM/yyyy")}
            </TableCell>
            <TableCell>
              <div className="p-2 text-white bg-green-600 rounded-lg w-fit">
                {order.status}
              </div>
            </TableCell>
            <TableCell className="text-right">
              {formatPrice(Number(order.totalAmount))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">
            {formatPrice(totalAmount)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}