const array = [1, 3, 9, 8];


const double = []
const newArray = array.forEach((num) => {
	double.push(num * 2);
})

console.log(double);

function foo() {
	foo()
}

foo()