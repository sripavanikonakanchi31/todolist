const addBtn = document.getElementById("addissue")
const form = document.getElementById("formmodle")
const cancle = document.getElementById("cancel")
console.log(addBtn,form)

addBtn.addEventListener("click", function (){
       form.style.display = "block"
       
})

cancle.addEventListener("click",function (){
    form.style.display = "none"
})