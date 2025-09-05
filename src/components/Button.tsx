interface ButtonProps {
  text: string;
  onClick?: () => void;
  bgColor?: string;
  hoverColor?: string;
  textColor?: string;
}

export default function Button({
  text,
  onClick,
  bgColor = "#22c55e",
  hoverColor = "#16a34a",
  textColor = "#ffffff",
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
