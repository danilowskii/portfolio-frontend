/**
 * @param {string} variant - The variant of the button ("primary" or "secondary").
 * @returns {string} - The corresponding CSS class string
 **/

const getClass = (variant) => {
  const baseClass =
    "py-3 px-6 max-w-[300px] flex justify-center gap-4 transition-all duration-300 h-[40px] items-center text-[#F9FAF7] text-center rounded-[11px] cursor-pointer";

  switch (variant) {
    case "primary":
      return `${baseClass} bg-[#FD485C] font-serif hover:bg-[#FD485C]/80 flex `;
    case "secondary":
      return `${baseClass} bg-[#120620]/20 hover:bg-[#120620] border-white/50 hover:border-[#FD485C] border-[1px] active:bg-[#120620]`;
    default:
      return getClass("primary");
  }
};

/**
 * Button component that renders a button with different styles.
 * @param {Object} props - Propety received by the component.
 * @param {string} props.variant - The variant of the button ("primary" or "secondary").
 * @param {function} props.onClick - The click handler for the button.
 * @param {React.ReactNode} children - The content inside the button.
 * @param {Object} props.rest - Another additional props.
 * @return {JSX.Element} The rendered button component.
 */

const Button = ({ variant = "primary", onClick, children, ...props }) => {
  const classSelect = getClass(variant);
  return (
    <button className={classSelect} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
