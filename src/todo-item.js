export function createTodoItem(description) {
    const result = crsbinding.observation.observe({
        description: description,
        isDone: false
    });
    return result;
}