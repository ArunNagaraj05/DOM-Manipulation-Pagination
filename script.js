let root = document.getElementById("root")
let h1 = document.createElement("h1")
h1.setAttribute("id","title")
h1.innerText = "Full Stack Development"
root.appendChild(h1)
let div = document.createElement("div")
div.setAttribute("class","pagination")
root.appendChild(div)
let divDes = document.createElement("div")
let para = document.createElement("p")
para.setAttribute("id","description")
para.innerText = "In full stack development...we cover the topics are Mango DB, React JS, Express JS, Node JS"
divDes.appendChild(para)
div.appendChild(divDes)
let divImg = document.createElement("img")
divImg.setAttribute("src","https://www.ovhcloud.com/sites/default/files/styles/text_media_horizontal/public/2022-03/black.png")
div.appendChild(divImg)
let divtab = document.createElement("div")
divtab.setAttribute("class","table-responsive")
div.appendChild(divtab)
let table = document.createElement("table")
table.setAttribute("class","table table-bordered")
divtab.appendChild(table)
let row = document.createElement("tr")
row.setAttribute("class","row")
table.appendChild(row)
let column = document.createElement("td")
column.innerText = "Mango DB"
row.appendChild(column)
let br = document.createElement("br")
div.appendChild(br)
let divPage = document.createElement("div")
divPage.setAttribute("id","buttons")
divPage.setAttribute("class","d-flex justify-content-center")
div.appendChild(divPage)
let attribute = document.createElement("a")
attribute.setAttribute("href","#")
attribute.setAttribute("id","previous")
attribute.setAttribute("title","Best sale going on....!")
divPage.appendChild(attribute)
let pre = document.getElementById("previous")
pre.innerText = "<<Previous"
let a1 = document.createElement("a")
a1.setAttribute("href","https://www.google.co.in/")
a1.setAttribute("id","one")
divPage.appendChild(a1)
let one = document.getElementById("one")
one.innerText = "first"
let a2 = document.createElement("a")
a2.setAttribute("href","#")
a2.setAttribute("id","two")
divPage.appendChild(a2)
let two = document.getElementById("two")
two.innerText = "last"
let a3 = document.createElement("a")
a3.setAttribute("href","#")
a3.setAttribute("id","next")
divPage.appendChild(a3)
let next = document.getElementById("next")
next.innerText = "next>>"
