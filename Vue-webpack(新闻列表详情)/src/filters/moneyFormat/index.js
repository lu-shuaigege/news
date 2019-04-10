export default function (value) {
  if (!value || !Number(value)) {
    return '0.00';
  }

  console.log(Number(value).toFixed(2));

  // 转换为字符串
  let money = String(Number(value).toFixed(2));

  // 分别获取整数和小数部分
  let parts = money.split('.');
  // 获取整数部分
  let integralPart = parts[0];

  // 处理整数部分
  let integralTemp = integralPart.split('').reverse().join('').match(/(\d{1,3})/g);
  let integralResult = integralTemp.join(',').split('').reverse().join('');
  console.log(integralResult);

  // 小数部分
  let decimalResult = parts[1];

  let result = `${integralResult}.${decimalResult}`;
  console.log(result);

  return result;
}


