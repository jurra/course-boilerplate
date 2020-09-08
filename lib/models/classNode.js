export class Node {
    constructor(json, path){
        this.id = Math.floor(Math.random() * 1000)
        this.description = json.description ? json.description : "No description provided"
        this.title = json.title ? json.title : null
        this.isPublic = json.isPublic = true ? true : false
        this.isDraft = json.isDraft  ? json.isDraft : false
        this.type = json.type ? json.type : "section"
        this.level = json.level ? json.level : 1 ;
        this.parent = null ;// we need to specify the current parent
        this.children = [];
        this.path = path;
        this.authors = json.authors ? json.authors : "";
    }
}