function countNegatives(grid: number[][]): number {
    let count:number = 0;
    let a : number[] = grid.flat(Infinity) as number[];
    for(let i=0;i<a.length;i++){
        if(a[i]<0){
            count++;
        }
    }
    return count
};