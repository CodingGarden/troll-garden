import ContentPlugin from "../../lib/ContentPlugin.js";

class RandomElementFocus extends ContentPlugin {
	constructor() {
		super("Focus and scroll to random elements on the page.");
	}

	id = "e929a757-adad-44fa-a53f-b652c6dbd45c";

	settings = {
		enabled: false,
	};

	run() {
		console.log("Random Element Focus running...");

		function randomFocus() {
			let focusElements = document.querySelectorAll(
				'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)'
			);

			let selected =
				focusElements[Math.floor(Math.random() * focusElements.length)];
			selected.focus();
			selected.scrollIntoView();
		}

		window.addEventListener("DOMContentLoaded", function () {
			setInterval(
				randomFocus,
				Math.floor(Math.random() * (300000 - 60000 + 1)) + 60000
			);
		});
	}
}
export default RandomElementFocus;
