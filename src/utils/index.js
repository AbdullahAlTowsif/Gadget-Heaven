import toast from "react-hot-toast"

// get all gadgets from local storage
const getAllCarts = () => {
    const all = localStorage.getItem('carts')
    if(all){
        const carts = JSON.parse(all)
        return carts
    }
    else{
        return []
    }
}
const getAllWishlist = () => {
    const all = localStorage.getItem('carts')
    if(all){
        const carts = JSON.parse(all)
        return carts
    }
    else{
        return []
    }
}


// add a gadget to local storage

const addToCart = gadget => {
    const carts = getAllCarts()
    const isExist = carts.find(item=> item.product_id == gadget.product_id)
    if(isExist) return toast.error("Gadget Already exist");
    carts.push(gadget)
    localStorage.setItem('carts', JSON.stringify(carts))
    toast.success("Successfully added!");
}

const addToWishlist = gadget => {
    const carts = getAllWishlist()
    const isExist = carts.find(item=> item.product_id == gadget.product_id)
    if(isExist) return toast.error("Gadget Already exist");
    carts.push(gadget)
    localStorage.setItem('carts', JSON.stringify(carts))
    toast.success("Successfully added to wishlist!");
}

export { addToCart, getAllCarts, addToWishlist, getAllWishlist } 