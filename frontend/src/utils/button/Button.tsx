import { ButtonHTMLAttributes, ReactNode } from "react";

interface buttonType extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: ReactNode;
    icon?: any;
    className: string;
    onClick?: () => void
}

const Button = ({children,icon,className,onClick, ...props}:buttonType) => {
  return (
    <button className={className} onClick={onClick} {...props}>
        {children} {icon}
    </button>
  )
}

export default Button