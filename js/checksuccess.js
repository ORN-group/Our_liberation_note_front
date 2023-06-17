
const urlParams = new URLSearchParams(window.location.search);
const orderId = urlParams.get('orderId');
const amount = urlParams.get('amount');
const paymentKey = urlParams.get('paymentKey');
// 쿠키에서 액세스 JWT 토큰 가져오기
const access_token = localStorage.getItem("access");

const url = `http://127.0.0.1:8000/payments/success`;
const secretKey = "test_ck_5mBZ1gQ4YVXkllX4eX23l2KPoqNb";
const userpass = secretKey + ':';
const encodedU = window.btoa(userpass);

const headers = {
  "Authorization": `Bearer ${access_token}`,
  "Content-Type": "application/json",
  "Authorization-Token": `${access_token}`  // 액세스 토큰 값 설정
};

console.log(headers)
console.log(access_token)
const params = new URLSearchParams();
params.append('orderId', orderId);
params.append('paymentKey', paymentKey);
params.append('amount', amount);


console.log(orderId, amount, paymentKey)
console.log(`${url}?${params.toString()}`)

async function fetchData() {
  try {
    const response = await fetch(`${url}?${params.toString()}`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${access_token}`,
        "Content-Type": "application/json",
        "Authorization-Token": `${access_token}`
      },
      mode: 'cors'
    });

    if (response.ok) {
      const response_json = await response.json();
      console.log(response_json);
      // 응답 결과 처리
      // ...
    } else {
      console.error('Network response was not ok');
      // 오류 처리
      // ...
    }
  } catch (error) {
    console.error('Error:', error);
    // 오류 처리
    // ...
  }
}

// fetchData 함수 호출
fetchData();








  // .then(response => response.json())
  // .then(data => {// 응답 결과 처리

  //   $('#payments-info').empty();
  //   const suppliedAmount = data.suppliedAmount;
  //   console.log(data, "테스트");
  //   console.log(data.res);
  //   const vat = data.vat;
  //   const totalAmount = data.totalAmount;
  //   const orderName = data.orderName
  //   const userName = data.user;
  //   const startDate = new Date(data.start_subscribe_at);
  //   const start_subscribe_at = startDate.toISOString().split('T')[0];
  //   const endDate = new Date(data.end_date);
  //   const end_date = endDate.toISOString().split('T')[0];
  //   const duration = data.duration;

  //   let temp_html = `
  //                 <p class="content">주문자 : ${userName}</p>
  //                 <p class="content">이용권 : ${orderName} - ${duration}일</p>
  //                 <p class="content">결제 금액 : ${totalAmount}</p>
  //                 <p class="content">부가세 : ${vat}</p>
  //                 <p class="content">부가세 제외 결제 금액 : ${suppliedAmount}</p>
  //                 <p class="content">구독시작일 : ${start_subscribe_at}</p>
  //                 <p class="content">구독종료일 : ${end_date}</p>
  //                 `
  //   $('#payments-info').append(temp_html)

  //   localStorage.setItem("is_subscribe", "true")
  //   alert('로그인을 다시 해주세요!')
  //   localStorage.removeItem("access")
  //   localStorage.removeItem("refresh")
  //   localStorage.removeItem("payload")
  //   localStorage.removeItem("is_subscribe")
  //   document.cookie = "jwt_token=; expires=Thu, 01 Jan 2023 00:00:01 UTC; path=/;";  // 쿠키 삭제
  //   window.location.replace(`${frontend_base_url}/index.html`)
  // })
  // .catch(error => {
  //   // 에러 처리
  //   console.error(error);
  //   // window.location.replace(`${frontend_base_url}/fail.html`)
  // });

