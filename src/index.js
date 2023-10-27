module.exports = function toReadable(number) {
    let arrNumString1 = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let arrNumString10 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let arrNumString100 = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let stringNum = [];
    let arrNum = number.toString().split("").reverse();

    let countArr = 0;

    for (let i = 0; i < arrNum.length; i++) {
        let num = +arrNum[i];
        // 099
        if (num === 0 && arrNum.length === 1) {
            stringNum.push("zero");
        } else if (i == 0) {
            stringNum.push(arrNumString1[num]);
            countArr++;
        } else if (i == 1 && num !== 0) {
            if (num >= 2) {
                console.log(1);
                stringNum.push(arrNumString100[num] + " ");
            } else if (num == 1) {
                stringNum.splice(0, 1);
                stringNum.push(arrNumString10[+arrNum[i - 1]] + " ");
            }
        } else if (i == 2) {
            stringNum.push(arrNumString1[num] + " hundred ");
        }
    }

    return stringNum.reverse().join("").trim();
};

function toReadable(number) {
    let arrNumString1 = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let arrNumString10 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let arrNumString100 = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let stringNum = [];
    let arrNum = number.toString().split("").reverse();

    let countArr = 0;

    for (let i = 0; i < arrNum.length; i++) {
        let num = +arrNum[i];
        // 099
        if (i == 0 && num !== 0) {
            console.log(0);
            stringNum.push(arrNumString1[num]);
            countArr++;
        } else if (i == 1) {
            console.log(1);
            if (num >= 2) {
                console.log(2);
                stringNum.push(arrNumString100[num] + " ");
            } else if (num == 1) {
                console.log(3);
                stringNum.splice(0, 1);
                stringNum.push(arrNumString10[+arrNum[i - 1]] + " ");
            }
        } else if (i == 2) {
            console.log(4);
            stringNum.push(arrNumString1[num] + " hundred ");
        } else if (num === 0) {
            console.log(1);
            stringNum.push("zero");
        }
    }

    return stringNum.reverse().join("").trim();
}

console.log(toReadable(909));
// // // // 345

// for (let i = 0; i < arrNum.length; i++) {
// 	let num = +arrNum[i];

// 	if (arrNum.length == 3 && i == 0) {
// 		 stringNum += `${arrNumString1[num]} hundred `;
// 	} else if (arrNum[1] == 2 || i == 2) {
// 		 console.log(2);
// 		 if (num >= 2 && num !== 0) {
// 			  stringNum += arrNumString100[num] + " ";
// 			  console.log(arrNumString100[num] + 1);
// 		 } else if (num !== 0) {
// 			  console.log(4);
// 			  stringNum += arrNumString10[arrNum[+(i + 1)]];
// 			  //   stringNum += arrNumString1[num] + " ";
// 		 }
// 	} else if (arrNum[1] >= 2 || arrNum[1] == 0) {
// 		 if (arrNum[i - 1] !== 0) {
// 			  stringNum += arrNumString1[num];
// 		 }
// 	}
// }
