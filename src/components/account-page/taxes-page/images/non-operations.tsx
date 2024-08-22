import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"
import "./styles.scss"

interface NonTaxesImageProps
  extends JSX.IntrinsicAttributes,
    SVGProps<SVGSVGElement> {
  className?: string
}

export const NonTaxesImage = ({ ...props }: NonTaxesImageProps) => (
  <svg
    width="302"
    height="265"
    viewBox="0 0 302 265"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M60.3999 82.947C60.3999 82.947 42.337 29.5605 105.341 36.0763C168.345 42.5921 138.242 18.9623 162.05 4.2985C185.857 -10.3653 256.005 35.2551 226.658 79.2567C197.31 123.258 273.558 83.0073 289.464 149.177C299.279 190.011 274.927 220.066 254.838 237.103"
      stroke="#CCDDE2"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M260.981 186.087C256.247 158.7 239.482 134.192 212.245 125.421C205.278 123.19 198.153 121.481 190.931 120.31V120.346C190.554 122.62 189.662 124.778 188.323 126.654C185.485 130.539 181.572 133.73 177.042 135.392C172.418 137.102 166.69 137.323 162.398 134.635C159.815 133.019 157.308 130.174 156.855 127.103C156.338 123.645 158.103 120.37 160.586 118.084C139.54 118.255 119.743 121.714 103.878 125.652C104.427 127.952 105.189 130.196 106.153 132.356C107.501 135.367 109.407 138.096 111.77 140.4C114.717 137.483 117.297 134.22 119.454 130.68C121.517 131.354 123.336 132.62 124.685 134.319C126.034 136.018 126.853 138.075 127.041 140.236V140.346C127.873 148.193 120.31 154.088 113.954 157.715C106.612 161.931 98.4281 165.089 90.3882 167.713C87.0729 168.799 82.7644 169.724 79.2645 168.591C78.8877 168.471 78.5199 168.324 78.1639 168.152C74.6741 166.443 72.3387 162.86 70.5166 159.585C65.3255 150.284 61.9499 140.145 59.6614 129.738C43.7795 131.766 41.9608 121.023 41.0179 118.389L27.4313 156.327C26.7185 159.054 26.6417 161.908 27.2058 164.67C27.7702 167.431 28.9611 170.027 30.6868 172.257C32.4122 174.487 34.6269 176.292 37.16 177.533C39.6935 178.775 42.4779 179.419 45.2996 179.417H101.545L127.095 244.877L134.336 263.455H175.696C172.341 263.455 170.505 262.638 169.173 261.304C167.797 259.929 167.023 258.066 167.019 256.122C167.019 252.1 170.324 248.802 175.696 248.802H176.076C175.67 248.802 175.28 248.765 174.874 248.728C175.126 248.701 175.376 248.659 175.623 248.604C175.357 248.598 175.091 248.577 174.827 248.544C177.25 248.258 179.496 247.13 181.171 245.358C182.846 243.587 183.844 241.283 183.991 238.85C183.998 238.724 183.998 238.598 183.991 238.472V238.277C183.934 235.783 182.979 233.393 181.303 231.544C179.626 229.694 177.34 228.51 174.861 228.205C175.143 228.182 175.411 228.158 175.683 228.158C175.438 228.098 175.166 228.061 174.911 228.024C175.314 227.987 175.72 227.961 176.109 227.961L206.37 228.121L211.936 228.145H218.544C218.849 228.145 219.158 228.145 219.45 228.182L229.265 228.232L235.821 228.269C238.562 228.292 241.181 229.398 243.107 231.345C245.033 233.292 246.109 235.922 246.099 238.659C246.096 240.207 245.737 241.733 245.049 243.12C247.862 242.761 250.471 241.461 252.451 239.434C257.173 234.617 259.206 227.408 260.612 220.999C263.099 209.583 262.951 197.554 260.981 186.087ZM184.528 186.858C178.827 195.623 169.12 194.835 169.12 194.835C169.12 194.835 168.314 195.62 166.435 192.281C164.556 188.943 159.204 186.66 159.204 186.66C158.778 190.012 157.895 195.107 149.137 188.504C140.379 181.901 143.02 172.275 143.768 167.19C144.517 162.106 147.5 160.42 147.5 160.42L151.023 158.563C151.023 158.563 140.832 155.945 140.342 155.848C139.852 155.751 130.776 148.159 139.987 146.155C149.198 144.15 163.556 152.121 166.331 153.696C169.106 155.271 185.324 168.973 185.324 168.973C185.324 168.973 190.26 178.107 184.528 186.858Z"
      fill="#353642"
    />
    <path
      d="M59.6484 129.744C59.6484 129.744 67.3293 128.812 70.205 123.336L67.6984 137.383C67.6984 137.383 98.2541 126.992 103.858 125.652C103.858 125.652 105.663 137.279 112.851 140.399L120.267 130.981C120.267 130.981 129.565 133.327 127.021 145.983C124.478 158.64 89.2981 169.218 83.3319 168.973C77.3658 168.728 70.9432 165.061 64.3664 145.357L59.6484 129.744Z"
      fill="#353642"
    />
    <path
      d="M72.1612 98.4529C74.1074 101.617 76.0637 104.774 78.0837 107.891C79.3286 109.812 81.597 112.55 79.1843 114.558C78.3991 115.159 77.4509 115.51 76.463 115.563C74.9127 115.701 73.2853 115.329 72.3424 113.998L67.6446 106.222C66.7084 104.671 65.2215 103.53 63.4807 103.024C61.7395 102.519 59.8718 102.686 58.249 103.494"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M89.9286 108.694C91.1568 111.61 90.3246 113.49 88.8884 114.436C86.5395 115.974 83.3954 115.237 81.731 112.991L72.1777 98.468"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M80.2477 94.2293C83.7241 98.4524 88.1098 106.295 90.5358 109.57C92.9619 112.845 96.7134 110.871 96.7134 110.871C99.7603 109.232 99.2435 106.513 97.9113 103.212C94.6296 95.1074 89.9453 89.7178 84.7207 86.1851C68.5301 75.245 51.9201 83.316 46.9774 102.2L27.4313 156.327C26.7185 159.054 26.6417 161.908 27.2058 164.67C27.7702 167.431 28.9611 170.027 30.6868 172.257C32.4122 174.487 34.6269 176.291 37.16 177.533C39.6935 178.774 42.4779 179.419 45.2996 179.417H101.545L134.346 263.458"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M100.331 99.4946C104.358 98.1002 104.174 91.685 98.4591 89.5198C92.1473 87.1267 80.9397 83.7414 78.1244 82.8968C78.107 82.8834 78.0858 82.8753 78.064 82.8733C77.866 82.813 77.7285 82.7627 77.6211 82.7392L77.4634 82.689"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M159.825 163.637C156.302 159.407 146.658 157.011 140.363 155.851C139.305 155.653 138.34 155.116 137.614 154.322C136.888 153.529 136.439 152.521 136.336 151.45C136.263 150.728 136.347 149.999 136.581 149.312C136.956 148.257 137.675 147.359 138.623 146.761C139.57 146.163 140.691 145.9 141.806 146.014C152.544 147.1 163.617 150.475 171.808 157.745C171.808 157.745 211.514 188.011 216.255 190.957C218.212 192.144 220.037 190.743 218.712 188.879L218.296 188.169C215.962 184.168 213.2 180.432 210.058 177.027"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M160.56 118.08C110.622 118.495 67.6982 137.379 67.6982 137.379L71.9833 113.387"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M238.12 248.647C238.12 248.647 232.681 247.417 231.235 251.767C229.789 256.118 228.279 263.039 238.677 263.448C249.076 263.857 242.969 261.816 242.369 258.454C241.768 255.092 238.12 248.647 238.12 248.647Z"
      fill="#353642"
    />
    <path
      d="M155.027 169.157C155.027 169.157 149.158 164.713 143.873 169.217C143.651 169.413 143.456 169.639 143.296 169.888"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <g opacity="0.77">
      <path
        opacity="0.77"
        d="M81.7113 112.975C83.3891 115.224 86.5299 115.958 88.8687 114.416C90.2881 113.478 91.1203 111.608 89.9223 108.719C90.1404 109.037 90.3384 109.318 90.533 109.577C92.9557 112.865 96.7106 110.884 96.7106 110.884C99.7575 109.245 99.2441 106.526 97.9119 103.222C96.6083 99.9484 94.8979 96.8517 92.8215 94.0044C94.1805 92.7341 95.7945 91.4504 97.4958 92.0135C99.3313 92.6235 99.8447 94.9228 100.053 96.84C100.15 97.7315 100.247 98.613 100.345 99.5046L101.814 112.63C102.304 116.987 102.794 121.408 103.858 125.662C104.408 127.961 105.169 130.205 106.133 132.365C107.482 135.376 109.387 138.105 111.75 140.409C114.697 137.493 117.278 134.229 119.434 130.689C121.497 131.363 123.317 132.629 124.666 134.328C126.014 136.027 126.834 138.084 127.021 140.245V140.356C127.854 148.202 120.29 154.098 113.935 157.724C106.593 161.941 98.4085 165.098 90.3686 167.722C87.0533 168.808 82.7448 169.733 79.2449 168.601C78.8681 168.481 78.5003 168.334 78.1443 168.162C74.6545 166.452 72.3191 162.869 70.497 159.595C61.7726 143.925 58.1486 125.933 56.2393 108.115C60.0579 107.589 63.8631 107.002 67.6213 106.195C67.6213 106.195 67.6213 106.221 67.6448 106.232L71.9768 113.408L72.3325 114.004C73.2721 115.345 74.8995 115.704 76.4531 115.569C77.441 115.521 78.3899 115.17 79.1711 114.564C81.5804 112.553 79.3188 109.825 78.0705 107.904"
        fill="white"
      />
      <path
        opacity="0.77"
        d="M81.7113 112.975C83.3891 115.224 86.5299 115.958 88.8687 114.416C90.2881 113.478 91.1203 111.608 89.9223 108.719C90.1404 109.037 90.3384 109.318 90.533 109.577C92.9557 112.865 96.7106 110.884 96.7106 110.884C99.7575 109.245 99.2441 106.526 97.9119 103.222C96.6083 99.9484 94.8979 96.8517 92.8215 94.0044C94.1805 92.7341 95.7945 91.4504 97.4958 92.0135C99.3313 92.6235 99.8447 94.9228 100.053 96.84C100.15 97.7315 100.247 98.613 100.345 99.5046L101.814 112.63C102.304 116.987 102.794 121.408 103.858 125.662C104.408 127.961 105.169 130.205 106.133 132.365C107.482 135.376 109.387 138.105 111.75 140.409C114.697 137.493 117.278 134.229 119.434 130.689C121.497 131.363 123.317 132.629 124.666 134.328C126.014 136.027 126.834 138.084 127.021 140.245V140.356C127.854 148.202 120.29 154.098 113.935 157.724C106.593 161.941 98.4085 165.098 90.3686 167.722C87.0533 168.808 82.7448 169.733 79.2449 168.601C78.8681 168.481 78.5003 168.334 78.1443 168.162C74.6545 166.452 72.3191 162.869 70.497 159.595C61.7726 143.925 58.1486 125.933 56.2393 108.115C60.0579 107.589 63.8631 107.002 67.6213 106.195C67.6213 106.195 67.6213 106.221 67.6448 106.232L71.9768 113.408L72.3325 114.004C73.2721 115.345 74.8995 115.704 76.4531 115.569C77.441 115.521 78.3899 115.17 79.1711 114.564C81.5804 112.553 79.3188 109.825 78.0705 107.904"
        fill="#4AA9FF"
      />
      <path
        opacity="0.77"
        d="M82.7415 114.037C84.228 116.048 86.7681 115.794 88.8687 114.416C90.1371 113.578 91.1773 113.823 90.1069 111.239C90.3049 111.52 90.3317 110.568 90.5062 110.779C92.6705 113.716 90.5331 109.566 90.5331 109.566C93.5531 113.377 100.127 109.787 98.9219 106.841C97.6468 103.667 96.3046 98.9747 94.6033 96.6285C95.9456 95.3615 95.6872 95.5492 97.3952 96.5581C97.8539 96.8523 98.2381 97.2495 98.5169 97.7178C98.7961 98.186 98.9622 98.7126 99.0025 99.2562C99.1401 100.533 99.2776 101.757 99.4152 103.003L100.724 114.735C101.163 118.633 101.6 122.571 102.549 126.365C103.04 128.417 103.721 130.418 104.583 132.345C105.784 134.996 109.643 139.41 111.75 141.431C114.371 138.834 117.512 134.057 119.434 130.883C123.126 132.016 122.965 135.542 123.226 139.393V139.494C123.971 146.496 117.22 151.754 111.562 154.996C105.006 158.76 97.7005 161.575 90.523 163.921C87.5634 164.893 83.7179 165.731 80.5939 164.706C80.257 164.599 79.9282 164.468 79.6107 164.313C76.4968 162.785 74.4096 159.591 72.7822 156.665C65.6583 143.885 62.3531 129.375 60.5344 114.828C60.4008 113.74 60.6958 112.642 61.3568 111.767C62.0179 110.891 62.9933 110.307 64.0779 110.136C66.1214 109.801 68.1582 109.466 70.1816 109.016L70.2387 109.043L74.1043 115.448C74.9465 116.638 75.0841 115.707 76.4699 115.586C77.3457 115.509 79.0436 115.338 79.7215 114.771C81.8724 112.982 80.6577 112.241 79.5436 110.528"
        fill="#4AA9FF"
      />
    </g>
    <path
      d="M154.318 175.627C154.318 175.627 143.175 171.967 143.007 178.121"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      opacity="0.54"
      d="M54.5681 238.314L32.7134 182.387C32.4426 181.304 32.4225 180.175 32.654 179.084C32.8859 177.993 33.3637 176.968 34.0509 176.089C34.7385 175.21 35.6173 174.499 36.6213 174.01C37.6249 173.521 38.7272 173.267 39.8439 173.267H126.652C128.601 173.266 130.494 173.922 132.025 175.127C133.556 176.332 134.636 178.017 135.091 179.91L159.016 235.823C159.275 236.902 159.286 238.025 159.047 239.108C158.809 240.192 158.328 241.207 157.64 242.078C156.953 242.949 156.077 243.653 155.078 244.137C154.079 244.621 152.983 244.873 151.873 244.873H62.9872C61.0524 244.874 59.1729 244.229 57.6475 243.041C56.1221 241.852 55.0382 240.188 54.5681 238.314Z"
      fill="white"
    />
    <path
      d="M157.946 185.06C157.946 185.06 159.754 186.716 159.066 189.082C158.556 190.835 156.812 191.941 155.083 191.341C149.58 189.441 144.624 186.213 143.416 180.727C142.845 177.949 142.722 175.097 143.05 172.28C143.315 169.669 143.701 166.85 144.581 164.367C145.923 160.552 150.033 157.894 154.023 159.731"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M54.5681 238.314L32.7134 182.387C32.4426 181.304 32.4225 180.175 32.654 179.084C32.8859 177.993 33.3637 176.968 34.0509 176.089C34.7385 175.21 35.6173 174.499 36.6213 174.01C37.6249 173.521 38.7272 173.267 39.8439 173.267H126.652C128.601 173.266 130.494 173.922 132.025 175.127C133.556 176.332 134.636 178.017 135.091 179.91L159.016 235.823C159.275 236.902 159.286 238.025 159.047 239.108C158.809 240.192 158.328 241.207 157.64 242.078C156.953 242.949 156.077 243.653 155.078 244.137C154.079 244.621 152.983 244.873 151.873 244.873H62.9872C61.0524 244.874 59.1729 244.229 57.6475 243.041C56.1221 241.852 55.0382 240.188 54.5681 238.314Z"
      fill="#4AA9FF"
    />
    <path
      d="M54.5681 238.314L32.7134 182.387C32.4426 181.304 32.4225 180.175 32.654 179.084C32.8859 177.993 33.3637 176.968 34.0509 176.089C34.7385 175.21 35.6173 174.499 36.6213 174.01C37.6249 173.521 38.7272 173.267 39.8439 173.267H126.652C128.601 173.266 130.494 173.922 132.025 175.127C133.556 176.332 134.636 178.017 135.091 179.91L159.016 235.823C159.275 236.902 159.286 238.025 159.047 239.108C158.809 240.192 158.328 241.207 157.64 242.078C156.953 242.949 156.077 243.653 155.078 244.137C154.079 244.621 152.983 244.873 151.873 244.873H62.9872C61.0524 244.874 59.1729 244.229 57.6475 243.041C56.1221 241.852 55.0382 240.188 54.5681 238.314Z"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M57.7659 236.061L37.6024 184.444C37.353 183.446 37.3349 182.404 37.549 181.397C37.7631 180.391 38.204 179.446 38.8386 178.635C39.4728 177.824 40.2838 177.168 41.2096 176.717C42.1357 176.266 43.1525 176.031 44.1826 176.031H124.266C126.064 176.031 127.81 176.635 129.222 177.746C130.635 178.858 131.631 180.412 132.051 182.158L154.127 233.745C154.366 234.74 154.375 235.777 154.155 236.776C153.935 237.776 153.49 238.712 152.856 239.515C152.222 240.319 151.413 240.968 150.491 241.415C149.57 241.862 148.558 242.094 147.534 242.094H65.5306C63.7485 242.096 62.0171 241.503 60.6107 240.41C59.2041 239.317 58.2031 237.787 57.7659 236.061Z"
      fill="#4AA9FF"
    />
    <path
      d="M229.157 227.956L244.512 263.448"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M302 263.448H0"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M159.178 103.268C156.688 105.725 152.97 105.722 150.853 103.449"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M92.8213 93.9949C94.1803 92.7246 95.7943 91.4408 97.4956 92.0039C99.3311 92.6139 99.8445 94.9132 100.053 96.8304C100.641 102.099 101.228 107.363 101.814 112.621C102.559 119.324 103.344 126.188 106.133 132.349C107.481 135.36 109.387 138.089 111.75 140.393"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M127.021 140.353V140.243C126.834 138.082 126.014 136.025 124.666 134.326C123.317 132.627 121.497 131.361 119.434 130.687C117.278 134.227 114.697 137.491 111.75 140.407C104.023 148.081 94.0972 153.164 83.3486 154.95C83.8654 157.005 84.9291 158.875 85.664 160.852C86.3988 162.83 86.7646 165.119 85.872 167.026C84.7446 169.46 81.5098 169.141 79.2616 168.602C79.2381 168.602 79.2247 168.602 79.2012 168.602"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M67.6281 106.192C63.8699 107 60.0647 107.586 56.2461 108.112C58.1554 125.93 61.766 143.922 70.5038 159.592C72.3259 162.866 74.6614 166.449 78.1512 168.159C78.5072 168.331 78.875 168.478 79.2518 168.598C82.7516 169.748 87.0602 168.806 90.3754 167.72C98.4288 165.092 106.6 161.938 113.942 157.721C120.28 154.092 127.844 148.199 127.028 140.353C126.949 139.489 126.772 138.636 126.501 137.812"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M130.471 70.6486C131.034 72.9942 132.319 75.1038 134.146 76.6804C135.973 78.2574 138.25 79.2214 140.655 79.4369C140.854 78.4696 141.288 77.5649 141.916 76.8028C144.601 73.6421 145.745 79.5713 154.332 75.3146C166.231 69.4021 170.747 72.7941 170.747 72.7941C171.143 73.089 171.083 75.8103 171.15 76.3064C171.486 79.1319 171.788 81.944 172.12 84.7661C172.321 86.4889 172.519 88.1987 172.707 89.908C172.869 89.6171 173.048 89.3359 173.244 89.0664C174.328 85.2354 176.264 80.7109 180.438 82.6582C181.284 83.0698 182.019 83.6748 182.586 84.4243C185.354 88.0576 183.257 91.5668 180.361 94.1644C179.635 94.9705 178.824 95.6952 177.942 96.3266C178.418 97.312 180.364 101.224 180.364 101.237C180.566 101.632 187.368 93.9432 187.874 93.1053C188.631 91.0527 189.037 88.8874 189.075 86.7004C189.186 77.7077 185.522 67.2399 178.23 62.0816C176.422 60.8046 176.999 59.5745 176.888 57.8383C176.88 57.7445 176.844 57.6553 176.785 57.5822C176.725 57.5092 176.645 57.4559 176.555 57.4294C176.464 57.4029 176.368 57.4046 176.278 57.4337C176.188 57.4632 176.11 57.5189 176.053 57.594C173.767 60.2217 168.11 59.9603 168.11 59.9603C148.473 55.0466 141.873 63.7679 137.91 65.3231C136.293 65.9348 134.513 65.9642 132.877 65.4069C132.78 65.9478 132.538 66.4523 132.175 66.8659C131.813 67.2795 131.344 67.5862 130.82 67.7531L130.92 68.6611C131.006 69.3559 130.847 70.0584 130.471 70.6486Z"
      fill="#4AA9FF"
    />
    <path
      d="M140.668 79.4523C138.263 79.2365 135.987 78.2725 134.16 76.6959C132.333 75.1192 131.047 73.0093 130.484 70.6641C130.263 69.7645 130.124 68.8468 130.068 67.9224L130.222 67.9056C130.433 67.8899 130.641 67.8446 130.84 67.7715C131.364 67.6046 131.833 67.2979 132.195 66.8843C132.558 66.4711 132.8 65.9663 132.897 65.4253C132.958 65.1253 132.97 64.8173 132.934 64.5137L132.43 60.076C132.43 60.076 135.98 62.7138 139.92 61.172C143.859 59.6302 150.473 50.909 170.12 55.8092C170.12 55.8092 174.556 56.0706 176.831 53.4429C176.888 53.3678 176.967 53.3121 177.056 53.283C177.146 53.2535 177.242 53.2522 177.333 53.2786C177.423 53.3051 177.504 53.3584 177.563 53.4311C177.623 53.5042 177.659 53.5937 177.666 53.6875C177.784 55.4271 178.428 56.6572 180.24 57.9308C187.532 63.0925 191.196 73.5566 191.082 82.5493C191.048 86.2798 189.807 89.9634 187.891 93.1241C187.384 93.962 180.582 101.651 180.381 101.255C180.381 101.255 178.435 97.3305 177.958 96.3451L177.844 96.1272L178.062 95.9831C178.872 95.4337 179.646 94.8324 180.378 94.1832C183.27 91.5856 185.371 88.0764 182.602 84.4431C182.036 83.6936 181.3 83.0883 180.455 82.6767C176.267 80.7294 174.344 85.2542 173.261 89.0852C173.05 89.8173 172.921 90.5704 172.875 91.3309C172.824 90.8616 172.774 90.4092 172.724 89.9399C172.536 88.2305 172.338 86.5212 172.136 84.7984C171.801 81.9762 171.485 79.1641 171.167 76.3386C171.116 75.8559 171.167 73.1209 170.764 72.826C170.764 72.826 166.244 69.434 154.349 75.3465C145.762 79.6032 144.618 73.6706 141.933 76.8346C141.304 77.5972 140.871 78.5015 140.671 79.4691C140.61 79.7798 140.571 80.0945 140.554 80.4109C140.548 80.4518 140.548 80.4937 140.554 80.535C140.514 81.2288 140.5 81.9192 140.484 82.5963C140.42 89.1288 141.138 95.9529 143.705 102.02C146.826 109.373 155.084 116.626 163.67 113.198C166.355 112.122 168.761 110.389 170.962 108.549"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M146.544 95.3845C147.398 95.0989 147.81 94.0307 147.464 92.9987C147.119 91.9664 146.146 91.3611 145.292 91.6466C144.438 91.9319 144.026 93.0001 144.371 94.0324C144.717 95.0647 145.69 95.67 146.544 95.3845Z"
      fill="#141414"
    />
    <path
      d="M159.321 94.9753C160.175 94.6901 160.587 93.6219 160.242 92.5895C159.896 91.5572 158.923 90.9519 158.069 91.2374C157.215 91.523 156.803 92.5912 157.149 93.6232C157.494 94.6555 158.467 95.2609 159.321 94.9753Z"
      fill="#141414"
    />
    <path
      d="M154.436 97.1863C154.436 97.1863 150.185 99.5962 149.926 97.0958C149.846 96.3249 148.805 88.7735 148.805 88.7735C148.805 88.7735 145.369 85.1368 140.104 87.8249"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M153.479 86.6575C153.479 86.6575 160.345 83.232 164.888 88.1691"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M159.774 114.039L160.563 118.081C158.076 120.37 156.318 123.652 156.832 127.107C157.288 130.171 159.798 133.023 162.372 134.629C166.673 137.31 172.395 137.099 177.025 135.393C181.552 133.717 185.468 130.536 188.307 126.655C189.644 124.779 190.534 122.623 190.911 120.35V120.31"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M160.563 118.08L162.1 125.38"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M182.298 99.4946L184.62 114.896C184.849 116.403 185.612 117.779 186.77 118.772C187.928 119.766 189.405 120.311 190.931 120.309C198.158 121.479 205.287 123.186 212.259 125.417C239.496 134.192 256.261 158.7 260.995 186.083C262.965 197.55 263.113 209.576 260.64 220.978C259.234 227.397 257.2 234.606 252.479 239.413C246.348 245.681 236.94 243.1 229.695 240.268C207.203 231.53 188.495 215.984 172.342 198.186C163.705 188.668 152.544 181.039 152.544 181.039"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeMiterlimit="10"
    />
    <path
      d="M65.1987 224.509C62.6753 224.485 60.4774 222.451 59.9104 219.618C58.7896 214.048 58.4943 205.434 66.6718 203.554C76.8895 201.207 84.7482 212.322 88.6004 219.347C89.8956 221.693 88.4292 224.71 86.0166 224.71L65.1987 224.509Z"
      fill="#EFF7FF"
    />
    <path
      d="M68.5719 198.823C70.7409 197.381 70.7745 193.622 68.6461 190.428C66.518 187.233 63.0342 185.812 60.8649 187.254C58.6955 188.696 58.6623 192.454 60.7904 195.649C62.9188 198.844 66.4025 200.265 68.5719 198.823Z"
      fill="#EFF7FF"
    />
    <path
      d="M236.489 248.83C236.331 248.853 236.154 248.877 235.999 248.914H235.939L212.071 248.79L176.257 248.605C176.119 248.605 175.985 248.605 175.851 248.605C175.585 248.599 175.319 248.579 175.056 248.545C177.482 248.263 179.731 247.136 181.408 245.361C183.084 243.586 184.08 241.278 184.22 238.842C184.226 238.716 184.226 238.589 184.22 238.463V238.269C184.21 235.885 183.378 233.578 181.865 231.735C180.352 229.892 178.249 228.626 175.911 228.15C175.666 228.089 175.398 228.052 175.14 228.016C175.546 227.979 175.948 227.952 176.341 227.952L206.598 228.113L212.168 228.136L219.681 228.173C222.254 228.408 224.646 229.592 226.391 231.495C228.135 233.398 229.106 235.883 229.114 238.463C229.114 238.95 229.077 239.436 229.003 239.918C228.645 242.374 227.417 244.621 225.541 246.249C223.665 247.877 221.267 248.779 218.782 248.79H236.962C235.915 248.79 236.207 248.79 236.489 248.83Z"
      fill="white"
    />
    <path
      d="M188.075 261.297C188.757 261.981 189.568 262.524 190.461 262.894C191.355 263.263 192.313 263.451 193.28 263.448H175.703C172.348 263.448 170.516 262.631 169.18 261.297C167.808 259.92 167.035 258.058 167.029 256.115C167.029 252.093 170.331 248.795 175.703 248.795H193.28C191.829 248.792 190.41 249.22 189.202 250.025C187.995 250.829 187.054 251.973 186.499 253.312C185.943 254.651 185.798 256.125 186.081 257.546C186.365 258.968 187.065 260.273 188.092 261.297H188.075Z"
      fill="#EFF7FF"
    />
    <path
      d="M246.123 238.648C246.119 240.196 245.758 241.723 245.07 243.109C244.578 244.158 243.903 245.11 243.076 245.921C241.714 247.27 240.002 248.214 238.134 248.646C237.363 248.824 236.575 248.914 235.785 248.914C235.946 248.877 236.12 248.854 236.275 248.831C235.993 248.804 235.701 248.794 236.751 248.794H218.567C221.054 248.784 223.455 247.883 225.332 246.254C227.209 244.625 228.438 242.376 228.795 239.918C228.869 239.437 228.906 238.951 228.906 238.464C228.898 235.883 227.927 233.398 226.181 231.495C224.436 229.592 222.043 228.408 219.47 228.174L229.285 228.224L235.842 228.261C238.582 228.284 241.201 229.39 243.128 231.336C245.054 233.282 246.131 235.911 246.123 238.648Z"
      fill="#4AA9FF"
    />
    <path
      d="M246.123 238.645C246.102 241.384 244.996 244.002 243.047 245.928C241.097 247.854 238.463 248.929 235.721 248.918L176.019 248.61C175.619 248.61 175.22 248.58 174.817 248.539C177.334 248.254 179.658 247.058 181.351 245.175C183.043 243.293 183.984 240.856 183.998 238.326C184.011 235.796 183.095 233.349 181.422 231.449C179.75 229.549 177.438 228.328 174.925 228.017C175.324 227.975 175.725 227.955 176.126 227.956L235.828 228.265C238.57 228.284 241.192 229.386 243.121 231.332C245.051 233.277 246.13 235.907 246.123 238.645Z"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M228.899 238.46C228.894 241.198 227.802 243.822 225.864 245.758C223.926 247.695 221.298 248.785 218.557 248.79H176.079C175.678 248.788 175.277 248.765 174.878 248.723C177.393 248.425 179.711 247.215 181.393 245.324C183.075 243.433 184.003 240.991 184.003 238.461C184.003 235.932 183.075 233.49 181.393 231.599C179.711 229.708 177.393 228.498 174.878 228.2C175.277 228.163 175.68 228.136 176.079 228.136H218.557C221.297 228.143 223.923 229.232 225.861 231.166C227.799 233.101 228.891 235.723 228.899 238.46Z"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M167.029 256.117C167.029 257.079 167.219 258.031 167.587 258.919C167.956 259.807 168.496 260.613 169.177 261.292C170.519 262.633 172.341 263.448 175.7 263.448H236.748C235.697 263.448 235.983 263.428 236.268 263.401C234.482 263.191 232.835 262.333 231.639 260.99C230.444 259.648 229.784 257.914 229.784 256.117C229.784 254.321 230.444 252.587 231.639 251.244C232.835 249.902 234.482 249.044 236.268 248.834C235.983 248.807 235.697 248.787 236.748 248.787H175.7C170.324 248.79 167.029 252.089 167.029 256.117Z"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M185.922 256.117C185.926 258.06 186.701 259.922 188.076 261.296C189.452 262.67 191.316 263.443 193.26 263.448H235.416C235.698 263.448 235.983 263.428 236.269 263.401C234.482 263.191 232.836 262.333 231.64 260.99C230.445 259.648 229.785 257.914 229.785 256.117C229.785 254.321 230.445 252.587 231.64 251.244C232.836 249.902 234.482 249.044 236.269 248.834C235.983 248.807 235.698 248.787 235.416 248.787H193.26C191.316 248.792 189.452 249.566 188.077 250.94C186.702 252.313 185.927 254.175 185.922 256.117Z"
      stroke="#141414"
      strokeWidth="1.15478"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M117.585 200.197H98.7539C97.8922 200.196 97.0497 199.944 96.3289 199.472C95.6081 199.001 95.04 198.331 94.6937 197.543C94.5602 197.249 94.5028 196.927 94.5276 196.605C94.5521 196.284 94.6578 195.974 94.8347 195.704C95.0115 195.435 95.2538 195.214 95.539 195.063C95.8242 194.912 96.1427 194.836 96.4655 194.841H116.485C115.542 196.426 116.022 198.629 117.585 200.197Z"
      fill="#EFF7FF"
    />
    <path
      d="M129.763 198.26C129.762 198.773 129.558 199.265 129.195 199.627C128.832 199.99 128.34 200.194 127.827 200.194H117.585C116.022 198.629 115.542 196.427 116.485 194.832H125.528C126.389 194.832 127.231 195.082 127.952 195.55C128.673 196.019 129.243 196.687 129.592 197.473C129.7 197.722 129.758 197.989 129.763 198.26Z"
      fill="#4AA9FF"
    />
    <path
      d="M125.051 200.197C124.998 200.299 124.937 200.397 124.867 200.489C123.525 202.322 120.609 202.5 118.344 200.844C118.076 200.646 117.823 200.43 117.585 200.197C116.022 198.632 115.542 196.43 116.485 194.834C116.538 194.732 116.599 194.634 116.669 194.543C118.012 192.696 120.914 192.532 123.179 194.174C123.452 194.378 123.709 194.602 123.947 194.844C125.498 196.403 125.981 198.592 125.051 200.197Z"
      fill="white"
    />
    <path
      d="M134.497 210.062C134.494 210.575 134.287 211.066 133.923 211.428C133.558 211.79 133.065 211.993 132.551 211.993H112.79C113.743 210.391 113.267 208.205 111.7 206.63H130.263C131.125 206.63 131.968 206.881 132.689 207.352C133.411 207.823 133.98 208.493 134.326 209.281C134.437 209.527 134.495 209.793 134.497 210.062Z"
      fill="#4AA9FF"
    />
    <path
      d="M112.791 211.992H103.493C102.632 211.993 101.789 211.744 101.068 211.275C100.346 210.806 99.7769 210.138 99.429 209.351C99.3192 209.105 99.2612 208.84 99.2578 208.57C99.2575 208.317 99.3071 208.065 99.4041 207.831C99.5011 207.597 99.6434 207.384 99.8229 207.204C100.002 207.025 100.216 206.883 100.45 206.786C100.685 206.689 100.937 206.639 101.191 206.64H111.7C113.267 208.205 113.754 210.39 112.791 211.992Z"
      fill="#EFF7FF"
    />
    <path
      d="M112.79 211.991C112.747 212.096 112.689 212.195 112.619 212.286C111.277 214.129 108.371 214.297 106.11 212.651C105.836 212.448 105.578 212.223 105.338 211.981C103.784 210.416 103.308 208.23 104.237 206.618C104.291 206.515 104.353 206.416 104.422 206.323C105.764 204.49 108.68 204.312 110.942 205.971C111.211 206.167 111.464 206.383 111.7 206.618C113.267 208.204 113.754 210.389 112.79 211.991Z"
      fill="white"
    />
    <path
      d="M119.374 223.713H107.542C106.682 223.712 105.841 223.462 105.119 222.994C104.398 222.525 103.828 221.858 103.479 221.072C103.346 220.778 103.289 220.455 103.314 220.133C103.339 219.811 103.445 219.501 103.621 219.23C103.799 218.96 104.041 218.738 104.326 218.587C104.612 218.434 104.931 218.357 105.254 218.361H118.274C117.341 219.966 117.821 222.148 119.374 223.713Z"
      fill="#4AA9FF"
    />
    <path
      d="M138.548 221.795C138.545 222.305 138.34 222.794 137.978 223.153C137.615 223.512 137.125 223.713 136.615 223.713H119.374C117.82 222.147 117.34 219.962 118.273 218.35H134.313C135.175 218.35 136.018 218.601 136.74 219.071C137.461 219.542 138.03 220.213 138.376 221.001C138.487 221.251 138.545 221.522 138.548 221.795Z"
      fill="#EFF7FF"
    />
    <path
      d="M126.84 223.714C126.786 223.817 126.725 223.915 126.656 224.009C125.313 225.852 122.411 226.02 120.146 224.374C119.874 224.169 119.617 223.946 119.377 223.704C117.824 222.139 117.344 219.953 118.277 218.341C118.328 218.238 118.388 218.139 118.458 218.046C119.8 216.213 122.716 216.055 124.981 217.694C125.25 217.89 125.504 218.106 125.739 218.341C127.303 219.926 127.78 222.125 126.84 223.714Z"
      fill="white"
    />
    <path
      d="M37.4512 116.864L37.7465 116.947L37.6357 117.377C37.5656 117.209 37.5039 117.038 37.4512 116.864Z"
      fill="#353642"
    />
    <path
      d="M89.9645 143.68C94.3818 142.384 96.7025 137.048 95.1485 131.76C93.5946 126.473 88.7542 123.236 84.3373 124.531C79.92 125.827 77.5993 131.163 79.1533 136.451C80.7072 141.738 85.5476 144.975 89.9645 143.68Z"
      fill="#EFF7FF"
    />
  </svg>
)
