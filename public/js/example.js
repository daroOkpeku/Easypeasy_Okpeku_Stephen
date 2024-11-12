const wholecover = document.querySelector(".wholecover")
let original = window.location.origin
let headers = new Headers();

let url = `${original}/fetchall`;
//let headers = new Headers();
axios.get(url,  headers).then(res=>{
 if(res.data.success){
   const data = res.data.success.data
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