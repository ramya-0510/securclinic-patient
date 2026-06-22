import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

function Card({ children, className = "", ...props }: CardProps) {
  return (
    <section
      className={`rounded-lg bg-white p-4 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}

export default Card;
