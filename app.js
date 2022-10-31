const heading = document.getElementById('hello')
const heading2 = document.getElementById('click')
const heading3 = document.getElementById('counter')

const picture = document.getElementById('pic')
const arrow = document.getElementById('arrow')

heading.style.fontSize='1.5em'
heading.style.textAlign='center'
heading.style.color='white'
heading.style.backgroundColor='#000029'
heading.style.padding='2em'

heading2.style.fontSize='1.5em'
heading2.style.textAlign='center'

heading3.style.fontSize='1.5em'
heading3.style.textAlign='center'

arrow.style.padding='1.5em'

setInterval(() => {
    heading.style.color='pink'
}, 100)

setInterval(() => {
    heading.style.color='white'
}, 200)


let x=1
let count=0
picture.onclick = () => {
    if (x<6) {
        x++
        picture.src=`data/no_shadow/${x}.png`
    } else {
        x = 1
        picture.src=`data/no_shadow/1.png`
    }
    count = ++count
    heading3.textContent = `Click count: ${count}`;
    console.log(count)
}