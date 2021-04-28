
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { searchContext } from '../../../App';






const SearchBox = ({ }) => {
    const [search, setSearch] = useContext(searchContext);
    const history = useHistory();
    const [addult, setAddult] = useState(1);
    const [child, setChild] = useState(1);
    const [baby, setBaby] = useState(1);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
   

    const onSubmit = formData => {

        const searchData = {
            ...formData,
            addult: addult,
            child: child
        }
        
        setSearch(searchData);
        console.log(searchData)
        history.push('/searchLocation');
    };

    console.log(watch());
    console.log(search);
    return (
        <>
            <div className="search-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3 bg-white field p-2">
                        <label for="location" className="form-label">Location</label>
                        <input type="text" className="form-control location-input" id="location" name="location" {...register("location", { required: true })} placeholder="add city, Landmark, or space" />
                        {errors.location && <span>This field is required</span>}
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3 bg-white field">
                                <input type="date" className="form-control location-input" name="checkIn" {...register("checkIn", { required: true })} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3 bg-white field">
                                <input type="date" className="form-control location-input" name="checkOut" {...register("checkOut", { required: true })} />
                            </div>
                        </div>
                    </div>

                    <div className="mb-3 bg-white field p-3">
                        <div className="guest ">
                            <p>Guest</p>
                            <p>{addult} ADULTS, {child} CHILD</p>
                        </div>
                        <div className="guest-info d-flex my-3">
                            <p>ADULTS</p>
                            <div className="guest-no d-flex ms-auto px-3">
                                <p style={{ cursor: 'pointer' }} onClick={() => addult > 0 && setAddult(addult - 1)} >-</p>
                                <p className="mx-3">{addult}</p>
                                <p style={{ cursor: 'pointer' }} onClick={() => setAddult(addult + 1)}>+</p>
                            </div>
                        </div>
                        <div className="guest-info d-flex my-3">
                            <p>CHILD</p>
                            <div className="guest-no d-flex ms-auto px-3">
                                <p style={{ cursor: 'pointer' }} onClick={() => child > 0 && setChild(child - 1)} >-</p>
                                <p className="mx-3">{child}</p>
                                <p style={{ cursor: 'pointer' }} onClick={() => setChild(child + 1)}>+</p>
                            </div>
                        </div>
                        <div className="guest-info d-flex my-3">
                            <p>BABIES</p>
                            <div className="guest-no d-flex ms-auto px-3">
                                <p style={{ cursor: 'pointer' }} onClick={() => baby > 0 && setBaby(baby - 1)} >-</p>
                                <p className="mx-3">{baby}</p>
                                <p style={{ cursor: 'pointer' }} onClick={() => setBaby(baby + 1)}>+</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary form-control">Search</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SearchBox;