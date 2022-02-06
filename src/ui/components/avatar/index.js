import styled from "styled-components";
import img from '../../../images/lobão.jpg';

export const Avatar = (props) => (
  <AvatarWrapper src={img} alt='' {...props} />
);


const AvatarWrapper = styled.img`
  border-radius: 50%;
  height: ${props => props.size || '50px'};
  margin: ${props => props.margin};
  width: ${props => props.size};
`;
