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

        // FITNESS


    const vybe_percussion_massage_gun_pro_model = await new Items({
        name: "VYBE Percussion Massage Gun Pro Model",
        price: "199.99",
        description: "Aching muscles are no match for this low-noise massage gun. It relieves sore muscles with a combination of eight unique head attachments that offer targeted therapy and nine speeds, boasting 1800-3400 strokes per minute. Even better, its battery can handle up to three hours of continuous use.",
        img: "https://m.media-amazon.com/images/I/71w9J2hphHL._AC_SL1500_.jpg",
        department:  "Fitness"

    })
    vybe_percussion_massage_gun_pro_model.save()

    const whithings_body_composition_wifi_scale = await new Items({
        name: "Withings Body + Body Composition Wi-Fi Scale",
        price: "99",
        description: "When it comes to weight, there is so much more behind that single number staring back at you on the scale. This smart scale (which works with multiple health apps), breaks down your body’s composition and accounts for things such as your muscle, bone, and water weight. Plus, it can track up to eight users at once, so it’s great for the whole family.",
        img: "https://m.media-amazon.com/images/I/61m0p1WBw1L._AC_SL1500_.jpg",
        department:  "Fitness"

    })
    whithings_body_composition_wifi_scale.save()

    const bowlex_selecttech_552_adjustable_dumbbells = await new Items({
        name: "Bowflex SelectTech 552 Adjustable Dumbbells",
        price: "399.99",
        description: "The great thing about adjustable dumbbells is that you get the benefit of a full-weight rack without having to sacrifice space. This pair specifically adjusts from 5 to 52.5 pounds, giving you a range of weights to work with, so you can grow as you go. It also has a companion app that allows you to follow trainer-led workouts or build your own.",
        img: "https://m.media-amazon.com/images/I/71+pOdQ7iKL._AC_SL1500_.jpg",
        department:  "Fitness"

    })
    bowlex_selecttech_552_adjustable_dumbbells.save()

    const renpho_smart_body_fat_scale = await new Items({
        name: "Renpho Smart Body Fat Scale",
        price: "19.99",
        description: "For those obsessed with data, this scale tracks just about every metric out there—visceral fat, metabolic age, muscle mass, fat-free body weight, and more. It gives you a big-picture view of your body while helping to establish daily, weekly, and monthly trends. The best part: the price won’t break the bank.",
        img: "https://img.chewy.com/is/image/catalog/282303_MAIN._AC_SS600_V1628863700_.jpg",
        department:  "Fitness"

    })
    renpho_smart_body_fat_scale.save()

    const sportneer_percussive_massage_gun = await new Items({
        name: "Sportneer Percussive Massage Gun",
        price: "84.99",
        description: "This portable tool makes recovery on-the-go a breeze. There are five different speeds that make it easy to customize your preferred intensity and help unlock tired muscles. Whether your muscles are extra tight or just need a quick dose of massage-based TLC, this product is a must.",
        img: "https://m.media-amazon.com/images/I/61+R-GEQvkS._AC_SL1500_.jpg",
        department:  "Fitness"

    })
    sportneer_percussive_massage_gun.save()

    const greater_goods_digital_body_weight_bathroom_scale = await new Items({
        name: "Greater Goods Digital Body Weight Bathroom Scale",
        price: "24.99",
        description: "Sturdy, sleek, and simple, this no-frills digital scale uses four sensors to provide you with a super accurate weight reading displayed atop an easy-to-read backlit display.",
        img: "https://m.media-amazon.com/images/I/71HEeSeRwpL._SL1500_.jpg",
        department:  "Fitness"

    })
    greater_goods_digital_body_weight_bathroom_scale.save()

    const yosuda_indoor_cycling_bike = await new Items({
        name: "YOSUDA Indoor Cycling Bike",
        price: "309.99",
        description: "Forget commuting across town to your indoor cycling studio. You can spin at home with this bike while keeping track of your time, speed, distance, and calories burned via the LCD screen. The cage pedals mean you won’t have to shell out any extra cash for cycling-specific kicks, and you can break a sweat without leaving your house.",
        img: "https://m.media-amazon.com/images/I/61CCbx3dtkS._AC_SL1500_.jpg",
        department:  "Fitness"

    })
    yosuda_indoor_cycling_bike.save()

    const ativafit_glideteck_adjustable_dumbbells = await new Items({
        name: "AticaFit glideTeck Adjustable Dumbbells",
        price: "99.99",
        description: "Getting your hands on a single weight can be a great way to work on muscle imbalances via unilateral moves. With the ATIVAFIT, you can adjust up to a total of 27.5 pounds, depending on the exercise and muscle group you are currently training. And if you're able to spring for a little more cash, you can purchase one that goes up to 44 pounds.",
        img: "https://m.media-amazon.com/images/I/51imCpzKbjL._AC_SL1000_.jpg",
        department:  "Fitness"

    })
    ativafit_glideteck_adjustable_dumbbells.save()

    const schwinn_270_recumbent_exercise_bike = await new Items({
        name: "Schein 270 Recumbent Exercise Bike",
        price: "649.99",
        description: "Lower back pain doesn’t have to count you out of all physical activity. The reclining seated position of this bike eases stress in that area. It also has a ton of great features: 29 workouts, 25 resistance levels, wider foot pedals, and a padded mesh back. The easy-to-use console syncs to a multitude of wellness apps and can even be connected to VR— talk about bringing your fitness workout to life.",
        img: "https://m.media-amazon.com/images/I/61cMCvYo8mL._AC_SL1500_.jpg",
        department:  "Fitness"

    })
    schwinn_270_recumbent_exercise_bike.save()

    const simien_tennis_elbow_brace = await new Items({
        name: "Simien Tennis Elbow Brace",
        price: "19.99",
        description: "This neoprene and nylon brace comes in handy when repetitive motions from your tennis or golf game leave behind twinges (think tendinitis) in your elbow. This brace offers support and pain relief in a comfortable, cushioned wrap and you get two in a pack..",
        img: "https://m.media-amazon.com/images/I/61HfTFrQehL._AC_SL1000_.jpg",
        department:  "Fitness"

    })
    simien_tennis_elbow_brace.save()


    // BEAUTY

    const mighty_patch_original_from_hero_cosmetics = await new Items({
        name: "Mighty Patch Original from Hero Cosmetics",
        price: "12.99",
        description: "🏆 The Original Award-Winning Acne Patch – Mighty Patch is a hydrocolloid sticker that improves the look of pimples overnight without the popping. Just stick it on, get some sleep, and wake up with clearer-looking skin.",
        img: "https://m.media-amazon.com/images/I/41O3SOVUBJL._SL1080_.jpg",
        department:  "Beauty"

    })
    mighty_patch_original_from_hero_cosmetics.save()

    const neutrogena_day_night_wipes_with_makeup_remover_face_cleansing_towelettes = await new Items({
        name: "Neutrogena Day & Night Wipes with Makeup Remover Face Cleansing Towelettes",
        price: "13.99",
        description: "3-pack which includes two 25-count packs of Neutrogena Makeup Remover Cleansing Towelettes and one 25-count pack of Neutrogena Makeup Remover Night Calming Cleansing Towelettes made from sustainably sourced, 100% plant-based fibers",
        img: "https://m.media-amazon.com/images/I/71x40V-472L._SL1500_.jpg",
        department:  "Beauty"

    })
    neutrogena_day_night_wipes_with_makeup_remover_face_cleansing_towelettes.save()

    const multi_purpose_exfoliating_dermaplaning_tool = await new Items({
        name: "Multi-purpose Exfoliating Dermaplaning Tool",
        price: "5.99",
        description: "Touch-ups are quick and easy with this versatile beauty tool that shapes eyebrows, removes fine hairs, and even smoothens skin",
        img: "https://i5.walmartimages.com/asr/5cad8ab6-3977-4db8-8b7b-017c4c68701b_1.697f8902830aa6875edd21e5559fbc61.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        department:  "Beauty"

    })
    multi_purpose_exfoliating_dermaplaning_tool.save()

    const cerave_moisturizing_cream_combo_pack = await new Items({
        name: "CeraVe Moisturizing Cream and Hydrating Face Wash Trial Combo | 12oz Cream + 3oz Travel Size Cleanser",
        price: "14.99",
        description: "[ MOISTURIZING CREAM & HYDRATING FACE WASH BUNDLE ] Contains 12oz CeraVe Moisturizing Cream Plus a 3oz Travel Size of CeraVe Hydrating Facial Cleanser. [ ESSENTIAL CERAMIDES ] Making up 50% of the skin's natural barrier, ceramides are essential to maintaining healthy skin. All CeraVe products are formulated with three essential ceramides (1, 3, 6-II) to help restore the protective skin barrier.",
        img: "https://img.chewy.com/is/image/catalog/282303_MAIN._AC_SS600_V1628863700_.jpg",
        department:  "Beauty"

    })
    cerave_moisturizing_cream_combo_pack.save()

    const bio_oil_skincare = await new Items({
        name: "Bio-Oil Skincare Oil, Body Oil for Scars and Stretch Marks, Hydrates Skin, Non-Greasy, Dermatologist Recommended, Non-Comedogenic, Travel Size, 0.85 Ounces, Pack of 3, For All Skin Types, Vitamin A, E",
        price: "17.99",
        description: "IMPROVES APPEARANCE OF ACNE SCARS AND STRETCH MARKS - Clinically proven and dermatologist recommended to help repair skin damage and scars from pregnancy, surgery, injury, acne, C-section, aging, and more. Bio-Oil is non comedogenic so it can be used as an acne scar treatment for face and skin repair. So, if you have extra time to organize your skin care cabinet, keep Bio-Oil front and center as your go-to acne scar remover",
        img: "https://m.media-amazon.com/images/I/51O7DvtsDZL.jpg",
        department:  "Beauty"

    })
    bio_oil_skincare.save()

    const neutrogena_makeup_remover_facial_cleansing_towelette_singles = await new Items({
        name: "Neutrogena Makeup Remover Facial Cleansing Towelette Singles, Daily Face Wipes Remove Dirt, Oil, Makeup & Waterproof Mascara, Gentle, Individually Wrapped, 100% Plant-Based Fibers, 20 ct",
        price: "5.99",
        description: "20-count of individually wrapped pre-moistened Neutrogena Makeup Remover Face Wipe Singles. Individually wrapped facial cleansing towelettes are protected so you always have a fresh and effective wipe for complete cleansing and makeup removal",
        img: "https://m.media-amazon.com/images/I/71OMPXoZIqL._SL1500_.jpg",
        department:  "Beauty"

    })
    neutrogena_day_night_wipes_with_makeup_remover_face_cleansing_towelettes.save()

    const nizoral_anti_dandruff_shampoo = await new Items({
        name: "Nizoral Anti-Dandruff Shampoo, 7Oz",
        price: "14.99",
        description: "CLINICALLY PROVEN: Dandruff stays off your head & shoulders with this dandruff treatment shampoo that helps relieve itchy & flaky scalps. When using your regular shampoo and conditioner use twice a week between washes. Works on all hair types & gray hair.",
        img: "https://m.media-amazon.com/images/I/71+CaUj9EtL._SL1500_.jpg",
        department:  "Beauty"

    })
    nizoral_anti_dandruff_shampoo.save()

    const kiss_strip_eyelash_adhesive = await new Items({
        name: "KISS Strip Eyelash Adhesive, Clear 0.176 Oz KPLGL01",
        price: "2.99",
        description: "Secure lash extensions with ease with KISS Strip Lash Adhesive. This special adhesive delivers a strong secure hold and works with every length of eyelash extensions. The strip lash adhesive with aloe is hypoallergenic, odorless, latex and formaldehyde-free and dries clear for invisible, effortless wear. It's also waterproof, contact lens friendly and cruelty-free. Soothing aloe nurtures your lash line as it locks lashes in place, holding firm no matter how much mascara you apply or how long you wear your lash extensions. Each bottle of latex-free eyelash glue comes with an applicator brush for precise, mess-free applications. It's available in a compact 0.21 fl oz tube.",
        img: "https://m.media-amazon.com/images/I/51imCpzKbjL._AC_SL1000_.jpg",
        department:  "Beauty"

    })
    kiss_strip_eyelash_adhesive.save()

    const hair_shampoo_brush = await new Items({
        name: "Hair Shampoo Brush, HEETA Scalp Care Hair Brush with Soft Silicone Scalp Massager",
        price: "7.99",
        description: "Manual operation. Waterproof. Perfect for various hairstyles from thick to thin, short or long, and no matter wet or dry, even to groom hair of your pets",
        img: "https://m.media-amazon.com/images/I/61aQt6lRLvL._SL1500_.jpg",
        department:  "Beauty"

    })
    hair_shampoo_brush.save()

    const dove_body_wash = await new Items({
        name: "Dove Purely Pampering Body Wash for Dry Skin Coconut Butter and Cocoa Butter Effectively Washes Away Bacteria While Nourishing Your Skin 22 oz, 4 count",
        price: "24.99",
        description: "Pampers and softens skin: Dove Restoring Body Wash combines Moisture Renew Blend with nourishing coconut butter and cocoa butter for soft and smooth skin, unlike ordinary body soap or shower gel",
        img: "https://m.media-amazon.com/images/I/71xq89oUzzL._SL1500_.jpg",
        department:  "Beauty"

    })
    dove_body_wash.save()

    const items = [
        {
        name: "Dove Purely Pampering Body Wash for Dry Skin Coconut Butter and Cocoa Butter Effectively Washes Away Bacteria While Nourishing Your Skin 22 oz, 4 count",
        price: "24.99",
        description: "Pampers and softens skin: Dove Restoring Body Wash combines Moisture Renew Blend with nourishing coconut butter and cocoa butter for soft and smooth skin, unlike ordinary body soap or shower gel",
        img: "https://m.media-amazon.com/images/I/71xq89oUzzL._SL1500_.jpg",
        department:  "Beauty"
    },
    {
        name: "Hair Shampoo Brush, HEETA Scalp Care Hair Brush with Soft Silicone Scalp Massager",
        price: "7.99",
        description: "Manual operation. Waterproof. Perfect for various hairstyles from thick to thin, short or long,   and no matter wet or dry, even to groom hair of your pets",
        img: "https://m.media-amazon.com/images/I/61aQt6lRLvL._SL1500_.jpg",
        department:  "Beauty"
    },
    {
        name: "KISS Strip Eyelash Adhesive, Clear 0.176 Oz KPLGL01",
        price: "2.99",
        description: "Secure lash extensions with ease with KISS Strip Lash Adhesive. This special adhesive delivers a strong secure hold and works with every length of eyelash extensions. The strip lash adhesive with aloe is hypoallergenic, odorless, latex and formaldehyde-free and dries clear for invisible, effortless wear. It's also waterproof, contact lens friendly and cruelty-free. Soothing aloe nurtures your lash line as it locks lashes in place, holding firm no matter how much mascara you apply or how long you wear your lash extensions. Each bottle of latex-free eyelash glue comes with an applicator brush for precise, mess-free applications. It's available in a compact 0.21 fl oz tube.",
        img: "https://m.media-amazon.com/images/I/51imCpzKbjL._AC_SL1000_.jpg",
        department: "Beauty"
    },
    {
        name: "Nizoral Anti-Dandruff Shampoo, 7Oz",
        price: "14.99",
        description: "CLINICALLY PROVEN: Dandruff stays off your head & shoulders with this dandruff treatment shampoo that helps relieve itchy & flaky scalps. When using your regular shampoo and conditioner use twice a week between washes. Works on all hair types & gray hair.",
        img: "https://m.media-amazon.com/images/I/71+CaUj9EtL._SL1500_.jpg",
        department:  "Beauty"
    },
    {
        name: "Neutrogena Makeup Remover Facial Cleansing Towelette Singles, Daily Face Wipes Remove Dirt, Oil, Makeup & Waterproof Mascara, Gentle, Individually Wrapped, 100% Plant-Based Fibers, 20 ct",
        price: "5.99",
        description: "20-count of individually wrapped pre-moistened Neutrogena Makeup Remover Face Wipe Singles. Individually wrapped facial cleansing towelettes are protected so you always have a fresh and effective wipe for complete cleansing and makeup removal",
        img: "https://m.media-amazon.com/images/I/71OMPXoZIqL._SL1500_.jpg",
        department:  "Beauty"
    },
    {
        name: "Bio-Oil Skincare Oil, Body Oil for Scars and Stretch Marks, Hydrates Skin, Non-Greasy, Dermatologist Recommended, Non-Comedogenic, Travel Size, 0.85 Ounces, Pack of 3, For All Skin Types, Vitamin A, E",
        price: "17.99",
        description: "IMPROVES APPEARANCE OF ACNE SCARS AND STRETCH MARKS - Clinically proven and dermatologist recommended to help repair skin damage and scars from pregnancy, surgery, injury, acne, C-section, aging, and more. Bio-Oil is non comedogenic so it can be used as an acne scar treatment for face and skin repair. So, if you have extra time to organize your skin care cabinet, keep Bio-Oil front and center as your go-to acne scar remover",
        img: "https://m.media-amazon.com/images/I/51O7DvtsDZL.jpg",
        department:  "Beauty"
    },
    {
        name: "CeraVe Moisturizing Cream and Hydrating Face Wash Trial Combo | 12oz Cream + 3oz Travel Size Cleanser",
        price: "14.99",
        description: "[ MOISTURIZING CREAM & HYDRATING FACE WASH BUNDLE ] Contains 12oz CeraVe Moisturizing Cream Plus a 3oz Travel Size of CeraVe Hydrating Facial Cleanser. [ ESSENTIAL CERAMIDES ] Making up 50% of the skin's natural barrier, ceramides are essential to maintaining healthy skin. All CeraVe products are formulated with three essential ceramides (1, 3, 6-II) to help restore the protective skin barrier.",
        img: "https://img.chewy.com/is/image/catalog/282303_MAIN._AC_SS600_V1628863700_.jpg",
        department:  "Beauty"
    },
    {
        name: "Multi-purpose Exfoliating Dermaplaning Tool",
        price: "5.99",
        description: "Touch-ups are quick and easy with this versatile beauty tool that shapes eyebrows, removes fine hairs, and even smoothens skin",
        img: "https://i5.walmartimages.com/asr/5cad8ab6-3977-4db8-8b7b-017c4c68701b_1.697f8902830aa6875edd21e5559fbc61.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        department:  "Beauty"
    },
    {
        name: "Neutrogena Day & Night Wipes with Makeup Remover Face Cleansing Towelettes",
        price: "13.99",
        description: "3-pack which includes two 25-count packs of Neutrogena Makeup Remover Cleansing Towelettes and one 25-count pack of Neutrogena Makeup Remover Night Calming Cleansing Towelettes made from sustainably sourced, 100% plant-based fibers",
        img: "https://m.media-amazon.com/images/I/71x40V-472L._SL1500_.jpg",
        department:  "Beauty"
    },
    {
        name: "Mighty Patch Original from Hero Cosmetics",
        price: "12.99",
        description: "🏆 The Original Award-Winning Acne Patch – Mighty Patch is a hydrocolloid sticker that improves the look of pimples overnight without the popping. Just stick it on, get some sleep, and wake up with clearer-looking skin.",
        img: "https://m.media-amazon.com/images/I/41O3SOVUBJL._SL1080_.jpg",
        department:  "Beauty"
    },
    {
        name: "Simien Tennis Elbow Brace",
        price: "19.99",
        description: "This neoprene and nylon brace comes in handy when repetitive motions from your tennis or golf game leave behind twinges (think tendinitis) in your elbow. This brace offers support and pain relief in a comfortable, cushioned wrap and you get two in a pack..",
        img: "https://m.media-amazon.com/images/I/61HfTFrQehL._AC_SL1000_.jpg",
        department:  "Fitness"
    },
    {
        name: "Schein 270 Recumbent Exercise Bike",
        price: "649.99",
        description: "Lower back pain doesn’t have to count you out of all physical activity. The reclining seated position of this bike eases stress in that area. It also has a ton of great features: 29 workouts, 25 resistance levels, wider foot pedals, and a padded mesh back. The easy-to-use console syncs to a multitude of wellness apps and can even be connected to VR— talk about bringing your fitness workout to life.",
        img: "https://m.media-amazon.com/images/I/61cMCvYo8mL._AC_SL1500_.jpg",
        department:  "Fitness"
    },
    {
        name: "AticaFit glideTeck Adjustable Dumbbells",
        price: "99.99",
        description: "Getting your hands on a single weight can be a great way to work on muscle imbalances via unilateral moves. With the ATIVAFIT, you can adjust up to a total of 27.5 pounds, depending on the exercise and muscle group you are currently training. And if you're able to spring for a little more cash, you can purchase one that goes up to 44 pounds.",
        img: "https://m.media-amazon.com/images/I/51imCpzKbjL._AC_SL1000_.jpg",
        department:  "Fitness"
    },
    {
        name: "YOSUDA Indoor Cycling Bike",
        price: "309.99",
        description: "Forget commuting across town to your indoor cycling studio. You can spin at home with this bike while keeping track of your time, speed, distance, and calories burned via the LCD screen. The cage pedals mean you won’t have to shell out any extra cash for cycling-specific kicks, and you can break a sweat without leaving your house.",
        img: "https://m.media-amazon.com/images/I/61CCbx3dtkS._AC_SL1500_.jpg",
        department:  "Fitness"
    },
    {
        name: "Greater Goods Digital Body Weight Bathroom Scale",
        price: "24.99",
        description: "Sturdy, sleek, and simple, this no-frills digital scale uses four sensors to provide you with a super accurate weight reading displayed atop an easy-to-read backlit display.",
        img: "https://m.media-amazon.com/images/I/71HEeSeRwpL._SL1500_.jpg",
        department:  "Fitness"
    },
    {
        name: "Sportneer Percussive Massage Gun",
        price: "84.99",
        description: "This portable tool makes recovery on-the-go a breeze. There are five different speeds that make it easy to customize your preferred intensity and help unlock tired muscles. Whether your muscles are extra tight or just need a quick dose of massage-based TLC, this product is a must.",
        img: "https://m.media-amazon.com/images/I/61+R-GEQvkS._AC_SL1500_.jpg",
        department:  "Fitness"
    },
    {
        name: "Renpho Smart Body Fat Scale",
        price: "19.99",
        description: "For those obsessed with data, this scale tracks just about every metric out there—visceral fat, metabolic age, muscle mass, fat-free body weight, and more. It gives you a big-picture view of your body while helping to establish daily, weekly, and monthly trends. The best part: the price won’t break the bank.",
        img: "https://img.chewy.com/is/image/catalog/282303_MAIN._AC_SS600_V1628863700_.jpg",
        department:  "Fitness"
    },
    {
        name: "Bowflex SelectTech 552 Adjustable Dumbbells",
        price: "399.99",
        description: "The great thing about adjustable dumbbells is that you get the benefit of a full-weight rack without having to sacrifice space. This pair specifically adjusts from 5 to 52.5 pounds, giving you a range of weights to work with, so you can grow as you go. It also has a companion app that allows you to follow trainer-led workouts or build your own.",
        img: "https://m.media-amazon.com/images/I/71+pOdQ7iKL._AC_SL1500_.jpg",
        department:  "Fitness"
    },
    {
        name: "Withings Body + Body Composition Wi-Fi Scale",
        price: "99",
        description: "When it comes to weight, there is so much more behind that single number staring back at you on the scale. This smart scale (which works with multiple health apps), breaks down your body’s composition and accounts for things such as your muscle, bone, and water weight. Plus, it can track up to eight users at once, so it’s great for the whole family.",
        img: "https://m.media-amazon.com/images/I/61m0p1WBw1L._AC_SL1500_.jpg",
        department:  "Fitness"
    },
    {
        name: "VYBE Percussion Massage Gun Pro Model",
        price: "199.99",
        description: "Aching muscles are no match for this low-noise massage gun. It relieves sore muscles with a combination of eight unique head attachments that offer targeted therapy and nine speeds, boasting 1800-3400 strokes per minute. Even better, its battery can handle up to three hours of continuous use.",
        img: "https://m.media-amazon.com/images/I/71w9J2hphHL._AC_SL1500_.jpg",
        department:  "Fitness"
    },
    {
        name: " ChomChom Roller",
        price: "24.99",
        description: "When a lint roller just won't cut it, you need the ChomChom Roller. This is another TikTok favorite that’s absurdly satisfying to use, simply because it’s highly effective at picking up Every. Last. Pet. Hair. It's more of an investment than some of the other cleaning products on our list, but there are no adhesive strips or batteries to replace, so you’ll have it for quite a while (provided you clean out its hair trap on the regular).",
        img: "https://m.media-amazon.com/images/I/81Ju+RATjOL._AC_SL1500_.jpg",
        department:  "Cleaning"
    },
    {
        name: "Natural Care Flea and Tick Carpet Powder",
        price: "10.99",
        description: "With the warmer weather approaching, the chance of bringing ticks into the house is going to increase—especially if you have curious four-legged friends. This all-natural powder kills these pests (and their flea cousins), making your home safer for your family. It also pulls double deodorizing duty.",
        img: "https://img.chewy.com/is/image/catalog/130102_MAIN._AC_SL1500_V1632177979_.jpg",
        department:  "Cleaning"
    },
    {
        name: "Nature’s Miracle Stain and Odor Remover Spray",
        price: "10.99",
        description: "What makes this cleaner one of the best around for pet accidents is its enzymatic formula. It not only destroys the smell of urine and feces but it supposedly prevents animals from going back to that spot again for repeat performances. This one's for dogs, but you can also get it for cats. A word to the wise? Let it soak in for the full recommended time for maximum odor-busting power.",
        img: "https://img.chewy.com/is/image/catalog/115592_MAIN._AC_SL1500_V1490737692_.jpg",
        department:  "Cleaning"
    },
    {
        name: "Bissell Little Green Carpet Cleaner",
        price: "109.99",
        description: "Stained carpets, couches and car seats are no match for the little portable cleaner that's gone viral on TikTok. All you have to do is fill its 48-ounce tank with water and the Spot and Stain cleaning formula, then grab the suction handle and start swiping your upholstery and rugs. Seeing the trail of brighter, lighter fabric after each pass will both delight you and make you question your hygiene—but we think it's totally worth the 'ew' factor. It comes with multiple tools, including a self-cleaning hose tool, and, as an added bonus, a portion of the proceeds from your purchase will go to help save pets in need through the Bissell Pets Foundation.",
        img: "https://m.media-amazon.com/images/I/715shoBi24L._AC_SL1500_.jpg",
        department:  "Cleaning"
    },
    {
        name: "Earth Brite Clay Cleaner",
        price: "15.95",
        description: "Dirt won't stand a chance against this white clay cleanser that is made with 100 percent natural and non-toxic ingredients. It works on practically every surface you can think of, reportedly without leaving streaks. It comes with its own little scrubbing brush and it's got a light, fresh citrus scent that Amazon shoppers say is not overwhelming. It's also cruelty-free for animal lovers.",
        img: "https://m.media-amazon.com/images/I/61VLz+EL-4L._AC_SL1010_.jpg",
        department:  "Cleaning"
    },
    {
        name: "Puracay Multi-Purpose Cleaner",
        price: "12.99",
        description: "This vegan and cruelty-free all-purpose cleaner will be suitable for nearly any surface of your home thanks to its plant-based formula containing organic lemongrass. If that wasn't appealing enough, it's also gluten-free, comes in an environmentally-friendly biodegradable bottle and is hypoallergenic, so you can achieve a spotless home without worrying about breaking out in a rash caused by harsh chemicals.",
        img: "https://m.media-amazon.com/images/I/61vDC8eZ4oS._AC_SL1500_.jpg",
        department:  "Cleaning"
    },
    {
        name: "Carbona Pro Care Oxy-Powered Outdoor Cleaner",
        price: "9.98",
        description: "Spring has finally arrived, which means you'll soon be spending more time in your backyard...which means you'll soon be noticing just how freaking fast your furniture starts looking muddy and moldy. That’s where Carbona’s outdoor cleaner comes in: The dispensing top features a built-in scrubbing brush, so you can easily spot-treat stains, mildew and even bird poop. Plus, it works on everything from outdoor rugs and cushions to window awnings and wood and rattan furniture.",
        img: "https://img.chewy.com/is/image/catalog/282303_MAIN._AC_SS600_V1628863700_.jpg",
        department:  "Cleaning"
    },
    {
        name: "All-Purpose Compostable Cleaning Wipes",
        price: "7",
        description: "Messes need method. These method All-Purpose Compostable Cleaning Wipes can clean up all types of surfaces, including stone, wood, counters, glass, tile, and more, making them a great go-to for household spills and in-between cleans. Plus, they’re biodegradable and are made in the US from corn, coconut, and other recyclable solvents. These method wipes use plant-based cleaning power to cut through grease, grime, dirt, and dust. From bachelors who live alone to parents with a full house, everyone can appreciate the usefulness of these method All-Purpose Compostable Cleaning Wipes. Choose from Lime and Sea Salt, Pink Grapefruit, and French Lavender.",
        img: "https://m.media-amazon.com/images/I/619+lZak6qS._AC_SL1300_.jpg",
        department:  "Cleaning"
    },
    {
        name: "Safely Clean Freak Kit",
        price: "52",
        description: "This amazing home cleaning kit has everything you need to keep you and your home: squeaky clean, smelling fresh and looking like you’ve really got it together.",
        img: "https://cdn.shopify.com/s/files/1/0548/8253/3584/products/safely-clean-freak-kit-1_1024x.jpg?v=1623389649",
        department:  "Cleaning"
    },
    {
        name: "Safely Clean Freak Kit",
        price: "52",
        description: "This amazing home cleaning kit has everything you need to keep you and your home: squeaky clean, smelling fresh and looking like you’ve really got it together.",
        img: "https://cdn.shopify.com/s/files/1/0548/8253/3584/products/safely-clean-freak-kit-1_1024x.jpg?v=1623389649",
        department:  "Cleaning"
    }



    ]

    await Items.insertMany(items)
    console.log('Items Created')

}
const run = async () => {
    await main()
    db.close()
}

run()