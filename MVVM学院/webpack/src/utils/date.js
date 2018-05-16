export const getNowDate = () => {
    const d = new Date();
    return {
        year: d.getFullYear(),
        month: d.getMonth() ,
        day: d.getDate()
    }
}

export const weekOffirstDay = (date) => {
    const d=new Date(date);
    d.setDate(1);//设置为当前月1号
    return d.getDay();
}

export const getMonthTotalDays=(year,month)=>{
    if (month === 3 || month === 5 || month === 8 || month === 10) {
        return 30;
      }
    
      if (month === 1) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
          return 29;
        } else {
          return 28;
        }
      }
      return 31;
}

export const getPrevMonth=(month)=>{
    return month==0?12:month-1;
}

export const getNextMonth=(month)=>{
    return month==11?0:month+1;
}

export const getYearByPrevMonth=(year,month)=>{
    return month==0?year-1:year;
}

export const getYearByNextMonth=(year,month)=>{
    return month==11?year+1:year;
}