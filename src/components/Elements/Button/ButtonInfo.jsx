const ButtonInfo = (props) => {
  const { children, onClick } = props;

  return (
    <button
      onClick={onClick}
      className="group flex justify-start w-full pl-2 py-2 items-center bg-neutral-800 text-[#a99b8e] hover:text-zinc-50 font-semibold text-[0.75rem] relative overflow-hidden rounded-md transition-all duration-400"
    >
      <div className="relative overflow-hidden z-[1] transition-all duration-200">
        <span className="group-hover:translate-y-full inline-block transition-all duration-500">
          {children}
        </span>
        <span className="absolute inset-0 -translate-y-full group-hover:translate-y-0 inline-block transition-all duration-500">
          {children}
        </span>
      </div>
    </button>
  );
};

export default ButtonInfo;
