import styled from "styled-components";
import img from '../../images/lobão.jpg';

export const Avatar = () => (
  <AvatarContent src={img} alt='' />
);

const AvatarContent = styled.img`
  border-radius: 50%;
  height: 50px;
`;
