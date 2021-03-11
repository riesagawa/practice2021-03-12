let raddius = 6
let pai = 3
let area = raddius * raddius * pai
console.log(area)

[
function calCircleArea(raddius){
  let pai = 3
  let area = raddius * raddius * pai
  return area
}
calCircleArea(5)
// 75
]

[
function double(number){
  return number * 2
}
double(2)
// 2
double(10)
// 20
const result = double(20)
console.log(result)
// 40
]

[
function calCircleArea(raddius){
  let pai = 3
  let area = raddius * raddius * pai
  return area
}
calCircleArea(3)
// 27
]

[
  function showMessage(){
    console.log("こんにちは")
    console.log("さようなら")
  }
  showMessage()
  // こんにちは
  // さようなら
]

[
  const message = "こんにちは"
  function hello(){
    console.log(message)
  }
  hello()
  // こんにちは
]

[
  let message
  function say(){
    message = "hello"
  }
  say()
  console.log(message)
]

[
  if (true){
    console.log("True")
  }
  if (false){
    console.log("False")
  }
]

[
  let score = 89
  if(score>90){
    console.log("最高！")
  }
  if(score < 100){
    console.log("満点じゃない！")
  }
]

[
  if(score > 20 && score < 90){
    console.log("20 < score < 90")
  }
  if (score === 0 || score === 89)
  console.log("0or89")
]

[
  let score = 10
  switch(score){
    case 1:
      console.log("1")
      break
    case 2:
      console.log("2")
      break
    case 10:
      console.log("10")
      break
    default:
      console.log("その他")
  }
]












