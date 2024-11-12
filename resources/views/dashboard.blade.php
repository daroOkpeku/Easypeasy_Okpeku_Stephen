<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdn.tailwindcss.com"></script>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Document</title>
</head>
<body>


    <div class='overflow-x-auto  overflow-hidden mt-20 w-11/12 m-auto rounded-l-md rounded-r-md'>
        <table class='w-full '>
        <thead >
           <tr class="  rounded-r-md" >
           <th class='text-white bg-green-400 border border-b-2 font-medium  capitalize text-[8px] sm:text-xs md:text-sm lg:text-base text-center whitespace-nowrap'>company</th>
           <th class='text-white bg-green-400 border border-b-2 font-medium  capitalize text-[8px] sm:text-xs md:text-sm  lg:text-base  text-center whitespace-nowrap'>Title</th>
           <th class='text-white bg-green-400 border border-b-2 font-medium  capitalize text-[8px] sm:text-xs md:text-sm  lg:text-base text-center whitespace-nowrap'>priority</th>
           <th class='text-white bg-green-400 border border-b-2 font-medium  capitalize text-[8px] sm:text-xs md:text-sm  lg:text-base text-center whitespace-nowrap'>status</th>
           <th class='text-white bg-green-400 border border-b-2 font-medium  capitalize text-[8px] sm:text-xs md:text-sm  lg:text-base text-center whitespace-nowrap'>age</th>
           <th class='text-white bg-green-400 border border-b-2 font-medium  capitalize text-[8px] sm:text-xs md:text-sm  lg:text-base text-center whitespace-nowrap'>date </th>
           </tr>
        </thead>

        <tbody class="wholecover">
           
               
          
        </tbody>

       </table>
       </div>



    
</body>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script type="text/javascript">
var  token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
</script>
<script type="text/javascript" src="{{ asset('/js/example.js') }}"></script>
</html>