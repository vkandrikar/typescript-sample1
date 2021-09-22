import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary'
import { StyleSample } from '../styles-sample/StyleSample';
import { ComponentThatMayError } from './ComponentThatMayError';

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: React.MouseEventHandler<HTMLButtonElement>
}

export const ErrorBoundrySample = () => {
  const [explode, setExplode] = useState(true);

  const myErrorHandler = (error: Error, info: { componentStack: string }) => {
    // Do something with the error
    // E.g. log to an error logging client here
    console.log(error)
    console.log(info)
  }

  const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
    return (
      <div>
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )
  }

  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={myErrorHandler}
        onReset={() => setExplode(false)}
        resetKeys={[explode]}
      >
        <ComponentThatMayError trigger={explode} />
      </ErrorBoundary>

      <StyleSample styles={{ border: '1px solid red' }} />
    </>
  )
}
