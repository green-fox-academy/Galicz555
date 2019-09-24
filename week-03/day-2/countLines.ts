// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.


function results (x:string){
    try {
        let nLines = 0;
        for( let i = 0, n = x.length;  i < n;  ++i ) {
            if( x[i] === '\n' ) {
                ++nLines;
            }
        }
        return nLines;
            }
    finally{
        console.log(0);
    }
}

results('readme.txt')