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
    KWR:{
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

let fromCurrency = 'USD'
let toCurrency = 'USD'

document.querySelectorAll("#from-currency-list a").forEach((menu) => menu.addEventListener("click",function(){
    // 1. 버튼을 가져온다.
    // 2. 버튼의 값을 바꾼다.
    document.getElementById("from-button").textContent = this.textContent;
    // 3. 선택된 currency 값을 변수에 저장한다.
    fromCurrency = this.textContent;
    console.log("from : " + fromCurrency)
}));

document.querySelectorAll("#to-currency-list a").forEach((menu) => menu.addEventListener("click",function(){
    // 1. 버튼을 가져온다.
    // 2. 버튼의 값을 바꾼다.
    document.getElementById("to-button").textContent = this.textContent;
    // 3. 선택된 currency 값을 변수에 저장한다.
    toCurrency = this.textContent;
    console.log("to : " + toCurrency)
}));