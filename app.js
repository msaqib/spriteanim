const cvs2 = document.getElementById('can2')
const ctx2 = cvs2.getContext('2d')

const CANWIDTH = cvs2.width = 600
const CANHEIGHT = cvs2.height = 600

const img2 = new Image()
img2.src = '8049558.png'

const spwidth2 = 170 - 75
const spheight2 = 200 - 46

const arrX = [75, 263, 455, 69, 261, 462]
const arrY = [46, 46, 46, 235, 235, 235]

let scale2 = 1

let anim2 = 0
let frame = 0
let px = 0

function animate2() {
    ctx2.clearRect(0, 0, CANWIDTH, CANHEIGHT)
    //ctx.fillRect(x, 50, 100, 100)
    //x++
    // Draw from the top left corner of the canvas
    
    let row = Math.floor(frame / 3)
    let column = frame % 3
    ctx2.drawImage(img2, arrX[frame], arrY[frame], spwidth2, spheight2, px, 0, scale2*spwidth2, scale2*spheight2)
    anim2++ 
    if (anim2 % 10 === 0) {    
        frame = (frame + 1) % 6    
        px = px + 10
    }
    requestAnimationFrame(animate2)
    
}

animate2()