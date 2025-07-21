class FoodItem {
    constructor(foodName, foodType, price, isVegan, isSpicy){
        this.foodName = foodName;
        this.foodType = foodType;
        this.price = price;
        this._isSpicy = isSpicy;
        this._isVegan = isVegan;
    }

    getName(){
        return this.foodName;
    }

    getType() {return this.foodType;}
    getPrice() {return this.price;}

    get isVegan() {return this._isVegan;}
    get isSpicy() {return this._isSpicy;}

    matchesFilter(type, vegan, spicy){
        return (
            (type ==='' || this.foodType === type) &&
            (!vegan || this.isVegan) &&
            (!spicy || this.isSpicy)
        );
    }

}

class Menu{
    constructor(items =[]){
        this.items = items;
    }

    loadItems(data){
        this.items = data.map(item => new FoodItem(
            item.foodName,
            item.foodType,
            item.price,
            item.isVegan,
            item.isSpicy
            )
        );
    }

    filterItems(type, vegan, spicy) {
        return this.items.filter(item => item.matchesFilter(type, vegan, spicy));
    }

    render(container, type, vegan, spicy){
        const filteredItems = this.filterItems(type, vegan, spicy);
        container.innerHTML = '';

        if (filteredItems.length === 0) {
        container.innerHTML = '<p>No items match your filters.</p>';
        return;
        }
    

    filteredItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'food-item';
        div.innerHTML = `<h3>${item.getName()}</h3>
                         <p>Type: ${item.getType()}</p>
                         <p>Price: $${item.getPrice().toFixed(2)}</p>
                         <p>${item.isVegan ? '✅ Vegan' : '❌ Not Vegan'}</p>
                         <p>${item.isSpicy ? '🌶️ Spicy' : '🧂 Not Spicy'}</p>`;
        container.appendChild(div);
        });
    }
}

export {FoodItem, Menu};