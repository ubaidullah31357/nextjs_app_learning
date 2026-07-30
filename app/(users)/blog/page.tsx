import { JSX } from "react";
import style from "./blog.module.css";

function Blog(): JSX.Element {
  return <h1 className={style.heading}>User Blog Page</h1>;
}

export default Blog;
