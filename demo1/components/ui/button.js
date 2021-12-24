import Link from "next/link";
import classes from "./button.module.css";

//=======================================
// if a props.link is provided in the
// definition, it will be set, otherwise
// just return a standard button
//=======================================
function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }
  //return regular button
  return <button className="classes.btn" onClick={props.onClick}>{props.children}</button>
}
export default Button;
