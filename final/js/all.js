const productList = document.querySelector(".productWrap");
let data = [];
let str = `<li class="productCard">
<h4 class="productType">新品</h4>
<img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/dp6gW6u5hkUxxCuNi8RjbfgufygamNzdVHWb15lHZTxqZQs0gdDunQBS7F6M3MdegcQmKfLLoxHGgV3kYunUF37DNn6coPH6NqzZwRfhbsmEblpJQLqXLg4yCqUwP3IE.png" alt="">
<a href="#" class="addCardBtn">加入購物車</a>
<h3>Antony 雙人床架／雙人加大</h3>
<del class="originPrice">NT$18,000</del>
<p class="nowPrice">NT$12,000</p>
</li>`;
productList.innerHTML = str;

function getProductList(){
  axios.get(`https://hexschoollivejs.herokuapp.com/api/livejs/v1/customer/${api_path}/products
  `)
    .then(function (response) {
      console.log(response.data);
    });
}

getProductList();