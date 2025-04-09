const menuData = {
    pasta: [
        { 
            id: 1, 
            title: "Carbonara", 
            desc: "Creamy pasta with egg, pancetta, and pecorino cheese.", 
            price: "₱180", 
            image: "images/pasta/classiccarbonara.jpg",
            nutrition: {
                calories: "650 kcal",
                protein: "22g",
                carbs: "45g",
                fat: "38g"
            }
        },
        { 
            id: 2, 
            title: "Chicken Aflredo", 
            desc: "Fettuccine in rich Alfredo sauce with tender chicken pieces.", 
            price: "₱190", 
            image: "images/pasta/chickenalfredo.jpg",
            nutrition: {
                calories: "720 kcal",
                protein: "35g",
                carbs: "55g",
                fat: "42g"
            }
        },
        { 
            id: 3, 
            title: "Chicken Pesto", 
            desc: "Pasta with fresh basil pesto, grilled chicken, and pine nuts.", 
            price: "₱170", 
            image: "images/pasta/chickenpesto.jpg",
            nutrition: {
                calories: "580 kcal",
                protein: "32g",
                carbs: "40g",
                fat: "35g"
            }
        },
        { 
            id: 44, 
            title: "Tuna Pesto", 
            desc: "Flaky tuna mixed with vibrant pesto sauce on al dente pasta.", 
            price: "₱180", 
            image: "images/pasta/tunepesto.jpg",
            nutrition: {
                calories: "520 kcal",
                protein: "38g",
                carbs: "42g",
                fat: "28g"
            }
        },
        { 
            id: 55, 
            title: "Agilio Olio", 
            desc: "Spaghetti with garlic-infused olive oil and chili flakes.", 
            price: "₱190", 
            image: "images/pasta/agilioOlio.jpg",
            nutrition: {
                calories: "480 kcal",
                protein: "12g",
                carbs: "60g",
                fat: "22g"
            }
        },
    ],
    coffee: [
        { 
            id: 4, 
            title: "Green Apple", 
            desc: "Refreshing sparkling beverage with crisp green apple flavor.", 
            price: "₱100", 
            image: "images/drinks/sparklinggreen.jpg",
            nutrition: {
                calories: "120 kcal",
                protein: "0g",
                carbs: "30g",
                fat: "0g"
            }
        },
        { 
            id: 5, 
            title: "Lychee", 
            desc: "Sweet and fragrant lychee-flavored sparkling beverage.", 
            price: "₱130", 
            image: "images/drinks/sparklingstrawberry.jpg",
            nutrition: {
                calories: "140 kcal",
                protein: "0g",
                carbs: "35g",
                fat: "0g"
            }
        },
        { 
            id: 6, 
            title: "Oreo Frappe", 
            desc: "Blended frappe with crushed Oreo cookies and chocolate.", 
            price: "₱100", 
            image: "images/drinks/oreoFrap.jpg",
            nutrition: {
                calories: "320 kcal",
                protein: "5g",
                carbs: "48g",
                fat: "12g"
            }
        },
        { 
            id: 7, 
            title: "Coffee Jelly Frappe", 
            desc: "Coffee frappe with chewy coffee jelly pieces.", 
            price: "₱130", 
            image: "images/drinks/coffeejellyFrap.jpg",
            nutrition: {
                calories: "280 kcal",
                protein: "4g",
                carbs: "42g",
                fat: "10g"
            }
        },
        { 
            id: 8, 
            title: "Deep Chocolate Frappe", 
            desc: "Rich chocolate frappe with intense cocoa flavor.", 
            price: "₱120", 
            image: "images/drinks/deepChocoFrap.jpg",
            nutrition: {
                calories: "350 kcal",
                protein: "6g",
                carbs: "52g",
                fat: "14g"
            }
        },
        { 
            id: 9, 
            title: "Strawberry Toblerone", 
            desc: "Frappe blending strawberry with Toblerone chocolate.", 
            price: "₱110", 
            image: "images/drinks/strawberrytoblerone.jpg",
            nutrition: {
                calories: "380 kcal",
                protein: "5g",
                carbs: "58g",
                fat: "15g"
            }
        },
        { 
            id: 10, 
            title: "Dalgonal Latte", 
            desc: "Whipped coffee latte with creamy foam topping.", 
            price: "₱140", 
            image: "images/drinks/dalgonaLatte.jpg",
            nutrition: {
                calories: "220 kcal",
                protein: "7g",
                carbs: "25g",
                fat: "10g"
            }
        },
        { 
            id: 11, 
            title: "White Chocolate Mocha", 
            desc: "Espresso with white chocolate and steamed milk.", 
            price: "₱130", 
            image: "images/drinks/whiteChocolateMocha.jpg",
            nutrition: {
                calories: "290 kcal",
                protein: "8g",
                carbs: "35g",
                fat: "14g"
            }
        },
        { 
            id: 12, 
            title: "Coffee 1", 
            desc: "Classic brewed coffee with rich aroma and flavor.", 
            price: "₱120", 
            image: "images/drinks/Coffe.jpg",
            nutrition: {
                calories: "5 kcal",
                protein: "0g",
                carbs: "1g",
                fat: "0g"
            }
        },
        { 
            id: 13, 
            title: "Coffee 2", 
            desc: "House blend coffee with caramel and nutty notes.", 
            price: "₱110", 
            image: "images/drinks/coffe2.jpg",
            nutrition: {
                calories: "10 kcal",
                protein: "0g",
                carbs: "2g",
                fat: "0g"
            }
        },
        { 
            id: 14, 
            title: "Sweet Americano", 
            desc: "Americano coffee with just the right sweetness.", 
            price: "₱140", 
            image: "images/drinks/sweetAmericano.jpg",
            nutrition: {
                calories: "50 kcal",
                protein: "0g",
                carbs: "12g",
                fat: "0g"
            }
        }
    ],
    meal: [
        { 
            id: 16, 
            title: "Breakfast Sampler", 
            desc: "Platter with eggs, sausages, bacon, and toast.", 
            price: "₱250", 
            image: "images/meal/BreakfastSampler.jpg",
            nutrition: {
                calories: "780 kcal",
                protein: "42g",
                carbs: "45g",
                fat: "48g"
            }
        },
        { 
            id: 17, 
            title: "Hungarian with Egg", 
            desc: "Hungarian sausage served with sunny-side-up eggs.", 
            price: "₱280", 
            image: "images/meal/HungarianEgg.jpg",
            nutrition: {
                calories: "650 kcal",
                protein: "38g",
                carbs: "30g",
                fat: "45g"
            }
        },
        { 
            id: 18, 
            title: "Spam with Egg", 
            desc: "Classic combination of pan-fried Spam with eggs, rice, and salad.", 
            price: "₱230", 
            image: "images/meal/SpamEgg.jpg",
            nutrition: {
                calories: "720 kcal",
                protein: "32g",
                carbs: "55g",
                fat: "40g"
            }
        },
    ],
    cake: [
        { 
            id: 21, 
            title: "Cheese French Toast", 
            desc: "Golden French toast topped with melted cheese and sugar.", 
            price: "₱180", 
            image: "images/pastries/cheeseFrenchToast.png",
            nutrition: {
                calories: "420 kcal",
                protein: "15g",
                carbs: "52g",
                fat: "18g"
            }
        },
        { 
            id: 22, 
            title: "Chocoberry Crape", 
            desc: "Crepe filled with chocolate and fresh berries.", 
            price: "₱190", 
            image: "images/pastries/chocoberryCrape.png",
            nutrition: {
                calories: "380 kcal",
                protein: "8g",
                carbs: "58g",
                fat: "15g"
            }
        },
        { 
            id: 23, 
            title: "Chocolate French Toast", 
            desc: "Decadent French toast drizzled with chocolate sauce and cream.", 
            price: "₱200", 
            image: "images/pastries/chocolateFrenchToast.png",
            nutrition: {
                calories: "480 kcal",
                protein: "12g",
                carbs: "62g",
                fat: "22g"
            }
        },
        { 
            id: 24, 
            title: "Churos", 
            desc: "Crispy cinnamon-dusted churros for dipping.", 
            price: "₱170", 
            image: "images/pastries/churos.png",
            nutrition: {
                calories: "320 kcal",
                protein: "4g",
                carbs: "45g",
                fat: "15g"
            }
        },
        { 
            id: 25, 
            title: "Fish Chips", 
            desc: "Crispy battered fish served with fries, coleslaw, and sauce.", 
            price: "₱210", 
            image: "images/pastries/fishChips.png",
            nutrition: {
                calories: "680 kcal",
                protein: "28g",
                carbs: "65g",
                fat: "35g"
            }
        }
    ]
};