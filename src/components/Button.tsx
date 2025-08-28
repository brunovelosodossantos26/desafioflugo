interface ButtonProps {
  text: string;
  onClick?: () => void;
  bgColor?: string; // cor de fundo padrão
  hoverColor?: string; // cor de fundo quando hover
  textColor?: string; // cor do texto
}

export default function Button({
  text,
  onClick,
  bgColor = "#22c55e", // verde (equivalente a bg-green-500)
  hoverColor = "#16a34a", // verde escuro (equivalente a bg-green-600)
  textColor = "#ffffff", // branco por padrão
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor =
          hoverColor;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = bgColor;
      }}
      className="px-4 py-2 rounded cursor-pointer"
    >
      {text}
    </button>
  );
}
