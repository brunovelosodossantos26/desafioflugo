import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import Button from "./Button";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router";
import { db } from "../server/firebase";
import { collection, getDocs } from "firebase/firestore";

export type User = {
  id: string;
  titulo: string;
  email: string;
  status: boolean;
  departamento: string;
};

export default function DataTable() {
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<keyof User>("email");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const colaboradoresCollectionRef = collection(db, "Colaboradoes");
    const getUsers = async () => {
      const data = await getDocs(colaboradoresCollectionRef);
      setUsers(
        data.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<User, "id">),
        }))
      );
    };
    getUsers();
  }, []);

  const handleRequestSort = (property: keyof User) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedRows = [...users].sort((a, b) => {
    let valueA: string | boolean = a[orderBy];
    let valueB: string | boolean = b[orderBy];

    if (orderBy === "status") {
      valueA = a.status ? "Ativo" : "Inativo";
      valueB = b.status ? "Ativo" : "Inativo";
    }

    if (valueA < valueB) return order === "asc" ? -1 : 1;
    if (valueA > valueB) return order === "asc" ? 1 : -1;
    return 0;
  });

  const headCells: {
    id: keyof User;
    label: string;
    align?: "left" | "right";
  }[] = [
    { id: "titulo", label: "Nome", align: "left" },
    { id: "email", label: "Email", align: "left" },
    { id: "departamento", label: "Departamento", align: "left" },
    { id: "status", label: "Status", align: "right" },
  ];

  return (
    <div className="w-full p-4 sm:p-6 md:p-10 mx-auto">
      <div className="pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-[24px] text-[#212B36] font-bold">Colaboradores</h1>
        <Link to="/Basics">
          <Button text="Novo Colaborador" />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <TableContainer
          component={Paper}
          className="shadow-lg rounded-lg min-w-[600px]"
        >
          <Table className="min-w-full">
            <TableHead className="bg-[#F4F6F8] text-white font-sans text-[14px]">
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell key={headCell.id} align={headCell.align || "left"}>
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : "asc"}
                      onClick={() => handleRequestSort(headCell.id)}
                      className="!text-[#637381]"
                    >
                      {headCell.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {sortedRows.map((row) => (
                <TableRow
                  key={row.id}
                  className="hover:bg-gray-100 cursor-pointer"
                >
                  <TableCell className="text-[#212B36] text-[14px] font-sans !flex items-center gap-2">
                    <Avatar
                      alt={row.titulo}
                      src={`https://i.pravatar.cc/40?u=${row.email}`}
                      className="w-8 h-8 rounded-full"
                    />
                    {row.titulo}
                  </TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.departamento}</TableCell>
                  <TableCell align="right">
                    <span
                      className={`px-2 py-1 rounded-md text-sm font-bold ${
                        row.status
                          ? "bg-[#22C55E29] text-[#118D57]"
                          : "bg-[#FF563029] text-[#B71D18]"
                      }`}
                    >
                      {row.status ? "Ativo" : "Inativo"}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
