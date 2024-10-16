const Productlist = () => {
    return(
        <div className="grid justify-center items-center min-h-screen bg-[#fcf8f5]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 font-redhat max-w-screen-xl ">
                {/* Your cart */}
                <div className="order-1 md:order-2 lg:col-span-1 bg-white p-4 rounded-md shadow-md max-h-[300px]">
                    {/* cart list */}
                    <h2 className="text-xl text-[#c83b0e] text-[24px] font-semibold mb-4">Your Cart (0)</h2>
                    <img src="/assets/your cart.svg" alt="" className="m-auto animate-ping" />
                    <div className="text-[#795548] text-[14px] text-center mt-10">Your added items will appear here</div>
                </div>
                {/* Desserts */}
                <div className="order-2 md:order-2 md:col-span-3 lg:order-1 lg:col-span-2">
                    <h2 className="text-[40px] font-bold mb-4 text-left lg:text-center">Desserts</h2>
                    <div className="order-2 lg:order-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Waffle cart1 */}
                        <div className="relative">
                            <img src="/assets/waffle cart1.jpg" alt="Waffle" className="rounded-2xl" />
                                <div className="absolute top-0 right-0 bg-red-500 text-white p-5 text-[14px]  rounded-b-full border-2 border-black hover:animate-pulse scale-x-75  ">50% <br/> off</div>
                            <span className="flex flex-row items-center justify-center gap-2   ">
                                <button className="flex flex-row items-center justify-center gap-2 hover:animate-bounce hover:duration-200 border text-black py-2 px-4 rounded-full absolute border-black bg-white">
                                    <img src="/assets/product.svg" alt=""  className="text-[14px]"/> Add to Cart
                                </button>
                            </span>
                            {/* waffle items */}
                            <div className="mt-10">
                                <div className="text-[#87635A] text-[14px]">Waffle</div>
                                <h3 className="text-[16px] font-semibold ">Waffle with Berries</h3>
                                <div className="text-[#C73B0F] text-[14px]">$6.50</div>
                            </div>
                        </div>
                          {/* Creme Brulee */}
                   <div className="relative  ">
                        <img src="/assets/creme-brulee cart2.jpg" alt="Creme Brulee" className="rounded-2xl" />
                        <div className="absolute top-0 right-0 bg-red-500 text-white p-5 text-[14px]  rounded-b-full border-2 border-black animate-pulse scale-x-75   ">50% <br/> off</div>
                        <span className="flex flex-row items-center justify-center gap-2 "> 
                        <button class=" animate-bounce duration-200 flex flex-row items-center justify-center gap-2 border text-black py-2 px-4 rounded-full absolute border-black bg-white ">
                            <img src="/assets/product.svg" alt="" className="text-[14px]" />Add to Cart
                        </button>
                        </span>
                        {/* Creme Brulee items */}
                    <div className="mt-10">
                    <div className="text-[#87635A] text-[14px]">Creme Brulee</div>
                    <h3 className="text-[16px] font-semibold">Vanilia Bean Creme Brulee</h3>
                    <div className="text-[#C73B0F] text-[14px]">$7.50</div>
                   </div>
                   </div>
                   {/* Marcaron */}
                   <div className="relative  ">
                        <img src="/assets/macaron cart3.jpg" alt="Macaron" className="rounded-2xl" />
                        <div className="absolute top-0 right-0 bg-red-500 text-white p-5 text-[14px]  rounded-b-full border-2 border-black animate-pulse  scale-x-75 ">50% <br/> off</div>
                        <span className="flex flex-row items-center justify-center gap-2 "> 
                        <button class="  animate-bounce  duration-200 flex flex-row items-center justify-center gap-2 border text-black py-2 px-4 rounded-full absolute border-black bg-white ">
                            <img src="/assets/product.svg" alt="" className="text-[14px]"/>Add to Cart
                        </button>
                        </span>
                        {/* Macaron items */}
                    <div className="mt-10">
                    <div className="text-[#87635A] text-[14px] ">Macaron</div>
                    <h3 className="text-[16px] font-semibold">Macaron Mix of Five</h3>
                    <div className="text-[#C73B0F] text-[14px] ">$8.00</div>
                   </div>
                   </div>
                   {/* Tiramisu */}
                   <div className="relative  ">
                        <img src="/assets/tiramisu cart4.jpg" alt="Creme Brulee" className="rounded-2xl" />
                        <div className="absolute top-0 right-0 bg-red-500 text-white p-5 text-[14px]  rounded-b-full border-2 border-black animate-pulse scale-x-75   ">50% <br/> off</div>
                        <span className="flex flex-row items-center justify-center gap-2 ">
                             <button class=" animate-bounce duration-200 flex flex-row items-center justify-center gap-2 border text-black py-2 px-4 rounded-full absolute border-black bg-white ">
                            <img src="/assets/product.svg" alt=""  className="text-[14px]"/>Add to Cart
                        </button>
                        </span>
                        {/* Creme Brulee items */}
                    <div className="mt-10">
                    <div className="text-[#87635A] text-[14px] ">Tiramisu</div>
                    <h3 className="text-[16px] font-semibold ">Classic Tiramisu</h3>
                    <div className="text-[#C73B0F] text-[14px]">$5:50</div>
                   </div>
                   </div>
                   {/* Baklava */}
                   <div className="relative  ">
                        <img src="/assets/baklava cart5.jpg" alt="Pistachio Baklava" className="rounded-2xl" />
                        <div className="absolute top-0 right-0 bg-red-500 text-white p-5 text-[14px]  rounded-b-full border-2 border-black animate-pulse scale-x-75  ">50% <br/> off</div>
                        <span className="flex flex-row items-center justify-center gap-2 "> 
                        <button class=" animate-bounce duration-200 flex flex-row items-center justify-center gap-2 border text-black py-2 px-4 rounded-full absolute border-black bg-white ">
                            <img src="/assets/product.svg" alt="" className="text-[14px]" />Add to Cart
                        </button>
                        </span>
                        {/* Creme Brulee items */}
                    <div className="mt-10">
                    <div className="text-[#87635A] text-[14px]">Baklava</div>
                    <h3 className="text-lg font-semibold text-[16px]">Pistachio Baklava</h3>
                    <div className="text-[#C73B0F] text-[14px]">$4.00</div>
                   </div>
                   </div>
                   {/* Pie */}
                   <div className="relative  ">
                        <img src="/assets/meringue cart6.jpg" alt="Meringue" className="rounded-2xl" />
                        <div className="absolute top-0 right-0 bg-red-500 text-white p-5 text-[14px]  rounded-b-full border-2 border-black animate-pulse scale-x-75  ">50% <br/> off</div>
                        <span className="flex flex-row items-center justify-center gap-2 ">
                             <button class=" animate-bounce duration-200 flex flex-row items-center justify-center gap-2 border text-black py-2 px-4 rounded-full absolute border-black bg-white ">
                            <img src="/assets/product.svg" alt="" className="text-[14px]" />Add to Cart
                        </button>
                        </span>
                        {/* Creme Brulee items */}
                    <div className="mt-10">
                    <div className="text-[#87635A] text-[14px]">Pie</div>
                    <h3 className="text-[16px] font-semibold">Lemon Meringue Pie</h3>
                    <div className="text-[#C73B0F] text-[14px]">$5.00</div>
                   </div>
                   </div>
                   {/* Red VelvetCake */}
                   <div className="relative  ">
                        <img src="/assets/cake cart7.jpg" alt="Red Velvet Cake" className="rounded-2xl" />
                        <div className="absolute top-0 right-0 bg-red-500 text-white p-5 text-[14px]  rounded-b-full border-2 border-black animate-pulse scale-x-75  ">50% <br/> off</div>
                        <span className="flex flex-row items-center justify-center gap-2 "> 
                        <button class=" animate-bounce duration-200 flex flex-row items-center justify-center gap-2 border text-black py-2 px-4 rounded-full absolute border-black bg-white ">
                            <img src="/assets/product.svg" alt="" className="text-[14px]"/>Add to Cart
                        </button>
                        </span>
                        {/* Red Velvet items */}
                    <div className="mt-10">
                    <div className="text-[#87635A] text-[14px]">Cake</div>
                    <h3 className="text-[16px] font-semibold">Red Velvet Cake</h3>
                    <div className="text-[#C73B0F] text-[14px]">$4.50</div>
                   </div>
                   </div>
                   {/* Brownie */}
                   <div className="relative  ">
                        <img src="/assets/brownie cart8.jpg" alt="Creme Brulee" className="rounded-2xl" />
                        <div className="absolute top-0 right-0 bg-red-500 text-white p-5 text-[14px]  rounded-b-full border-2 border-black animate-pulse scale-x-75  ">50% <br/> off</div>
                        <span className="flex flex-row items-center justify-center gap-2 ">
                             <button class=" animate-bounce duration-200 flex flex-row items-center justify-center gap-2 border text-black py-2 px-4 rounded-full absolute border-black bg-white ">
                            <img src="/assets/product.svg" alt="" className="text-[14px]" />Add to Cart
                        </button>
                        </span>
                        {/* Brownie items */}
                    <div className="mt-10">
                    <div className="text-[#87635A] text-[14px]">Brownie</div>
                    <h3 className="text-[16px] font-semibold">Salted Caramel Brownie</h3>
                    <div className="text-[#C73B0F] text-[14px]">$5.50</div>
                   </div>
                   </div>
                   {/* Panna Cotta */}
                   <div className="relative  ">
                        <img src="/assets/brownie cart8.jpg" alt="Vanilla Panna Cotta" className="rounded-2xl" />
                        <div className="absolute top-0 right-0 bg-red-500 text-white p-5 text-[14px]  rounded-b-full border-2 border-black animate-pulse  scale-x-75 ">50% <br/> off</div>
                        <span className="flex flex-row items-center justify-center gap-2 ">
                             <button class=" animate-bounce duration-200 flex flex-row items-center justify-center gap-2 border text-black py-2 px-4 rounded-full absolute border-black bg-white ">
                            <img src="/assets/product.svg" alt="" className="text-[14px]"/>Add to Cart
                        </button>
                        </span>
                        {/* Panna items */}
                    <div className="mt-10">
                    <div className="text-[#87635A] text-[14px]">Panna Cotta</div>
                    <h3 className="text-[16px] font-semibold ">Vanilla Panna Cotta</h3>
                    <div className="text-[#C73B0F] text-[14px]">$6.50</div>
                   </div>
                   </div>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productlist;
