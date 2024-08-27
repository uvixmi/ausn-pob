import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"
import "./styles.scss"

interface TaxesErrorImageProps
  extends JSX.IntrinsicAttributes,
    SVGProps<SVGSVGElement> {
  className?: string
}

export const TaxesErrorImage = ({ ...props }: TaxesErrorImageProps) => (
  <svg
    width="378"
    height="262"
    viewBox="0 0 378 262"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M345.161 27.6807H269.75C265.911 27.6807 262.799 30.7846 262.799 34.6135V142.152C262.799 145.981 265.911 149.085 269.75 149.085H345.161C349 149.085 352.113 145.981 352.113 142.152V34.6135C352.113 30.7846 349 27.6807 345.161 27.6807Z"
      stroke="#D1D1D1"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M341.906 40.1895H273.92C272 40.1895 270.444 41.7414 270.444 43.6559V58.0758C270.444 59.9902 272 61.5422 273.92 61.5422H341.906C343.826 61.5422 345.382 59.9902 345.382 58.0758V43.6559C345.382 41.7414 343.826 40.1895 341.906 40.1895Z"
      stroke="#D1D1D1"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M307.455 49.183C308.678 49.183 309.67 48.1943 309.67 46.9748C309.67 45.7553 308.678 44.7666 307.455 44.7666C306.233 44.7666 305.241 45.7553 305.241 46.9748C305.241 48.1943 306.233 49.183 307.455 49.183Z"
      fill="#D1D1D1"
    />
    <path
      d="M301.268 56.9673C301.268 55.3307 301.92 53.7613 303.08 52.6043C304.241 51.4468 305.814 50.7969 307.455 50.7969C309.097 50.7969 310.67 51.4468 311.831 52.6043C312.991 53.7613 313.643 55.3307 313.643 56.9673H301.268Z"
      fill="#D1D1D1"
    />
    <path
      d="M307.907 84.4268C305.548 84.4276 303.242 85.1259 301.281 86.4333C299.32 87.7407 297.792 89.5989 296.89 91.7725C295.988 93.9461 295.752 96.3376 296.213 98.645C296.674 100.952 297.81 103.071 299.479 104.734C301.147 106.397 303.272 107.53 305.586 107.989C307.899 108.447 310.298 108.211 312.477 107.311C314.656 106.41 316.518 104.886 317.829 102.93C319.14 100.974 319.839 98.6741 319.839 96.3218C319.839 94.7594 319.53 93.212 318.931 91.7688C318.331 90.3251 317.452 89.0136 316.344 87.909C315.236 86.8045 313.921 85.9283 312.473 85.3309C311.025 84.7334 309.474 84.4259 307.907 84.4268ZM307.907 105.346C307.459 105.324 307.037 105.131 306.728 104.807C306.418 104.484 306.246 104.054 306.246 103.607C306.246 103.159 306.418 102.729 306.728 102.406C307.037 102.082 307.459 101.889 307.907 101.867C308.355 101.889 308.777 102.082 309.086 102.406C309.396 102.729 309.568 103.159 309.568 103.607C309.568 104.054 309.396 104.484 309.086 104.807C308.777 105.131 308.355 105.324 307.907 105.346ZM310.109 91.9679C309.741 94.5469 309.432 97.2551 308.659 99.7632C308.475 100.367 307.339 100.367 307.155 99.7632C306.611 97.8775 306.192 95.9581 305.902 94.0178C305.663 92.6054 304.836 90.318 305.626 88.9473C306.324 87.6974 308.287 87.5724 309.428 88.214C310.827 89.0015 310.276 90.6847 310.109 91.9679Z"
      fill="#FFA940"
    />
    <path
      d="M177.395 51.7847C173.213 50.541 168.755 50.5623 164.585 51.8451C160.415 53.1283 156.721 55.6157 153.969 58.9929C151.216 62.3702 149.53 66.4854 149.124 70.8184C148.717 75.151 149.607 79.507 151.683 83.3351C153.758 87.1631 156.926 90.2917 160.784 92.3245C164.643 94.3572 169.019 95.2034 173.36 94.756C177.7 94.3081 181.811 92.5869 185.17 89.8096C188.53 87.0327 190.988 83.3242 192.235 79.1537C193.063 76.3847 193.336 73.4803 193.038 70.6063C192.74 67.7324 191.877 64.945 190.5 62.4035C189.121 59.862 187.255 57.6164 185.007 55.7944C182.758 53.972 180.172 52.6096 177.395 51.7847ZM166.311 88.8655C165.514 88.603 164.851 88.0414 164.463 87.2994C164.075 86.5578 163.992 85.6941 164.231 84.892C164.471 84.09 165.015 83.413 165.747 83.0043C166.48 82.5955 167.343 82.4876 168.154 82.7034C168.571 82.8143 168.961 83.0076 169.301 83.2713C169.642 83.5355 169.926 83.865 170.137 84.2404C170.347 84.6158 170.481 85.0299 170.528 85.4574C170.575 85.8849 170.536 86.3178 170.413 86.7303C170.29 87.1423 170.085 87.526 169.81 87.8581C169.536 88.1898 169.197 88.4635 168.815 88.6626C168.432 88.8618 168.014 88.9822 167.584 89.0172C167.153 89.0518 166.721 89.0005 166.311 88.8655ZM177.299 66.3087C175.281 70.6876 173.292 75.3248 170.614 79.362C169.971 80.3369 167.953 79.737 167.949 78.5704C167.983 74.9448 168.262 71.3259 168.784 67.7378C169.11 65.1171 168.855 60.6257 170.982 58.6092C172.87 56.8052 176.413 57.5801 178.105 59.3133C180.14 61.4299 178.277 64.1255 177.299 66.3087Z"
      fill="#FF8D00"
    />
    <path
      d="M115.772 100.498C114.242 102.051 113.208 104.021 112.801 106.16C112.393 108.298 112.631 110.509 113.484 112.513C114.337 114.518 115.766 116.224 117.592 117.418C119.417 118.611 121.556 119.239 123.739 119.22C125.922 119.201 128.05 118.538 129.855 117.313C131.66 116.088 133.06 114.358 133.878 112.339C134.696 110.321 134.896 108.106 134.452 105.975C134.008 103.843 132.941 101.891 131.384 100.365C129.296 98.3182 126.478 97.1824 123.55 97.2074C120.623 97.2324 117.825 98.4161 115.772 100.498ZM129.617 114.068C129.469 114.219 129.292 114.339 129.097 114.421C128.902 114.504 128.692 114.548 128.481 114.55C128.269 114.551 128.059 114.512 127.862 114.433C127.666 114.354 127.487 114.237 127.336 114.089C127.185 113.941 127.064 113.765 126.982 113.57C126.899 113.376 126.855 113.167 126.853 112.956C126.851 112.744 126.891 112.535 126.97 112.339C127.049 112.143 127.167 111.965 127.315 111.814C127.615 111.509 128.024 111.337 128.451 111.332C128.879 111.329 129.291 111.494 129.596 111.793C129.902 112.092 130.075 112.5 130.079 112.926C130.083 113.353 129.917 113.763 129.617 114.068ZM122.193 103.948C123.659 105.864 125.251 107.827 126.408 109.96C126.688 110.472 125.953 111.21 125.435 110.952C123.839 110.083 122.304 109.109 120.839 108.035C119.749 107.281 117.702 106.339 117.305 104.927C116.946 103.677 118.141 102.285 119.285 101.956C120.693 101.548 121.449 103.002 122.193 103.948Z"
      fill="#FFA940"
    />
    <path
      d="M277.939 71.0732H336.207"
      stroke="#D1D1D1"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M277.939 76.7959H336.207"
      stroke="#D1D1D1"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M277.939 113.624H336.207"
      stroke="#D1D1D1"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M291.471 119.035H322.671"
      stroke="#D1D1D1"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M352.117 106.113C357.255 112.555 362.144 120.537 366.564 130.374C393.477 190.312 359.837 220.731 359.837 220.731"
      stroke="#8C8C8C"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M71.0104 153.644C71.0104 153.644 31.0744 108.468 80.8743 86.0983C130.674 63.7289 140.534 60.6208 136.941 37.3515C133.348 14.0822 161.59 -9.61202 206.005 6.04527C250.42 21.7026 251.309 51.2089 248.159 74.0199C246.371 87.0232 253.77 90.148 262.782 89.4939"
      stroke="#8C8C8C"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M349.301 240.228C349.199 242.722 348.552 245.164 347.404 247.382C347.359 247.492 347.306 247.599 347.245 247.703C345.232 251.31 342.414 254.409 339.011 256.761L338.89 256.844C335.817 258.893 332.361 260.304 328.729 260.989H367.391C367.391 260.989 362.219 187.432 314.683 151.643C268.681 117.012 225.611 133.702 222.879 134.819C223.726 137.202 224.104 139.725 223.995 142.252C223.995 142.252 227.454 144.047 228.03 150.476C228.607 156.905 229.81 174.778 218.242 178.145C218.242 178.145 207.856 177.891 205.111 173.916C202.366 169.941 201.706 170.75 200.628 171.758C199.792 172.52 194.75 175.245 192.423 176.495C192.717 176.509 190.983 178.079 191.27 178.145C191.27 178.145 189.95 183.16 206.256 200.738C206.809 201.318 212.009 206.599 212.497 207.235C214.959 209.382 217.727 211.573 220.799 213.809L239.407 227.387C239.827 227.744 240.325 227.996 240.861 228.125C241.902 228.387 242.99 228.397 244.036 228.154C246.2 227.737 260.977 226.233 270.54 225.283C270.757 225.283 270.987 225.242 271.2 225.217L272.453 225.096C272.654 225.096 272.871 225.054 273.047 225.042L274.175 224.933C274.726 224.879 275.223 224.825 275.683 224.788L276.936 224.667C278.043 224.559 278.699 224.492 278.754 224.492C281.032 224.427 283.303 224.207 285.551 223.834C287.703 223.417 289.666 222.746 290.176 221.634C290.272 221.399 290.308 221.144 290.28 220.892C290.165 220.184 289.868 219.518 289.42 218.959C287.456 216.33 282.894 214.076 282.56 213.913C282.55 213.91 282.54 213.91 282.53 213.913L282.439 213.847L255.283 192.806H255.253C255.253 192.806 259.343 149.293 296.614 160C296.614 160 296.789 160.121 297.111 160.388C298.565 161.504 303.14 165.204 309.866 172.116C310.042 172.304 310.23 172.491 310.418 172.691C311.132 173.416 311.834 174.17 312.532 174.908C317.252 179.941 322.838 186.353 329.001 194.348L329.042 194.39C336.103 203.556 341.192 211.955 344.5 219.388V219.413C348.081 227.492 349.589 234.412 349.292 239.932C349.302 240.031 349.304 240.13 349.301 240.228ZM237.935 169.49C236.832 156.812 238.606 153.441 238.952 153.187C230.154 169.061 245.31 183.529 250.411 189.061C249.943 188.669 239.038 182.164 237.935 169.49Z"
      fill="#080D13"
      fill-opacity="0.65"
    />
    <path
      d="M213.517 162.952C213.059 163.288 212.582 163.597 212.088 163.877L209.222 158.878C215.831 155.507 217.686 149.566 214.778 146.303C213.965 145.411 212.917 144.764 211.753 144.437C208.829 143.554 206.803 144.853 205.428 146.599C204.306 148.117 203.484 149.833 203.005 151.657L201.61 135.608L201.501 134.358C201.501 134.358 198.46 132.854 190.221 134.196C181.982 135.537 180.466 140.075 176.927 138.062C173.388 136.05 171.383 136.212 171.383 136.212C170.376 139.9 167.681 139.9 167.681 139.9C167.043 139.823 166.416 139.67 165.814 139.446C161.991 135.942 160.955 129.863 160.955 129.863C164.966 129.367 165.275 125.517 164.815 122.363C167.038 123.68 170.171 123.772 174.571 120.955C187.192 112.906 200.135 117.264 204.685 117.934C206.715 118.23 208.938 117.518 210.78 116.685C211.018 117.11 211.35 117.476 211.749 117.755C214.82 119.889 217.353 122.704 219.148 125.98C230.992 148.057 218.008 159.782 213.517 162.952Z"
      fill="#19A0FB"
    />
    <path
      d="M166.236 260.998H170.999C173.036 260.996 174.989 260.188 176.429 258.751C177.869 257.315 178.68 255.368 178.682 253.336V248.02C178.682 247.535 178.586 247.055 178.4 246.608C178.214 246.16 177.941 245.753 177.597 245.411C177.253 245.068 176.846 244.797 176.396 244.612C175.947 244.427 175.466 244.332 174.98 244.332H146.496C146.497 245.464 146.274 246.585 145.84 247.63C145.406 248.676 144.77 249.626 143.967 250.426C143.165 251.226 142.212 251.86 141.163 252.292C140.114 252.724 138.991 252.946 137.856 252.944H34.9263C34.9275 255.08 35.7785 257.128 37.293 258.638C38.8071 260.148 40.8605 260.997 43.002 260.998H182.542C182.724 260.998 182.905 260.963 183.073 260.894C183.242 260.824 183.395 260.723 183.524 260.594C183.653 260.466 183.755 260.313 183.825 260.145C183.894 259.977 183.93 259.796 183.929 259.615V250.986C183.929 249.31 184.597 247.702 185.785 246.517C186.974 245.332 188.586 244.666 190.267 244.666C191.948 244.666 193.56 245.332 194.748 246.517C195.937 247.702 196.605 249.31 196.605 250.986V259.615C196.604 259.796 196.639 259.976 196.709 260.144C196.778 260.311 196.88 260.464 197.008 260.593C197.137 260.721 197.289 260.823 197.457 260.893C197.625 260.962 197.805 260.998 197.988 260.998H367.391C367.391 260.998 362.219 187.424 314.683 151.639C268.681 117.008 225.611 133.698 222.879 134.815L222.745 134.865"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M175.248 152.822C175.246 153.284 175.107 153.736 174.848 154.12C174.589 154.504 174.222 154.803 173.793 154.978C173.364 155.155 172.893 155.2 172.438 155.109C171.983 155.018 171.566 154.795 171.238 154.468C170.91 154.14 170.687 153.723 170.597 153.269C170.506 152.816 170.553 152.346 170.73 151.918C170.907 151.491 171.208 151.125 171.593 150.868C171.979 150.61 172.432 150.473 172.896 150.472C173.077 150.473 173.258 150.495 173.435 150.538C173.191 150.615 172.979 150.767 172.829 150.972C172.678 151.178 172.598 151.426 172.599 151.68C172.598 151.84 172.628 151.998 172.689 152.146C172.749 152.293 172.838 152.428 172.951 152.541C173.063 152.654 173.197 152.745 173.345 152.807C173.492 152.868 173.651 152.9 173.811 152.901C174.103 152.895 174.385 152.787 174.606 152.596C174.827 152.405 174.974 152.143 175.022 151.855C175.166 152.157 175.243 152.487 175.248 152.822Z"
      fill="#080D13"
    />
    <path
      d="M191.546 153.476C191.546 153.941 191.409 154.396 191.15 154.783C190.892 155.169 190.524 155.471 190.094 155.65C189.663 155.828 189.19 155.875 188.732 155.785C188.275 155.695 187.854 155.471 187.524 155.143C187.195 154.815 186.97 154.396 186.878 153.94C186.787 153.484 186.834 153.011 187.012 152.581C187.19 152.152 187.492 151.785 187.88 151.527C188.267 151.268 188.723 151.13 189.189 151.13C189.302 151.129 189.414 151.142 189.523 151.167C189.315 151.263 189.139 151.417 189.015 151.609C188.891 151.802 188.825 152.026 188.826 152.255C188.812 152.576 188.925 152.889 189.142 153.125C189.359 153.362 189.662 153.503 189.983 153.517C190.304 153.532 190.618 153.418 190.856 153.202C191.093 152.985 191.235 152.684 191.249 152.363C191.442 152.703 191.544 153.086 191.546 153.476Z"
      fill="#080D13"
    />
    <path
      d="M210.342 113.383C210.07 115.208 210.409 116.808 211.754 117.758C214.825 119.891 217.358 122.706 219.153 125.982C233.282 152.309 212.088 163.896 212.088 163.896L209.222 158.896C217.473 154.697 218.317 146.472 211.754 144.456C205.19 142.439 203.005 151.676 203.005 151.676L201.501 134.365C201.501 134.365 198.46 132.861 190.221 134.202C181.983 135.544 180.466 140.081 176.927 138.069C173.389 136.056 171.383 136.219 171.383 136.219C170.376 139.906 167.682 139.906 167.682 139.906C159.786 138.902 157.931 128.007 157.931 128.007C161.937 127.507 162.246 123.657 161.791 120.507C164.009 121.824 167.147 121.92 171.546 119.099C184.168 111.05 197.11 115.412 201.656 116.083C204.798 116.537 208.403 114.62 210.342 113.383Z"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M217.628 243.94L220.749 242.69L223.088 248.986L222.721 260.41L219.558 260.981L207.555 260.464C207.555 260.464 208.391 253.498 210.943 250.186C213.496 246.873 217.628 243.94 217.628 243.94Z"
      fill="#4AA9FF"
    />
    <path
      d="M162.977 143.755C162.977 143.755 166.173 138.035 172.9 138.63"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M186.073 138.63C186.073 138.63 193.76 136.909 196.45 141.171"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M197.983 164.531C197.983 164.531 193.388 161.877 190.025 166.34"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M168.943 139.549C168.943 139.549 165.672 177.925 190.066 177.217C194.244 177.096 198.397 174.359 202.366 169.955"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M212.088 173.447L202.366 169.956C202.366 169.956 204.777 177.639 216.717 178.226C228.657 178.814 232.664 151.486 223.89 140.491"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-linejoin="round"
    />
    <path
      d="M250.098 250.432C250.098 250.432 241.187 257.644 247.24 260.998"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M243.205 243.72C243.205 243.72 227.747 252.444 241.02 260.998"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M237.99 237.011C237.99 237.011 217.473 246.593 233.282 260.997"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M324.271 260.999C324.271 260.999 349.163 260.999 349.497 237.013C349.831 213.027 301.231 152.798 269.78 144.419C238.329 136.04 236.979 159.001 236.979 159.943C236.979 160.885 235.133 170.776 243.204 181.329C249.438 189.487 276.97 209.852 289.186 218.702C289.635 219.027 289.973 219.481 290.157 220.004C290.341 220.526 290.361 221.091 290.214 221.625C290.068 222.158 289.762 222.635 289.337 222.991C288.912 223.347 288.389 223.566 287.836 223.618L233.809 228.793H233.775C233.265 228.884 214.198 232.392 208.391 238.35C208.391 238.35 205.136 240.754 206.82 244.446C208.503 248.137 213.675 246.921 213.818 246.783"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      opacity="0.26"
      d="M189.193 157.834C192.908 157.834 195.919 154.831 195.919 151.126C195.919 147.421 192.908 144.418 189.193 144.418C185.478 144.418 182.467 147.421 182.467 151.126C182.467 154.831 185.478 157.834 189.193 157.834Z"
      fill="white"
    />
    <path
      opacity="0.26"
      d="M172.123 157.172C175.838 157.172 178.849 154.168 178.849 150.464C178.849 146.759 175.838 143.756 172.123 143.756C168.408 143.756 165.396 146.759 165.396 150.464C165.396 154.168 168.408 157.172 172.123 157.172Z"
      fill="white"
    />
    <path
      d="M230.266 242.885C227.901 242.226 224.036 241.635 220.055 242.91C218.108 243.535 216.312 244.555 214.778 245.905C214.444 246.197 214.122 246.493 213.813 246.789C213.147 247.44 212.518 248.128 211.929 248.851C211.852 248.946 211.742 249.01 211.62 249.03C210.137 249.234 200.373 250.776 200.423 255.696C200.469 260.117 205.324 260.842 206.995 260.958C207.064 260.965 207.133 260.957 207.199 260.935C207.265 260.913 207.325 260.878 207.376 260.832C207.428 260.785 207.469 260.729 207.498 260.666C207.526 260.604 207.542 260.536 207.542 260.467C207.542 258.892 207.902 253.955 211.808 248.988"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M142.297 208.157C143.442 217.361 136.268 221.523 128.427 222.14"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M117.029 220.216C114.039 218.605 111.617 216.117 110.091 213.088C108.565 210.06 108.009 206.637 108.498 203.283C109.752 194.43 117.272 187.639 124.633 183.331C140.091 174.285 174.926 180.831 180.779 182.164C185.266 183.189 189.018 179.689 190.538 177.998C190.603 177.926 190.687 177.874 190.78 177.848C190.873 177.823 190.972 177.824 191.064 177.853C191.156 177.881 191.239 177.935 191.301 178.009C191.363 178.083 191.403 178.173 191.416 178.268C194.629 197.017 231.941 222.465 240.572 228.161"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M151.71 201.788L139.356 209.433C138.62 209.89 137.795 210.189 136.937 210.309C136.078 210.429 135.204 210.367 134.37 210.13C133.536 209.892 132.761 209.482 132.096 208.928C131.431 208.373 130.889 207.685 130.507 206.908C129.818 205.514 129.682 203.912 130.125 202.422C130.567 200.931 131.558 199.662 132.897 198.867L151.697 187.697"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M189.193 157.834C192.908 157.834 195.919 154.831 195.919 151.126C195.919 147.421 192.908 144.418 189.193 144.418C185.478 144.418 182.467 147.421 182.467 151.126C182.467 154.831 185.478 157.834 189.193 157.834Z"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M172.123 156.168C175.281 156.168 177.842 153.615 177.842 150.465C177.842 147.314 175.281 144.761 172.123 144.761C168.964 144.761 166.403 147.314 166.403 150.465C166.403 153.615 168.964 156.168 172.123 156.168Z"
      stroke="white"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M172.123 157.172C175.838 157.172 178.849 154.168 178.849 150.464C178.849 146.759 175.838 143.756 172.123 143.756C168.408 143.756 165.396 146.759 165.396 150.464C165.396 154.168 168.408 157.172 172.123 157.172Z"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M182.501 150.464H178.849"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M182.5 159.942H180.094C179.943 159.942 179.793 159.909 179.656 159.845C179.519 159.781 179.398 159.687 179.301 159.571C179.204 159.455 179.135 159.319 179.097 159.173C179.059 159.027 179.054 158.874 179.083 158.726L180.675 150.464"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M134.217 182.836C134.217 182.836 125.64 184.682 122.615 197.597C120.777 205.439 118.254 215.442 116.557 222.092C116.34 222.945 116.32 223.836 116.501 224.697C116.681 225.559 117.057 226.368 117.598 227.063C118.14 227.758 118.833 228.32 119.626 228.707C120.419 229.094 121.29 229.295 122.172 229.295C123.49 229.295 124.769 228.848 125.797 228.026C126.826 227.204 127.542 226.057 127.829 224.775L131.418 208.718"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M142.059 213.027C142.059 213.027 151.062 207.661 168.797 213.027C186.532 218.394 206.92 222.035 213.646 207.803"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M220.059 242.909C220.059 242.909 226.326 250.042 222.516 261"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
    <path
      d="M12.976 154.208H111.991C115.18 154.204 118.278 155.27 120.786 157.235C123.293 159.2 125.065 161.95 125.815 165.041L141.578 230.145C142.004 231.901 142.024 233.731 141.637 235.497C141.251 237.262 140.467 238.918 139.347 240.338C138.225 241.758 136.796 242.905 135.166 243.695C133.536 244.484 131.747 244.894 129.935 244.894H31.1747C27.9916 244.897 24.8995 243.833 22.3949 241.874C19.8905 239.915 18.1182 237.174 17.3627 234.09L1.34485 168.999C0.912313 167.24 0.886328 165.406 1.26881 163.637C1.65129 161.867 2.43226 160.206 3.55263 158.782C4.67304 157.357 6.10358 156.205 7.73607 155.413C9.36861 154.62 11.1604 154.208 12.976 154.208Z"
      fill="#EFF7FF"
    />
    <path
      d="M70.4766 190.565C68.2968 190.581 66.1724 191.243 64.3725 192.468C62.5722 193.692 61.1768 195.423 60.363 197.444C59.5489 199.464 59.3528 201.681 59.7997 203.816C60.2464 205.951 61.3152 207.907 62.872 209.437C64.4288 210.968 66.4027 212.003 68.5451 212.414C70.6871 212.823 72.9009 212.589 74.9064 211.741C76.9122 210.892 78.6195 209.468 79.813 207.647C81.0065 205.826 81.6317 203.69 81.6107 201.51C81.581 198.587 80.3918 195.791 78.3038 193.738C76.2159 191.686 73.4005 190.544 70.4766 190.565ZM70.6714 209.95C70.4599 209.952 70.2501 209.912 70.0538 209.832C69.8572 209.753 69.6785 209.636 69.5273 209.487C69.3763 209.339 69.2557 209.162 69.1729 208.967C69.0897 208.773 69.046 208.564 69.0437 208.352C69.0413 208.141 69.0809 207.931 69.16 207.735C69.2385 207.539 69.3556 207.36 69.5035 207.209C69.6517 207.059 69.828 206.939 70.0225 206.856C70.2168 206.774 70.4259 206.731 70.6375 206.729C71.0646 206.725 71.4761 206.892 71.7816 207.192C72.0867 207.492 72.2605 207.9 72.2652 208.327C72.2699 208.754 72.1041 209.165 71.8053 209.47C71.5063 209.774 71.0986 209.947 70.6714 209.95ZM72.5778 197.545C72.2596 199.937 71.9975 202.45 71.3074 204.777C71.143 205.337 70.1016 205.339 69.9179 204.79C69.404 203.047 69.0071 201.273 68.7306 199.478C68.4928 198.174 67.711 196.06 68.4291 194.781C69.0589 193.643 70.8878 193.504 71.93 194.081C73.2142 194.787 72.7207 196.35 72.5778 197.545Z"
      fill="#C3E2FF"
    />
    <path
      d="M12.976 154.208H111.991C115.18 154.204 118.278 155.27 120.786 157.235C123.293 159.2 125.065 161.95 125.815 165.041L141.578 230.145C142.004 231.901 142.024 233.731 141.637 235.497C141.251 237.262 140.467 238.918 139.347 240.338C138.225 241.758 136.796 242.905 135.166 243.695C133.536 244.484 131.747 244.894 129.935 244.894H31.1747C27.9916 244.897 24.8995 243.833 22.3949 241.874C19.8905 239.915 18.1182 237.174 17.3627 234.09L1.34485 168.999C0.912313 167.24 0.886328 165.406 1.26881 163.637C1.65129 161.867 2.43226 160.206 3.55263 158.782C4.67304 157.357 6.10358 156.205 7.73607 155.413C9.36861 154.62 11.1604 154.208 12.976 154.208Z"
      stroke="#080D13"
      stroke-width="1.68"
      stroke-miterlimit="10"
    />
  </svg>
)
