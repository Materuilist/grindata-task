const months = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
]

export const prettifyDate = (date: Date): string =>
  [date.getDate(), months[date.getMonth()], date.getFullYear()].join(" ");
