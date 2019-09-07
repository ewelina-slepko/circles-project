import styled from 'styled-components'

const Button = styled.button`
  background: #2B303A;
  color: #d7dade;
  border-radius: 5px;
  border: 2px solid transparent;
  width: 140px;
  height: 40px;
  color: white;
  margin: 10px;
  padding: 10px;
  outline: none;
  text-transform: uppercase;

  &:active{
        transform: translateY(1px);
    }
  &:hover{
    background: #1f2229
}
`

export default Button;
