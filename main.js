// 1. 박스 2개 
// 2. 드랍다운 리스트 
// 3. 환율정보
// 4. 드랍다운 리스트 아이템 선택시 아이템 바뀜
// 5. 금액 입력하면 환전이 된다.
// 6. 드랍다운 리스트의 아이템을 바꾸면 다시 환전
// 7. 금액를 한국어로 표시
// 8. 아래 박스에서 바꿔도 위에 박스에 환율이 적용된다.

let currencyRatio = {
    USD:{
        KRW : 1361.46,
        USD : 1,
        VND : 26149.00,
        unit : "달러"
    },
    KRW:{
        KRW : 1,
        USD : 0.00073,
        VND : 19.21,
        unit  : "원"
    },
    VND:{
        KRW : 0.052,
        USD : 0.000038,
        VND : 1,
        unit  : "동"
    }
}

// 1. console.log(currencyRatio.USD.unit)
// console.log(currencyRatio['VND']['unit'])

var unitWords = ["", "만", "억", "조", "경"];
var splitUnit = 10000;
let toButton = document.getElementById("to-button");
let fromButton = document.getElementById("from-button");
let toCurrency = "USD";
let fromCurrency = "USD";


document.querySelectorAll("#from-currency-list a").forEach((menu) => menu.addEventListener("click",function(){
    // 1. 버튼을 가져온다.
    // 2. 버튼의 값을 바꾼다.
    document.getElementById("from-button").textContent = this.textContent;
    // 3. 선택된 currency 값을 변수에 저장한다.
    fromCurrency = this.textContent;
    console.log("from : " + fromCurrency)
    convert('from')
}));

document.querySelectorAll("#to-currency-list a").forEach((menu) => menu.addEventListener("click",function(){
    // 1. 버튼을 가져온다.
    // 2. 버튼의 값을 바꾼다.
    document.getElementById("to-button").textContent = this.textContent;
    // 3. 선택된 currency 값을 변수에 저장한다.
    toCurrency = this.textContent;
    console.log("to : " + toCurrency)
    convert('to')
}));

// 1. 금액 입력하면
// 2. 환전이 되서
// 3. 환전된 값이 보인다.

function convert(type) {
    console.log("here");
    let amount = 0;
    if (type == "from") {
      //입력갑 받기
      amount = document.getElementById("from-input").value;
      // 환전하기
      let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
      // 환전한값 보여주기
      document.getElementById("to-input").value = convertedAmount;
      //환전한값 한국어로
      renderKoreanNumber(amount, convertedAmount);
    } else {
      amount = document.getElementById("to-input").value;
      let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
      document.getElementById("from-input").value = convertedAmount;
      renderKoreanNumber(convertedAmount, amount);
    }
  }

function renderKoreanNumber(from, to) {
    document.getElementById("fromNumToKorea").textContent =
      readNum(from) + currencyRatio[fromCurrency].unit;
    document.getElementById("toNumToKorea").textContent =
      readNum(to) + currencyRatio[toCurrency].unit;
  }

function readNum(num){
    let resultString = "";
    let resultArray = [];

    for(let i=0; i<unitWords.lengh; i++){
        let unitResult = (num % Math.pow(splitUnit, i+1)) / Math.pow(splitUnit,i);
        unitResult = Math.floor(unitResult);
        if (unitResult>0){
            resultArray[i] = unitResult;
        }
    }

    for(let i=0; i<resultArray.length;i++){
        if(!resultArray[i]) continue;
        resultString = String(resultArray[i]) + unitWords[i]+resultString;
    }
    return resultString;
}
