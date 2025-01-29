const WLW = document.querySelector('.WLWPosts'),
      sprintPosts = document.querySelector('.sprintPosts')

const WLWBtn = document.querySelector('.WLWBtn'),
      sprintBtn = document.querySelector('.sprintBtn')

WLWBtn.addEventListener('click', WLWAppear)
sprintBtn.addEventListener('click', sprintAppear)

function WLWAppear(){
  sprintPosts.classList.remove('active')
  WLW.classList.add('active')

  WLWBtn.classList.add('picked')
  sprintBtn.classList.remove('picked')
}
function sprintAppear(){
  sprintPosts.classList.add('active')
  WLW.classList.remove('active')

  WLWBtn.classList.remove('picked')
  sprintBtn.classList.add('picked')
}