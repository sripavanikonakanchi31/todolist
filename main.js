const addBtn = document.getElementById("addissue")
const form = document.getElementById("formmodle")
const cancle = document.getElementById("cancel")
const titleEle = document.getElementById("title")
const discEle = document.getElementById("desc")
const submit = document.getElementById("submit")
const contEle = document.getElementById("contact")
const addrEle = document.getElementById("address")


addBtn.addEventListener("click", function (){
       form.style.display = "block"
       
})

cancle.addEventListener("click",function (){
    form.style.display = "none"
})

const todos = [];

submit.addEventListener("click",function (event){
   event.preventDefault()

   const todo = {
    title: titleEle.value,
    desc: discEle.value,
    contact: contEle.value,
    address: addrEle.value
   }

   titleEle.value = ""
   discEle.value = ""
   contEle.value = ""
   addrEle.value = ""
   todos.push(todo)
   getTodos()
})

function getTodos(){

    console.log(todos)
}
