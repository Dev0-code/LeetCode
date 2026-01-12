function restoreString(s: string, indices: number[]): string {
    let r : string = ''
    for(let i=0;i<s.length;i++){
        for(let j=0;j<indices.length;j++){
            if(i == indices[j]){
                r+=s[j]
            }
        }
    }
    return r
};