/**
 * @param {string} variant - The variant of the button ("primary" or "secondary").
 * @returns {string} - The corresponding CSS class string
 **/

const getClass = (variant) => {
  const baseClass =
    "py-3 px-6 max-w-[300px] flex gap-4 h-[40px] items-center text-[#F9FAF7] text-center rounded-[15px] cursor-pointer";

  switch (variant) {
    case "primary":
      return `${baseClass} bg-[#FD485C] hover:bg-[#FD485C]/80 flex `;
    case "secondary":
      return `${baseClass} bg-[#120620]/20 hover:bg-[#120620]/30 active:bg-[#120620]`;
    default:
      return getClass("primary");
  }
};

const Button = ({ variant = "primary", onClick, children, ...props }) => {
  const classSelect = getClass(variant);
  return (
    <button className={classSelect} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
