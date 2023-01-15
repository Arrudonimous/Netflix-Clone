import { AddProfile, AddProfileButton, Container, ContentContainer, ContentTitle, Header, ManageProfileButton, Profile, ProfileContainer, ProfilesContainer } from './styles';
import { AiFillPlusCircle } from 'react-icons/ai';

import NetflixLogo from '../../../assets/images/NetflixLogoSvg.svg';
import ProfileImageRed from '../../../assets/images/ProfilePictureRed.png';
import ProfileImageBlue from '../../../assets/images/ProfilePictureBlue.png';
import ProfileImageGreen from '../../../assets/images/ProfilePictureGreen.png';



const profiles = [
	{
		name: 'Diego',
		avatar: 'red'
	},	
	{
		name: 'Maria Luiza',
		avatar: 'green'
	},	
	{
		name: 'Lucas',
		avatar: 'blue'
	},	
	{
		name: 'Maria Pires',
		avatar: 'red'
	},
];


export default function Profiles(){
	return(
		<Container>
			<Header>
				<img src={NetflixLogo}/>
			</Header>

			<ContentContainer>
				<ContentTitle>
					Quem está assistindo?
				</ContentTitle>

				<ProfilesContainer>

					{profiles.map((profile)=>(
						<ProfileContainer key={profile.name}>
							<Profile >
								{profile.avatar ==='red' ? (
									<img src={ProfileImageRed} width={'100%'} height={'100%'}/>
								) : ''}
								{profile.avatar ==='blue' ? (
									<img src={ProfileImageBlue} width={'100%'} height={'100%'}/>
								) : ''}
								{profile.avatar ==='green' ? (
									<img src={ProfileImageGreen} width={'100%'} height={'100%'}/>
								) : ''}
								
							</Profile>
							{profile.name}
						</ProfileContainer>
					))}
					
					{profiles.length <= 4 ? (
						<AddProfile>
							<AddProfileButton >
								<AiFillPlusCircle size={150} color={'rgb(109, 109, 110, 0.7)'}/>
							</AddProfileButton>
							Adicionar Perfil
						</AddProfile>
					) : ''}
				</ProfilesContainer>

				<ManageProfileButton>
					Gerenciar Perfis
				</ManageProfileButton>

			</ContentContainer>
		</Container>
	);
}