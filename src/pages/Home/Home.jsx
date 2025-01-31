import React from "react";
import { NavLink } from "react-router";

import styles from "./Home.module.scss"

export default function Home() {
    return (
        <>
            <main className={styles.Home}>
                <div className={styles.Home__hero}>
                    <h1 className={styles.Home__hero__title}>Chez vous, partout et ailleurs</h1>
                </div>

                <div className={styles.Home__locations}>
                    <NavLink>
                        <div className={styles.Home__locations__location}>
                            <h3 className={styles.Home__locations__location__title}>Titre de la location</h3>
                        </div>
                    </NavLink>
                </div>
            </main>
        </>
    )
}