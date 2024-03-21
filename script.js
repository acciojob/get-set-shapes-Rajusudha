//complete this code
class Rectangle {
	constructor(width,height){
		this._width=width;
		this._height=height;
	}
	get width(){
		return this._width;
	}
	
	get height(){
		return this._height;
	}
	
	getArea(){
		console.log(`"The are of"+${this.width}+"Rectangle"+${this.height}`);
	}
}

class Square extends Rectangle {
	console.log(`${this.width}`);
	console.log(`${this.height}`);
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
