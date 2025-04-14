const solution = (book_time) => {
    let answer = 0;
    const rooms = [];
    const book_times_minutes = book_time.map(([start, end]) => {
        const [sh, sm] = start.split(':').map(Number);
        const [eh, em] = end.split(':').map(Number);
        const startMin = sh * 60 + sm;
        const endMin = eh * 60 + em + 10;
        return [startMin, endMin];
    });
    
    const sortTimes = book_times_minutes.sort((a, b) => a[0] - b[0]);
    
    for (const [start, end] of book_times_minutes){
        let allocated = false;
        
        for (let i=0; i < rooms.length; i++ ){
            if(rooms[i]<= start){
                rooms[i] = end;
                allocated = true;
                break;
            }
        }
        if(!allocated){
            rooms.push(end);
        }
        rooms.sort((a,b) => (a-b));
    }
    
    return rooms.length;
}
