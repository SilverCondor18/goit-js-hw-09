import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const r=document.querySelector(".feedback-form");let t={email:"",message:""};const l="feedback-form-state",s=a=>{try{const e=localStorage.getItem(a);e!==null&&(t=JSON.parse(e),Object.keys(t).forEach(o=>{r.elements[o].value=t[o]}))}catch(e){console.log(e)}};s(l);const c=(a,e)=>{try{localStorage.setItem(a,JSON.stringify(e))}catch(o){console.log(o)}},n=a=>{Object.keys(t).forEach(e=>{t[e]=a.currentTarget.elements[e].value.trim()}),c(l,t)},m=a=>{a.preventDefault();const{email:e,message:o}=t;if(e==""||o==""){alert("Fill please all fields");return}console.log(t),localStorage.removeItem(l),t={email:"",message:""},r.reset()};r.addEventListener("input",n);r.addEventListener("submit",m);
//# sourceMappingURL=2-form.js.map