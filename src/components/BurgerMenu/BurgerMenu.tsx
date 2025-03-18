"use client";

import React, { useState } from "react";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Button, Drawer, Space } from "antd";
import styles from "./BurgerMenu.module.scss";
import { navItems } from "../MainHeader/NavItem";
import Logo from "../Logo/Logo";

const BurgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space className={styles.wrapper}>
        <img className={styles.triggerBtn} onClick={showDrawer} src="/Burger_menu.png" alt="Burger Menu" />
      </Space>

      <Drawer
        title={
          <div className={styles.burgerHeader} onClick={onClose}>
            <Logo />

            <img className={styles.triggerBtn} src="/Burger_menu.png" alt="Burger Menu" />
          </div>
        }
        placement={"top"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"top"}
        width="100%"
        className={styles.Drawer}
      >
        <nav className={styles.nav}>
          <ul className={styles.navItems}>
            {navItems.map((item, index) => (
              <li key={index}>
                <div className={item.hasStar ? styles.starText : ""}>
                  <a href={item.path}>{item.label}</a>
                  {item.hasStar && (
                    <img className={styles.star} src="/star.png" alt="star" />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
