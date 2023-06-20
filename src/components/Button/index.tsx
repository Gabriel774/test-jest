import "./styles.css";

interface ButtonProps {
  label: string;
  color: string;
  onClick: () => void;
  testID?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="btn"
      onClick={props.onClick}
      style={{ backgroundColor: props.color }}
      data-testid={props.testID}
    >
      {props.label}
    </button>
  );
}
