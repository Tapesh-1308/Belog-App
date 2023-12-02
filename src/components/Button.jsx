function Button({
    children,
    type = "button",
    bgColor = "bg-[#1043B2]",
    textColor = "text-white",
    className = "",
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} `} {...props}>
        {children}
    </button>
  )
}

export default Button