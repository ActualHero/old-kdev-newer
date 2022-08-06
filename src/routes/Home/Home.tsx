import { Link } from "@solidjs/router";
import type { Component } from "solid-js";
import Highlight from "../../components/Highlight/Highlight";

import styles from "./Home.module.scss";

const Home: Component = () => {
	return <>
		<div class={styles.root}>
			<div class={styles.container}>
				<div class={styles.welcome}>
					<h1>Hi!</h1>
					<h2>
						I am a web developer. <br />
						I make visualisations. <br /> <br />
						I've got:
					</h2>
					<ul>
						<Link href="/sketch/pid">Second-order system visualisation and playground</Link> <br />
						<Link href="/sketch/planets">Procedurally generated pixel-art planets</Link> <br />
						<Link href="/sketch/wave">Wave function collapse demo</Link> <br />
						<Link href="/gpt-3">GPT-3 discord bot assistant</Link> <br />
						<Link href="/sketch/starmap">The Universal Starmap Archive project</Link>
					</ul>
				</div>
				<div class={styles.highlight}>
					<h3 class={styles.description}>Highlight of the day:</h3>
					<Highlight />
					<h4 class={styles.name}>The Universal Starmap Archive</h4>
				</div>
			</div>
		</div>
	</>;
}

export default Home;
