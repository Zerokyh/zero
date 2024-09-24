// async 무조건 return을 프로미스 돌려주는 함수
const hamburger = async () => {
  return "치즈버거";
};

hamburger().then((v) => console.log(v));

// fetch("www.naver.com") // 결과로 프로미스를 돌려줌

// await : promise가 처리[fullied, rejected]될때까지 함수의 실행을 정지
const fetchData = async () => {
  const response = await fetch("www");
  const data = await response.json();
  return data;
};
