import styled, { css } from 'styled-components'

export const CountdownContainer = styled.div`
  ${({ theme }) => css`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${theme['gray-100']};
    display: flex;
    gap: 1rem;
    span {
      background: ${theme['gray-700']};
      padding: 2rem 1rem;
      border-radius: 8px;
    }
  `}
`
export const Separator = styled.div`
  ${({ theme }) => css`
    padding: 2rem 0;
    color: ${theme['green-500']};
    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
  `}
`
