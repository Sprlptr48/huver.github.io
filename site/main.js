console.log('Hello World!');




import { ref, onMounted, onUnmounted } from 'vue'
export default {
  setup () {
    
    const foreground = ref(null)
    const background = ref(null)
    const first = ref(null)
    const second = ref(null)
 
    return {
      foreground,
      background,
      first,
      second
    }
  }
}




onMounted(() => {
  document.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll)
})



const handleScroll = (evt) => {

  const scrollY = window.scrollY
  // decreases as user scrolls
  first.value.style.opacity = (100 - ((scrollY + window.innerHeight) - first.value.offsetHeight)) / 100
  // increases as user scrolls
  second.value.style.opacity = ((scrollY + window.innerHeight) - second.value.offsetTop) / 100

  const maxBackgroundSize = 120;
  const backgroundSize = ((scrollY) / (maxBackgroundSize - 100)) // increases as user scrolls

  // zoom the background at a slower rate
  background.value.style.transform = 'scale(' + (100 + backgroundSize * .4) / 100 + ')'
  foreground.value.style.transform = 'scale(' + (100 + backgroundSize) / 100 + ')'
}

