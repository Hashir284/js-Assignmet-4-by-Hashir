//      Point1
let students = [];

//      Point2
students = ['Hashir', ' Mahher ', 'Ibsam'];
alert(students);
console.log(students);

students = ['Hashir', 'Mahher', 'Ibsam']

//      Point3
let fruits = ['Mango', 'Banana', 'Apple', 'Papaya', 'Orange']
alert(fruits)

//      Point4
let age = [10, 20, 30, 40, 50]
alert(age)

//      Point5
let isAvailable = [true, false]
alert(isAvailable)

//      Point6
let mixedArray = [[students[0] + ' age is ' + age[0]], [students[1] + ' age is ' + age[1]], [students[2] + ' age is ' + age[2]]]

console.log(mixedArray[0] + isAvailable[0])
console.log(mixedArray[0] + isAvailable[0])
console.log(mixedArray[0] + isAvailable[1])
alert(mixedArray[0] + isAvailable[0])
alert(mixedArray[1] + isAvailable[0])
alert(mixedArray[2] + isAvailable[1])

//      Point7
let qualifications = ['1)SSC', '2)HSC', '3)BCS', '4)BS', '5)BCOM', '6)MS', '7)M.Phil.', '8)PhD']

console.log('Qualification \n\n' + qualifications[1] + '\n' + qualifications[0] + '\n' + qualifications[3] + '\n' + qualifications[2] + '\n' + qualifications[4] + '\n' + qualifications[5] + '\n' + qualifications[7] + '\n' + qualifications[6])
alert('Qualification \n\n' + qualifications[1] + '\n' + qualifications[0] + '\n' + qualifications[3] + '\n' + qualifications[2] + '\n' + qualifications[4] + '\n' + qualifications[5] + '\n' + qualifications[7] + '\n' + qualifications[6])

//      Point8

const score = [320, 230, 480]
const totalMarks = 500
let percentage = [(score[0] / totalMarks) * 100, (score[1] / totalMarks) * 100, (score[2] / totalMarks) * 100]
console.log(percentage)

alert('Score list: \n' + 'Score of ' + students[0] + ' is ' + score[0] + '. Percentege:' + percentage[0] + '\n' + 'Score of ' + students[1] + ' is ' + score[1] + '. Percentege:' + percentage[1] + '\n' + 'Score of ' + students[2] + ' is ' + score[2] + '. Percentege:' + percentage[2] + '\n')

let colors = [' Red', ' Green ', ' Yellow', ' Blue ']
console.log(colors)
alert(colors)

let ColorAddstart = prompt('Which color do you want to add at the beginning?')
let coloraddbyuser = colors.unshift(ColorAddstart)
alert(colors)

let ColorAddend = prompt('Which color do you want to add at the end?')
let coloraddbyuseratend = colors.push(ColorAddend)
alert(colors)

colorremovefromstart = colors.shift(ColorAddend)
alert(colors)

colorremovefromstart = colors.pop(ColorAddend)

alert(colors)
let coloraddinany = Number(prompt( ' Enter the index(only index Number) where you want to add any color ' ))
let colornameaddinany = prompt('Also Enter your Color')
colors = [' Red', 'Green', 'Yellow', 'Blue']

let userinputindex = colors.splice(coloraddinany, 1, colornameaddinany)
alert(colors)

let coloraddinanyremove = Number(prompt( ' Enter the index(only index Number) where you want to remove the color ' ))
let coloraddinanyremovenum = Number(prompt( 'How many color do you want to delete' ))
let userinputindexremove = colors.splice(coloraddinanyremove, coloraddinanyremovenum)
alert(colors)

//          Point 9
let scoresOfStudnet = [320, 230, 480, 120, 432, 480, 343]
alert(scoresOfStudnet)
// let scoresOfStudnetacsending = [320, 230, 480, 120, 432, 480, 343]
// scoresOfStudnet.sort((a, b) => b - a);
scoresOfStudnet = [480, 480, , 432, 343, 320, 230, 120]
alert(scoresOfStudnet)

//          Point 10

let Cities = ['Kararchi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawer']
let selectedCities = [Cities[2], Cities[3]]
alert('Cities list: \n' + Cities + '\nSelected Cities List: \n' + selectedCities)