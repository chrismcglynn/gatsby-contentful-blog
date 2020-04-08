import React from "react";
import { heroNavConfig } from "./heroNavConfig";
import { Icon, IconsForIconName } from "../../Icon/Icon";
import styles from "./HeroNav.module.css";

export default function HomePageSection({ header }) {
  return (
    <section className={styles.heroNav}>
      <div className={styles.heroNavContent}>
        <h1 className={styles.heroNavHeader}>{header}</h1>
        <p className={styles.heroNavSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={styles.tileWrapper}>
        <p className={styles.heroNavTileSubtitle}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit
        </p>
        <div className={styles.heroNavTiles}>
          {heroNavConfig.map(tile => (
            <div className={styles.heroNavTile}>
              <Icon
                className={styles.tileIcon}
                icon={IconsForIconName[tile.icon]}
              />
              <p className={styles.tileLabel}>{tile.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
