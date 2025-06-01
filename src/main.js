const fileInput = document.getElementById('fileSelect')
const displayedImage = document.getElementById('displayedImage')
fileInput.addEventListener('change', event => {
  console.log(event)
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = e => {
      displayedImage.src = e.target.result
    }
    reader.readAsDataURL(file)
  }
})