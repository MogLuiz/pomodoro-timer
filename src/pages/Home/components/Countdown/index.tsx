import * as S from './styles'

type TCountdownProps = {
  seconds: string
  minutes: string
}

export const Countdown = ({ minutes, seconds }: TCountdownProps) => (
  <S.CountdownContainer>
    <span>{minutes[0]}</span>
    <span>{minutes[1]}</span>
    <S.Separator>:</S.Separator>
    <span>{seconds[0]}</span>
    <span>{seconds[1]}</span>
  </S.CountdownContainer>
)
