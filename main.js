  
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
   
  })
  let popUpOverlay=document.querySelectorAll(".popUpOverlay")
  let close=document.querySelectorAll(".popUpOverlay .close")
  
let popUpclick=document.querySelectorAll(".popUpclick")
popUpclick.forEach((item,i)=>{
item.addEventListener(('click'),()=>{
    popUpOverlay[i].style.opacity="1"
    popUpOverlay[i].style.visibility="visible"
    popUpOverlay[i].style.zIndex="9999"
})
})
close.forEach((item,i)=>{
item.addEventListener(('click'),()=>{
    popUpOverlay[i].style.opacity="0"
    popUpOverlay[i].style.visibility="hidden"
    // popUpOverlay[i].style.zIndex=""
})
})
 
  
