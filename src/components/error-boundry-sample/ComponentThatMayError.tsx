

type ComponentThatMayErrorProps = {
  trigger: boolean;
}

export const ComponentThatMayError = ({ trigger }: ComponentThatMayErrorProps) => {
  if (trigger)
    throw new Error('Error occured due to trigger');
  else
    return <h3>This is ComponentThatMayError</h3>
}