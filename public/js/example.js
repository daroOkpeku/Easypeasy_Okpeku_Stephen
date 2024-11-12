const wholecover = document.querySelector(".wholecover")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const status_select = document.querySelector(".status_select")
const priority_select = document.querySelector(".priority_select")
let total_num = 0;
let current = 1;
let original = window.location.origin
let headers = new Headers();
let ansstatus_select = ""
let anspriority_select = ""
let url = `${original}/fetchall`;
axios.get(url,  headers).then(res=>{
 if(res.data.success){
    total_num = res.data.success.last_page

   const data = res.data.success.data
   console.log(res.data.success)
   data.map((item, index)=>{

    const date = new Date(item.created_at);
    const humanReadableDate = date.toLocaleString("en-US", {
    weekday: "long",      // e.g., 'Tuesday'
    year: "numeric",      // e.g., 2024
    month: "long",        // e.g., 'October'
    day: "numeric",       // e.g., 29
    hour: "numeric",      // e.g., 3 PM or 15 in 24-hour format
    minute: "2-digit"     // e.g., 26
    });
    wholecover.innerHTML += `
                <tr class="text-black" >
                <td class="text-sm font-medium capitelize text-center" >${item.company} </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${item.title}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${item.priority}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                  ${item.status}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${item.to_age+"-"+item.from_age}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${humanReadableDate}
                </td>

             </tr>`;
   })

 }

})


status_select.addEventListener("click",function(e){
    e.preventDefault()
   
    if(e.target.value != 'Select Status'){
        ansstatus_select = e.target.value
         wholecover.innerHTML = ''
        //  status         
        let url = `${original}/fetchall?status=${e.target.value}`;
axios.get(url,  headers).then(res=>{
 if(res.data.success){
    total_num = res.data.success.last_page

   const data = res.data.success.data
   console.log(res.data.success)
   data.map((item, index)=>{

    const date = new Date(item.created_at);
    const humanReadableDate = date.toLocaleString("en-US", {
    weekday: "long",      // e.g., 'Tuesday'
    year: "numeric",      // e.g., 2024
    month: "long",        // e.g., 'October'
    day: "numeric",       // e.g., 29
    hour: "numeric",      // e.g., 3 PM or 15 in 24-hour format
    minute: "2-digit"     // e.g., 26
    });
    wholecover.innerHTML += `
                <tr class="text-black" >
                <td class="text-sm font-medium capitelize text-center" >${item.company} </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${item.title}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${item.priority}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                  ${item.status}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${item.to_age+"-"+item.from_age}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${humanReadableDate}
                </td>

             </tr>`;
   })

 }

})
    }else{
         wholecover.innerHTML = ''
        let url = `${original}/fetchall`;
axios.get(url,  headers).then(res=>{
 if(res.data.success){
    total_num = res.data.success.last_page

   const data = res.data.success.data
   console.log(res.data.success)
   data.map((item, index)=>{

    const date = new Date(item.created_at);
    const humanReadableDate = date.toLocaleString("en-US", {
    weekday: "long",      // e.g., 'Tuesday'
    year: "numeric",      // e.g., 2024
    month: "long",        // e.g., 'October'
    day: "numeric",       // e.g., 29
    hour: "numeric",      // e.g., 3 PM or 15 in 24-hour format
    minute: "2-digit"     // e.g., 26
    });
    wholecover.innerHTML += `
                <tr class="text-black" >
                <td class="text-sm font-medium capitelize text-center" >${item.company} </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${item.title}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${item.priority}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                  ${item.status}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${item.to_age+"-"+item.from_age}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${humanReadableDate}
                </td>

             </tr>`;
   })

 }

})
    }
})

priority_select.addEventListener("click", function(e){
    e.preventDefault()
    if(e.target.value != 'Select priority'){
        anspriority_select = e.target.value
        wholecover.innerHTML = ''

        let url = `${original}/fetchall?priority=${e.target.value}`;
        axios.get(url,  headers).then(res=>{
         if(res.data.success){
            total_num = res.data.success.last_page
        
           const data = res.data.success.data
           console.log(res.data.success)
           data.map((item, index)=>{
        
            const date = new Date(item.created_at);
            const humanReadableDate = date.toLocaleString("en-US", {
            weekday: "long",      // e.g., 'Tuesday'
            year: "numeric",      // e.g., 2024
            month: "long",        // e.g., 'October'
            day: "numeric",       // e.g., 29
            hour: "numeric",      // e.g., 3 PM or 15 in 24-hour format
            minute: "2-digit"     // e.g., 26
            });
            wholecover.innerHTML += `
                        <tr class="text-black" >
                        <td class="text-sm font-medium capitelize text-center" >${item.company} </td>
                        <td class="text-sm font-medium capitelize text-center" >
                        ${item.title}
                        </td>
                        <td class="text-sm font-medium capitelize text-center" >
                        ${item.priority}
                        </td>
                        <td class="text-sm font-medium capitelize text-center" >
                          ${item.status}
                        </td>
                        <td class="text-sm font-medium capitelize text-center" >
                        ${item.to_age+"-"+item.from_age}
                        </td>
                        <td class="text-sm font-medium capitelize text-center" >
                        ${humanReadableDate}
                        </td>
        
                     </tr>`;
           })
        
         }
        
        })
    }else{
         wholecover.innerHTML = ''
        let url = `${original}/fetchall`;
axios.get(url,  headers).then(res=>{
 if(res.data.success){
    total_num = res.data.success.last_page

   const data = res.data.success.data
   console.log(res.data.success)
   data.map((item, index)=>{

    const date = new Date(item.created_at);
    const humanReadableDate = date.toLocaleString("en-US", {
    weekday: "long",      // e.g., 'Tuesday'
    year: "numeric",      // e.g., 2024
    month: "long",        // e.g., 'October'
    day: "numeric",       // e.g., 29
    hour: "numeric",      // e.g., 3 PM or 15 in 24-hour format
    minute: "2-digit"     // e.g., 26
    });
    wholecover.innerHTML += `
                <tr class="text-black" >
                <td class="text-sm font-medium capitelize text-center" >${item.company} </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${item.title}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${item.priority}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                  ${item.status}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${item.to_age+"-"+item.from_age}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${humanReadableDate}
                </td>

             </tr>`;
   })

 }

})
    }
})


prev.addEventListener("click", function(e){
    e.preventDefault();
    if (current > 1){
        let ans =  current -= 1;
        current = ans
        wholecover.innerHTML = ''
        console.log(current)


        let url = `${original}/fetchall?page=${current}&status=${ansstatus_select}&priority=${anspriority_select}`;
axios.get(url,  headers).then(res=>{
 if(res.data.success){
    total_num = res.data.success.last_page

   const data = res.data.success.data
   console.log(res.data.success)
   data.map((item, index)=>{

    const date = new Date(item.created_at);
    const humanReadableDate = date.toLocaleString("en-US", {
    weekday: "long",      // e.g., 'Tuesday'
    year: "numeric",      // e.g., 2024
    month: "long",        // e.g., 'October'
    day: "numeric",       // e.g., 29
    hour: "numeric",      // e.g., 3 PM or 15 in 24-hour format
    minute: "2-digit"     // e.g., 26
    });
    wholecover.innerHTML += `
                <tr class="text-black" >
                <td class="text-sm font-medium capitelize text-center" >${item.company} </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${item.title}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${item.priority}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                  ${item.status}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${item.to_age+"-"+item.from_age}
                </td>
                <td class="text-sm font-medium capitelize text-center" >
                ${humanReadableDate}
                </td>

             </tr>`;
   })

 }

})


    }
    else if(current == 1 ){
        current = 1
        wholecover.innerHTML = ''
        console.log(current)


        let url = `${original}/fetchall?page=${current}&status=${ansstatus_select}&priority=${anspriority_select}`;
        axios.get(url,  headers).then(res=>{
         if(res.data.success){
            total_num = res.data.success.last_page

           const data = res.data.success.data
           console.log(res.data.success)
           data.map((item, index)=>{

            const date = new Date(item.created_at);
            const humanReadableDate = date.toLocaleString("en-US", {
            weekday: "long",      // e.g., 'Tuesday'
            year: "numeric",      // e.g., 2024
            month: "long",        // e.g., 'October'
            day: "numeric",       // e.g., 29
            hour: "numeric",      // e.g., 3 PM or 15 in 24-hour format
            minute: "2-digit"     // e.g., 26
            });
            wholecover.innerHTML += `
                        <tr class="text-black" >
                        <td class="text-sm font-medium capitelize text-center" >${item.company} </td>
                        <td class="text-sm font-medium capitelize text-center" >
                        ${item.title}
                        </td>
                        <td class="text-sm font-medium capitelize text-center" >
                        ${item.priority}
                        </td>
                        <td class="text-sm font-medium capitelize text-center" >
                          ${item.status}
                        </td>
                        <td class="text-sm font-medium capitelize text-center" >
                        ${item.to_age+"-"+item.from_age}
                        </td>
                        <td class="text-sm font-medium capitelize text-center" >
                        ${humanReadableDate}
                        </td>

                     </tr>`;
           })

         }

        })
    }
})



next.addEventListener("click", function(e){
    e.preventDefault();
    if(current < total_num){
        let ans =  current += 1;
        current = ans
        wholecover.innerHTML = ''
        console.log(current)
        let url = `${original}/fetchall?page=${current}&status=${ansstatus_select}&priority=${anspriority_select}`;
        axios.get(url,  headers).then(res=>{
         if(res.data.success){
            total_num = res.data.success.last_page

           const data = res.data.success.data
           console.log(res.data.success)
           data.map((item, index)=>{

            const date = new Date(item.created_at);
            const humanReadableDate = date.toLocaleString("en-US", {
            weekday: "long",      // e.g., 'Tuesday'
            year: "numeric",      // e.g., 2024
            month: "long",        // e.g., 'October'
            day: "numeric",       // e.g., 29
            hour: "numeric",      // e.g., 3 PM or 15 in 24-hour format
            minute: "2-digit"     // e.g., 26
            });
            wholecover.innerHTML += `
                        <tr class="text-black" >
                        <td class="text-sm font-medium capitelize text-center" >${item.company} </td>
                        <td class="text-sm font-medium capitelize text-center" >
                        ${item.title}
                        </td>
                        <td class="text-sm font-medium capitelize text-center" >
                        ${item.priority}
                        </td>
                        <td class="text-sm font-medium capitelize text-center" >
                          ${item.status}
                        </td>
                        <td class="text-sm font-medium capitelize text-center" >
                        ${item.to_age+"-"+item.from_age}
                        </td>
                        <td class="text-sm font-medium capitelize text-center" >
                        ${humanReadableDate}
                        </td>

                     </tr>`;
           })

         }

        })
    } else if(current == total_num){
        current = 1
        wholecover.innerHTML = ''
        console.log(current)

        let url = `${original}/fetchall?page=${current}&status=${ansstatus_select}&priority=${anspriority_select}`;
        axios.get(url,  headers).then(res=>{
         if(res.data.success){
            total_num = res.data.success.last_page

           const data = res.data.success.data
           console.log(res.data.success)
           data.map((item, index)=>{

            const date = new Date(item.created_at);
            const humanReadableDate = date.toLocaleString("en-US", {
            weekday: "long",      // e.g., 'Tuesday'
            year: "numeric",      // e.g., 2024
            month: "long",        // e.g., 'October'
            day: "numeric",       // e.g., 29
            hour: "numeric",      // e.g., 3 PM or 15 in 24-hour format
            minute: "2-digit"     // e.g., 26
            });
            wholecover.innerHTML += `
                        <tr class="text-black" >
                        <td class="text-sm font-medium capitelize text-center" >${item.company} </td>
                        <td class="text-sm font-medium capitelize text-center" >
                        ${item.title}
                        </td>
                        <td class="text-sm font-medium capitelize text-center" >
                        ${item.priority}
                        </td>
                        <td class="text-sm font-medium capitelize text-center" >
                          ${item.status}
                        </td>
                        <td class="text-sm font-medium capitelize text-center" >
                        ${item.to_age+"-"+item.from_age}
                        </td>
                        <td class="text-sm font-medium capitelize text-center" >
                        ${humanReadableDate}
                        </td>

                     </tr>`;
           })

         }

        })
    }
})
