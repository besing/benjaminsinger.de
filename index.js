'use strict';

import './style.scss';

document.getElementById('imprint-link').addEventListener('click', showImprint);

function showImprint() {
	const imprintSection = document.getElementById('imprint-section');
	imprintSection.style.display = 'block';
	imprintSection.innerHTML = imprintHtml;

	const closeButton = document.getElementById('close-click');
	imprintSection.addEventListener('click', closeImprint);
	closeButton.addEventListener('click', closeImprint);

	function closeImprint() {
		imprintSection.style.display = 'none';
	}
}

const imprintHtml =
	'<div class="imprint-content"><h2>Impressum</h2><p>Benjamin Singer<br />Hartwig-Hesse-Str. 38<br />20257 Hamburg</p><p>mail@benjaminsinger.de<br /></p></div><div class="close-section"><a id="close-click" href="#"><span class="close"></span></a></div>';
