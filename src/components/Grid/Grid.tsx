import style from "./Grid.module.css";
import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
}

export default function Grid({ children }: GridProps) {
  return <ul className={style.list}>{children}</ul>;
}
