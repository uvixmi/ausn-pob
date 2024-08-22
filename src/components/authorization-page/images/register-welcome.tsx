import { Image } from "antd"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"
import imageSrc from "./main-register-image.png"

export const RegisterWelcomeImage = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => <img src={imageSrc} className={props.className} />
export default RegisterWelcomeImage
