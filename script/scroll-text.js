const pTag1 = document.querySelector('.p1');
const pTag2 = document.querySelector('.p2');
const pTag3 = document.querySelector('.p3');

const textArr1 = 'I want an Adidas superstar. Nike is not good.'.split(' ')
const textArr2 = 'I want to eat pizza. I want to eat chicken.'.split(' ')
const textArr3 = 'It`s so hard to make this. I want to go home!!!!'.split(' ')

function initTexts(element, textArray) {
    textArray.push(...textArray)
    for ( let i = 0; i<textArray.length; i++ ) {
        element.innerHTML += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
    }
}

initTexts(pTag1, textArr1)
initTexts(pTag2, textArr2)
initTexts(pTag3, textArr3)

function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
        element.style.transform = 'translateX(0)'
        count = 0
    }
    element.style.transform = `translateX(${count + direction}px)`
    return count
}

let count1 = 0
let count2 = 0
let count3 = 0

function animate() {
    count1++
    count2++
    count3++

    count1 = marqueeText(count1, pTag1, -1)
    count2 = marqueeText(count2, pTag2, -1)
    count3 = marqueeText(count3, pTag3, -1)

    window.requestAnimationFrame(animate)
}

animate()

window.addEventListener('scroll', () => {
    count1 += 125
    count2 += 135
    count3 += 130
})