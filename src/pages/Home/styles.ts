import styled, { css } from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

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
export const BaseCountdownButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme['gray-100']};

    gap: 0.5rem;
    font-weight: bold;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  `}
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  ${({ theme }) => css`
    background: ${theme['green-500']};

    &:not(:disabled):hover {
      background: ${theme['green-700']};
    }
  `}
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  ${({ theme }) => css`
    background: ${theme['red-500']};
    &:not(:disabled):hover {
      background: ${theme['red-700']};
    }
  `}
`
