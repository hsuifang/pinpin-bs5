const collapseList = document.querySelectorAll('.accordion')
const collapseHeader = document.querySelectorAll('.accordion__header')
collapseList.forEach((item, idx) => {
  item.addEventListener('click', (e) => {
    if (collapseHeader[idx].classList.contains('collapsed')) {
      item.classList.remove('shadow-sm')
    } else {
      item.classList.add('shadow-sm')
    }
  })
})

// tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
)
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// formValidate
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener(
    'submit',
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    },
    false
  )
})

// 贊助專案按鈕
window.addEventListener('scroll', (e) => {
  const bodyHeight = document.body.offsetHeight
  const disappearBtnHeight = bodyHeight - 100
  const currentScrollHeight = window.innerHeight + window.scrollY
  if (currentScrollHeight >= disappearBtnHeight) {
    document.getElementById('subscribeBtn').classList.add('opacity-0')
  } else {
    document.getElementById('subscribeBtn').classList.remove('opacity-0')
  }
})
