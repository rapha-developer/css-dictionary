import { Icon } from "../types/icon";

export const BuilderLibraryIcon = ({ classNames }: Icon) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className={classNames}
		>
			<path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
			<path
				fillRule="evenodd"
				d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z"
				clipRule="evenodd"
			/>
			<path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
		</svg>
	);
};

export const BuilderLibraryActiveIcon = ({ classNames }: Icon) => {
	return (
		<svg
			className={classNames}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_124_15)">
				<path
					d="M11.584 2.37601C11.7072 2.29388 11.8519 2.25006 12 2.25006C12.148 2.25006 12.2928 2.29388 12.416 2.37601L21.416 8.37601C21.4991 8.43011 21.5707 8.50017 21.6265 8.58213C21.6824 8.66408 21.7215 8.7563 21.7415 8.85345C21.7614 8.9506 21.762 9.05075 21.743 9.14811C21.724 9.24546 21.6859 9.33808 21.6309 9.42061C21.5759 9.50313 21.505 9.57393 21.4225 9.62889C21.3399 9.68386 21.2472 9.7219 21.1499 9.74081C21.0525 9.75973 20.9524 9.75915 20.8552 9.7391C20.7581 9.71905 20.6659 9.67993 20.584 9.62401L12 3.90101L3.41598 9.62401C3.25047 9.73174 3.04914 9.76984 2.85571 9.73005C2.66228 9.69025 2.49235 9.57577 2.3828 9.41146C2.27326 9.24714 2.23294 9.04625 2.27061 8.85239C2.30827 8.65853 2.42088 8.48735 2.58398 8.37601L11.584 2.37601Z"
					fill="url(#paint0_linear_124_15)"
				/>
				<g filter="url(#filter0_d_124_15)">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M20.25 10.332V20.25H21C21.1989 20.25 21.3897 20.329 21.5303 20.4697C21.671 20.6103 21.75 20.8011 21.75 21C21.75 21.1989 21.671 21.3897 21.5303 21.5303C21.3897 21.671 21.1989 21.75 21 21.75H3C2.80109 21.75 2.61032 21.671 2.46967 21.5303C2.32902 21.3897 2.25 21.1989 2.25 21C2.25 20.8011 2.32902 20.6103 2.46967 20.4697C2.61032 20.329 2.80109 20.25 3 20.25H3.75V10.332C3.75023 10.1534 3.81422 9.98067 3.93045 9.84501C4.04668 9.70935 4.20751 9.61963 4.384 9.592C6.90344 9.19722 9.44981 8.99929 12 9C14.59 9 17.134 9.202 19.616 9.592C19.7925 9.61963 19.9533 9.70935 20.0696 9.84501C20.1858 9.98067 20.2498 10.1534 20.25 10.332ZM12.75 12.75C12.75 12.5511 12.671 12.3603 12.5303 12.2197C12.3897 12.079 12.1989 12 12 12C11.8011 12 11.6103 12.079 11.4697 12.2197C11.329 12.3603 11.25 12.5511 11.25 12.75V19.5C11.25 19.6989 11.329 19.8897 11.4697 20.0303C11.6103 20.171 11.8011 20.25 12 20.25C12.1989 20.25 12.3897 20.171 12.5303 20.0303C12.671 19.8897 12.75 19.6989 12.75 19.5V12.75ZM15.75 12C15.9489 12 16.1397 12.079 16.2803 12.2197C16.421 12.3603 16.5 12.5511 16.5 12.75V19.5C16.5 19.6989 16.421 19.8897 16.2803 20.0303C16.1397 20.171 15.9489 20.25 15.75 20.25C15.5511 20.25 15.3603 20.171 15.2197 20.0303C15.079 19.8897 15 19.6989 15 19.5V12.75C15 12.5511 15.079 12.3603 15.2197 12.2197C15.3603 12.079 15.5511 12 15.75 12ZM9 12.75C9 12.5511 8.92098 12.3603 8.78033 12.2197C8.63968 12.079 8.44891 12 8.25 12C8.05109 12 7.86032 12.079 7.71967 12.2197C7.57902 12.3603 7.5 12.5511 7.5 12.75V19.5C7.5 19.6989 7.57902 19.8897 7.71967 20.0303C7.86032 20.171 8.05109 20.25 8.25 20.25C8.44891 20.25 8.63968 20.171 8.78033 20.0303C8.92098 19.8897 9 19.6989 9 19.5V12.75Z"
						fill="url(#paint1_linear_124_15)"
					/>
				</g>
				<path
					d="M12 7.875C12.2984 7.875 12.5845 7.75647 12.7955 7.5455C13.0065 7.33452 13.125 7.04837 13.125 6.75C13.125 6.45163 13.0065 6.16548 12.7955 5.9545C12.5845 5.74353 12.2984 5.625 12 5.625C11.7016 5.625 11.4155 5.74353 11.2045 5.9545C10.9935 6.16548 10.875 6.45163 10.875 6.75C10.875 7.04837 10.9935 7.33452 11.2045 7.5455C11.4155 7.75647 11.7016 7.875 12 7.875Z"
					fill="url(#paint2_linear_124_15)"
				/>
			</g>
			<defs>
				<filter
					id="filter0_d_124_15"
					x="-8.75"
					y="0"
					width="47.5"
					height="40.75"
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
						result="effect1_dropShadow_124_15"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_124_15"
						result="shape"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_124_15"
					x1="2.25684"
					y1="6.00232"
					x2="21.7568"
					y2="6.00232"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#00F5A0" />
					<stop offset="1" stopColor="#00D9F5" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_124_15"
					x1="12"
					y1="9"
					x2="12"
					y2="21.75"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#3461FF" />
					<stop offset="1" stopColor="#8454EB" />
				</linearGradient>
				<linearGradient
					id="paint2_linear_124_15"
					x1="10.875"
					y1="6.75"
					x2="13.125"
					y2="6.75"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#00F5A0" />
					<stop offset="1" stopColor="#00D9F5" />
				</linearGradient>
				<clipPath id="clip0_124_15">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};
