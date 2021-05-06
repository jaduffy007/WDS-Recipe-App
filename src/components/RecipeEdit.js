import React from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';

const RecipeEdit = () => {
	return (
		<div className="recipe-edit">
			<div className="recipe-edit__remove-button-container">
				<button className="btn recipe-edit__remove-button">&times;</button>
			</div>
			<div className="recipe-edit__details-grid">
				<label htmlFor="name" className="recipe-edit__label">
					Name
				</label>
				<input
					type="text"
					name="name"
					className="recipe-edit__input"
					id="name"
				/>
				<label htmlFor="cookTime" className="recipe-edit__label">
					Cook Time
				</label>
				<input
					type="text"
					name="cookTime"
					className="recipe-edit__input"
					id="cookTime"
				/>
				<label htmlFor="name" className="recipe-edit__label">
					Servings
				</label>
				<input
					type="number"
					min="1"
					name="servings"
					className="recipe-edit__input"
					id="servings"
				/>
				<label htmlFor="instructions" className="recipe-edit__label">
					Instructions
				</label>
				<textarea
					type="number"
					min="1"
					name="instructions"
					className="recipe-edit__input"
					id="instructions"
				/>
			</div>
			<br />
			<label className="recipe-edit__label">Ingredients</label>
			<div className="recipe-edit__ingredient-grid">
				<div>Name</div>
				<div>Amount</div>
				<div></div>
				<RecipeIngredientEdit />
				<RecipeIngredientEdit />
			</div>
			<div className="recipe-edit__add-ingredient-btn-container">
				<button className="btn btn--primary">Add Ingredient</button>
			</div>
		</div>
	);
};

export default RecipeEdit;
