import { Play } from 'phosphor-react'

import * as S from './styles'

export const Home = () => (
  <S.HomeContainer>
    <form>
      <S.FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <S.TaskInput id="task" placeholder="Dê um nome para o seu projeto" />

        <label htmlFor="minutesAmount">durante</label>
        <S.MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={5}
          max={60}
        />

        <span>minutos.</span>
      </S.FormContainer>

      <S.CountdownContainer>
        <span>0</span>
        <span>0</span>
        <S.Separator>:</S.Separator>
        <span>0</span>
        <span>0</span>
      </S.CountdownContainer>

      <S.StartCountdownButton type="submit" disabled>
        <Play size={24} />
        Começar
      </S.StartCountdownButton>
    </form>
  </S.HomeContainer>
)
