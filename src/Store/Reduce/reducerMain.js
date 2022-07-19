import data from "../MOCK_DATA.json";

const defaultStore = {
    allInfo: [
        {
            id: 101,
            name: "Anton",
            surname: "Demydenko",
            email: "anton213@gmail.com",
            phone: "(068) 8427215",
            status: false,
            date: "2021-11-17",
            calls: 1,
        },
        {
            id: 102,
            name: "Sasha",
            surname: "Prulupenko",
            email: "sasshafd213@gmail.com",
            phone: "(038) 2329215",
            status: true,
            date: "2021-12-22",
            calls: 2,
        },
    ],
};

const START = "START";
// sorts
const SORT = "SORT";

const SEARCH = "SEARCH";

export const reducerMain = (state = defaultStore, action) => {
    function sortData(id = action.payload.id, active = action.payload.active) {
        // if active === true , return sorted arr
        if (active) {
            return [...data.sort((a, b) => (a[id] > b[id] ? 1 : -1))];
        } else {
            // if active === false , return reversed sorted arr
            return [...data.sort((a, b) => (b[id] > a[id] ? 1 : -1))];
        }
    }
    switch (action.type) {
        case START:
            return { ...state, information: [...data] };
        case SORT:
            return { ...state, information: sortData() };
        case SEARCH:
            // action key is serach options (name,surname,id)
            let filteredArr = data.filter((elem) => {
                if (typeof elem[action.key] === "string") { // if search string(name,surname)
                    return elem[action.key].toLowerCase().includes(action.payload.toLowerCase());
                } else {
                    return String(elem[action.key]).includes(action.payload);// if search number(id,calls,date)
                }
            });

            return {
                ...state,
                information: filteredArr,
            };
    }
};

export const createrStart = (payload = data) => ({ type: START, payload });
export const createrSort = (payload) => ({ type: SORT, payload });
export const createrSearch = (payload, key) => ({ type: SEARCH, payload, key });
