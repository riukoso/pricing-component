const basic = document.querySelector('.first-price > p')
const professional = document.querySelector('.second-price > p')
const master = document.querySelector('.third-price > p')
const toggle = document.getElementById('toggle-circle')
const toggleCont = document.querySelector('.toggle')

toggle.style.transform = 'translate(0, 0)'

const onToggle = () =>{
    if(toggle.attributes.style.value === "transform: translate(86%, 0px);"){
        toggle.style.transform = ''
        basic.textContent = '199.99'
        professional.textContent = '249.99'
        master.textContent = '399.99'
    }else{
        toggle.style.transform = 'translate(86%, 0)'
        basic.textContent = '19.99'
        professional.textContent = '29.99'
        master.textContent = '39.99'
    }
    console.log('hey')
}

toggleCont.addEventListener('click', onToggle)

console.log(toggle)