type TitleProps = {
  title: string
}

export default function Title({ title }: TitleProps) {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}
