import type { Component } from "solid-js";

import styles from "./Highlight.module.scss";

const Highlight: Component = () => {
	return <>
		<div class={styles.root}>
			There should be a highlight.
		</div>
	</>;
};

export default Highlight;
