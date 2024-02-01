  
let toggleBtn=document.querySelector(".toggleBtn")
let hide_display=document.querySelectorAll(".hide_display")
let case_page =document.querySelector(".case-page")
let moredetals =document.querySelectorAll(".moredetals")
hide_display.forEach((item)=>{
    toggleBtn.addEventListener("click",()=>{

        item.style.display="flex"
    })
})


console.log(moredetals)
moredetals.forEach((item,i)=>{
    item.href=`./ntlp/cases/ntp.html?id=${i+1}`
    console.log(item)
  })


