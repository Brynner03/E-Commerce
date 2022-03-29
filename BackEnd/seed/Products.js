const db = require('../db')
const { Items } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const the_pink_stuff = await new Items({
        name: "The Pink Stuff",
        price: "12",
        description: "WORKS LIKE A MIRACLE ! -The Pink Stuff paste made cleaning easier like never before, While saving you time, space & money Lasts way longer than any other liquid detergent.",
        img: "https://m.media-amazon.com/images/I/61-hchB3pHL._AC_SL1132_.jpg",
        department:  "Cleaning"

    })
    the_pink_stuff.save()

    const safely_clean_freak_kit = await new Items({
        name: "Safely Clean Freak Kit",
        price: "52",
        description: "This amazing home cleaning kit has everything you need to keep you and your home: squeaky clean, smelling fresh and looking like you’ve really got it together.",
        img: "https://cdn.shopify.com/s/files/1/0548/8253/3584/products/safely-clean-freak-kit-1_1024x.jpg?v=1623389649",
        department:  "Cleaning"

    })
    safely_clean_freak_kit.save()

    const all_purpose_cleaning_wipes = await new Items({
        name: "All-Purpose Compostable Cleaning Wipes",
        price: "7",
        description: "Messes need method. These method All-Purpose Compostable Cleaning Wipes can clean up all types of surfaces, including stone, wood, counters, glass, tile, and more, making them a great go-to for household spills and in-between cleans. Plus, they’re biodegradable and are made in the US from corn, coconut, and other recyclable solvents. These method wipes use plant-based cleaning power to cut through grease, grime, dirt, and dust. From bachelors who live alone to parents with a full house, everyone can appreciate the usefulness of these method All-Purpose Compostable Cleaning Wipes. Choose from Lime and Sea Salt, Pink Grapefruit, and French Lavender.",
        img: "https://m.media-amazon.com/images/I/619+lZak6qS._AC_SL1300_.jpg",
        department:  "Cleaning"

    })
    all_purpose_cleaning_wipes.save()

    const carbona_pro_care_oxy_powered_outdoor_cleaner = await new Items({
        name: "Carbona Pro Care Oxy-Powered Outdoor Cleaner",
        price: "9.98",
        description: "Spring has finally arrived, which means you'll soon be spending more time in your backyard...which means you'll soon be noticing just how freaking fast your furniture starts looking muddy and moldy. That’s where Carbona’s outdoor cleaner comes in: The dispensing top features a built-in scrubbing brush, so you can easily spot-treat stains, mildew and even bird poop. Plus, it works on everything from outdoor rugs and cushions to window awnings and wood and rattan furniture.",
        img: "https://img.chewy.com/is/image/catalog/282303_MAIN._AC_SS600_V1628863700_.jpg",
        department:  "Cleaning"

    })
    carbona_pro_care_oxy_powered_outdoor_cleaner.save()

    const puracay_multi_purpose_cleaner = await new Items({
        name: "Puracay Multi-Purpose Cleaner",
        price: "12.99",
        description: "This vegan and cruelty-free all-purpose cleaner will be suitable for nearly any surface of your home thanks to its plant-based formula containing organic lemongrass. If that wasn't appealing enough, it's also gluten-free, comes in an environmentally-friendly biodegradable bottle and is hypoallergenic, so you can achieve a spotless home without worrying about breaking out in a rash caused by harsh chemicals.",
        img: "https://m.media-amazon.com/images/I/61vDC8eZ4oS._AC_SL1500_.jpg",
        department:  "Cleaning"

    })
    puracay_multi_purpose_cleaner.save()

    const earth_brite_clay_cleaner = await new Items({
        name: "Earth Brite Clay Cleaner",
        price: "15.95",
        description: "Dirt won't stand a chance against this white clay cleanser that is made with 100 percent natural and non-toxic ingredients. It works on practically every surface you can think of, reportedly without leaving streaks. It comes with its own little scrubbing brush and it's got a light, fresh citrus scent that Amazon shoppers say is not overwhelming. It's also cruelty-free for animal lovers.",
        img: "https://m.media-amazon.com/images/I/61VLz+EL-4L._AC_SL1010_.jpg",
        department:  "Cleaning"

    })
    earth_brite_clay_cleaner.save()

    const bissell_little_green_carpet_cleaner = await new Items({
        name: "Bissell Little Green Carpet Cleaner",
        price: "109.99",
        description: "Stained carpets, couches and car seats are no match for the little portable cleaner that's gone viral on TikTok. All you have to do is fill its 48-ounce tank with water and the Spot and Stain cleaning formula, then grab the suction handle and start swiping your upholstery and rugs. Seeing the trail of brighter, lighter fabric after each pass will both delight you and make you question your hygiene—but we think it's totally worth the 'ew' factor. It comes with multiple tools, including a self-cleaning hose tool, and, as an added bonus, a portion of the proceeds from your purchase will go to help save pets in need through the Bissell Pets Foundation.",
        img: "https://m.media-amazon.com/images/I/715shoBi24L._AC_SL1500_.jpg",
        department:  "Cleaning"

    })
    bissell_little_green_carpet_cleaner.save()

    const natures_miracle_stain_and_odor_remover_spray = await new Items({
        name: "Nature’s Miracle Stain and Odor Remover Spray",
        price: "10.99",
        description: "What makes this cleaner one of the best around for pet accidents is its enzymatic formula. It not only destroys the smell of urine and feces but it supposedly prevents animals from going back to that spot again for repeat performances. This one's for dogs, but you can also get it for cats. A word to the wise? Let it soak in for the full recommended time for maximum odor-busting power.",
        img: "https://img.chewy.com/is/image/catalog/115592_MAIN._AC_SL1500_V1490737692_.jpg",
        department:  "Cleaning"

    })
    natures_miracle_stain_and_odor_remover_spray.save()

    const natural_care_flea_and_tick_carpet_powder = await new Items({
        name: "Natural Care Flea and Tick Carpet Powder",
        price: "10.99",
        description: "With the warmer weather approaching, the chance of bringing ticks into the house is going to increase—especially if you have curious four-legged friends. This all-natural powder kills these pests (and their flea cousins), making your home safer for your family. It also pulls double deodorizing duty.",
        img: "https://img.chewy.com/is/image/catalog/130102_MAIN._AC_SL1500_V1632177979_.jpg",
        department:  "Cleaning"

    })
    natural_care_flea_and_tick_carpet_powder.save()

    const chomchom_roller = await new Items({
        name: " ChomChom Roller",
        price: "24.99",
        description: "When a lint roller just won't cut it, you need the ChomChom Roller. This is another TikTok favorite that’s absurdly satisfying to use, simply because it’s highly effective at picking up Every. Last. Pet. Hair. It's more of an investment than some of the other cleaning products on our list, but there are no adhesive strips or batteries to replace, so you’ll have it for quite a while (provided you clean out its hair trap on the regular).",
        img: "https://m.media-amazon.com/images/I/81Ju+RATjOL._AC_SL1500_.jpg",
        department:  "Cleaning"

    })
    chomchom_roller.save()

    const vybe_percussion_massage_gun_pro_model = await new Items({
        name: "VYBE Percussion Massage Gun Pro Model",
        price: "199.99",
        description: "WORKS LIKE A MIRACLE ! -The Pink Stuff paste made cleaning easier like never before, While saving you time, space & money Lasts way longer than any other liquid detergent.",
        img: "https://m.media-amazon.com/images/I/61-hchB3pHL._AC_SL1132_.jpg",
        department:  "Fitness"

    })
    the_pink_stuff.save()

    const safely_clean_freak_kit = await new Items({
        name: "Safely Clean Freak Kit",
        price: "52",
        description: "This amazing home cleaning kit has everything you need to keep you and your home: squeaky clean, smelling fresh and looking like you’ve really got it together.",
        img: "https://cdn.shopify.com/s/files/1/0548/8253/3584/products/safely-clean-freak-kit-1_1024x.jpg?v=1623389649",
        department:  "Cleaning"

    })
    safely_clean_freak_kit.save()

    const all_purpose_cleaning_wipes = await new Items({
        name: "All-Purpose Compostable Cleaning Wipes",
        price: "7",
        description: "Messes need method. These method All-Purpose Compostable Cleaning Wipes can clean up all types of surfaces, including stone, wood, counters, glass, tile, and more, making them a great go-to for household spills and in-between cleans. Plus, they’re biodegradable and are made in the US from corn, coconut, and other recyclable solvents. These method wipes use plant-based cleaning power to cut through grease, grime, dirt, and dust. From bachelors who live alone to parents with a full house, everyone can appreciate the usefulness of these method All-Purpose Compostable Cleaning Wipes. Choose from Lime and Sea Salt, Pink Grapefruit, and French Lavender.",
        img: "https://m.media-amazon.com/images/I/619+lZak6qS._AC_SL1300_.jpg",
        department:  "Cleaning"

    })
    all_purpose_cleaning_wipes.save()

    const carbona_pro_care_oxy_powered_outdoor_cleaner = await new Items({
        name: "Carbona Pro Care Oxy-Powered Outdoor Cleaner",
        price: "9.98",
        description: "Spring has finally arrived, which means you'll soon be spending more time in your backyard...which means you'll soon be noticing just how freaking fast your furniture starts looking muddy and moldy. That’s where Carbona’s outdoor cleaner comes in: The dispensing top features a built-in scrubbing brush, so you can easily spot-treat stains, mildew and even bird poop. Plus, it works on everything from outdoor rugs and cushions to window awnings and wood and rattan furniture.",
        img: "https://img.chewy.com/is/image/catalog/282303_MAIN._AC_SS600_V1628863700_.jpg",
        department:  "Cleaning"

    })
    carbona_pro_care_oxy_powered_outdoor_cleaner.save()

    const puracay_multi_purpose_cleaner = await new Items({
        name: "Puracay Multi-Purpose Cleaner",
        price: "12.99",
        description: "This vegan and cruelty-free all-purpose cleaner will be suitable for nearly any surface of your home thanks to its plant-based formula containing organic lemongrass. If that wasn't appealing enough, it's also gluten-free, comes in an environmentally-friendly biodegradable bottle and is hypoallergenic, so you can achieve a spotless home without worrying about breaking out in a rash caused by harsh chemicals.",
        img: "https://m.media-amazon.com/images/I/61vDC8eZ4oS._AC_SL1500_.jpg",
        department:  "Cleaning"

    })
    puracay_multi_purpose_cleaner.save()

    const earth_brite_clay_cleaner = await new Items({
        name: "Earth Brite Clay Cleaner",
        price: "15.95",
        description: "Dirt won't stand a chance against this white clay cleanser that is made with 100 percent natural and non-toxic ingredients. It works on practically every surface you can think of, reportedly without leaving streaks. It comes with its own little scrubbing brush and it's got a light, fresh citrus scent that Amazon shoppers say is not overwhelming. It's also cruelty-free for animal lovers.",
        img: "https://m.media-amazon.com/images/I/61VLz+EL-4L._AC_SL1010_.jpg",
        department:  "Cleaning"

    })
    earth_brite_clay_cleaner.save()

    const bissell_little_green_carpet_cleaner = await new Items({
        name: "Bissell Little Green Carpet Cleaner",
        price: "109.99",
        description: "Stained carpets, couches and car seats are no match for the little portable cleaner that's gone viral on TikTok. All you have to do is fill its 48-ounce tank with water and the Spot and Stain cleaning formula, then grab the suction handle and start swiping your upholstery and rugs. Seeing the trail of brighter, lighter fabric after each pass will both delight you and make you question your hygiene—but we think it's totally worth the 'ew' factor. It comes with multiple tools, including a self-cleaning hose tool, and, as an added bonus, a portion of the proceeds from your purchase will go to help save pets in need through the Bissell Pets Foundation.",
        img: "https://m.media-amazon.com/images/I/715shoBi24L._AC_SL1500_.jpg",
        department:  "Cleaning"

    })
    bissell_little_green_carpet_cleaner.save()

    const natures_miracle_stain_and_odor_remover_spray = await new Items({
        name: "Nature’s Miracle Stain and Odor Remover Spray",
        price: "10.99",
        description: "What makes this cleaner one of the best around for pet accidents is its enzymatic formula. It not only destroys the smell of urine and feces but it supposedly prevents animals from going back to that spot again for repeat performances. This one's for dogs, but you can also get it for cats. A word to the wise? Let it soak in for the full recommended time for maximum odor-busting power.",
        img: "https://img.chewy.com/is/image/catalog/115592_MAIN._AC_SL1500_V1490737692_.jpg",
        department:  "Cleaning"

    })
    natures_miracle_stain_and_odor_remover_spray.save()

    const natural_care_flea_and_tick_carpet_powder = await new Items({
        name: "Natural Care Flea and Tick Carpet Powder",
        price: "10.99",
        description: "With the warmer weather approaching, the chance of bringing ticks into the house is going to increase—especially if you have curious four-legged friends. This all-natural powder kills these pests (and their flea cousins), making your home safer for your family. It also pulls double deodorizing duty.",
        img: "https://img.chewy.com/is/image/catalog/130102_MAIN._AC_SL1500_V1632177979_.jpg",
        department:  "Cleaning"

    })
    natural_care_flea_and_tick_carpet_powder.save()

    const chomchom_roller = await new Items({
        name: " ChomChom Roller",
        price: "24.99",
        description: "When a lint roller just won't cut it, you need the ChomChom Roller. This is another TikTok favorite that’s absurdly satisfying to use, simply because it’s highly effective at picking up Every. Last. Pet. Hair. It's more of an investment than some of the other cleaning products on our list, but there are no adhesive strips or batteries to replace, so you’ll have it for quite a while (provided you clean out its hair trap on the regular).",
        img: "https://m.media-amazon.com/images/I/81Ju+RATjOL._AC_SL1500_.jpg",
        department:  "Fitness"

    })
    chomchom_roller.save()



}