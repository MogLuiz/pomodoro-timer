import * as S from './styles'

export const NewCycleForm = () => (
  <S.FormContainer>
    <label htmlFor="task">Vou trabalhar em</label>
    <S.TaskInput
      id="task"
      list="task-suggestions"
      placeholder="Dê um nome para o seu projeto"
      {...register('task')}
    />

    <datalist id="task-suggestions">
      <option value="Projeto 1" />
      <option value="Projeto 2" />
      <option value="Projeto 3" />
      <option value="Beterraba" />
    </datalist>

    <label htmlFor="minutesAmount">durante</label>
    <S.MinutesAmountInput
      type="number"
      id="minutesAmount"
      placeholder="00"
      step={5}
      min={1}
      max={60}
      {...register('minutesAmount', { valueAsNumber: true })}
    />

    <span>minutos.</span>
  </S.FormContainer>
)
