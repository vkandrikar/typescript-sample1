import React from 'react'

type CompProps = {
  position: string
}

//in this we can specify any string value to props
const Comp = ({ position }: CompProps) => {
  return (
    <>
      <h2>You specfy {position} position</h2>
    </>
  )
}

//--------------
type HorizontalPosition = 'left' | 'center' | 'right';
type VerticlePosition = 'top' | 'center' | 'bottom';
type Comp1Props = {
  position: `${HorizontalPosition}-${VerticlePosition}`;
}

const Comp1 = ({ position }: Comp1Props) => {
  return (
    <>
      <h2>You specfy {position} position</h2>
    </>
  )
}

//------------
type Comp2Props = {
  position: Exclude<`${HorizontalPosition}-${VerticlePosition}`, 'center-center'> | 'center';
}

const Comp2 = ({ position }: Comp2Props) => {
  return (
    <>
      <h2>You specfy {position} position</h2>
    </>
  )
}

export const TemplateLiterals = () => {
  return (
    <div>
      <h1>Can pass any string value to position</h1>
      <Comp position='left' />
      <Comp position='zzxcv' />
      <hr></hr>
      <h1>Can pass restricted string value to position</h1>
      <Comp1 position='left-top' />
      {/* can't pass position='center' */}
      <Comp1 position='center-center' />
      <hr></hr>
      <h1>Can pass restricted string value to position and exclude some values and add any specific value</h1>
      <Comp2 position='left-top' />
      {/* can't add position='center-center' as we have excluded same */}
      <Comp2 position='center' />
    </div>
  )
}
