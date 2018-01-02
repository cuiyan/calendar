// API URL
const API_URL = "https://v.juhe.cn/calendar/day"
// API KEY
const API_KEY = "YOUR_KEY"

// Get detail for a given day
function fetchDetail(today) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: API_URL,
      data: {
        key: API_KEY,
        date: today
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: resolve,
      fail: reject
    })
  })
  return promise
}

function getDetail() {
  var tmpDate = new Date()
  var month = tmpDate.getMonth() + 1
  var today = tmpDate.getFullYear() + '-' + month + '-' + tmpDate.getDate()
  return fetchDetail(today)
    .then(function (res) {
      console.log(res.data.result.data)
      return res.data.result.data
    })
    .catch(function (err) {
      console.log(err)
      return {}
    })
}

module.exports = {
  getDetail: getDetail
}
