import React from 'react'

const AddToList = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      className={`SRC-add-to-list-icon ${props.className ?? ''}`}
      style={{
        ...props.style,
      }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 10H2V12H14V10ZM14 6H2V8H14V6ZM18 14V10H16V14H12V16H16V20H18V16H22V14H18ZM2 16H10V14H2V16Z"
        fill="#515359"
      />
    </svg>
  )
}

export default AddToList
