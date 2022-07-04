let url = 'http://localhost:3001'
let btn = document.querySelector('button')
let input = document.querySelector('input')
let form = document.forms.todo
let cont = document.querySelector('.container2')


function react() {
    axios.get(url + '/todos')
        .then(res => {
                if(res.status === 201 || res.status === 200) {
                    reload(res.data)
                }   
            })
}
react()


function reload(arr){
    cont.innerHTML = ""

    for(let item of arr) {
        let box = document.createElement('div')
        let div3 = document.createElement('div')
        let p = document.createElement('p')
        let img = document.createElement('img')
        let p2 = document.createElement('p')
    
    
        box.classList.add('list')
        div3.classList.add('p_img')
        p.innerHTML = item.task
        img.src= "./Group 14.png"
        p2.innerHTML = new Date().getHours() + ':' + new Date().getMinutes()
    
        box.append(div3,p2)
        div3.append(p,img)
        cont.append(box)
    }

}

form.onsubmit = (event) => {
    event.preventDefault()

    let task = {
        id: Math.random(),
        time: new Date().getHours() + ":" + new Date().getMinutes(),
        isDone: false 
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        task[key] = value
    })

    axios.post(url + '/todos', task)
        .then(res => {
            if(res.status === 201 || res.status === 200) {
                react()
            }
        })

}
