const solution = (scoville, K) => {
    let answer = 0;
    
    class Minheap{
        constructor() {
            this.heap = [];
        }
    
        push(v) {
            this.heap.push(v);
            let i = this.size()-1;
            while(i>0){
                let p = ((i-1) >> 1);
                if(this.heap[p] < this.heap[i]) break;
                [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
                i = p;
            }

        }
    
        pop() {
            if (this.heap.length === 1) return this.heap.pop();
            const min = this.heap[0];
            let i = 0;
            this.heap[0] = this.heap.pop();
            
            while(true){
                let l = i * 2 + 1, r = i * 2 + 2, s = i;
                if(l<this.heap.length && this.heap[l]<this.heap[s]) s = l;
                if(r<this.heap.length && this.heap[r]<this.heap[s]) s = r; 
                if(s===i) break;
                [this.heap[i], this.heap[s]] = [this.heap[s], this.heap[i]];
                i = s;
            }
            return min;
        }
    
        peak(){ return this.heap[0];}
        size(){ return this.heap.length;}
    }

    const minheap = new Minheap();
    
    scoville.forEach(el => minheap.push(el));
    
    while(minheap.peak()<K && 1<minheap.size()){
        const minFood = minheap.pop();
        if(minFood >= K) break;
        const secondFood = minheap.pop();
        const mixFood = (minFood + (secondFood*2));
        minheap.push(mixFood);
        answer += 1;
    }

    return minheap.peak() >= K ? answer : -1;
}