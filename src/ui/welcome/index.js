import {css} from 'emotion';
export let name;

const brand = "#74D900";
export const normal = css`
	color: inherit;
	max-width: 32em;
	margin: 0 auto;
`;

export const link = css`
	color: inherit;
	font-weight: bold;
	text-decoration: none;
	border-bottom: 1px solid ${brand};
	&:hover {
		text-decoration: none;
		background: ${brand};
	}
`;
