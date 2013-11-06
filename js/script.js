// JavaScript Document
onload=init;

function init() {
	//make an object based on the Drop Class:
	var drop1 = new Drop();
	drop1.create();
}
//let's make a Class (blueprint) for each Drop we generate
function Drop(){
	this.x; //starts empty, will keep track of each Drop's left-right position
	this.y; //starts empty, will keep track of each Drop's up-down position
	this.item_on_page;
	/** function does lots of things when a Drop gets created on the page
	*
	*/
	this.create = function(){
		//make a section element in the HTML, store it into the item-on-page we set up above.
		this.item_on_page = document.createElement("section");
		//store a random x and y position, different for each Drop. I'm using screen width or 500, height of 300:
		this.x = Math.floor(Math.random()*500);
		this.y = Math.floor(Math.random()*300);
		//use those x and y coordinates in the CSS to position the Drops:
		this.item_on_page.style.left = this.x + "px";
		this.item_on_page.style.top = this.y + "px";
		//attach the item to our HTML hierarchy, as a child of the body:
		document.getElementsByTagName("body")[0].appendChild(this.item_on_page);
	}
	/** function does lots of things when a Drop is removed from the page
	*
	*/
	this.destroy = function(){
		
	}
} //close the Class