import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

export const ThirdStepper = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    width="136"
    height="4"
    viewBox="0 0 136 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="40" height="4" rx="2" fill="#080D13" fill-opacity="0.08" />
    <rect
      x="48"
      width="40"
      height="4"
      rx="2"
      fill="#080D13"
      fill-opacity="0.08"
    />
    <rect x="96" width="40" height="4" rx="2" fill="#4AA9FF" />
    <rect x="96" width="20" height="4" rx="2" fill="#4AA9FF" />
  </svg>
)
