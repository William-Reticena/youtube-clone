import styled from "styled-components";

const Grid = (props) => {
  console.log(props);    

  return (
    <Wrapper {...props}>{props.children}</Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  height: 100%;
  // width: 100vw;
  // grid: 'header' min-content
  //       'navBar' min-content
  //       'mainContent' 1fr
  //       / 1fr 4fr;
`;

export default Grid;
