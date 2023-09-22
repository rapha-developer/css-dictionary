import { Icon } from "../types/icon";

export const BookOpenIcon = ({ classNames }: Icon) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className={classNames}
		>
			<path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
		</svg>
	);
};

export const BookOpenActiveIcon = ({ classNames }: Icon) => {
	return (
		<svg
            className={classNames}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_141_10)">
				<g filter="url(#filter0_d_141_10)">
					<path
						d="M11.25 4.53301C9.6831 3.52938 7.86076 2.99725 6 3.00001C4.89299 2.99888 3.7939 3.18657 2.75 3.55501C2.60379 3.6067 2.4772 3.70245 2.38766 3.82906C2.29812 3.95568 2.25002 4.10693 2.25 4.26201V18.512C2.25002 18.632 2.27882 18.7502 2.33398 18.8567C2.38915 18.9633 2.46907 19.055 2.56703 19.1243C2.665 19.1936 2.77815 19.2383 2.89699 19.2548C3.01583 19.2713 3.13689 19.259 3.25 19.219C4.13333 18.9075 5.06333 18.7488 6 18.75C7.995 18.75 9.823 19.457 11.25 20.636V4.53301ZM12.75 20.636C14.2264 19.4141 16.0836 18.747 18 18.75C18.966 18.75 19.89 18.916 20.75 19.22C20.8632 19.26 20.9843 19.2723 21.1033 19.2558C21.2222 19.2392 21.3354 19.1944 21.4334 19.125C21.5314 19.0556 21.6113 18.9638 21.6664 18.8571C21.7215 18.7504 21.7501 18.6321 21.75 18.512V4.26201C21.75 4.10693 21.7019 3.95568 21.6123 3.82906C21.5228 3.70245 21.3962 3.6067 21.25 3.55501C20.2061 3.18657 19.107 2.99888 18 3.00001C16.1392 2.99725 14.3169 3.52938 12.75 4.53301V20.636Z"
						fill="url(#paint0_linear_141_10)"
					/>
				</g>
				<path
					d="M21 2.49999C17.7595 1.59363 16.2687 1.79403 14 2.99999L13 3.5"
					stroke="url(#paint1_linear_141_10)"
				/>
				<path
					d="M3 2.56384C6.24052 1.65748 7.73133 1.85787 10 3.06384L11 3.56384"
					stroke="url(#paint2_linear_141_10)"
				/>
			</g>
			<defs>
				<filter
					id="filter0_d_141_10"
					x="-8.75"
					y="-6"
					width="47.5"
					height="45.636"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dx="3" dy="5" />
					<feGaussianBlur stdDeviation="7" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.347833 0 0 0 0 0.241667 0 0 0 0 1 0 0 0 0.54 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_141_10"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_141_10"
						result="shape"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_141_10"
					x1="12"
					y1="3"
					x2="12"
					y2="20.636"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#3461FF" />
					<stop offset="1" stopColor="#8454EB" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_141_10"
					x1="13"
					y1="2.71808"
					x2="21"
					y2="2.71808"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#00F5A0" />
					<stop offset="1" stopColor="#00D9F5" />
				</linearGradient>
				<linearGradient
					id="paint2_linear_141_10"
					x1="11"
					y1="2.78192"
					x2="3"
					y2="2.78192"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#00F5A0" />
					<stop offset="1" stopColor="#00D9F5" />
				</linearGradient>
				<clipPath id="clip0_141_10">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};
