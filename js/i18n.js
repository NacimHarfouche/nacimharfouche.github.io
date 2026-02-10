/**
 * i18n.js — Internationalization module
 * Detects browser language, loads translations, and applies them to the DOM.
 * Supports FR (if browser is francophone) and EN (default for all others).
 */

const I18N = (() => {
	const STORAGE_KEY = "portfolio-lang";

	const TRANSLATIONS = {
		en: {
			"htmlLang": "en",
			"meta.description": "Nacim Harfouche Full Stack Web Developer",
			"nav.home": "Home",
			"nav.projects": "Projects",
			"nav.about": "About Me",
			"nav.contact": "Contact",
			"nav.langLabel": "FR",
			"nav.langFlag": "img/frenchFlag.png",
			"nav.langFlagAlt": "french flag",
			"hero.subtitle": "Web Developer",
			"home.title": "Home",
			"home.text": "Welcome, I'm a french full stack web developer, passionate about the realization and development of web projects, I turned towards a career as a web developer in 2018. I joined the 3W Academy where I completed a developer integrator training in the realization of web applications (back & front ) that I validated in April 2019.",
			"projects.title": "Projects",
			"about.title": "About me",
			"about.status": "in progress...",
			"about.text1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Iaculis eu non diam phasellus vestibulum. Elit sed vulputate mi sit amet. Diam phasellus vestibulum lorem sed risus. Morbi quis commodo odio aenean sed adipiscing. Elit sed vulputate mi sit. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.",
			"about.text2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Iaculis eu non diam phasellus vestibulum. Elit sed vulputate mi sit amet. Diam phasellus vestibulum lorem sed risus. Morbi quis commodo odio aenean sed adipiscing. Elit sed vulputate mi sit. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.",
			"contact.title": "Contact",
			"footer.createdBy": "Created by",
			"noscript": "Your browser does not support JavaScript!",
			"logo.alt": "logo of the site",
			"project.passwordGenerator.url": "https://nacimharfouche.github.io/passwordGenerator/",
			"project.verifyEan.url": "https://nacimharfouche.github.io/verify_ean/index.html"
		},
		fr: {
			"htmlLang": "fr",
			"meta.description": "Nacim Harfouche Développeur Web Full Stack",
			"nav.home": "Accueil",
			"nav.projects": "Mes projets",
			"nav.about": "A propos de Moi",
			"nav.contact": "Contact",
			"nav.langLabel": "EN",
			"nav.langFlag": "img/USFlag.png",
			"nav.langFlagAlt": "drapeau américain",
			"hero.subtitle": "Developpeur Web",
			"home.title": "Accueil",
			"home.text": "Bienvenue à toi, je suis développeur web full stack français, passionné par la réalisation et le développement de projets web, je me suis orienté vers une carrière de développeur web en 2018. J'ai rejoint la 3W Academy où j'ai complété une formation de développeur intégrateur dans la réalisation de applications web (recto et verso) que j'ai validées en avril 2019.",
			"projects.title": "Projets",
			"about.title": "A propos de moi",
			"about.status": "en cours...",
			"about.text1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Iaculis eu non diam phasellus vestibulum. Elit sed vulputate mi sit amet. Diam phasellus vestibulum lorem sed risus. Morbi quis commodo odio aenean sed adipiscing. Elit sed vulputate mi sit. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.",
			"about.text2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Iaculis eu non diam phasellus vestibulum. Elit sed vulputate mi sit amet. Diam phasellus vestibulum lorem sed risus. Morbi quis commodo odio aenean sed adipiscing. Elit sed vulputate mi sit. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.",
			"contact.title": "Contact",
			"footer.createdBy": "Créé par",
			"noscript": "Votre navigateur ne supporte pas JavaScript!",
			"logo.alt": "logo du site",
			"project.passwordGenerator.url": "https://nacimharfouche.github.io/passwordGenerator/fr/index.html",
			"project.verifyEan.url": "https://nacimharfouche.github.io/verify_ean/fr.html"
		}
	};

	let currentLang = "en";

	/**
	 * Detect initial language:
	 * 1. Check localStorage (user preference)
	 * 2. Check browser language
	 * 3. Fallback to EN
	 */
	function detectLanguage() {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored && TRANSLATIONS[stored]) {
			return stored;
		}
		const browserLang = (navigator.language || navigator.userLanguage || "").slice(0, 2).toLowerCase();
		return browserLang === "fr" ? "fr" : "en";
	}

	/**
	 * Apply translations to all elements with data-i18n attributes
	 */
	function applyTranslations(t) {
		// Update <html lang="">
		document.documentElement.lang = t.htmlLang || currentLang;

		// Update meta description
		var metaDesc = document.querySelector('meta[name="description"]');
		if (metaDesc && t["meta.description"]) {
			metaDesc.setAttribute("content", t["meta.description"]);
		}

		// Update text content
		var i18nEls = document.querySelectorAll("[data-i18n]");
		for (var i = 0; i < i18nEls.length; i++) {
			var key = i18nEls[i].getAttribute("data-i18n");
			if (t[key] !== undefined) {
				i18nEls[i].textContent = t[key];
			}
		}

		// Update alt attributes
		var altEls = document.querySelectorAll("[data-i18n-alt]");
		for (var i = 0; i < altEls.length; i++) {
			var key = altEls[i].getAttribute("data-i18n-alt");
			if (t[key] !== undefined) {
				altEls[i].setAttribute("alt", t[key]);
			}
		}

		// Update src attributes (flag images)
		var srcEls = document.querySelectorAll("[data-i18n-src]");
		for (var i = 0; i < srcEls.length; i++) {
			var key = srcEls[i].getAttribute("data-i18n-src");
			if (t[key] !== undefined) {
				srcEls[i].setAttribute("src", t[key]);
			}
		}

		// Update href attributes (language-specific links)
		var hrefEls = document.querySelectorAll("[data-i18n-href]");
		for (var i = 0; i < hrefEls.length; i++) {
			var key = hrefEls[i].getAttribute("data-i18n-href");
			if (t[key] !== undefined) {
				hrefEls[i].setAttribute("href", t[key]);
			}
		}
	}

	/**
	 * Set language and apply translations
	 */
	function setLanguage(lang) {
		if (!TRANSLATIONS[lang]) lang = "en";
		currentLang = lang;
		localStorage.setItem(STORAGE_KEY, lang);
		applyTranslations(TRANSLATIONS[lang]);
	}

	/**
	 * Toggle between FR and EN
	 */
	function toggleLanguage() {
		setLanguage(currentLang === "fr" ? "en" : "fr");
	}

	/**
	 * Get current language
	 */
	function getLang() {
		return currentLang;
	}

	return { detectLanguage, setLanguage, toggleLanguage, getLang };
})();

// --- Initialize immediately ---
(function () {
	// 1. Detect and apply language
	var lang = I18N.detectLanguage();
	I18N.setLanguage(lang);

	// 2. Bind toggle button click
	var langToggle = document.getElementById("languageLink");
	if (langToggle) {
		langToggle.onclick = function (e) {
			e.preventDefault();
			e.stopPropagation();
			I18N.toggleLanguage();
			return false;
		};
	}
})();
