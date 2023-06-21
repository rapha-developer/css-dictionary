import { BsTranslate } from "react-icons/bs";
import { useState } from "react";
import PropertyDocInPortuguese from "./pt/PropertyDocInPortuguese";
import PropertyDocInEnglish from "./en/PropertyDocInEnglish";
import styles from "./style.module.css";

function PropertyDoc() {
	const [isFirstTabActive, setIsFirstTabActive] = useState(true);
	function handleActiveTab() {
		setIsFirstTabActive((prevTabState) => !prevTabState);
	}

	return (
		<div className={styles.uiPropDoc}>
			<div
				className={styles.uiTranslateTab}
				role="tablist"
				aria-orientation="horizontal"
				data-orientation="horizontal"
			>
                <UiTranslateButtons 
                    tabActive={isFirstTabActive}
                    handleActiveTab={handleActiveTab}
                />
				<div className="uiTab__items">
					<div
						id="property-doc-in-english"
						className={styles.uiTranslateTab__content}
						data-visible={isFirstTabActive}
					>
                        <PropertyDocInEnglish />
                    </div>

					<div
						id="property-doc-in-portuguese"
						className={styles.uiTranslateTab__content}
						data-visible={!isFirstTabActive}
					>
                        <PropertyDocInPortuguese />
                    </div>
				</div>
			</div>
		</div>
	);
}
function UiTranslateButtons({
    tabActive, 
    firstTitle = "english", 
    secondTitle = "portuguese",
    handleActiveTab}) {
	return (
		<div className={styles.uiTranslateTab__buttons}>
			<button
				className={styles.uiTranslateTab__btn}
				role="tab"
				data-active={tabActive}
				onClick={() => handleActiveTab()}
			>
				<span className="capitalize">
					<BsTranslate className={styles.uiTranslateTab__icon} />
					{firstTitle}
				</span>
			</button>
			<button
				className={styles.uiTranslateTab__btn}
				role="tab"
				data-active={!tabActive}
				onClick={() => handleActiveTab()}
			>
				<span className="capitalize">
					<BsTranslate className={styles.uiTranslateTab__icon} />
					{secondTitle}
				</span>
			</button>
		</div>
	);
}

export default PropertyDoc;
