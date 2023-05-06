import React, { FC } from 'react'

interface ButtonProps {
  text: string;
  type: string;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return <button type="button" className={"btn btn-" + props.type}>{props.text}</button>
}

export default Button;