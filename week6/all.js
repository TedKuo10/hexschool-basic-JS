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



/**
 * 預設載入函式
 * * 透過 AJAX 取得資料，並初始化資料
 */
function init(){
  axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
    .then(function (response) {
      // handle success
      data = response.data;
      
    });
}

init();