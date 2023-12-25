export const cols = {
  highlight: 'blue-500',
  text: 'grey-700',
  bg: 'blue-100'
}

export const Header = ({title}: {title: string}) => <h2 className={`text-6xl text-${cols.highlight} mb-10`}>{title}</h2>
