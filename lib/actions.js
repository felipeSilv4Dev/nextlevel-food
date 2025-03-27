'use server';

import { saveMeal } from './meals';

function isInvalideText(text) {
  return !text || text.trim() === '';
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInvalideText(meal.title) ||
    isInvalideText(meal.summary) ||
    isInvalideText(meal.instructions) ||
    isInvalideText(meal.creator) ||
    isInvalideText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid input.',
    };
  }
  await saveMeal(meal);
}
