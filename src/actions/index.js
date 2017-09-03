export const ADD_RECIPE = 'ADD RECIPE';
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR';

export function addRecipe({day,recipe,meal}) {
 return {
     type:ADD_RECIPE,
     day,
     recipe,
     meal
 }
}

export function removeFromCalendar(data) {
    return {
        type:REMOVE_FROM_CALENDAR,
       ...data
    }
}