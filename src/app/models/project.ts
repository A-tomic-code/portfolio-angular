export class Project {

    title:string;
    desc:string;
    img:string;
    giturl:URL

    constructor(title:string, desc:string, img:string, giturl:string){

        this.title = title;
        this.desc = desc;
        this.img = img;
        this.giturl = new URL(giturl);
    }

    
}
