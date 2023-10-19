INSERT INTO users (username, password, email, image_profile)
VALUES ('testuser',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'test@test.com',
        'image'),
        ('testuser2',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'test2@test2.com',
        'image2');

-- cateogories 
INSERT INTO quiz_category (category)
VALUES ('plastic'),
       ('fossil-fuels'),
       ('deforestation'),
       ('agriculture'),
       ('transportation'),
       ('food-production');

-- questions for cateogory: plastic
INSERT INTO questions (question, choice_1, choice_2, choice_3, choice_4, complexity)
VALUES
(
    'What is the main link between plastics and climate change?',
    '{"answer": "The significant greenhouse gas emissions generated during their production and conversion.", "isCorrect": true}',
    '{"answer": "There is no link between them.", "isCorrect": false}',
    '{"answer": "The recycling of plastics, which significantly reduces greenhouse gas emissions.", "isCorrect": false}',
    '{"answer": "Incineration of plastics has a cooling effect on the environment, mitigating global warming.", "isCorrect": false}',
    'easy'
),
(
    'What percentage of total greenhouse gas (GHG) emissions can be attributed to the production and conversion stage of plastics'' lifecycle?',
    '{"answer": "4%", "isCorrect": false}',
    '{"answer": "90%", "isCorrect": true}',
    '{"answer": "20%", "isCorrect": false}',
    '{"answer": "50%", "isCorrect": false}',
    'easy'
),
(
    'What is the most common source of plastics production?',
    '{"answer": "Recycled plastics", "isCorrect": false}',
    '{"answer": "Biobased plastics", "isCorrect": false}',
    '{"answer": "Fossil fuels", "isCorrect": true}',
    '{"answer": "Natural resources", "isCorrect": false}',
    'easy'
),
(
    'Which disposal option for plastics has the least greenhouse gas (GHG) intensity?',
    '{"answer": "Open burn", "isCorrect": false}',
    '{"answer": "Incineration", "isCorrect": false}',
    '{"answer": "Landfilling", "isCorrect": true}',
    '{"answer": "Composting", "isCorrect": false}',
    'easy'
),
(
    'What is the most effective current solution to address plastic-related issues?',
    '{"answer": "Using compostable or biodegradable plastic", "isCorrect": false}',
    '{"answer": "Cleaning the oceans from plastics", "isCorrect": false}',
    '{"answer": "Burning plastic", "isCorrect": false}',
    '{"answer": "Stopping plastic at the source", "isCorrect": true}',
    'easy'
),
(
    'What are the implications of increasing the demand for biobased plastics?',
    '{"answer": "Decrease in greenhouse gas (GHG) emissions", "isCorrect": true}',
    '{"answer": "Increase in GHG emissions", "isCorrect": false}',
    '{"answer": "No impact on GHG emissions", "isCorrect": false}',
    '{"answer": "Shift to fossil-based plastics", "isCorrect": false}',
    'medium'
),
(
    'How much plastic waste is recycled approximately?',
    '{"answer": "Approximately 70% of plastic waste is effectively recycled, minimizing its environmental impact.", "isCorrect": false}',
    '{"answer": "Less than 10% is recycled. About 79% of plastic waste ends up in landfills or nature, and some 12% is incinerated.", "isCorrect": true}',
    '{"answer": "About 50% of plastic waste undergoes successful recycling, reducing its presence in landfills and nature.", "isCorrect": false}',
    '{"answer": "About 20% of plastic waste is efficiently recycled, significantly reducing the burden on landfills and the environment.", "isCorrect": false}',
    'medium'
),
(
    'What are the environmental implications of incinerating plastic waste?',
    '{"answer": "Decreased air pollution", "isCorrect": false}',
    '{"answer": "Reduced greenhouse gas emissions", "isCorrect": false}',
    '{"answer": "Release of toxic chemicals and dioxins", "isCorrect": true}',
    '{"answer": "Improved soil quality", "isCorrect": false}',
    'medium'
),
(
    'What are bioplastics, and some of their advantages?',
    '{"answer": "Bioplastics are derived from fossil fuels and are non-biodegradable, making them similar to conventional plastics.", "isCorrect": false}',
    '{"answer": "Bioplastics are made from non-renewable resources, contributing to environmental issues.", "isCorrect": false}',
    '{"answer": "Bioplastics are produced using renewable materials and are biodegradable or compostable, reducing their environmental impact.", "isCorrect": true}',
    '{"answer": "Bioplastics have no advantages over traditional plastics and are not eco-friendly alternatives.", "isCorrect": false}',
    'medium'
),
(
    'How can microplastic degradation contribute to climate change?',
    '{"answer": "It has no impact on climate change since the particles are too small to release gases.", "isCorrect": false}',
    '{"answer": "It absorbs greenhouse gases from the atmosphere, acting as a climate change mitigator.", "isCorrect": false}',
    '{"answer": "It releases methane and carbon dioxide, both potent greenhouse gases, into the environment, thus exacerbating climate change.", "isCorrect": true}',
    '{"answer": "It primarily produces oxygen, which counteracts climate change by increasing oxygen levels in the atmosphere.", "isCorrect": false}',
    'medium'
),
(
    'How is ethane used in the production of plastic?',
    '{"answer": "Ethane is used to produce ethylene, which is the building block of most plastics.", "isCorrect": true}',
    '{"answer": "Ethane is used to produce propylene, which is used to make some types of plastic, such as polypropylene and PVC.", "isCorrect": false}',
    '{"answer": "Ethane is used at the ending of plastic production to increase its durability.", "isCorrect": false}',
    '{"answer": "Ethane is used as a solvent in the plastics production process.", "isCorrect": false}',
    'hard'
),
(
    'What are the consequences of plastic pollution for the environment, in terms of marine life?',
    '{"answer": "Plastic pollution can harm marine life by entangling them, causing them to suffocate or starve.", "isCorrect": false}',
    '{"answer": "Plastic pollution can break down into microplastics, which can be ingested by marine life and cause health problems.", "isCorrect": false}',
    '{"answer": "Plastic pollution can damage coral reefs and other marine habitats.", "isCorrect": false}',
    '{"answer": "All of the above", "isCorrect": true}',
    'hard'
),
(
    'At what temperature does the leaching of microplastics from plastic items typically begin in a dishwasher?',
    '{"answer": "It depends on the type of plastic and the chemical composition, typically below 30°C (86°F).", "isCorrect": false}',
    '{"answer": "It depends on the type of plastic and the chemical composition, typically around 40°C (104°F).", "isCorrect": false}',
    '{"answer": "It depends on the type of plastic and the chemical composition, typically around 60°C (140°F).", "isCorrect": true}',
    '{"answer": "It depends on the type of plastic and the chemical composition, typically Above 90°C (194°F).", "isCorrect": false}',
    'hard'
),
(
    'Is the color of plastic a relevant factor in recycling?',
    '{"answer": "Yes, the infrared technology used by recycling facilities to sort plastics cannot “see” the color black, hence they are less recycled.", "isCorrect": true}',
    '{"answer": "No, the color of plastic has no impact on recycling.", "isCorrect": false}',
    '{"answer": "Yes, black plastics can be recycled faster than other colors.", "isCorrect": false}',
    '{"answer": "No, plastic color is only relevant in the incineration process.", "isCorrect": false}',
    'hard'
),
(
    'What are the two primary methods of Organic Recycling for biodegradable plastics?',
    '{"answer": "Incineration and landfilling", "isCorrect": false}',
    '{"answer": "Composting and bio gasification", "isCorrect": true}',
    '{"answer": "Recycling and open burning", "isCorrect": false}',
    '{"answer": "Landfilling and ocean disposal", "isCorrect": false}',
    'hard'
);


INSERT INTO category_questions (cat_id, question_id)
VALUES (1,1),
       (1,2),
       (1,3),
       (1,4),
       (1,5),
       (1,6),
       (1,7),
       (1,8),
       (1,9),
       (1,10),
       (1,11),
       (1,12),
       (1,13),
       (1,14),
       (1,15);

  

-- questions for cateogory: fossil fuels
INSERT INTO questions (question, choice_1, choice_2, choice_3, choice_4, complexity)
VALUES
(
    'How do fossil fuels affect global warming?',
    '{"answer": "Burning fossil fuels releases long-lasting greenhouse gases, exacerbating the greenhouse effect and raising global temperatures.", "isCorrect": true}',
    '{"answer": "Fossil fuels are not related to global warming and have no impact on the environment.", "isCorrect": false}',
    '{"answer": "Burning fossil fuels reduces global temperatures, preventing global warming.", "isCorrect": false}',
    '{"answer": "Fossil fuels release some gases, contributing to a cooling effect on the Earth''s climate.", "isCorrect": false}',
    'easy'
),
(
    'Which explanation better describes the greenhouse effect?',
    '{"answer": "The greenhouse effect is caused by the depletion of ozone layer and results in colder temperatures on Earth.", "isCorrect": false}',
    '{"answer": "The greenhouse effect is a phenomenon where Earth''s atmosphere acts like a mirror, reflecting heat away into space.", "isCorrect": false}',
    '{"answer": "The greenhouse effect is the process through which heat is trapped near Earth''s surface by substances known as greenhouse gases, warming the planet", "isCorrect": true}',
    '{"answer": "The greenhouse effect is primarily influenced by the excessive use of solar panels, resulting in a warming effect on the planet.", "isCorrect": false}',
    'easy'
),
(
    'Which of the following gas doesn''t contribute to the Greenhouse Effect?',
    '{"answer": "Methane (CH4)", "isCorrect": false}',
    '{"answer": "Carbon dioxide (CO2)", "isCorrect": false}',
    '{"answer": "Nitrogen (N2)", "isCorrect": true}',
    '{"answer": "Nitrous oxide (N2O)", "isCorrect": false}',
    'easy'
),
(
    'How much did the global surface temperature rise from 1850-1900 to 2011-2020 approximately?',
    '{"answer": "The global surface temperature remained unchanged during that time.", "isCorrect": false}',
    '{"answer": "The global surface temperature increased by 3.5°C.", "isCorrect": false}',
    '{"answer": "The global surface temperature increased by 5.5°F.", "isCorrect": false}',
    '{"answer": "The global surface temperature increased by 1.1°F.", "isCorrect": true}',
    'easy'
),
(
    'Which of the following is a clean source of energy with a minimal environmental impact?',
    '{"answer": "Wind Power", "isCorrect": false}',
    '{"answer": "Solar Power", "isCorrect": false}',
    '{"answer": "Geothermal Power", "isCorrect": false}',
    '{"answer": "All of the above", "isCorrect": true}',
    'easy'
),
(
    'What is the impact of fossil fuels on the state of the waters?',
    '{"answer": "Fossil fuels have no impact on the state of the waters.", "isCorrect": false}',
    '{"answer": "They increase their purity and support marine life.", "isCorrect": false}',
    '{"answer": "They lead to a decrease in water temperature, benefiting aquatic ecosystems.", "isCorrect": false}',
    '{"answer": "As oceans absorb carbon emissions, they acidify, depleting essential calcium carbonate and endangering marine biodiversity.", "isCorrect": true}',
    'medium'
),
(
    'What are the two key characteristics that determine the impact of different greenhouse gases on the climate?',
    '{"answer": "The length of time they remain in the atmosphere and their ability to absorb energy.", "isCorrect": true}',
    '{"answer": "Their atomic number and chemical reactivity.", "isCorrect": false}',
    '{"answer": "Their color and density.", "isCorrect": false}',
    '{"answer": "Their odor and taste.", "isCorrect": false}',
    'medium'
),
(
    'Which material is the largest contributor to global warming after carbon dioxide (CO2) in terms of human activities?',
    '{"answer": "Water vapor (H2O)", "isCorrect": false}',
    '{"answer": "Methane (CH4)", "isCorrect": true}',
    '{"answer": "Nitrous oxide (N2O)", "isCorrect": false}',
    '{"answer": "Helium (He)", "isCorrect": false}',
    'medium'
),
(
    'Which statement is correct about renewable energy like wind and solar power?',
    '{"answer": "Renewable energy is unrelated to carbon dioxide (CO2) emissions and is neither better nor worse than fossil fuels in this aspect.", "isCorrect": false}',
    '{"answer": "Renewable energy produces more carbon dioxide (CO2) and harmful greenhouse gases compared to fossil fuels.", "isCorrect": false}',
    '{"answer": "Renewable energy and fossil fuels produce the same amount of carbon dioxide (CO2) in this regard ", "isCorrect": false}',
    '{"answer": "Renewable energy produces far less carbon dioxide (CO2), other harmful greenhouse gases and pollutants compared to fossil fuels.", "isCorrect": true}',
    'medium'
),
(
    'How geothermal power plants works?',
    '{"answer": "They rely on the combustion of coal to produce electricity.", "isCorrect": false}',
    '{"answer": "They extract oil from deep underground in a clean way and use it for electricity generation.", "isCorrect": false}',
    '{"answer": "They use hot water from inside the Earth to generate steam, which turns a turbine for electricity generation.", "isCorrect": true}',
    '{"answer": "They depend on the burning of wood for electricity generation.", "isCorrect": false}',
    'medium'
),
(
    'Are all carbon-free energy sources (the energy produced by a resource that generates no carbon emissions) also renewable?',
    '{"answer": "No, biomasses & biowaste are carbon-free but not renewable.", "isCorrect": false}',
    '{"answer": "No, nuclear energy is an example of carbon free which is not renewable.", "isCorrect": true}',
    '{"answer": "Yes, there is no difference between them.", "isCorrect": false}',
    '{"answer": "No, natural gas can be carbon-free but it’s not renewable.", "isCorrect": false}',
    'hard'
),
(
    'Are there any potential hazardous materials associated with the production of solar energy?',
    '{"answer": "No, hazardous materials are only associated with traditional energy sources, not solar energy.", "isCorrect": false}',
    '{"answer": "Yes, solar energy is entirely dependent on dangerous substances that have harmful effects on the environment.", "isCorrect": false}',
    '{"answer": "No, hazardous materials are associated with certain energy sources like wind and water, but not with solar energy.", "isCorrect": false}',
    '{"answer": "Yes, some hazardous materials like silicon tetrachloride are used in the production of solar panels, posing environmental risks.", "isCorrect": true}',
    'hard'
),
(
    'What are some common types of biofuels used today?',
    '{"answer": "Biodiesel", "isCorrect": false}',
    '{"answer": "Ethanol", "isCorrect": false}',
    '{"answer": "Kerosene", "isCorrect": false}',
    '{"answer": "Options 1 and 2", "isCorrect": true}',
    'hard'
),
(
    'How is electricity from solar energy produced?',
    '{"answer": "Solar panels, typically composed of semiconductor materials such as silicon, which release electrons and generate electric charges when exposed to sunlight photons.", "isCorrect": true}',
    '{"answer": "Solar panels produce electricity through chemical reactions within their cells.", "isCorrect": false}',
    '{"answer": "Solar panels generate electricity by harnessing the kinetic energy of sunlight in motion.", "isCorrect": false}',
    '{"answer": "Solar planes generate electricity by harnessing the gravitational potential energy of sunlight.", "isCorrect": false}',
    'hard'
),
(
    'What is the theoretical maximum efficiency of a wind turbine?',
    '{"answer": "It is ~40%, also known as the Poisson Ratio.", "isCorrect": false}',
    '{"answer": "It is ~76%, also known as the Betz Limit.", "isCorrect": false}',
    '{"answer": "It is ~59%, also known as the Betz Limit.", "isCorrect": true}',
    '{"answer": "It is ~85%, also known as the Poisson Ratio.", "isCorrect": false}',
    'hard'
);


INSERT INTO category_questions (cat_id, question_id)
VALUES (2,16),
       (2,17),
       (2,18),
       (2,19),
       (2,20),
       (2,21),
       (2,22),
       (2,23),
       (2,24),
       (2,25),
       (2,26),
       (2,27),
       (2,28),
       (2,29),
       (2,30);


-- questions for cateogory: deforestation
INSERT INTO questions (question, choice_1, choice_2, choice_3, choice_4, complexity)
VALUES
(
    'What is the role of deforestation in climate change?',
    '{"answer": "Trees absorb and store carbon dioxide. If forests are cleared, or even disturbed, they release carbon dioxide and other greenhouse gases.", "isCorrect": true}',
    '{"answer": "Deforestation has no impact on climate change as it only affects the local environment.", "isCorrect": false}',
    '{"answer": "Deforestation results in the cooling of the planet as it reduces the presence of carbon dioxide in the atmosphere.", "isCorrect": false}',
    '{"answer": "Deforestation leads to an increase in forested areas, which helps mitigate climate change by promoting carbon sequestration.", "isCorrect": false}',
    'easy'
),
(
    'What is the approximate percentage of global warming attributed to forest loss and damage?',
    '{"answer": "10%", "isCorrect": false}',
    '{"answer": "20%", "isCorrect": true}',
    '{"answer": "3%", "isCorrect": false}',
    '{"answer": "30%", "isCorrect": false}',
    'easy'
),
(
    'What is the most important driver of deforestation globally?',
    '{"answer": "Wildfires", "isCorrect": false}',
    '{"answer": "Urbanization", "isCorrect": false}',
    '{"answer": "Agricultural commodities", "isCorrect": true}',
    '{"answer": "Wildlife conservation efforts", "isCorrect": false}',
    'easy'
),
(
    'Which method helps in reversing forest losses?',
    '{"answer": "The natural regeneration of forest ecosystems", "isCorrect": false}',
    '{"answer": "afforestation", "isCorrect": false}',
    '{"answer": "reforestation", "isCorrect": false}',
    '{"answer": "All of the above", "isCorrect": true}',
    'easy'
),
(
    'What are some ways we can reduce our own forest footprints?',
    '{"answer": "Using less paper", "isCorrect": false}',
    '{"answer": "Purchasing second-hand furniture", "isCorrect": false}',
    '{"answer": "Buying more certified wood products", "isCorrect": false}',
    '{"answer": "All of the above", "isCorrect": true}',
    'easy'
),
(
    'What does degradation mean in the context of deforestation?',
    '{"answer": "Degradation refers to the growth and improvement of forested areas.", "isCorrect": false}',
    '{"answer": "Degradation means the complete removal of forests and the restoration of cleared land.", "isCorrect": false}',
    '{"answer": "Degradation involves activities that enhance the carbon storage capacity of forests, such as planting more trees.", "isCorrect": false}',
    '{"answer": "Activities like selective logging, thinning, burning that don''t fully clear the forest canopy but reduce their carbon storage capacity.", "isCorrect": true}',
    'medium'
),
(
    'What type of forest experiences approximately 96% of global deforestation?',
    '{"answer": "Tropical forest", "isCorrect": true}',
    '{"answer": "Temperate forest", "isCorrect": false}',
    '{"answer": "Boreal forest", "isCorrect": false}',
    '{"answer": "None of the above", "isCorrect": false}',
    'medium'
),
(
    'What is the effect of deforestation on the water cycle?',
    '{"answer": "Deforestation has no impact on the water cycle.", "isCorrect": false}',
    '{"answer": "Deforestation accelerates the water cycle, increasing rainfall.", "isCorrect": false}',
    '{"answer": "Deforestation improves the water cycle by facilitating the replenishment of groundwater.", "isCorrect": false}',
    '{"answer": "It disrupts the natural water cycle by lowering the amount of water that comes from a process called evapotranspiration.", "isCorrect": true}',
    'medium'
),
(
    'What is the effect of deforestation on soil?',
    '{"answer": "Deforestation improves soil quality by reducing root systems.", "isCorrect": false}',
    '{"answer": "Deforestation means losing the trees'' roots in the soil which are key to stopping soil erosion.", "isCorrect": true}',
    '{"answer": "Deforestation has no impact on soil.", "isCorrect": false}',
    '{"answer": "Deforestation leads to increased organic matter in the soil.", "isCorrect": false}',
    'medium'
),
(
    'Which of the following options is not one of the primary causes of deforestation?',
    '{"answer": "Palm oil", "isCorrect": false}',
    '{"answer": "Cattle ranching", "isCorrect": false}',
    '{"answer": "Commercial logging", "isCorrect": false}',
    '{"answer": "Natural disasters", "isCorrect": true}',
    'medium'
),
(
    'What is the relation between deforestation and mining industry?',
    '{"answer": "Mining involves cutting trees for pit excavation, road construction, and infrastructure development, contributing to deforestation.", "isCorrect": true}',
    '{"answer": "Deforestation and the mining industry have no connection.", "isCorrect": false}',
    '{"answer": "Deforestation is primarily caused by agriculture, not mining.", "isCorrect": false}',
    '{"answer": "Mining activities actually promote forest conservation.", "isCorrect": false}',
    'hard'
),
(
    'What is the definition of afforestation, and how does it contribute to environmental conservation?',
    '{"answer": "Afforestation is a term used in urban planning to refer to green space allocation.", "isCorrect": false}',
    '{"answer": "Afforestation means cutting down unnecessary forests to make space for agriculture.", "isCorrect": false}',
    '{"answer": "Afforestation is a practice that depletes natural resources and harms the environment.", "isCorrect": false}',
    '{"answer": "Afforestation means planting forests where they have been absent or missing for an extended period.", "isCorrect": true}',
    'hard'
),
(
    'What is the primary impact of deforestation on desertification?',
    '{"answer": "Deforestation has no impact on desertification.", "isCorrect": false}',
    '{"answer": "Deforestation disrupts the crucial role of trees in soil stability, causing desertification as the topsoil is carried away by wind and water.", "isCorrect": true}',
    '{"answer": "Desertification is only a result of excessive irrigation not deforestation.", "isCorrect": false}',
    '{"answer": "Deforestation actually prevents desertification.", "isCorrect": false}',
    'hard'
),
(
    'How deforestation and wildfires are related?',
    '{"answer": "Deforestation reduces humidity, leading to drying forests, which increases fire damage.", "isCorrect": true}',
    '{"answer": "Deforestation has no connection to wildfires.", "isCorrect": false}',
    '{"answer": "Wildfires are solely influenced by weather conditions and not deforestation.", "isCorrect": false}',
    '{"answer": "Deforestation actually reduces the risk of wildfires by removing dense vegetation.", "isCorrect": false}',
    'hard'
),
(
    'Can sustainable farming reduce deforestation?',
    '{"answer": "Deforestation is solely caused by urbanization, not farming practices.", "isCorrect": false}',
    '{"answer": "Using sustainable farming practices and modern agriculture tech cuts the demand for more land, reducing deforestation.", "isCorrect": true}',
    '{"answer": "Sustainable farming practices actually exacerbate deforestation.", "isCorrect": false}',
    '{"answer": "Sustainable farming has no impact on deforestation.", "isCorrect": false}',
    'hard'
);


INSERT INTO category_questions (cat_id, question_id)
VALUES (3,31),
       (3,32),
       (3,33),
       (3,34),
       (3,35),
       (3,36),
       (3,37),
       (3,38),
       (3,39),
       (3,40),
       (3,41),
       (3,42),
       (3,43),
       (3,44),
       (3,45);

-- questions for cateogory: agricutlre
INSERT INTO questions (question, choice_1, choice_2, choice_3, choice_4, complexity)
VALUES
(
    'Where do the majority of agricultural greenhouse (GHG) emissions originate from?',
    '{"answer": "Soil management", "isCorrect": false}',
    '{"answer": "Energy use", "isCorrect": false}',
    '{"answer": "Manure management", "isCorrect": false}',
    '{"answer": "All of the above", "isCorrect": true}',
    'easy'
),
 (
    'Which greenhouse gas contributes the most to agricultural emissions?',
    '{"answer": "Methane", "isCorrect": true}',
    '{"answer": "Nitrous oxide", "isCorrect": false}',
    '{"answer": "Carbon dioxide", "isCorrect": false}',
    '{"answer": "None of the above", "isCorrect": false}',
    'easy'
),
(
    'How can agriculture mitigate GHG emissions?',
    '{"answer": "Capturing gaseous emissions from manure and other wastes.", "isCorrect": false}',
    '{"answer": "Reducing fuel consumption.", "isCorrect": false}',
    '{"answer": "Improving nitrogen-use efficiency (NUE).", "isCorrect": false}',
    '{"answer": "All of the above", "isCorrect": true}',
    'easy'
),
(
    'Which of the following option is not a sustainable farming practice?',
    '{"answer": "Conservation Tillage", "isCorrect": false}',
    '{"answer": "Crop Rotation", "isCorrect": false}',
    '{"answer": "Monoculture", "isCorrect": true}',
    '{"answer": "Agroforestry", "isCorrect": false}',
    'easy'
),
 (
    'How do fertilizers contribute to greenhouse gas emissions?',
    '{"answer": "Fuel consumption during plowing and planting", "isCorrect": false}',
    '{"answer": "The utilization of fossil fuels for the application of fertilizers and pesticides", "isCorrect": false}',
    '{"answer": "The use of fuel for crop harvesting, as well as grain processing and drying.", "isCorrect": false}',
    '{"answer": "All of the above", "isCorrect": true}',
    'easy'
),

(
    'Why does manure management result in the greenhouse emissions?',
    '{"answer": "Because of methane production due to anaerobic conditions in manure storage.", "isCorrect": false}',
    '{"answer": "Because of nitrous oxide emissions from manure storage surfaces and land application.", "isCorrect": false}',
    '{"answer": "Because of ammonia emission, a different nitrogen-based gas, from manure management processes.", "isCorrect": false}',
    '{"answer": "Because of both methane and nitrous oxide emissions from different aspects of manure management.", "isCorrect": true}',
    'medium'
),
(
    'Rice paddies are frequently flooded during growth, emitting methane. Which of the following statement is incorrect?',
    '{"answer": "Frequent flooding of rice fields limits oxygen in the soil, fostering the growth of methane-producing bacteria.", "isCorrect": false}',
    '{"answer": "Methane is released during rice harvesting due to the rice plants'' direct photosynthesis process.", "isCorrect": true}',
    '{"answer": "Decomposing organic matter in waterlogged soil provides a food source for methanogenic bacteria, leading to methane production.", "isCorrect": false}',
    '{"answer": "Rice plants release organic compounds into the soil, which can serve as a carbon source for methane-producing bacteria.", "isCorrect": false}',
    'medium'
),
(
    'Do crop residues play a role in carbon sequestration? (Carbon sequestration: the process of capturing and storing carbon dioxide (CO2) in reservoirs other than the atmosphere.)',
    '{"answer": "Yes, fungi bind plant fragments with soil, consuming their carbon.", "isCorrect": true}',
    '{"answer": "No, crop residues have no effect on carbon sequestration.", "isCorrect": false}',
    '{"answer": "Yes, crop residues release less carbon dioxide.", "isCorrect": false}',
    '{"answer": "No, carbon sequestration only occurs in underwater ecosystems.", "isCorrect": false}',
    'medium'
),
(
    'How much of the nitrogen from fertilizers do crops typically take up on average?',
    '{"answer": "50%", "isCorrect": true}',
    '{"answer": "30%", "isCorrect": false}',
    '{"answer": "10%", "isCorrect": false}',
    '{"answer": "5%", "isCorrect": false}',
    'medium'
),
(
    'What is precision agriculture/precision farming?',
    '{"answer": "It primarily focuses on traditional farming methods using accurate approaches.", "isCorrect": false}',
    '{"answer": "It''s a method that involves employing highly skilled farmers.", "isCorrect": false}',
    '{"answer": "It includes technologies like GPS-guided tractors, drones for aerial monitoring, and data-driven decisions for crop management.", "isCorrect": true}',
    '{"answer": "It''s an approach that involves using sustainable fertilizer for efficient crop management.", "isCorrect": false}',
    'medium'
),
(
    'What process leads to the conversion of soil inorganic nitrogen to nitrous oxide (N2O) by soil bacteria?',
    '{"answer": "Photosynthesis by plants in nitrogen-rich soils.", "isCorrect": false}',
    '{"answer": "Carbon capturing in the soil.", "isCorrect": false}',
    '{"answer": "Direct emission of N2O from soil due to excess moisture.", "isCorrect": false}',
    '{"answer": "Denitrification, a microbial process that reduces nitrate to N2O.", "isCorrect": true}',
    'hard'
),
(
    'Which option does not describe how agroforestry contributes to climate change mitigation?',
    '{"answer": "Sequestering carbon in biomass and soils.", "isCorrect": false}',
    '{"answer": "Reducing greenhouse gas emissions.", "isCorrect": false}',
    '{"answer": "Increasing soil erosion, leading to reduce excessive carbon in soil.", "isCorrect": true}',
    '{"answer": "Avoiding emissions through reduced fossil fuel and energy usage on farms.", "isCorrect": false}',
    'hard'
),
(
    'Which irrigation system is often considered the most sustainable?',
    '{"answer": "Sprinkler Irrigation which sprays water in droplets.", "isCorrect": false}',
    '{"answer": "Surface Irrigation which involves the controlled flooding of fields.", "isCorrect": false}',
    '{"answer": "Drip Irrigation which delivers water directly to plant bases.", "isCorrect": true}',
    '{"answer": "None of the above", "isCorrect": false}',
    'hard'
),
(
    'Which practices can enhance Nitrogen-Use Efficiency (NUE)? (NUE: Ratio between the amount of fertilizer N applied and the amount of N removed with the harvest.)',
    '{"answer": "Soil nitrate tests for timely crop nutrient needs.", "isCorrect": false}',
    '{"answer": "Precise fertilizer timing according to plant requirements.", "isCorrect": false}',
    '{"answer": "Adaptive management to monitor plant health and lower N2O emissions.", "isCorrect": false}',
    '{"answer": "All of the above", "isCorrect": true}',
    'hard'
),
(
    'How soil degradation can affect the climate change?',
    '{"answer": "Soil, a significant carbon storage, can release carbon into the atmosphere when degraded by poor farming practices.", "isCorrect": true}',
    '{"answer": "Soil degradation has no impact on climate change.", "isCorrect": false}',
    '{"answer": "Soil degradation enhances carbon sequestration.", "isCorrect": false}',
    '{"answer": "None of the above", "isCorrect": false}',
    'hard'
);


INSERT INTO category_questions (cat_id, question_id)
VALUES (4,46),
       (4,47),
       (4,48),
       (4,49),
       (4,50),
       (4,51),
       (4,52),
       (4,53),
       (4,54),
       (4,55),
       (4,56),
       (4,57),
       (4,58),
       (4,59),
       (4,60);


-- questions for cateogory: transportation
INSERT INTO questions (question, choice_1, choice_2, choice_3, choice_4, complexity)
VALUES
(
    'Which of the following statements is true regarding the transportation sector''s impact on climate change?',
    '{"answer": "It contributes a negligible amount to greenhouse gas emissions.", "isCorrect": false}',
    '{"answer": "It contributes roughly 10% of global greenhouse gas emissions.", "isCorrect": false}',
    '{"answer": "It contributes roughly 25% of global greenhouse gas emissions.", "isCorrect": true}',
    '{"answer": "Its impact on climate change is largely unknown.", "isCorrect": false}',
    'easy'
),
(
    'Which sector contributes the most to global greenhouse gas emissions?',
    '{"answer": "Light-Duty vehicle", "isCorrect": true}',
    '{"answer": "Medium and Heavy-Duty Trucks", "isCorrect": false}',
    '{"answer": "Aircraft", "isCorrect": false}',
    '{"answer": "Rail", "isCorrect": false}',
    'easy'
),
(
    'In addition to carbon dioxide (CO2), what are other sources of greenhouse gas (GHG) emissions from a vehicle?',
    '{"answer": "Methane (CH4)", "isCorrect": false}',
    '{"answer": "Nitrous oxide (N2O)", "isCorrect": false}',
    '{"answer": "Hydrofluorocarbon (HFC)", "isCorrect": false}',
    '{"answer": "All of the above", "isCorrect": true}',
    'easy'
),
(
    'What are the tailpipe emissions from an electric vehicle (EV)?',
    '{"answer": "EVs emit the same tailpipe emissions as gasoline vehicles.", "isCorrect": false}',
    '{"answer": "Tailpipe emissions from EVs primarily consist of carbon dioxide (CO2).", "isCorrect": false}',
    '{"answer": "EVs do not emit any tailpipe emissions.", "isCorrect": true}',
    '{"answer": "Tailpipe emissions from EVs include harmful particulate matter and nitrogen oxides (NOx).", "isCorrect": false}',
    'easy'
),
(
    'Which of the following options does not contribute to reducing transportation emissions?',
    '{"answer": "Investing in efficient public transportation systems.", "isCorrect": false}',
    '{"answer": "Encouraging carpooling and ridesharing.", "isCorrect": false}',
    '{"answer": "Expanding the use of larger and more resistant vehicles.", "isCorrect": true}',
    '{"answer": "Promoting the use of electric vehicles (EVs).", "isCorrect": false}',
    'easy'
),
(
    'Are Electric Vehicles (EVs) completely free of greenhouse gas emissions?',
    '{"answer": "Yes, EVs are entirely free of greenhouse gas emissions.", "isCorrect": false}',
    '{"answer": "No, the GHG emissions from EVs are equivalent to traditional gasoline vehicles.", "isCorrect": false}',
    '{"answer": "No, EVs produce more GHG emissions than any other mode of transportation.", "isCorrect": false}',
    '{"answer": "No, the energy needed to extract materials for batteries, transport them to production, and manufacture them results in GHG emissions.", "isCorrect": true}',
    'medium'
),
(
    'What type of batteries are predominantly used in most of today''s all Electric Vehicles (EVs) and Plug-in Hybrid Electric Vehicles (PHEVs)?',
    '{"answer": "Lithium-ion batteries", "isCorrect": true}',
    '{"answer": "Alkaline batteries", "isCorrect": false}',
    '{"answer": "Lead-acid batteries", "isCorrect": false}',
    '{"answer": "Nickel-Metal Hydride (NiMH) batteries", "isCorrect": false}',
    'medium'
),
(
    'What materials can biomass, as a renewable energy resource, be derived from?',
    '{"answer": "Plastics and metals", "isCorrect": false}',
    '{"answer": "Mineral resources", "isCorrect": false}',
    '{"answer": "plant- and algae-based", "isCorrect": true}',
    '{"answer": "Radioactive materials", "isCorrect": false}',
    'medium'
),
(
    'Which component is not a part of a hydrogen fuel cell electric car?',
    '{"answer": "Electric traction motor", "isCorrect": false}',
    '{"answer": "Internal combustion engine", "isCorrect": true}',
    '{"answer": "Fuel cell stack", "isCorrect": false}',
    '{"answer": "Thermal system", "isCorrect": false}',
    'medium'
),
(
    'Which of the following technologies is commonly used in locomotives to reduce greenhouse gas emissions?',
    '{"answer": "Solar panels on the train''s roof", "isCorrect": false}',
    '{"answer": "Anti-idling system", "isCorrect": true}',
    '{"answer": "GPS guidance system", "isCorrect": false}',
    '{"answer": "All of the above", "isCorrect": false}',
    'medium'
),
(
    'What are the two most common types of biofuels in use today? (Biomass can be converted into liquid fuels, known as biofuels, for transportation.)',
    '{"answer": "Propane and natural gas", "isCorrect": false}',
    '{"answer": "Ethanol and biodiesel", "isCorrect": true}',
    '{"answer": "Hydrogen and LNG", "isCorrect": false}',
    '{"answer": "Gasoline and diesel", "isCorrect": false}',
    'hard'
),
(
    'Which of the following statements is correct about lithium-ion batteries used for electric vehicles?',
    '{"answer": "They have no environmental impact.", "isCorrect": false}',
    '{"answer": "They are primarily made from iron and copper.", "isCorrect": false}',
    '{"answer": "Their manufacturing is energy-efficient and has no emissions.", "isCorrect": false}',
    '{"answer": "They can have environmental impacts related to mining, manufacturing, and disposal.", "isCorrect": true}',
    'hard'
),
(
    'Which of the following statements is correct about hydrogen fuel cells?',
    '{"answer": "Hydrogen fuel cells require regular recharging, similar to lithium-ion batteries.", "isCorrect": false}',
    '{"answer": "In a hydrogen fuel cell, a catalyst at the anode separates hydrogen molecules into protons and electrons, creating a flow of electricity.", "isCorrect": true}',
    '{"answer": "Hydrogen fuel cells produce electricity but not heat when fuel is supplied.", "isCorrect": false}',
    '{"answer": "Hydrogen fuel cells require a continuous supply of fossil fuels for electricity generation.", "isCorrect": false}',
    'hard'
),
(
    'How can Connected Driver Advisory Systems (C-DAS) help reduce CO2 emissions in rail transport?',
    '{"answer": "By increasing the train''s weight and introducing frequent stops, which lead to improved emissions control.", "isCorrect": false}',
    '{"answer": "By optimizing train speed, reducing unnecessary braking, and smoothing out train movements.", "isCorrect": true}',
    '{"answer": "By offering prescribed routes for locomotive drivers to follow. ", "isCorrect": false}',
    '{"answer": "All of the above", "isCorrect": false}',
    'hard'
),
(
    'What is Sustainable Aviation Fuel (SAF)?',
    '{"answer": "SAF is a type of aviation fuel derived from coal, known for its exceptional environmental friendliness and negligible CO2 emissions. ", "isCorrect": false}',
    '{"answer": "SAF is a type of aviation fuel made from hydrogen, with no impact on CO2 emissions.", "isCorrect": false}',
    '{"answer": "SAF is an aviation fuel produced from agricultural crops, which has no effect on reducing CO2 emissions.", "isCorrect": false}',
    '{"answer": "SAF is an aviation fuel produced from feedstock like waste oil, green and municipal waste, and non-food crops, capable of reducing CO2 emissions by up to 80%.", "isCorrect": true}',
    'hard'
);


INSERT INTO category_questions (cat_id, question_id)
VALUES (5,61), 
       (5,62),
       (5,63),
       (5,64),
       (5,65),
       (5,66),
       (5,67),
       (5,68),
       (5,69),
       (5,70),
       (5,71),
       (5,72),
       (5,73),
       (5,74),
       (5,75);



-- questions for cateogory: food-production
INSERT INTO questions (question, choice_1, choice_2, choice_3, choice_4, complexity)
VALUES
(
    'How much greenhouse gas emissions are attributed to livestock (such as cattle, sheep, and goats) approximately?',
    '{"answer": "2%", "isCorrect": false}',
    '{"answer": "15%", "isCorrect": true}',
    '{"answer": "30%", "isCorrect": false}',
    '{"answer": "They have no environmental impact", "isCorrect": false}',
    'easy'
),
(
    'Which of the following is a way that livestock contribute to climate change?',
    '{"answer": "Enteric fermentation", "isCorrect": false}',
    '{"answer": "Manure", "isCorrect": false}',
    '{"answer": "Feed processing", "isCorrect": false}',
    '{"answer": "All of the above", "isCorrect": true}',
    'easy'
),
(
    'What type of greenhouse gas (GHG) is the most significant contributor to emissions from livestock? ',
    '{"answer": "Nitrogen trifluoride (NF3)", "isCorrect": false}',
    '{"answer": "Nitrous oxide (N2O)", "isCorrect": false}',
    '{"answer": "Methane (CH4)", "isCorrect": true}',
    '{"answer": "Carbon dioxide (CO2)", "isCorrect": false}',
    'easy'
),
(
'Among these options, which contributes the most to greenhouse gas emissions?',
    '{"answer": "Beef", "isCorrect": true}',
    '{"answer": "Shellfish", "isCorrect": false}',
    '{"answer": "Pork", "isCorrect": false}',
    '{"answer": "Poultry", "isCorrect": false}',
    'easy'
),
(
    'Which of the following is considered a sustainable approach to food production?',
    '{"answer": "Aquaculture", "isCorrect": false}',
    '{"answer": "Cellular agriculture", "isCorrect": false}',
    '{"answer": "Sustainable food packaging", "isCorrect": false}',
    '{"answer": "All of the above", "isCorrect": true}',
    'easy'
),
(
    'What is enteric fermentation?',
    '{"answer": "Enteric fermentation is the regular digestive process of ruminants such as cattle and sheep which produces methane.", "isCorrect": true}',
    '{"answer": "Enteric fermentation is a type of grass grown specifically for cattle and sheep.", "isCorrect": false}',
    '{"answer": "Enteric fermentation is the scientific study of the livestock digestive system.", "isCorrect": false}',
    '{"answer": "None of the above", "isCorrect": false}',
    'medium'
),
(
    'What is the primary focus of cellular agriculture?',
    '{"answer": "Cellular agriculture is the study of crop rotation techniques in traditional farming.", "isCorrect": false}',
    '{"answer": "Cellular agriculture focuses on producing agricultural products from cell cultures using biotechnology, tissue engineering, molecular biology, and synthetic biology.", "isCorrect": true}',
    '{"answer": "Cellular agriculture is the practice of utilizing cellular devices for GPS tracking of farm animals.", "isCorrect": false}',
    '{"answer": "Cellular agriculture refers to the practice of cloning farm animals to increase livestock production.", "isCorrect": false}',
    'medium'
),
 (
    'Which of the following contributes to a smaller share of greenhouse gas emissions from food production?',
    '{"answer": "Refrigeration and transport of food", "isCorrect": false}',
    '{"answer": "Industrial processes like the production of paper and aluminum for food packaging", "isCorrect": false}',
    '{"answer": "The management of food waste", "isCorrect": false}',
    '{"answer": "All of the above", "isCorrect": true}',
    'medium'
),
(
    'Which statement is correct about bio-based food packaging?',
    '{"answer": "Bio-based food packaging materials are synthesized from natural polymers and are easily biodegradable, renewable, recyclable, and edible.", "isCorrect": true}',
    '{"answer": "Bio-based food packaging materials are made from synthetic materials and are not biodegradable.", "isCorrect": false}',
    '{"answer": "Bio-based food packaging is produced from non-renewable resources and is not recyclable.", "isCorrect": false}',
    '{"answer": "None of the above", "isCorrect": false}',
       'medium'
),
(
    'Which one is considered alternative protein?',
    '{"answer": "Insect-based proteins", "isCorrect": false}',
    '{"answer": "Cell-based/ cultivated meat", "isCorrect": false}',
    '{"answer": "Fungi", "isCorrect": false}',
    '{"answer": "All of the above", "isCorrect": true}',
    'medium'
),
(
    'How can seaweed reduce methane emissions?',
    '{"answer": "By disrupting the microbes responsible for methane emissions.", "isCorrect": true}',
    '{"answer": "By increasing the number of microbes responsible for methane emissions.", "isCorrect": false}',
    '{"answer": "By causing microbial mutations in the stomachs of animals.", "isCorrect": false}',
    '{"answer": "By changing the diet of livestock.", "isCorrect": false}',
    'hard'
),
(
    'Is food waste in landfills related to methane emissions and their impact on climate change?',
    '{"answer": "Yes, food waste in landfills is related to methane emissions, as it decomposes and produces methane, contributing to climate change.", "isCorrect": true}',
    '{"answer": "No, food waste in landfills has no connection to climate change.", "isCorrect": false}',
    '{"answer": "Yes, food waste in landfills could directly reduce methane emissions, mitigating climate change.", "isCorrect": false}',
    '{"answer": "None of the above", "isCorrect": false}',
    'hard'
),
(
    'Which statement correctly defines bioengineered foods?',
    '{"answer": "Foods that contain genetic material that has been modified through certain laboratory techniques.", "isCorrect": true}',
    '{"answer": "Bioengineered food is a term used to describe organic and natural foods that are free from any laboratory modifications.", "isCorrect": false}',
    '{"answer": "Bioengineered food is referred to as food produced using renewable energy.", "isCorrect": false}',
    '{"answer": "None of the above", "isCorrect": false}',
    'hard'
),
 (
    'What is the circular economy concept in food packaging?',
    '{"answer": "It is a system that prioritizes single-use packaging to minimize production costs.", "isCorrect": false}',
    '{"answer": "It involves constantly importing new materials without recycling or reusing any of them.", "isCorrect": false}',
    '{"answer": "It is a model where all materials are reused, recycled, or composted, and kept out of landfills and the environment.", "isCorrect": true}',
    '{"answer": "It is a concept that encourages food companies to use renewable energy.", "isCorrect": false}',
    'hard'
),
(
    'Is plant-based meat considered more sustainable than conventional meat?',
    '{"answer": "No, it demands more resources and contributes to deforestation.", "isCorrect": false}',
    '{"answer": "Yes, its production requires less land and water, and it emits fewer greenhouse gases.", "isCorrect": true}',
    '{"answer": "Yes, it relies on raising animals with lower environmental impact.", "isCorrect": false}',
    '{"answer": "No, it is known for its significant water wastage and high emissions.", "isCorrect": false}',
    'hard'
);


INSERT INTO category_questions (cat_id, question_id)
VALUES (6,76), 
       (6,77),
       (6,78),
       (6,79),
       (6,80),
       (6,81),
       (6,82),
       (6,83),
       (6,84),
       (6,85),
       (6,86),
       (6,87),
       (6,88),
       (6,89),
       (6,90);