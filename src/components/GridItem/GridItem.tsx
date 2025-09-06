import style from "./GridItem.module.css";
import { ReactNode } from "react";

interface GridItemProps {
  children: ReactNode;
}

export default function GridItem({ children }: GridItemProps) {
  return <li className={style.item}>{children}</li>;
}
