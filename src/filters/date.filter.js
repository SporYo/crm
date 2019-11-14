export default function dateFilter(value, format ='date') {
  const options = {

  }

  if (format.includes('date')) {
    options.day = '2-digit'
    options.mounth = 'long'
    options.year = 'numeric'
  }

  if (format.includes('time')) {
    options.hour = ''
    options.minute = ''
    options.second = ''
  }

  return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
}
