import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"
import "./styles.scss"

interface ArrowDownIconProps
  extends JSX.IntrinsicAttributes,
    SVGProps<SVGSVGElement> {
  className?: string
}

export const ArrowDownIcon = ({
  className = "",
  ...props
}: ArrowDownIconProps) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={`${className} arrow-color-icon`}
  >
    <path d="M10.3595 3H9.48062C9.42085 3 9.3646 3.0293 9.32945 3.07734L6.00015 7.66641L2.67085 3.07734C2.6357 3.0293 2.57945 3 2.51968 3H1.64077C1.5646 3 1.52007 3.08672 1.5646 3.14883L5.69663 8.84531C5.84663 9.05156 6.15366 9.05156 6.30249 8.84531L10.4345 3.14883C10.4802 3.08672 10.4357 3 10.3595 3Z" />
  </svg>
)
