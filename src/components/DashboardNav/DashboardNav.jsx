import Link from "next/link";
import React, { memo } from "react";
import styles from './dashboardnav.module.css'

const DashboardNav = memo(() => {
  return (
    <div className={`bg-green-400 py-5 px-10 ${styles.container} flex justify-between`}>
      <div className="flex flex-col">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/setting">Setting</Link>
        <Link href="/contact">Contact</Link>
      </div>
      
    </div>
  );
});

export default DashboardNav;
