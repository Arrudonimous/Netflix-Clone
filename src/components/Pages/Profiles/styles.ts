import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #141414;

`;


export const Header = styled.header`

	width: 100%;
	padding: 1.5rem 3.75rem;

`;


export const ContentContainer = styled.div`

	margin-top: 8rem;
	margin-left: 5.75rem;
	margin-right: 5.75rem;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;


export const ContentTitle = styled.h1`

	color: #ffffff;
	font-size: 64px;
	font-weight: 500;
	margin-bottom: 3rem;


`;


export const ProfilesContainer = styled.div`

	display: grid;
	flex-direction: row;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	max-width: 79rem;
	gap: 3.125rem;
	padding: 2rem;


`;

export const ProfileContainer = styled.div`

	color:rgb(109, 109, 110, 0.7);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.25rem;
	font-size: 26px;

`;

export const Profile = styled.button`

	width: 12.5rem;
	height: 12.5rem;
	border: 0;

	background-color: red;

`;


export const ManageProfileButton = styled.button`

	margin-top: 2rem;
	background-color: transparent;
	color: #808080;
	text-transform: uppercase;
	border: 1px solid #808080;
	font-size: 26px;
	font-weight: 500;
	padding: 0.625rem 2rem; 
	
	&:hover{

	}

`;

export const AddProfile = styled.div`


	color:rgb(109, 109, 110, 0.7);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.25rem;
	font-size: 26px;

`;

export const AddProfileButton = styled.button`
	background-color: transparent;
	width: 12.5rem;
	height: 12.5rem;
	border: 0;
	border-radius: 9999px;

`;