const solution = (schedules, timelogs, startday) => {
    answer = 0;                                 
    schedules.forEach((schedule, index) => {
        const deadline = Deadline(schedule);
        const weekdaytimelogs = startDayTimelogs(timelogs[index], startday);
         const filter = weekdaytimelogs.filter(time=> time <= deadline);
            filter.length === 5 ? answer +=1 : answer;
     })
    return answer;
}

const startDayTimelogs = (oneDtimelogs, startday) => {
    const newTimelogs = oneDtimelogs.filter((schedules, index) => {
        const adjustIndex = (index + startday -1) % 7; // 토요일(5) 일요일(6)
        return adjustIndex !== 5 && adjustIndex !== 6;
    });
    return newTimelogs;
}

const Deadline = (originNumber) => {
    let number = 0;
    if(originNumber.toString().length === 3) { 
        number = ("0"+(originNumber))+"";
    }else {number = originNumber.toString()};
    const hour = number.substr(0,2);
    const minute = number.substr(2,4);
    const DivisionMinuteToHour = (Math.floor((+minute+10)/60))*100;
    const RemainMinute = (+minute+10)%60;
    const newNumber = +hour*100+DivisionMinuteToHour+RemainMinute;
    return newNumber;
}