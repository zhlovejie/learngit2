function formatDate(date = new Date(),formatStr='YYYY-MM-DD'){
  let d = date 
  if(!(d instanceof Date)){
    d = new Date()
  }
  let year = d.getFullYear()
  let month = d.getMonth() + 1
  month = ('0'+month).slice(-2)
  let day = d.getDate()
  day = ('0'+day).slice(-2)
  let hour = d.getHours()
  hour = ('0'+hour).slice(-2)
  let min = d.getMinutes()
  min = ('0'+min).slice(-2)
  let second = d.getSeconds()
  second = ('0'+second).slice(-2)
  formatStr = formatStr.replace('YYYY',year)
  formatStr = formatStr.replace('MM',month)
  formatStr = formatStr.replace('DD',day)
  formatStr = formatStr.replace('HH',hour)
  formatStr = formatStr.replace('mm',min)
  formatStr = formatStr.replace('ss',second)
  return formatStr
}


setInterval(() => console.log(formatDate(null,'YYYY/MM/DD HH:mm:ss')),1000)
