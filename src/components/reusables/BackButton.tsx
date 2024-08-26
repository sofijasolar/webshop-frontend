import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <Link
      to="/"
      className="inline-flex items-center justify-center p-2 text-indigo-600 rounded-full hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
    >
      <svg
        className="w-6 h-6 mr-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <span className="text-indigo-600 font-medium pr-1">Back</span>
    </Link>
  );
};

export default BackButton;

