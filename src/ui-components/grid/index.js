import styled from "styled-components";

// const options = {
//   columns: 1
// };

const Grid = (props) => {
  // options.columns = col;
  console.log(props.col);

  return (
    <Wrapper {...props}>{props.children}</Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  // grid: 'a' 100px
  //       'b' 400px
  //       / 1fr 1fr;
  grid: 1fr / 1fr ${({ col }) => col}fr;
`;

export default Grid;
