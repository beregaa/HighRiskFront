"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.scss";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

const NavLink = (props: Props) => {
  const path = usePathname();

  return (
    <Link
      href={props.href}
      className={path.startsWith(props.href) ? styles.active : undefined}
    >
      {props.children}
    </Link>
  );
};

export default NavLink;
