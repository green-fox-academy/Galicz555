class postIt {
    public background: string;
    public text: string;
    public textColor: string;


    constructor(background: string, text: string, textColor: string) {
        this.background = background;
        this.text = text;
        this.textColor = textColor;
    }

}

let Post_It = new postIt("orange", "Idea1", "blue");

console.log(Post_It)
console.log(Post_It.background);
console.log(Post_It.text);
console.log(Post_It.textColor);

let Post_It2 = new postIt("pink", "Awesome", "black");

console.log(Post_It2)
console.log(Post_It2.background);
console.log(Post_It2.text);
console.log(Post_It2.textColor);

let Post_It3 = new postIt("yellow", "Superb!", "green");

console.log(Post_It3)
console.log(Post_It3.background);
console.log(Post_It3.text);
console.log(Post_It3.textColor);