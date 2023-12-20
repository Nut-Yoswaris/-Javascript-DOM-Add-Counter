const root = document.querySelector('#root') ;
const btnAdd = document.querySelector('.btn-add');
const sumTotal = document.querySelector('.show-sum')
let total = 0 

function Counter () {
    let countNum = 0
    const makeElement = (tag , attr_n , attr_v , content) =>{
        let output = document.createElement(tag)
        output.setAttribute(attr_n , attr_v)
        output.textContent = content
        return output
    }
// render
    const updateCounter = (n) => {
        if(countNum + n < 0){
            return
        }
        countNum +=n
        total +=n 
        number.textContent = countNum ; 
        sumTotal.textContent = `Sum = ${total}` ;
    }

    const delCounter = (e) => {
        // console.log(e.target.closest('.counter'))
        updateCounter(-countNum)
        e.target.closest('.counter').remove()
    }
    
    const counter = makeElement('div' , 'class' , 'counter' , '')
    const btnInc = makeElement('button' , 'class' , 'btn-inc' , '+')
    const number = makeElement('h3' , 'class' , 'number' , '0')
    const btnDec = makeElement('button' , 'class' , 'btn-dec' , '-')
    const btnClr = makeElement('button' , 'class' , 'btn-clr' , '0')
    const btnDel = makeElement('button' , 'class' , 'btn-del' , 'X')
    
    btnInc.addEventListener('click' , () => updateCounter(1))
    btnDec.addEventListener('click' , () => updateCounter(-1))
    btnClr.addEventListener('click' , () => updateCounter(-countNum))
    btnDel.addEventListener('click' , delCounter)
    // ถ้าส่งพารามิเตอร์ไป ต้องซ้อน ()=> ถ้าไม่มีพารามิเตอร์ ให้ชื่อ function ส่งไปได้เลย 
    
    // counter.append(btnInc)
    // counter.append(number)
    // counter.append(btnDec)
    // counter.append(btnClr)
    // counter.append(btnDel)
    // สามารถย่อลงมาโดยใช้ด้านล่าง 
    counter.append(btnInc , number , btnDec , btnClr , btnDel)
    return counter
}

// root.append(Counter())
// root.append(Counter())
// root.append(Counter())
// btnAdd.addEventListener('click' , () => root.append(Counter())) ตัวนี้ใช้ได้แต่ไม่ควร

const hdlAddCounter = () => {
    root.append(Counter())
}
btnAdd.addEventListener('click' , hdlAddCounter)