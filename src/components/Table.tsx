import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";
import Button from "./Button";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router";
import AvatarTop from "./AvatarTop";

interface Data {
  name: string;
  email: string;
  departamento: string;
  status: string;
}

function createData(
  name: string,
  email: string,
  departamento: string,
  status: string
): Data {
  return { name, email, departamento, status };
}

const rows = [
  createData("Frozen yoghurt", "brvelosoo@gmail.com", "Design", "Ativo"),
  createData("Ice cream sandwich", "rosalia@gmail.com", "TI", "Ativo"),
  createData("Eclair", "leandro@gmail.com", "Marketing", "Ativo"),
  createData("Cupcake", "miguel@gmail.com", "Design", "Ativo"),
  createData("Gingerbread", "gabi@gmail.com", "Produto", "Inativo"),
];

export default function DataTable() {
  const [order, setOrder] = React.useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("email");

  const handleRequestSort = (property: keyof Data) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedRows = [...rows].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
    return 0;
  });

  const headCells: {
    id: keyof Data;
    label: string;
    align?: "left" | "right";
  }[] = [
    { id: "name", label: "Nome", align: "left" },
    { id: "email", label: "Email", align: "left" },
    { id: "departamento", label: "Departamento", align: "left" },
    { id: "status", label: "Status", align: "right" },
  ];

  return (
    <div className="h-[400px] w-[90%] mx-auto">
      <div className="pb-4 flex justify-end">
        <AvatarTop />
      </div>

      <div className="pb-8 flex items-center justify-between">
        <h1 className="text-[24px] text-[#212B36] font-bold">Colaboradores</h1>
        <Link to="/Basics">
          <Button text="Novo Colaborador" />
        </Link>
      </div>

      <TableContainer component={Paper} className="shadow-lg rounded-lg ">
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
                key={row.name}
                className="hover:bg-gray-100 cursor-pointer"
              >
                <TableCell className="text-[#212B36] text-[14px] font-sans !flex items-center gap-2">
                  <Avatar
                    alt={row.name}
                    src={`https://i.pravatar.cc/40?u=${row.email}`}
                    className="w-8 h-8 rounded-full"
                  />
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.departamento}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
