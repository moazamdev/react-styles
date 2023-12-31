import React from "react";
import NoStyles from "./no-styles";
import CssInCssCss from "./css-in-css/css/index.jsx";
import CssInCssScss from "./css-in-css/scss/index.jsx";
import CssInCssCssModule from "./css-in-css/css-modules/index.jsx";
import CssInCssCssModuleWithScss from "./css-in-css/css-modules-with-scss/index.jsx";
import CssInJsStyledComponents from "./css-in-js/styled-components/index.jsx";
import InlineStyles from "./inline-css/index.jsx";
import UtilityFirstClass from "./utility-first-css/tailwind-css/index.jsx";

export default function App() {
	return (
		<div>
			<h1>React Styling Approaches</h1>

			<NoStyles />

			<hr className="border border-black my-6" />

			<CssInCssCss />

			<hr className="border border-black my-6" />

			<CssInCssScss />

			<hr className="border border-black my-6" />

			<CssInCssCssModule />

			<hr className="border border-black my-6" />

			<CssInCssCssModuleWithScss />

			<hr className="border border-black my-6" />

			<CssInJsStyledComponents />

			<hr className="border border-black my-6" />

			<InlineStyles />

			<hr className="border border-black my-6" />

			<UtilityFirstClass />
		</div>
	);
}
