export class Numbers {
    public array: number[] = []

    public sum(x: number[]): number {
        if(!x[0]){
            return 0
        } else ;
        let result = x.reduce(function (a, b): number {
            return a + b
        });
        return result;
    }
}
