import { reactive, computed } from "vue";

const filters = {
    all(todos) {
        return todos;
    },
    active(todos) {
        return todos.filter((todo) => !todo.complete);
    },
    complete(todos) {
        return todos.filter((todo) => todo.complete);
    },
};
export function useFilter(todos) {
    const filterState = reactive({
        visibility: "all",
        filterItems: [
            { value: "all", lable: "All" },
            { value: "active", lable: "Active" },
            { value: "complete", lable: "Complete" },
        ],
        filiterTodos: computed(() => {
            //@ts-ignore
            return filters[filterState.visibility](todos.value);
        }),
    });
    return filterState;
}