const CONFIG = {
  MONTH: 12,
  DAY: 30,
  HOUR: 24,
  MINUTE: 60,
  SECOND: 60,
}

var principal = 2300000000
var ratio = 5.5
var sum = 0

function calcInterest() {
  sum +=
    (principal * ratio * 0.01) /
    CONFIG.MONTH /
    CONFIG.DAY /
    CONFIG.HOUR /
    CONFIG.MINUTE /
    CONFIG.SECOND /
    2
}

setInterval(() => {
  calcInterest()

  console.log('지금까지 쌓인 이자', sum.toFixed(2), '원')
}, 500)
