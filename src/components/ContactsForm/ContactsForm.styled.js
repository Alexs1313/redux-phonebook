import { Field } from 'formik';
const { styled } = require('styled-components');

export const Input = styled(Field)`
  width: 200px;
  height: 20px;
  :hover {
    box-shadow: 0px 0px 19px 1px grey;
    transition: box-shadow 1s ease;
  }
`;

export const Label = styled.label`
  display: flex;
  font-size: 13px;
  margin-bottom: 10px;
  flex-direction: column;
`;
