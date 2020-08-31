class ArraySorter {
    #array;
    #modifier;
    #key;

    constructor (array) {
        this.#array = array;
    }

    by (key, direction = 'asc', type = 'string') {
        this.#key = key;
        this.setModifier(direction);
        const sortType = type + 'Sort';
        
        if (this.#array.length > 0) {
            // Slice for creating a copy and not mutate actual state
            return this.#array.sort(this[sortType]())
        } else {
            return this.#array
        }
        
    }

    setModifier (direction) {
        this.#modifier = direction === 'asc' ? 1 : -1
    }

    dateSort () {
        return (a, b) => {
            if (this.#modifier === 1) return new Date(a[this.#key]) - new Date (b[this.#key])
            else return new Date(b[this.#key]) - new Date (a[this.#key])
        }
    }

    numericSort () {
        return (a, b) => {
            if (this.#modifier === 1) return a[this.#key] - b[this.#key];
            else return b[this.#key] - a[this.#key];
        }
        
    }

    stringSort () {
        return (a, b) => {
            if ( a[this.#key].toLowerCase() < b[this.#key].toLowerCase() ){
                return -1 * this.#modifier
            }
            if ( a[this.#key].toLowerCase() > b[this.#key].toLowerCase() ){
                return 1 * this.#modifier
            }
                return 0;
        }
        
    }
}