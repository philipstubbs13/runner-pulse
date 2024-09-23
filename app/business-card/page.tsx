export default function BusinessCard() {
  return (
    <div className="w-[3.5in] h-[2in] bg-gradient-to-br from-blue-500 to-pink-500 rounded-lg shadow-lg overflow-hidden">
      <div className="flex h-full">
        <div className="w-1/3 bg-white flex flex-col items-center justify-center p-4">
          <svg
            className="w-16 h-16 mb-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8.5V2"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22V15.5"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 12H22"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12H8.5"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8.5L15.5 12L12 15.5L8.5 12L12 8.5Z"
              fill="url(#gradient1)"
            />
            <path d="M12 2L15.5 12H8.5L12 2Z" fill="url(#gradient2)" />
            <path d="M15.5 12L12 22L8.5 12H15.5Z" fill="url(#gradient3)" />
            <path d="M22 12L12 15.5V8.5L22 12Z" fill="url(#gradient4)" />
            <path d="M2 12L12 8.5V15.5L2 12Z" fill="url(#gradient5)" />
            <defs>
              <linearGradient
                id="gradient1"
                x1="8.5"
                y1="8.5"
                x2="15.5"
                y2="15.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3B82F6" />
                <stop offset="0.5" stopColor="#10B981" />
                <stop offset="1" stopColor="#EC4899" />
              </linearGradient>
              <linearGradient
                id="gradient2"
                x1="8.5"
                y1="2"
                x2="15.5"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="#10B981" />
              </linearGradient>
              <linearGradient
                id="gradient3"
                x1="8.5"
                y1="12"
                x2="15.5"
                y2="22"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#10B981" />
                <stop offset="1" stopColor="#EC4899" />
              </linearGradient>
              <linearGradient
                id="gradient4"
                x1="12"
                y1="8.5"
                x2="22"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="#EC4899" />
              </linearGradient>
              <linearGradient
                id="gradient5"
                x1="2"
                y1="12"
                x2="12"
                y2="15.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#10B981" />
                <stop offset="1" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
          <h1 className="text-xl font-bold text-blue-600">Runner Pulse</h1>
          <p className="text-xs text-gray-600 mt-1">
            Track Your Running Journey
          </p>
        </div>
        <div className="w-2/3 p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-white font-semibold mb-2">
              Elevate Your Running Experience
            </h2>
            <ul className="text-xs text-white space-y-1">
              <li>• Track personal race results</li>
              <li>• Discover upcoming races</li>
              <li>• Create a running photo gallery</li>
              <li>• Connect with fellow runners</li>
            </ul>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-white">www.runnerpulse.com</p>
              <p className="text-xs text-white">info@runnerpulse.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
