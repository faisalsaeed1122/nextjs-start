"use client";

import Image from "next/image";
import styles from "@/app/ui/home.module.css";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "../components/header";

export default function Page() {
  const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Dashboard page
        <button type="button" onClick={() => router.push("/dashboard/about")}>
          Dashboard
        </button>
      </main>
    </div>
  );
}
