document.querySelector('.butt-click').addEventListener('click', (e) => {
    e.preventDefault;
    document.querySelector('.input-search').classList.toggle('show');
})

document.querySelector('.fa-bars').addEventListener('click', () => {
    document.querySelector('.div-link').classList.toggle('show-two');
    document.querySelector('.show-two').classList.toggle('div-link');
    document.querySelector('.fa-bars').classList.toggle('none-hamb');
    document.querySelector('.none-hamb').classList.toggle('fa-bars');
})

document.querySelector('.fa-times').addEventListener('click', () => {
    document.querySelector('.show-two').classList.toggle('div-link');
    document.querySelector('.div-link').classList.toggle('show-two');
    document.querySelector('.none-hamb').classList.toggle('fa-bars');
    document.querySelector('.fa-bars').classList.toggle('none-hamb');
})



ScrollReveal().reveal('.layout-div');
ScrollReveal().reveal('.layout1', {delay: 1000});







/* let obj = {
    cls1: '.red-dim1',
    cls2: '.red-dim2',
    cls3: '.red-dim3',
    cls4: '.red-dim4'
};

let obj2 = {
    cls1: '.par-trw',
    cls2: '.par-trx',
    cls3: '.par-try',
    cls4: '.par-trz'
};

const space2 = {
    pos1: document.querySelector(obj2.cls1),
    pos2: document.querySelector(obj2.cls2),
    pos3: document.querySelector(obj2.cls3),
    pos4: document.querySelector(obj2.cls4)
}; 

const space = {
    pos1: document.querySelector(obj.cls1),
    pos2: document.querySelector(obj.cls2),
    pos3: document.querySelector(obj.cls3),
    pos4: document.querySelector(obj.cls4)
}; 

const hdoc = {
    one: space.pos1.clientHeight,
    two: space.pos2.clientHeight,
    tree: space.pos3.clientHeight,
    four: space.pos4.clientHeight
};

console.log(hdoc);

if (hdoc.one <= 250 || hdoc.two <= 250 || hdoc.tree <= 250 || hdoc.four <= 250) {
    console.log('correcto');
} else {
    space2.pos4.style.height = '250';
    space2.pos4.style.overflow = 'auto';
}


/* c = document.querySelector('.par-trw');
if (c.clientHeight <= 300) {
    console.log('correcto');
} else {
    c.style.height = '250px';
    c.style.overflow = 'auto';
}
console.log(c.clientHeight); */



/* let dim = {
    width: 200,
    height: 200
};

let obj = {
    cls1: '.par-trw',
    cls2: '.par-trx',
    cls3: '.par-try',
    cls4: '.par-trz'
};

const space = {
    pos1: document.querySelector(obj.cls1),
    pos2: document.querySelector(obj.cls2),
    pos3: document.querySelector(obj.cls3),
    pos4: document.querySelector(obj.cls4)
}; 

const color = {
    one: 'red',
    two: 'navy',
    tree: 'yellow',
    four: 'white'
};

 w = space.pos4;
 w.style.width = dim.height;
if (w.style.height != '200') {
    alert('si es correcto')
} else {
    alert('Pasa de dimencion');
} 

console.log(w);

space.pos2.style.color = color.two;
space.pos3.style.color = color.tree;
space.pos4.style.color = color.four; 
 */