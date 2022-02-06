import styled from "styled-components";

export const Typograph = ({ children, variant }) => {
  const Variant = variants[variant];

  return (
    <Variant>
      {children}
    </Variant>
  );
};

const defaultStyles = [
  // 'box-sizing: border-box;',
  'display: inline-block;',
  'font: bold 14px Arial;',
  'overflow: hidden;',
  'text-overflow: ellipsis;',
  'white-space: nowrap;',
  'width: 100%;'
];

const H1 = styled.h1`
  display: inline-block;
  color: #000;
`;

const H2 = styled.h2`
  ${[...defaultStyles]}
  overflow-wrap: break-word;
  // padding: 0 0 24px 0;
`;

const H3 = styled.h3`
  ${[...defaultStyles]}
  box-sizing: border-box;
  padding: 8px 24px;
`;

const H4 = styled.h4`
  ${[...defaultStyles]}
`;

const H5 = styled.h5`
  display: inline-block;
  width: 100%;
`;

const H6 = styled.h6`
  ${[...defaultStyles]}
  font-size: 12px;
`;

const variants = {
  'h1': H1,
  'h2': H2,
  'h3': H3,
  'h4': H4,
  'h5': H5,
  'h6': H6,
};

Typograph.defaultProps = {
  variant: 'h1'
};
