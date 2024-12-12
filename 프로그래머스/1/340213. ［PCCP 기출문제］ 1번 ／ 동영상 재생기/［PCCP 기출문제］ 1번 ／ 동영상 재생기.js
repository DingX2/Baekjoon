const solution = (video_len, pos, op_start, op_end, commands) => {
    let currentTimeSec = MMSSconvertToSeconds(pos);
    const [videoLenSec, opStartSec, opEndSec] = [MMSSconvertToSeconds(video_len), MMSSconvertToSeconds(op_start), MMSSconvertToSeconds(op_end)];
    
    for (const command of commands){
        currentTimeSec = opValidation(currentTimeSec, opStartSec, opEndSec);
        currentTimeSec = opValidation(playPos(currentTimeSec, command, videoLenSec, currentTimeSec),opStartSec, opEndSec);
    }
    return SecondsconvertToMMSS(currentTimeSec);
}

const commandsToTime = {
    "prev" : -10,
    "next" : 10,
}

const playPos = (currentTime, command, video_len) => {
    if(!commandsToTime.hasOwnProperty(command)){
        throw new Error(`Invalid command: ${command}`);
    }
    const video_result = currentTime + commandsToTime[command];
    if (video_result< 0) return 0;
    if (video_result > video_len) return video_len;
    return video_result;
}

const opValidation = (pos, op_start, op_end) => {
    if(op_start <= pos && pos <= op_end) return op_end;
    return pos;
}

const formatToDigit = (number) => (number+"").padStart(2,0);

const SecondsconvertToMMSS = (seconds) => {
    return formatToDigit(Math.floor(seconds/60)) + ":" + formatToDigit(seconds%60);
}

const MMSSconvertToSeconds = (times) => {
    const time = times.split(":");
    return +time[0]*60 + +time[1];
}