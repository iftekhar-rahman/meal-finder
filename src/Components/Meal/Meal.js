import React from 'react';

const Meal = (props) => {

    const {strMealThumb, strMeal, strCategory, strArea} = props.meal;

    return (
        <div className="col-lg-3">
            <div className="food-item">
                <img style={{width: '100%', marginBottom: '15px'}} src={strMealThumb} alt="" />
                <h3>Food: {strMeal}</h3>
                <p>Category: {strCategory}</p>
                <p>Region: {strArea}</p>
            </div>
        </div>
    );
};

export default Meal;