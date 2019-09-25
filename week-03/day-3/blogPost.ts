class blogPost {
    public authorName: string;
    public title: string;
    public text: string;
    public publicationDate: string;

    constructor (authorName:string, title:string, text: string, publicationDate: string){
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.publicationDate = publicationDate;
    }
}

let number1 = new blogPost('"Jhon Doe"', "Lorem Ipsum", "Lorem ipsum dolor sit amet", '"2000.05.04."')
let number2 = new blogPost("Tim Urban", '"Wait but why"', "A popular long-form, stick-figure-illustrated blog about almost everything.",'"2010.10.10"')
let number3 = new blogPost("William Turton", '"One Engineer Is Trying to Get IBM to Reckon With Trump"', "Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.",'"2017.03.28."')

console.log(number1);
console.log(number2);
console.log(number3);