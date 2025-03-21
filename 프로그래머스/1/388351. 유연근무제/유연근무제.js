const solution = (schedules, timelogs, startday, answer = 0) => {                        
    schedules.forEach((schedule, index) => {
        const deadline = Deadline(schedule);
        const weekdaytimelogs = startDayTimelogs(timelogs[index], startday);
        weekdaytimelogs.filter(time=> time <= deadline).length === 5 ? answer++ : answer;
    });
    return answer;
}

const startDayTimelogs = (oneDtimelogs, startday) => {
    const WEEKEND_DAYS = [5, 6];
    return newTimelogs = oneDtimelogs.filter((schedules, index) => {
        const adjustIndex = (index + startday -1) % 7; 
        return !WEEKEND_DAYS.includes(adjustIndex);
    });
}

const Deadline = (originNumber) => {
    let number = originNumber.toString().padStart(4,'0');
    const hour = parseInt(number.slice(0,2));
    const minute = parseInt(number.slice(2));
    const totalMinutes = hour*60 + minute+10;
    const newHour = Math.floor(totalMinutes/60);
    const newMinute = totalMinutes%60;
    return newHour*100 + newMinute;
}


// const solution = (schedules, timelogs, startday) => {
//     answer = 0;                                 
//     schedules.forEach((schedule, index) => {
//         const deadline = Deadline(schedule);
//         const weekdaytimelogs = startDayTimelogs(timelogs[index], startday);
//          const filter = weekdaytimelogs.filter(time=> time <= deadline);
//             filter.length === 5 ? answer +=1 : answer;
//      })
//     return answer;
// }

// const startDayTimelogs = (oneDtimelogs, startday) => {
//     const newTimelogs = oneDtimelogs.filter((schedules, index) => {
//         const adjustIndex = (index + startday -1) % 7; // 토요일(5) 일요일(6)
//         return adjustIndex !== 5 && adjustIndex !== 6;
//     });
//     return newTimelogs;
// }

// const Deadline = (originNumber) => {
//     let number = 0;
//     if(originNumber.toString().length === 3) { 
//         number = ("0"+(originNumber))+"";
//     }else {number = originNumber.toString()};
//     const hour = number.substr(0,2);
//     const minute = number.substr(2,4);
//     const DivisionMinuteToHour = (Math.floor((+minute+10)/60))*100;
//     const RemainMinute = (+minute+10)%60;
//     const newNumber = +hour*100+DivisionMinuteToHour+RemainMinute;
//     return newNumber;
// }
