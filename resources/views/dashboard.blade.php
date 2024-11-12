<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdn.tailwindcss.com"></script>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/js/all.min.js" integrity="sha512-6sSYJqDreZRZGkJ3b+YfdhB3MzmuP9R7X1QZ6g5aIXhRvR1Y/N/P47jmnkENm7YL3oqsmI6AK+V6AD99uWDnIw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/brands.min.css" integrity="sha512-EJp8vMVhYl7tBFE2rgNGb//drnr1+6XKMvTyamMS34YwOEFohhWkGq13tPWnK0FbjSS6D8YoA3n3bZmb3KiUYA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Document</title>
</head>
<body>

    <div class="w-11/12 m-auto flex flex-col gap-2 sm:flex sm:flex-col sm:gap-2  md:flex md:flex-row md:gap-2 lg:flex lg:flex-row lg:gap-2 px-3 py-2 mt-5">
        <section class="w-1/5 flex flex-col items-center">
        <div class="w-full">Status</div>
        <div class="w-full">
            <select class="w-fulll border status_select">
                <option class="text-xs">Select Status</option>
                <option class="text-xs">active</option>
                <option class="text-xs">inactive</option>
            </select>
        </div>
        </section>

        <section class="w-1/5 flex flex-col items-center">
            <div class="w-full">priority</div>
            <div class="w-full">
                <select class="w-fulll border priority_select">
                    <option class="text-xs">Select priority</option>
                    <option class="text-xs">low</option>
                    <option class="text-xs">medium</option>
                    <option class="text-xs">high</option>
                </select>
            </div>
            </section>
    </div>

    <div class='overflow-scroll sm:overflow-scroll md:overflow-hidden lg:overflow-scroll mt-20 w-full sm:w-full md:w-11/12 lg:w-11/12 m-auto rounded-l-md rounded-r-md'>
        <table class='w-max sm:w-max md:w-full lg:w-full border-2'>
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

       <div class="w-full justify-center items-center">
        <article class="w-1/3 flex flex-row items-center justify-center m-auto space-x-2">
         <button class="prev"><i class="fa fa-angle-double-left" aria-hidden="true"></i></button>
         <button class="next"><i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
     </article>
    </div>






</body>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script type="text/javascript">
var  token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
</script>
<script type="text/javascript" src="{{ asset('/js/example.js') }}"></script>
</html>
