import styled from "styled-components";

export const Button = styled.button`
	cursor: pointer;
	border: 1px solid #1a202c;
	padding: 8px;
	min-width: 64px;
	color: #1a202c;

	background: transparent;

	transition: all 0.1s ease-in;
	&:hover {
		background: #1a202c;
		color: #ffffff;
	}
`;

export const UnorderedList = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;
`;

export const ListItems = styled.li`
	display: flex;
	justify-content: space-between;
	padding: 8px 0;
`;
