/**
    // 功能面
    * todo: 地區用 change 監聽
    * todo: 上方新增的地區跟下方篩選的地區都寫死選項（依照目前提供的 JSON data area 欄位）
    * todo: 地區的篩選下拉需要加上『全部地區』option
    * todo: 需要有「清除資料」的按鈕
    * todo: 預設資料為 3 筆（內容需依照目前提供的 JSON data）
    * todo: 篩選後會顯示『搜尋資料為 ? 筆』
    // 資料結構面
    * todo: 描述欄位使用 textarea
    * todo: 星級區間是 1-10 分
    * todo: 金額、組數、星級的 type 為 Number
 */


/**
 * * 宣告變數
 */

// 宣告變數 data，並賦予值為空陣列
let data = [];
// 針對給定的 Selector 條件，回傳第一個 HTMLElement 物件
const ticketCardArea = document.querySelector("ul.ticketCard-area");
const regionSearchMenu = document.querySelector(".regionSearch");
const searchResultText = document.querySelector("#searchResult-text");
const cleanBtn = document.querySelector(".cleanBtn");
const addBtn = document.querySelector(".addBtn");


/**
 * 預設載入函式
 * * 透過 AJAX 取得資料，並初始化資料
 */
function init(){
  axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
    .then(function (response) {
      // handle success
      data = response.data.data;
      paintDOM(data);
      regionSearchMenu.value = "地區搜尋";

    });
}

/**
 * 繪製 DOM 用函式
 * * 接篩選後資料，來進行 DOM 繪製
 * @param {*} filteredData
 */
function paintDOM(filteredData){

  let ticketListContent = "";
  filteredData.forEach(function(item){

    ticketListContent += `<li class="ticketCard">
        <div class="ticketCard-img">
          <a href="#">
            <img src="${item.imgUrl}" alt="${item.name}">
          </a>
          <div class="ticketCard-region">${item.area}</div>
          <div class="ticketCard-rank">${item.rate}</div>
        </div>
        <div class="ticketCard-content">
          <div>
            <h3>
              <a href="#" class="ticketCard-name">${item.name}</a>
            </h3>
            <p class="ticketCard-description">
            ${item.description}
            </p>
          </div>
          <div class="ticketCard-info">
            <p class="ticketCard-num">
              <span><i class="fas fa-exclamation-circle"></i></span>
              剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
            </p>
            <p class="ticketCard-price">
              TWD <span id="ticketCard-price">$${item.price}</span>
            </p>
          </div>
        </div>
      </li>`;
  });
  ticketCardArea.innerHTML = ticketListContent;

  searchResultText.innerHTML = `本次搜尋共 ${filteredData.length} 筆資料`;

}

/**
 * 檢查資料是否都有輸入的函式
 * @returns 陣列，包含物件型態的套表資料和布林值，資料是否齊全
 */
function checkFormData() {

  // 資料驗證
  let ticketNumCheck = (document.querySelector("#ticketNum").value>0) ? document.querySelector("#ticketNum").value : "";
  let ticketRateCheck = (document.querySelector("#ticketRate").value<=10 && document.querySelector("#ticketRate").value>0) ? document.querySelector("#ticketRate").value : "";
  let ticketPriceCheck = (document.querySelector("#ticketPrice").value>0) ? document.querySelector("#ticketPrice").value : "";

  let ticketObj = {
    ticketName: document.querySelector("#ticketName").value,
    ticketImgUrl: document.querySelector("#ticketImgUrl").value,
    ticketRegion: document.querySelector("#ticketRegion").value,
    ticketPrice: ticketPriceCheck,
    ticketNum: ticketNumCheck,
    ticketRate: ticketRateCheck,
    ticketDescription: document.querySelector("#ticketDescription").value
  };

  if (Object.values(ticketObj).includes("")) {
    return [ticketObj, false];
  } else {
    return [ticketObj, true];
  }

}

/**
 * * 清空表格的函式
 */
function resetForm(){

  let ticketProperty = ["ticketName", "ticketImgUrl", "ticketRegion", "ticketPrice", "ticketNum", "ticketRate", "ticketDescription"];
  ticketProperty.forEach(function(item){
    let domSelectorMessage = `#${item}-message`;
    let domSelectorForm = `#${item}`;
    document.querySelector(domSelectorForm).value = "";
    document.querySelector(domSelectorMessage).innerHTML = ``;
  });

}

function showMessage(obj){
  let objData = Object.entries(obj);
  objData.forEach(function(item){
     // 判斷是否顯示必填資訊
     let domSelector = `#${item[0]}-message`;
     document.querySelector(domSelector).innerHTML = ``;
     if(item[1]===""){
       document.querySelector(domSelector).innerHTML = `<i class="fas fa-exclamation-circle"></i>
       <span>必填!</span>`;
     }
  });

}


// * main program start

// * initialization
init();

// * 篩選邏輯
regionSearchMenu.addEventListener('click', function (e) {
  /**
   * if 全部地區 then 呈現全部
   * else 其他地區 then 依地區篩選資料
   * display end
  */
  if (e.target.value === "全部地區") {
    paintDOM(data);

  } else if (e.target.value === "地區搜尋"){
    // stay the same
  } else {
    let areaData = [];
    data.forEach(function(item){
      if (item.area === e.target.value) {
        areaData.push(item);
      }
    });
    paintDOM(areaData);
  }


});

// * 新增資料邏輯
addBtn.addEventListener('click', function (e) {
  // 確認資料是否都有輸入
  let newTicketInfor = checkFormData();

  if (newTicketInfor[1]) {
    // 以物件型態新增資料至套票陣列
    let newTicketObj = {
      id: data.length,
      name: newTicketInfor[0].ticketName,
      imgUrl: newTicketInfor[0].ticketImgUrl,
      area: newTicketInfor[0].ticketRegion,
      description: newTicketInfor[0].ticketDescription,
      group: parseInt(newTicketInfor[0].ticketNum),
      price: parseInt(newTicketInfor[0].ticketPrice),
      rate: parseInt(newTicketInfor[0].ticketRate)
    };
    data.push(newTicketObj);
    resetForm();
    init();

  } else {
    showMessage(newTicketInfor[0]);
  }

});

// * 清除資料邏輯
cleanBtn.addEventListener('click', function(e){
  resetForm();
});

// * 處理圖表
let chart = c3.generate({
  bindto: '#chart', // HTML 元素綁定
  data: {
    columns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 50, 20, 10, 40, 15, 25]
    ] // 資料存放
  }
});