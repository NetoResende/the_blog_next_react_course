'use client'
import clsx from "clsx";

export function Header(){
  console.log("HEADER")
  return (
    <>
        <h1
        className={clsx(
          "text-xl font-bold",
          " text-blue-500",
          " hover:text-blue-50 hover:bg-blue-500 ",
          "transition duration-500"
        )}
      >
        Olá de dentro de Home page.tsx
      </h1>

    </>
  )
}
