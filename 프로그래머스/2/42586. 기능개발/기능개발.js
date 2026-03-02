const solution = (progresses, speeds) => {
    const answer = [];
    const expectedDeadline = [];
    
    for (let i=0; i<progresses.length; i++){
        let deadline = Math.ceil((100-progresses[i])/speeds[i]) 
        expectedDeadline.push(deadline)
    }
    
    count = 1;
    let deadline = expectedDeadline[0];
    for (let i=1; i<expectedDeadline.length; i++){
        if(expectedDeadline[i] <= deadline ) count++;
        else {
            answer.push(count);
            count = 1;
            deadline = expectedDeadline[i];
        }
    }
    answer.push(count); 
    
    return answer;
}