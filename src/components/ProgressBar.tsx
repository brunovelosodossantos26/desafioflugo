import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  value: number;
};

export default function ProgressBar({ value }: Props) {
  return (
    <Box className="w-full">
      <Box className="mb-2 flex text-[#919EAB]">
        <span className="pr-4 text-[#212B36]">Colaboradores </span> •
        <p className="pl-4"> Cadastrar Colaborador</p>
      </Box>

      <Box className="flex items-center gap-2 justify-between">
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            height: 6,
            borderRadius: 5,
            flex: 1,
            "& .MuiLinearProgress-bar": {
              backgroundColor: "green",
            },
            backgroundColor: "#d1fae5",
          }}
        />
        <Typography variant="body2" color="text.secondary">
          {`${value}%`}
        </Typography>
      </Box>
    </Box>
  );
}
