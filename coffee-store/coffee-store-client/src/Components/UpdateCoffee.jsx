import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const {_id,name,quantity,supplier,taste,category,details,photo} = coffee;

    const handleUpdateCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const supplier = form.supplier.value
        const category = form.category.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const taste = form.taste.value;
        const updatedCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(updatedCoffee);

        //send data to the server
        fetch(`https://coffee-store-server-hnfb6dkm4-jisanahamed09205.vercel.app/coffee/${_id}`,{
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }

    return (
        <div className="bg-[#f4f3f0] p-24">
            <h2 className="text-3xl font-extrabold">Update coffee</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            {/* <span>Name</span> */}
                            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            {/* <span>Name</span> */}
                            <input type="text" defaultValue={quantity} name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier and taste row */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            {/* <span>Name</span> */}
                            <input type="text" defaultValue={supplier} name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            {/* <span>Name</span> */}
                            <input type="text" defaultValue={taste} name="taste" placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            {/* <span>Name</span> */}
                            <input type="text" defaultValue={category} name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            {/* <span>Name</span> */}
                            <input type="text" defaultValue={details} name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            {/* <span>Name</span> */}
                            <input type="text" defaultValue={photo} name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block bg-black text-white hover:text-black hover:bg-red-300" />
            </form>
        </div>
    );
};

export default UpdateCoffee;