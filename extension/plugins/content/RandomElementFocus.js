const getAllFocusableElements = (parent) => {
	if (!parent) {
		console.warn("You need to pass a parent HTMLElement");
		return []; // Return array so length queries will work
	}

	return parent.querySelectorAll(
		'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)'
	);
};

let allFocus = getAllFocusableElements(document);

setInterval(() => {
	let allFocus = getAllFocusableElements(document);
	let choice = allFocus[Math.floor(Math.random() * allFocus.length)];
	choice.focus();
	choice.scrollIntoView();
}, 3000);
