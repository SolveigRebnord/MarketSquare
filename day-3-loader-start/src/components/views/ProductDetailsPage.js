import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchProductById} from '../../store/modules/productsSlice';

const ProductDetailsPage = () => {
    const dispatch = useDispatch(); // Help you to dispatch actions, Example: dispatch(fetchProduct(id))
    const {singleProduct} = useSelector(state => state.products); // GETS YOU THE PRODUCTS FROM THE STORE
    let {id} = useParams();

    useEffect(() => {
        if (id) { //  id exists before calling fetchProduct is necessary to prevent errors.
            dispatch(fetchProductById(id));
        }
    }, [dispatch, id]);

    return (
        <>
            {singleProduct && 
            <div className=''>
                <img className='shadow-md' src={singleProduct.images[0]}></img>
                <div className='m-8 mt-12'>
                    <div className='flex flex-row justify-between items-center mb-6'>
                            <h1 className='text-2xl'>{singleProduct.title}</h1>
                            <p className='text-gray-500'>{singleProduct.brand}</p>
                    </div>
                    <p>{singleProduct.description}</p>
                    <div className='flex flex-row justify-evenly items-baseline my-6'>
                        <p className='flex flex-col items-center justify-center text-2xl gap-1'>
                            {singleProduct.rating}
                            <img className='w-5' src='/Star.png' /></p>
                        <p className='flex flex-col items-center justify-center text-2xl gap-1'>
                        {singleProduct.stock}
                        <img className='w-5' src='/Storefront.png' /></p>

                    </div>
                    <hr className='my-8'></hr>
                    <div className='flex flex-row justify-between items-center mt-12 rounded-md'>
                        <p className='text-2xl'>{singleProduct.price} NOK</p>
                        <button className='w-1/2 bg-indigo-600 text-white h-12 font-semibold rounded-md'>Add to cart</button>
                    </div>
                </div>
             
            </div>}
             
        </>
    );
};

export default ProductDetailsPage;
