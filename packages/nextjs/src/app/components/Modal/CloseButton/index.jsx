const CloseButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.1075 25.8925L25.8926 14.1074"
          stroke="#0B0B0C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14.1075 14.1075L25.8926 25.8926"
          stroke="#0B0B0C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default CloseButton;
