import styled from 'styled-components';

export const AppSty = styled.div`
	background-color: #86b4b4;
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow: auto;
	width: 100%;
	color: #212529;

	& img {
		width: 100%;
		height: auto;
	}
`;

export const ContainerSty = styled.div`
	-webkit-box-shadow: 0px 0px 15px -3px #000000;
	border: 1px solid black;
	box-shadow: 0px 0px 15px -3px #000000;
	display: ${({ isFocused }) => (isFocused ? 'flex' : 'none')};
	flex-direction: column;
	height: ${({ currentFocus }) => currentFocus === 'editor' && '100%'};
	margin: 2rem auto;
	max-width: 800px;
	width: 90%;

	& .container-title {
		background-color: #4aa3a3;
		border-bottom: 1px solid #000000;
		-webkit-box-shadow: inset 0px -8px 10px -10px #3a5f5f;
		box-shadow: inset 0px -12px 10px -10px #3a5f5f;
		color: #000000;
		display: flex;
		font-weight: bold;
		justify-content: space-between;
		padding: 0.5rem 0.7rem;
		text-transform: capitalize;
		width: 100%;

		& > :first-child {
			display: flex;
		}

		& > :first-child > :first-child {
			margin-right: 0.5rem;
		}

		& > :last-child {
			cursor: pointer;
			font-weight: normal;
			transform: rotate(45deg);
		}
	}

	& .container-content {
		background-color: #c0d8d8;
		width: 100%;

		& code > * {
			width: 90%;
		}
	}

	& textarea {
		border: none;
		height: 100%;
		min-height: 200px;
		padding: 0 0.5rem;
		resize: none;
	}

	& .mdtext {
		padding: 0 1rem;

		& h1 {
			border-bottom: 2px solid #224b4b;
		}

		& blockquote {
			border-left: 3px solid #224b4b;
			color: #224b4b;
			margin-left: 25px;
			padding-left: 5px;
		}

		& table {
			border-collapse: collapse;
		}

		& th,
		td {
			border-spacing: 2px;
			border: 2px solid #224b4b;
			padding-left: 5px;
			padding-right: 5px;
		}
	}
`;
