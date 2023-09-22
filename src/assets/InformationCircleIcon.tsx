import { Icon } from "../types/icon";

export const InformationCircleIcon = ({ classNames }: Icon) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className={classNames}
		>
			<path
				fillRule="evenodd"
				d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export const InformationCircleActiveIcon = ({ classNames }: Icon) => {
	return (
		<svg
            className={classNames}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_141_8)">
				<g filter="url(#filter0_d_141_8)">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2.25 12C2.25 6.615 6.615 2.25 12 2.25C17.385 2.25 21.75 6.615 21.75 12C21.75 17.385 17.385 21.75 12 21.75C6.615 21.75 2.25 17.385 2.25 12ZM10.956 10.558C12.102 9.985 13.393 11.021 13.082 12.264L12.373 15.1L12.415 15.08C12.5912 15.0025 12.7905 14.9958 12.9715 15.0612C13.1526 15.1265 13.3016 15.259 13.3877 15.4312C13.4737 15.6033 13.4903 15.802 13.434 15.9861C13.3777 16.1702 13.2527 16.3255 13.085 16.42L13.045 16.442C11.898 17.015 10.607 15.979 10.918 14.736L11.628 11.9L11.586 11.92C11.4975 11.9692 11.4 11.9999 11.2994 12.0104C11.1987 12.0209 11.097 12.0109 11.0003 11.981C10.9036 11.9511 10.8139 11.902 10.7367 11.8366C10.6595 11.7711 10.5964 11.6907 10.551 11.6002C10.5057 11.5098 10.4792 11.411 10.4731 11.31C10.4669 11.209 10.4813 11.1078 10.5153 11.0124C10.5493 10.9171 10.6022 10.8297 10.6709 10.7553C10.7396 10.681 10.8226 10.6214 10.915 10.58L10.956 10.558ZM12 9C12.1989 9 12.3897 8.92098 12.5303 8.78033C12.671 8.63968 12.75 8.44891 12.75 8.25C12.75 8.05109 12.671 7.86032 12.5303 7.71967C12.3897 7.57902 12.1989 7.5 12 7.5C11.8011 7.5 11.6103 7.57902 11.4697 7.71967C11.329 7.86032 11.25 8.05109 11.25 8.25C11.25 8.44891 11.329 8.63968 11.4697 8.78033C11.6103 8.92098 11.8011 9 12 9Z"
						fill="url(#paint0_linear_141_8)"
					/>
				</g>
			</g>
			<defs>
				<filter
					id="filter0_d_141_8"
					x="-8.75"
					y="-6.75"
					width="47.5"
					height="47.5"
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
						result="effect1_dropShadow_141_8"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_141_8"
						result="shape"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_141_8"
					x1="12"
					y1="2.25"
					x2="12"
					y2="21.75"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#3461FF" />
					<stop offset="1" stopColor="#8454EB" />
				</linearGradient>
				<clipPath id="clip0_141_8">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};
