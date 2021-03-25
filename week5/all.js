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
 * * 初始化資料
 * * 宣告變數 data，並賦予值為物件型態的陣列 reference，以物件方式存放每個套票資料
 * * 宣告變數 ticketCardArea，並賦予值為物件型態的 DOM 元素
 */
let data = [
    {
      "id": 0,
      "name": "肥宅心碎賞櫻3日",
      "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
      "area": "高雄",
      "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
      "group": 87,
      "price": 1400,
      "rate": 10
    },
    {
      "id": 1,
      "name": "貓空纜車雙程票",
      "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台北",
      "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
      "group": 99,
      "price": 240,
      "rate": 2
    },
    {
      "id": 2,
      "name": "台中谷關溫泉會1日",
      "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台中",
      "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
      "group": 20,
      "price": 1765,
      "rate": 7
    }
];

// 針對給定的 Selector 條件，回傳第一個 HTMLElement 物件
const ticketCardArea = document.querySelector("ul.ticketCard-area");
const regionSearchMenu = document.querySelectorAll(".regionSearch");

// * 預設載入函式
function init(){

  let ticketListContent = "";
  data.forEach(function(item){

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
}

// * 繪製DOM
function paintDIM(){};

// * 篩選邏輯
regionSearchMenu.addEventListener('click', function(e){
  console.log(e.target.value);
  let ticketListContent = "";
  if(e.target.value === "高雄"){
    ticketListContent += 
  }
});



// main code
// * 網頁狀態初始化
init();