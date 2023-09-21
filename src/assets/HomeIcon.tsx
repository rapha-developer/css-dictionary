import { Icon } from "../types/icon";

export const HomeIcon = ({ classNames }: Icon) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className={classNames}
		>
			<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
			<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
		</svg>
	);
};

export const HomeIconActiveIcon = ({ classNames }: Icon) => {
	return (
		<svg
            className={classNames}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M11.47 3.84C11.6106 3.69955 11.8013 3.62066 12 3.62066C12.1988 3.62066 12.3894 3.69955 12.53 3.84L21.22 12.53C21.2887 12.6037 21.3715 12.6628 21.4635 12.7038C21.5555 12.7448 21.6548 12.7668 21.7555 12.7686C21.8562 12.7704 21.9562 12.7518 22.0496 12.7141C22.143 12.6764 22.2278 12.6203 22.299 12.549C22.3703 12.4778 22.4264 12.393 22.4641 12.2996C22.5018 12.2062 22.5204 12.1062 22.5186 12.0055C22.5168 11.9048 22.4948 11.8055 22.4538 11.7135C22.4128 11.6215 22.3537 11.5387 22.28 11.47L13.591 2.78C13.3821 2.57106 13.134 2.40533 12.861 2.29225C12.5881 2.17918 12.2955 2.12098 12 2.12098C11.7045 2.12098 11.4119 2.17918 11.139 2.29225C10.866 2.40533 10.6179 2.57106 10.409 2.78L1.719 11.47C1.58245 11.6115 1.50694 11.801 1.50874 11.9977C1.51054 12.1943 1.58951 12.3824 1.72863 12.5214C1.86775 12.6604 2.0559 12.7391 2.25255 12.7408C2.4492 12.7424 2.63861 12.6667 2.78 12.53L11.47 3.84Z"
				fill="url(#paint0_linear_126_2)"
			/>
			<path
				d="M12 5.432L20.159 13.591C20.189 13.621 20.219 13.649 20.25 13.677V19.875C20.25 20.91 19.41 21.75 18.375 21.75H15C14.8011 21.75 14.6103 21.671 14.4697 21.5303C14.329 21.3897 14.25 21.1989 14.25 21V16.5C14.25 16.3011 14.171 16.1103 14.0303 15.9697C13.8897 15.829 13.6989 15.75 13.5 15.75H10.5C10.3011 15.75 10.1103 15.829 9.96967 15.9697C9.82902 16.1103 9.75 16.3011 9.75 16.5V21C9.75 21.1989 9.67098 21.3897 9.53033 21.5303C9.38968 21.671 9.19891 21.75 9 21.75H5.625C5.12772 21.75 4.65081 21.5525 4.29917 21.2008C3.94754 20.8492 3.75 20.3723 3.75 19.875V13.677C3.78111 13.6492 3.81146 13.6205 3.841 13.591L12 5.43V5.432Z"
				fill="url(#paint1_linear_126_2)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_126_2"
					x1="1.50871"
					y1="7.44484"
					x2="22.5187"
					y2="7.44484"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#00F5A0" />
					<stop offset="1" stopColor="#00D9F5" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_126_2"
					x1="12"
					y1="5.43"
					x2="12"
					y2="21.75"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#3461FF" />
					<stop offset="1" stopColor="#8454EB" />
				</linearGradient>
			</defs>
		</svg>
	);
};
