// Only allows you make a drink if it's a drink in the drinkRequirements object. 
// Otherwise alert, "Sorry, we don't make DRINKNAME".

// If the drink is part of the drinkRequirements object, 
// reduce the amount of beans by the number of beans required for that drink.

// If there are not enough beans to make that drink, alert, "Sorry, we're all out of beans!".

// Now give the coffeeShop a money property and the ability to buy more supplies with a buySupplies method. 
// It should reduce the amount of money depending on how many beans are purchased. 
// You decide how much the beans cost ;)

// This is a business! We need more money to buy more beans!
// Add properties to each drink object so they have a price and a beanRequirement property.
// Then, create a buyDrink method that increased the amount of money the coffeeShop has 
// (depending on the drinks price) and invokes the makeDrink method.

var coffeeShop = {
    beans: 40,
    money: 0,
    drink: {
        latte: { beans: 10, price: 20 },
        americano: { beans: 5, price: 10 },
        doubleShot: { beans: 15, price: 30 },
        frenchPress: { beans: 12, price: 24 }
    },
    makeDrink: function(drinkType) {
        //firstly, take the money!!
        this.money = this.money + this.drink[drinkType].price;
        //do we have enough beans, if not buy them
        if (this.beans < this.drink[drinkType].beans) {
            this.buySupplies();
        }
        //make the coffee
        this.beans = this.beans - this.drink[drinkType].beans;
        alert("Enjoy Your Drink!");
    },
    buySupplies: function() {
        //you get 2 beans for every 1 money, what a bargain
        console.log("bought " + this.money * 2 + " beans!");
        this.beans = this.beans + this.money * 2;
        this.money = 0;
    },
    buyDrink: function(drinkType) {
        if (!this.drink[drinkType]) {
            alert("Sorry, we don't make " + drinkType);
        } else {
            this.makeDrink(drinkType)
        }

    }
};

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered");
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress");
