import styles from "./Button.module.css";
interface Props {
  children: string;
  // to make a field optional in ts
  //   color?: string;

  // to specify fixed values for color we do the below, this ensures if any other value is passed
  // from the App component an error is thrown
  color?: "danger" | "primary";
}
const Button = ({ children, color = "primary" }: Props) => {
  return (
    <div>
      <button
        type="button"
        className={[styles.btn, styles.btnPrimary].join(" ")}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
